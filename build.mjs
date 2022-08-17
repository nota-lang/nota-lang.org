import {
  cli,
  ssrPlugin,
  peerfixPlugin,
  isMain,
} from "@nota-lang/esbuild-utils";
import { peerDependencies } from "@nota-lang/nota-components/dist/peer-dependencies.mjs";
import { notaPlugin } from "@nota-lang/nota-syntax/dist/esbuild-plugin.js";
import config from "./nota.config.mjs";
import fs from "fs-extra";
import cp from "child_process";
import { promisify } from "util";
import path from "path";

let exec = promisify(cp.exec);

async function main() {
  let build = cli();
  let examples = await fs.readdir("examples");

  await fs.mkdirp("dist");
  await fs.copy("favicon", "dist");
  await fs.copy("static", path.join("dist", "static"));
  await Promise.all(
    examples.map(async (s, i) => {
      let baseDir = path.join("examples", s);
      await exec(`nota build --config ../../nota.config.mjs --port ${8000 + i} index.nota`, {
        cwd: baseDir,
      });
      if (fs.existsSync(path.join(baseDir, "static"))) {
        await fs.copy(
          path.join(baseDir, "static"),
          path.join("dist", "examples", s, "static"),
          { recursive: true }
        );
      }
      await fs.copy(
        path.join(baseDir, "dist"),
        path.join("dist", "examples", s, "standalone")
      );
    })
  );

  await build({
    entryPoints: [
      "src/index.html",
      "src/reference.html",
      "src/examples.html",
      "src/integration.html",
      "src/playground.html",
      ...examples.map((name) => `src/examples/${name}/index.html`),
    ],
    splitting: true,
    external: [],
    plugins: [
      ssrPlugin({
        template: "./src/template.tsx",
        externalRenderTimeout: 30000,
      }),
      notaPlugin({ debugExports: true }),
      peerfixPlugin({ modules: peerDependencies, meta: import.meta }),
      ...config.plugins,
    ],
  });
}

if (isMain(import.meta)) {
  main();
}

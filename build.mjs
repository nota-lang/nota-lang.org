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
  let gallery = await fs.readdir("gallery");
  await build({
    entryPoints: [
      "src/index.html",
      "src/reference.html",
      "src/gallery.html",
      "src/integration.html",
      ...gallery.map((name) => `src/gallery/${name}/index.html`),
    ],
    splitting: true,
    external: [],
    plugins: [
      ssrPlugin({ template: "./src/template.tsx" }),
      notaPlugin({ debugExports: true }),
      peerfixPlugin({ modules: peerDependencies, meta: import.meta }),
      ...config.plugins,
    ],
  });
  await Promise.all(
    gallery.map(async (s) => {
      let baseDir = path.join("gallery", s);
      await exec("nota build index.nota", {
        cwd: baseDir,
      });
      await fs.copy(
        path.join(baseDir, "static"),
        path.join("dist", "gallery", s, "static"),
        { recursive: true }
      );
      await fs.copy(
        path.join(baseDir, "dist"),
        path.join("dist", "gallery", s, "standalone")
      );
    })
  );
  await fs.copy("favicon", "dist");
  await fs.copy("static", path.join("dist", "static"));
}

if (isMain(import.meta)) {
  main();
}

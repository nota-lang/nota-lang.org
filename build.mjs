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

async function main() {
  let build = cli();
  await build({
    entryPoints: [
      "src/index.html",
      "src/reference.html",
      "src/gallery.html",
      "src/integration.html",
    ],
    splitting: true,
    external: [],
    plugins: [
      ssrPlugin({ template: "./src/template.tsx" }),
      notaPlugin(),
      peerfixPlugin({ modules: peerDependencies, meta: import.meta }),
      ...config.plugins,
    ],
  });
  await fs.copy("static/favicon", "dist");
}

if (isMain(import.meta)) {
  main();
}

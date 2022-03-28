import { cli, ssrPlugin, isMain } from "@nota-lang/esbuild-utils";
import { notaPlugin } from "@nota-lang/nota-syntax/dist/esbuild-plugin.js";
import { sassPlugin } from "esbuild-sass-plugin";
import fs from "fs-extra";

export let plugins = [sassPlugin()];

async function main() {
  let build = cli();
  await build({
    entryPoints: [
      "src/index.html",
      "src/tutorial.html",
      "src/examples.html",
      "src/integration.html",
    ],
    preserveSymlinks: true,
    splitting: true,
    plugins: [
      ssrPlugin({ template: "./src/template.tsx" }),
      notaPlugin(),
      ...plugins,
    ],
  });
  await fs.copy("static/favicon", "dist");
}

if (isMain(import.meta)) {
  main();
}

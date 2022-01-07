import { cli, ssr_plugin, is_main } from "@nota-lang/esbuild-utils";
import { nota_plugin } from "@nota-lang/nota-syntax/dist/esbuild-plugin.js";
import { sassPlugin } from "esbuild-sass-plugin";
import fs from "fs-extra";

export let plugins = [sassPlugin()];

if (is_main(import.meta)) {
  let build = cli();
  build({
    entryPoints: [
      "src/index.html",
      "src/tutorial.html",
      "src/examples.html",
      "src/integration.html",
    ],
    preserveSymlinks: true,
    splitting: true,
    plugins: [
      ssr_plugin({ template: "./src/template.tsx" }),
      nota_plugin(),
      ...plugins,
    ],
  }).then(async () => {
    await fs.copy("static/favicon", "dist");
  });
}
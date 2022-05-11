import { cli, ssrPlugin, isMain } from "@nota-lang/esbuild-utils";
import { notaPlugin } from "@nota-lang/nota-syntax/dist/esbuild-plugin.js";
import config from "./nota.config.mjs";
import fs from "fs-extra";

async function main() {
  let build = cli();
  await build({
    entryPoints: [
      "src/index.html",
      "src/tutorial.html",
      "src/examples.html",
      "src/integration.html",
    ],
    splitting: true,
    plugins: [
      ssrPlugin({ template: "./src/template.tsx" }),
      notaPlugin(),
      ...config.plugins,
    ],
  });
  await fs.copy("static/favicon", "dist");
}

if (isMain(import.meta)) {
  main();
}

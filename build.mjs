import { cli, ssr_plugin, is_main } from "@nota-lang/esbuild-utils";
import { sassPlugin } from "esbuild-sass-plugin";

export let plugins = [sassPlugin()];

if (is_main(import.meta)) {
  let build = cli();
  build({
    entryPoints: ["src/index.html"],
    preserveSymlinks: true,
    format: "iife",
    plugins: [ssr_plugin, ...plugins],
  });
}

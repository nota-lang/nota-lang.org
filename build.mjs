import { cli, copy_plugin } from "@nota-lang/esbuild-utils";
import { sassPlugin } from "esbuild-sass-plugin";

let build = cli();
build({
  entryPoints: ["src/index.tsx"],
  preserveSymlinks: true,
  format: "iife",
  plugins: [sassPlugin(), copy_plugin({ extensions: [".html", ".wasm"] })],
});

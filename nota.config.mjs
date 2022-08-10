import { sassPlugin } from "esbuild-sass-plugin";
import { peerfixPlugin } from "@nota-lang/esbuild-utils";
import { peerDependencies } from "@nota-lang/nota-components/dist/peer-dependencies.mjs";

export default {
  plugins: [
    sassPlugin(),
    peerfixPlugin({ modules: peerDependencies, meta: import.meta }),
  ],
};

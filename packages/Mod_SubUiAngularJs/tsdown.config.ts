import { defineConfig } from "tsdown";
import { dolTypeAlias } from "@scml/utils";
export default defineConfig({
  entry: "remote/**/*.ts",
  clean: true,
  outDir: "./type-dist",
  fixedExtension: false,
  alias: dolTypeAlias,
  inlineOnly: false,
  skipNodeModulesBundle: true,
  dts: {
    sourcemap: false,
    compilerOptions: {
      emitDeclarationOnly: true,
      noImplicitAny: false,
    },
    emitDtsOnly: true,
    tsconfig: "./remote/tsconfig.json",
  },
  external: ["xxhash"],
});

import { defineConfig } from "tsdown";
import { dolTypeAlias } from "@dol-type/utils";
export default defineConfig({
  entry: "remote/**/*.ts",
  clean: true,
  outDir: "./type-dist",
  fixedExtension: false,
  publint: true,
  alias: dolTypeAlias,
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

import { defineConfig } from "tsdown";

export default defineConfig({
  entry: "remote/BeforeSC2/**/*.ts",
  clean: true,
  outDir: "./type-dist",
  fixedExtension: false,
  publint: true,
  dts: {
    sourcemap: false,
    sideEffects: true,
    compilerOptions: {
      emitDeclarationOnly: true,
      noImplicitAny: false,
    },
    emitDtsOnly: true,
    build: true,
    tsconfig: "./remote/BeforeSC2/tsconfig.json",
  },
  external: [
    "libsodium-wrappers-sumo",
    "lodash",
    "jquery",
    "xxhash-wasm",
    "jquery/JQueryStatic",
    "core-js",
    "core-js/full",
    "jszip",
    "idb-keyval",
    "idb",
  ],
});

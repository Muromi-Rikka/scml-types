import { defineConfig } from "tsdown";

export default defineConfig({
  entry: "remote/BeforeSC2/**/*.ts",
  clean: true,
  outDir: "./type-dist",
  fixedExtension: false,
  dts: {
    sourcemap: false,
    compilerOptions: {
      emitDeclarationOnly: true,
      noImplicitAny: false,
    },
    emitDtsOnly: true,
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

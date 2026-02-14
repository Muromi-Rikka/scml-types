import { defineConfig } from "tsdown";

export default defineConfig({
  entry: "remote/**/*.ts",
  clean: true,
  outDir: "./type-dist",
  fixedExtension: false,
  publint: true,
  alias: {
    "../../../dist-BeforeSC2/SC2DataManager": "@dolcn/sc2-modloader/SC2DataManager",
    "../../../dist-BeforeSC2/Utils": "@dolcn/sc2-modloader/Utils",
    "../../../dist-BeforeSC2/AddonPlugin": "@dolcn/sc2-modloader/AddonPlugin",
    "../../../dist-BeforeSC2/ModLoadController": "@dolcn/sc2-modloader/ModLoadController",
    "../../../dist-BeforeSC2/ModOrderContainer": "@dolcn/sc2-modloader/ModOrderContainer",
    "../../../dist-BeforeSC2/ModLoader": "@dolcn/sc2-modloader/ModLoader",
    "../../ModSubUiAngularJs/dist-ts/ModSubUiAngularJsModeExportInterface":
      "@dolcn/mod-sub-ui-angular-js/ModSubUiAngularJsModeExportInterface",
  },
  dts: {
    sourcemap: false,
    compilerOptions: {
      emitDeclarationOnly: true,
      noImplicitAny: false,
    },
    emitDtsOnly: true,
    build: true,
    tsconfig: "./remote/tsconfig.json",
  },
  external: [],
});

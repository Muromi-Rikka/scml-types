import { defineConfig } from "tsdown";
import { createDolTypeTsdownDtsPreset } from "@scml/utils";

export default defineConfig({
  ...createDolTypeTsdownDtsPreset({ extraExternal: ["xxhash"] }),
  entry: "remote/**/*.ts",
  clean: true,
  outDir: "./type-dist",
  fixedExtension: false,
  inlineOnly: false,
  skipNodeModulesBundle: true,
});

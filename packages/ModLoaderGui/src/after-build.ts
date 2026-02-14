import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importLoadingProgress = genImport("./LoadingProgress", ["LoadingProgress"], { type: true });
const importPassageTracer = genImport("./PassageTracer", ["PassageTracer"], { type: true });
const importGui = genImport("./Gui", ["Gui"], { type: true });
const importModSubUiAngularJsService = genImport(
  "./ModSubUiAngularJsService",
  ["ModSubUiAngularJsService"],
  { type: true }
);

const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("window", {
    modLoaderGui_LoadingProgress: "LoadingProgress",
    modLoaderGui_PassageTracer: "PassageTracer",
    modLoaderGui: "Gui",
    modLoaderGui_ModSubUiAngularJsService: "ModSubUiAngularJsService",
  })
);

writeFileSync(
  "./type-dist/global.ts",
  [
    importLoadingProgress,
    importPassageTracer,
    importGui,
    importModSubUiAngularJsService,
    globalNamespace,
  ].join("\n")
);

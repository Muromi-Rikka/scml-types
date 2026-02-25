import { GlobalImportItem } from "@scml/utils";

export const importList: Array<GlobalImportItem> = [
  ["./LoadingProgress.d.ts", ["LoadingProgress"], { type: true }],
  ["./PassageTracer.d.ts", ["PassageTracer"], { type: true }],
  ["./Gui.d.ts", ["Gui"], { type: true }],
  ["./ModSubUiAngularJsService.d.ts", ["ModSubUiAngularJsService"], { type: true }],
];

export const windowInterface: Record<string, string> = {
  modLoaderGui_LoadingProgress: "LoadingProgress",
  modLoaderGui_PassageTracer: "PassageTracer",
  modLoaderGui: "Gui",
  modLoaderGui_ModSubUiAngularJsService: "ModSubUiAngularJsService",
};

import { GlobalImportItem } from "@scml/utils";

export const importList: Array<GlobalImportItem> = [
  ["jquery/JQueryStatic", "JQueryStatic", { type: true }],
  ["./SC2DataManager.d.ts", ["SC2DataManager"], { type: true }],
  ["./Utils.d.ts", ["ModUtils"], { type: true }],
  ["./JsPreloader.d.ts", ["JsPreloader"], { type: true }],
  ["./ModLoadController.d.ts", ["ModLoadController"], { type: true }],
  ["./AddonPlugin.d.ts", ["AddonPluginManager"], { type: true }],
  ["./SC2JsEvalContext.d.ts", ["SC2JsEvalContext"], { type: true }],
];

export const windowInterface: Record<string, string> = {
  jQuery: "JQueryStatic",
  $: "JQueryStatic",
  modSC2DataManager: "SC2DataManager",
  modUtils: "ModUtils",
  jsPreloader: "JsPreloader",
  modModLoadController: "ModLoadController",
  modAddonPluginManager: "AddonPluginManager",
  modSC2JsEvalContext: "SC2JsEvalContext",
};

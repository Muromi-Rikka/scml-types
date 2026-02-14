import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importJQueryStatic = genImport("jquery/JQueryStatic", "JQueryStatic", { type: true });
const importSC2DataManager = genImport("./SC2DataManager.d.ts", ["SC2DataManager"], { type: true });
const importModUtils = genImport("./Utils.d.ts", ["ModUtils"], { type: true });
const importJsPreloader = genImport("./JsPreloader.d.ts", ["JsPreloader"], { type: true });
const importModLoadController = genImport("./ModLoadController.d.ts", ["ModLoadController"], {
  type: true,
});
const importAddonPluginManager = genImport("./AddonPlugin.d.ts", ["AddonPluginManager"], {
  type: true,
});
const importSC2JsEvalContext = genImport("./SC2JsEvalContext.d.ts", ["SC2JsEvalContext"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("Window", {
    jQuery: "JQueryStatic",
    $: "JQueryStatic",
    modSC2DataManager: "SC2DataManager",
    modUtils: "ModUtils",
    jsPreloader: "JsPreloader",
    modModLoadController: "ModLoadController",
    modAddonPluginManager: "AddonPluginManager",
    modSC2JsEvalContext: "SC2JsEvalContext",
  })
);

writeFileSync(
  "./type-dist/global.d.ts",
  [
    importJQueryStatic,
    importSC2DataManager,
    importModUtils,
    importJsPreloader,
    importModLoadController,
    importAddonPluginManager,
    importSC2JsEvalContext,
    globalNamespace,
  ].join("\n")
);

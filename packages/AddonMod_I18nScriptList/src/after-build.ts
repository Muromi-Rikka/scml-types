import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importI18nScriptList = genImport("./I18nScriptList.d.ts", ["I18nScriptList"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("Window", { modI18nScriptList: " I18nScriptList" })
);

writeFileSync("./type-dist/global.d.ts", [importI18nScriptList, globalNamespace].join("\n"));

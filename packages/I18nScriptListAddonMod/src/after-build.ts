import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importI18nScriptList = genImport("./I18nScriptList", ["I18nScriptList"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("window", { modI18nScriptList: " I18nScriptList" })
);

writeFileSync("./type-dist/global.ts", [importI18nScriptList, globalNamespace].join("\n"));

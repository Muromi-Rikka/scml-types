import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importI18nTweeList = genImport("./I18nTweeList.d.ts", ["I18nTweeList"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("window", { modI18nTweeList: " I18nTweeList" })
);

writeFileSync("./type-dist/global.ts", [importI18nTweeList, globalNamespace].join("\n"));

import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importTweeReplacer = genImport("./TweeReplacer.d.ts", ["TweeReplacer"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("window", { addonTweeReplacer: " TweeReplacer" })
);

writeFileSync("./type-dist/global.ts", [importTweeReplacer, globalNamespace].join("\n"));

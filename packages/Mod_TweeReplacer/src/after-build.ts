import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importTweeReplacer = genImport("./TweeReplacer.d.ts", ["TweeReplacer"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("Window", { addonTweeReplacer: " TweeReplacer" })
);

writeFileSync("./type-dist/global.d.ts", [importTweeReplacer, globalNamespace].join("\n"));

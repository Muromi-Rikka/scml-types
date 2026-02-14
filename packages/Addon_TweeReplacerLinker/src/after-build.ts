import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importTweeReplacerLinker = genImport("./TweeReplacerLinker.d.ts", ["TweeReplacerLinker"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("window", { addonTweeReplacerLinker: " TweeReplacerLinker" })
);

writeFileSync("./type-dist/global.ts", [importTweeReplacerLinker, globalNamespace].join("\n"));

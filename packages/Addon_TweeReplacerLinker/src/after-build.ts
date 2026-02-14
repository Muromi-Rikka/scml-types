import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importTweeReplacerLinker = genImport("./TweeReplacerLinker.d.ts", ["TweeReplacerLinker"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("Window", { addonTweeReplacerLinker: " TweeReplacerLinker" })
);

writeFileSync("./type-dist/global.d.ts", [importTweeReplacerLinker, globalNamespace].join("\n"));

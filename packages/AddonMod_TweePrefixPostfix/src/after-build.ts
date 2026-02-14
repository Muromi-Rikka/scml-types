import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importTweePrefixPostfixAddon = genImport(
  "./TweePrefixPostfixAddon.d.ts",
  ["TweePrefixPostfixAddon"],
  {
    type: true,
  }
);
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("Window", {
    addonTweePrefixPostfixAddon: " TweePrefixPostfixAddon",
  })
);

writeFileSync("./type-dist/global.d.ts", [importTweePrefixPostfixAddon, globalNamespace].join("\n"));

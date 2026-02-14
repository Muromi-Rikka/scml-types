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
  genInterface("window", {
    addonTweePrefixPostfixAddon: " TweePrefixPostfixAddon",
  })
);

writeFileSync("./type-dist/global.ts", [importTweePrefixPostfixAddon, globalNamespace].join("\n"));

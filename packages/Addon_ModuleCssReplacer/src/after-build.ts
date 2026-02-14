import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importModuleCssReplacer = genImport("./ModuleCssReplacer.d.ts", ["ModuleCssReplacer"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("window", {
    addonModuleCssReplacer: " ModuleCssReplacer",
  })
);

writeFileSync("./type-dist/global.ts", [importModuleCssReplacer, globalNamespace].join("\n"));

import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importModuleCssReplacer = genImport("./ModuleCssReplacer.d.ts", ["ModuleCssReplacer"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("Window", {
    addonModuleCssReplacer: " ModuleCssReplacer",
  })
);

writeFileSync("./type-dist/global.d.ts", [importModuleCssReplacer, globalNamespace].join("\n"));

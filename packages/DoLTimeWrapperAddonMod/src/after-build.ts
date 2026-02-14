import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importDoLTimeWrapperAddon = genImport("./DoLTimeWrapperAddon.d.ts", ["DoLTimeWrapperAddon"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("window", { addonDoLTimeWrapperAddon: " DoLTimeWrapperAddon" })
);

writeFileSync("./type-dist/global.ts", [importDoLTimeWrapperAddon, globalNamespace].join("\n"));

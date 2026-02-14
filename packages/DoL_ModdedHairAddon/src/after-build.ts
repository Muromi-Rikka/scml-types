import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importModdedHairAddon = genImport("./ModdedHairAddon", ["ModdedHairAddon"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("window", {
    addonModdedHairAddon: " ModdedHairAddon",
  })
);

writeFileSync("./type-dist/global.ts", [importModdedHairAddon, globalNamespace].join("\n"));

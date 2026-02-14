import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importModdedHairAddon = genImport("./ModdedHairAddon.d.ts", ["ModdedHairAddon"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("Window", {
    addonModdedHairAddon: " ModdedHairAddon",
  })
);

writeFileSync("./type-dist/global.d.ts", [importModdedHairAddon, globalNamespace].join("\n"));

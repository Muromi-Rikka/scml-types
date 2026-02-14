import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importModdedClothesAddon = genImport("./ModdedClothesAddon.d.ts", ["ModdedClothesAddon"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("Window", {
    addonModdedClothesAddon: " ModdedClothesAddon",
  })
);

writeFileSync("./type-dist/global.d.ts", [importModdedClothesAddon, globalNamespace].join("\n"));

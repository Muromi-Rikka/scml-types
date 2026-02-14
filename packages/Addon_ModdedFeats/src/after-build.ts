import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importModdedFeatsAddon = genImport("./ModdedFeatsAddon.d.ts", ["ModdedFeatsAddon"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("Window", {
    addonModdedFeatsAddon: " ModdedFeatsAddon",
  })
);

writeFileSync("./type-dist/global.d.ts", [importModdedFeatsAddon, globalNamespace].join("\n"));

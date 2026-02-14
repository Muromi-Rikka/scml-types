import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importGameOriginalImagePack = genImport(
  "./GameOriginalImagePack.d.ts",
  ["GameOriginalImagePack"],
  {
    type: true,
  }
);
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("Window", { modGameOriginalImagePack: " GameOriginalImagePack" })
);

writeFileSync("./type-dist/global.d.ts", [importGameOriginalImagePack, globalNamespace].join("\n"));

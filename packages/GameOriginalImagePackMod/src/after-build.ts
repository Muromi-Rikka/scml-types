import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importGameOriginalImagePack = genImport(
  "./GameOriginalImagePack",
  ["GameOriginalImagePack"],
  {
    type: true,
  }
);
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("window", { modGameOriginalImagePack: " GameOriginalImagePack" })
);

writeFileSync("./type-dist/global.ts", [importGameOriginalImagePack, globalNamespace].join("\n"));

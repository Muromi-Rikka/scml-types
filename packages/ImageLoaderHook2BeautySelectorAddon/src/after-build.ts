import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importImageLoaderHook2BeautySelectorAddon = genImport(
  "./ImageLoaderHook2BeautySelectorAddon",
  ["ImageLoaderHook2BeautySelectorAddon"],
  {
    type: true,
  }
);
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("window", {
    modImageLoaderHook2BeautySelectorAddon: " ImageLoaderHook2BeautySelectorAddon",
  })
);

writeFileSync(
  "./type-dist/global.ts",
  [importImageLoaderHook2BeautySelectorAddon, globalNamespace].join("\n")
);

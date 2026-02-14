import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importImageLoaderHook2BeautySelectorAddon = genImport(
  "./ImageLoaderHook2BeautySelectorAddon.d.ts",
  ["ImageLoaderHook2BeautySelectorAddon"],
  {
    type: true,
  }
);
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("Window", {
    modImageLoaderHook2BeautySelectorAddon: " ImageLoaderHook2BeautySelectorAddon",
  })
);

writeFileSync(
  "./type-dist/global.d.ts",
  [importImageLoaderHook2BeautySelectorAddon, globalNamespace].join("\n")
);

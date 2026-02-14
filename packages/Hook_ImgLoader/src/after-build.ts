import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importImgLoaderHooker = genImport("./ImgLoaderHooker.d.ts", ["ImgLoaderHooker"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("Window", { modImgLoaderHooker: " ImgLoaderHooker" })
);

writeFileSync("./type-dist/global.d.ts", [importImgLoaderHooker, globalNamespace].join("\n"));

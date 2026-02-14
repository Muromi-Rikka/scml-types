import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importImgLoaderHooker = genImport("./ImgLoaderHooker", ["ImgLoaderHooker"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("window", { modImgLoaderHooker: " ImgLoaderHooker" })
);

writeFileSync("./type-dist/global.ts", [importImgLoaderHooker, globalNamespace].join("\n"));

import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importModSubUiAngularJs = genImport("./ModSubUiAngularJs.d.ts", ["ModSubUiAngularJs"], {
  type: true,
});

const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("window", {
    diff3WayMerge: "ModSubUiAngularJs",
  })
);

writeFileSync("./type-dist/global.ts", [importModSubUiAngularJs, globalNamespace].join("\n"));

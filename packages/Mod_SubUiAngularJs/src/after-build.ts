import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importModSubUiAngularJs = genImport("./ModSubUiAngularJs.d.ts", ["ModSubUiAngularJs"], {
  type: true,
});

const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("Window", {
    diff3WayMerge: "ModSubUiAngularJs",
  })
);

writeFileSync("./type-dist/global.d.ts", [importModSubUiAngularJs, globalNamespace].join("\n"));

import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importModI18N = genImport("./I18N", ["ModI18N"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("window", {
    modI18N: " ModI18N",
  })
);

writeFileSync("./type-dist/global.ts", [importModI18N, globalNamespace].join("\n"));

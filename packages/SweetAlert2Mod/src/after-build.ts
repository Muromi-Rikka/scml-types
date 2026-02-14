import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importSweetAlert2Mod = genImport("./SweetAlert2Mod", ["SweetAlert2Mod"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("window", {
    modSweetAlert2Mod: " SweetAlert2Mod",
  })
);

writeFileSync("./type-dist/global.ts", [importSweetAlert2Mod, globalNamespace].join("\n"));

import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importSweetAlert2Mod = genImport("./SweetAlert2Mod.d.ts", ["SweetAlert2Mod"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("Window", {
    modSweetAlert2Mod: " SweetAlert2Mod",
  })
);

writeFileSync("./type-dist/global.d.ts", [importSweetAlert2Mod, globalNamespace].join("\n"));

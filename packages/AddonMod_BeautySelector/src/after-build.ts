import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importBeautySelectorAddon = genImport("./BeautySelectorAddon.d.ts", ["BeautySelectorAddon"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("Window", { addonBeautySelectorAddon: "BeautySelectorAddon" })
);

writeFileSync("./type-dist/global.d.ts", [importBeautySelectorAddon, globalNamespace].join("\n"));

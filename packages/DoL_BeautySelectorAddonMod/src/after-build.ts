import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importBeautySelectorAddon = genImport("./BeautySelectorAddon.d.ts", ["BeautySelectorAddon"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("window", { addonBeautySelectorAddon: "BeautySelectorAddon" })
);

writeFileSync("./type-dist/global.ts", [importBeautySelectorAddon, globalNamespace].join("\n"));

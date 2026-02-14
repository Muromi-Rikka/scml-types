import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importCheckGameVersion = genImport("./CheckGameVersion.d.ts", ["CheckGameVersion"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("Window", { modCheckGameVersion: "CheckGameVersion" })
);

writeFileSync("./type-dist/global.d.ts", [importCheckGameVersion, globalNamespace].join("\n"));

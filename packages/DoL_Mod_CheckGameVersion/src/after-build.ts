import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importCheckGameVersion = genImport("./CheckGameVersion", ["CheckGameVersion"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("window", { modCheckGameVersion: "CheckGameVersion" })
);

writeFileSync("./type-dist/global.ts", [importCheckGameVersion, globalNamespace].join("\n"));

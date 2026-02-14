import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importConflictChecker = genImport("./ConflictChecker.d.ts", ["ConflictChecker"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("Window", { addonConflictChecker: "ConflictChecker" })
);

writeFileSync("./type-dist/global.d.ts", [importConflictChecker, globalNamespace].join("\n"));

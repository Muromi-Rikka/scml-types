import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importConflictChecker = genImport("./ConflictChecker", ["ConflictChecker"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("window", { addonConflictChecker: "ConflictChecker" })
);

writeFileSync("./type-dist/global.ts", [importConflictChecker, globalNamespace].join("\n"));

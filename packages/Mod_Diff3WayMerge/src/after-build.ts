import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importDiff3WayMerge = genImport("./Diff3WayMerge.d.ts", ["Diff3WayMerge"], { type: true });

const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("window", {
    diff3WayMerge: "Diff3WayMerge",
  })
);

writeFileSync("./type-dist/global.ts", [importDiff3WayMerge, globalNamespace].join("\n"));

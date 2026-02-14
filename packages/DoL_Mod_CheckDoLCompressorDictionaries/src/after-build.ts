import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importCheckDoLCompressorDictionaries = genImport(
  "./CheckDoLCompressorDictionaries",
  ["CheckDoLCompressorDictionaries"],
  { type: true }
);
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("window", { modCheckDoLCompressorDictionaries: "CheckDoLCompressorDictionaries" })
);

writeFileSync(
  "./type-dist/global.ts",
  [importCheckDoLCompressorDictionaries, globalNamespace].join("\n")
);

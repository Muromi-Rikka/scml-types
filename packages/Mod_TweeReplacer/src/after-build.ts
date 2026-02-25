import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";
import { importList, windowInterface } from "./global-data.js";

const importListStr = importList.map(([specifier, imports, options]) =>
  genImport(specifier, imports, options)
);

const globalNamespace = genDeclareNamespace("global", genInterface("Window", windowInterface));

writeFileSync("./type-dist/global.d.ts", [...importListStr, globalNamespace].join("\n"));

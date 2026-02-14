import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importReplacePatcher = genImport("./ReplacePatcher", ["ReplacePatcher"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("window", {
    addonReplacePatcher: " ReplacePatcher",
  })
);

writeFileSync("./type-dist/global.ts", [importReplacePatcher, globalNamespace].join("\n"));

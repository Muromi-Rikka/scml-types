import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importReplacePatcher = genImport("./ReplacePatcher.d.ts", ["ReplacePatcher"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("window", {
    addonReplacePatcher: " ReplacePatcher",
  })
);

writeFileSync("./type-dist/global.ts", [importReplacePatcher, globalNamespace].join("\n"));

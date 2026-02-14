import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importReplacePatcher = genImport("./ReplacePatcher.d.ts", ["ReplacePatcher"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("Window", {
    addonReplacePatcher: " ReplacePatcher",
  })
);

writeFileSync("./type-dist/global.d.ts", [importReplacePatcher, globalNamespace].join("\n"));

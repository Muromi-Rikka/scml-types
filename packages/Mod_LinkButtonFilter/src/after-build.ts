import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importDoLLinkButtonFilter = genImport("./init.d.ts", ["patchLinkButton"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("Window", { DoLLinkButtonFilter_patchLinkButton: " typeof patchLinkButton" })
);

writeFileSync("./type-dist/global.d.ts", [importDoLLinkButtonFilter, globalNamespace].join("\n"));

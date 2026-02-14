import { genDeclareNamespace, genInterface } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importPatchLinkButton = "import type { patchLinkButton } from './init';";
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("window", { DoLLinkButtonFilter_patchLinkButton: " typeof patchLinkButton" })
);

writeFileSync("./type-dist/global.ts", [importPatchLinkButton, globalNamespace].join("\n"));

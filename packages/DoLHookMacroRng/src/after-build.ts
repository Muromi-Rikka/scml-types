import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importHookMacroRng = genImport("./inject_early", ["HookMacroRng"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("window", { hookMacroRng: " HookMacroRng" })
);

writeFileSync("./type-dist/global.ts", [importHookMacroRng, globalNamespace].join("\n"));

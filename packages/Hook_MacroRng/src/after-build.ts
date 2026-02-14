import { genDeclareNamespace, genInterface, genImport } from "knitwork-x";
import { writeFileSync } from "node:fs";

const importHookMacroRng = genImport("./inject_early.d.ts", ["HookMacroRng"], {
  type: true,
});
const globalNamespace = genDeclareNamespace(
  "global",
  genInterface("Window", { hookMacroRng: " HookMacroRng" })
);

writeFileSync("./type-dist/global.d.ts", [importHookMacroRng, globalNamespace].join("\n"));

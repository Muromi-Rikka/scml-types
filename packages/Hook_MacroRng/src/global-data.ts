import { GlobalImportItem } from "@scml/utils";

export const importList: Array<GlobalImportItem> = [
  ["./inject_early.d.ts", ["HookMacroRng"], { type: true }],
];

export const windowInterface: Record<string, string> = {
  hookMacroRng: "HookMacroRng",
};

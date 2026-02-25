import { GlobalImportItem } from "@scml/utils";

export const importList: Array<GlobalImportItem> = [
  ["./init.d.ts", ["patchLinkButton"], { type: true }],
];

export const windowInterface: Record<string, string> = {
  DoLLinkButtonFilter_patchLinkButton: "typeof patchLinkButton",
};

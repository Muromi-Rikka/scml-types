import { GlobalImportItem } from "@scml/utils";

export const importList: Array<GlobalImportItem> = [
  ["./ConflictChecker.d.ts", ["ConflictChecker"], { type: true }],
];

export const windowInterface: Record<string, string> = {
  addonConflictChecker: "ConflictChecker",
};

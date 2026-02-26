import fg from "fast-glob";
import { readFileSync, writeFileSync } from "node:fs";
import { typeAliasReverce } from "@scml/utils";

export async function runReplace() {
  const files = await fg("./type-dist/**/*.d.ts");

  // 构建单次正则替换，按 key 长度降序避免短 key 误匹配
  const entries = Object.entries(typeAliasReverce).sort(([a], [b]) => b.length - a.length);
  const pattern = new RegExp(
    entries.map(([k]) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"),
    "g"
  );
  const replacer = (match: string) => typeAliasReverce[match as keyof typeof typeAliasReverce];

  for (const file of files) {
    const content = readFileSync(file, "utf-8");
    const newContent = content.replace(pattern, replacer);
    if (newContent !== content) {
      writeFileSync(file, newContent, "utf-8");
    }
  }
}

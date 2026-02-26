import { existsSync, mkdirSync, rmSync } from "fs";
import { generateGlobal } from "./global.js";
import { generateExports } from "./exports.js";
import { runReplace } from "./replace.js";

if (existsSync("./type-dist")) {
  rmSync("./type-dist", { recursive: true });
}
mkdirSync("./type-dist", { recursive: true });

await generateGlobal();
await runReplace();
await generateExports();

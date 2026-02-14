import { cpSync, readFileSync, writeFileSync } from "node:fs";
cpSync("./remote/BeforeSC2/SugarCube2.d.ts", "./type-dist/SugarCube2.d.ts");

function replaceFile(path: string, replace: string, replaceWith: string) {
  const f = readFileSync(path).toString();
  console.log(f);

  const result = f.replaceAll(replace, replaceWith);
  writeFileSync(path, result);
}

function replaceAllFile(files: Array<[string, string, string]>) {
  for (const [path, replace, replaceWith] of files) {
    replaceFile(path, replace, replaceWith);
  }
}

replaceAllFile([
  [
    "./type-dist/AddonPlugin.d.ts",
    "import { ModLoadController } from 'ModLoadController';",
    "import { ModLoadController } from './ModLoadController';",
  ],
  [
    "./type-dist/DependenceChecker.d.ts",
    `import { SC2DataManager } from "SC2DataManager";`,
    `import { SC2DataManager } from "./SC2DataManager";`,
  ],
  [
    "./type-dist/ModLoadController.d.ts",
    `import { ModBootJson, ModInfo } from "ModLoader";`,
    `import { ModBootJson, ModInfo } from "./ModLoader";`,
  ],
  [
    "./type-dist/ModLoadController.d.ts",
    `import { SC2DataManager } from "SC2DataManager";`,
    `import { SC2DataManager } from "./SC2DataManager";`,
  ],
  [
    "./type-dist/SC2DataInfoCache.d.ts",
    `import { LogWrapper } from "ModLoadController";`,
    `import { LogWrapper } from "./ModLoadController";`,
  ],
]);

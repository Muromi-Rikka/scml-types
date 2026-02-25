import { GlobalImportItem } from "@scml/utils";
import { defu } from "defu";
import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "fs";
import { genDeclareNamespace, genImport, genInterface } from "knitwork-x";
import { allTypes } from "./constant.js";

async function readGlobalData(path: string) {
  const { windowInterface, importList } = await import(path);
  return { windowInterface, importList } as {
    importList: Array<GlobalImportItem>;
    windowInterface: Record<string, string>;
  };
}

async function readAllGlobalData() {
  const allGlobal = await Promise.all(
    allTypes.map(async (path) => ({
      ...(await readGlobalData(`../../${path}/src/global-data.js`)),
      path,
    }))
  );
  const newAllGlobal = allGlobal.map(({ importList, windowInterface, path }) => {
    const newImportList = importList.map(([specifier, imports, options]) => {
      if (specifier.startsWith("./")) {
        specifier = specifier.replace("./", `./${path}/`);
      }
      return [specifier, imports, options];
    });
    return {
      importList: newImportList,
      windowInterface,
    };
  });
  return defu({}, ...newAllGlobal) as {
    importList: Array<GlobalImportItem>;
    windowInterface: Record<string, string>;
  };
}

export async function generateGlobal() {
  allTypes.forEach(async (path) => {
    cpSync(`../${path}/type-dist`, `./type-dist/${path}`, { recursive: true });
  });
  const { importList, windowInterface } = await readAllGlobalData();

  const importListStr = importList.map(([specifier, imports, options]) =>
    genImport(specifier, imports, options)
  );

  const globalNamespace = genDeclareNamespace("global", genInterface("Window", windowInterface));

  writeFileSync("./type-dist/global.d.ts", [...importListStr, globalNamespace].join("\n"));
}

import { readFileSync } from "node:fs";
import { allTypes } from "./constant.js";
import { readPackageJSON, writePackageJSON } from "pkg-types";
export async function generateExports() {
  const exports = await Promise.all(
    allTypes.map(async (path) => {
      const pkg = readFileSync(`../${path}/package.json`, "utf-8");
      const pkgJson = JSON.parse(pkg);
      return Object.entries(pkgJson.exports)
        .filter(([key]) => key !== ".")
        .map((item) => {
          return [
            item[0].replace("./", `./${path}/`),
            (item[1] as string).replace("./type-dist/", `./type-dist/${path}/`),
          ];
        });
    })
  );
  const pkg = await readPackageJSON();
  pkg.exports = {
    ".": "./type-dist/global.d.ts",
    ...Object.fromEntries(exports.flat()),
  };
  await writePackageJSON("./package.json", pkg);
}

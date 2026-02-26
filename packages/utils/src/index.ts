import type { ESMCodeGenOptions, ESMImport } from "knitwork-x";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export const dolTypeAlias = {
  "../../../dist-BeforeSC2/SC2DataManager": "@scml/sc2-modloader/SC2DataManager",
  "../../../dist-BeforeSC2/Utils": "@scml/sc2-modloader/Utils",
  "../../../dist-BeforeSC2/AddonPlugin": "@scml/sc2-modloader/AddonPlugin",
  "../../../dist-BeforeSC2/ModLoadController": "@scml/sc2-modloader/ModLoadController",
  "../../../../dist-BeforeSC2/ModLoadController": "@scml/sc2-modloader/ModLoadController",
  "../../../dist-BeforeSC2/ModOrderContainer": "@scml/sc2-modloader/ModOrderContainer",
  "../../../dist-BeforeSC2/ModLoader": "@scml/sc2-modloader/ModLoader",
  "../../../dist-BeforeSC2/ModZipReader": "@scml/sc2-modloader/ModZipReader",
  "../../../../dist-BeforeSC2/JSZipLikeReadOnlyInterface":
    "@scml/sc2-modloader/JSZipLikeReadOnlyInterface",
  "../../ModSubUiAngularJs/dist-ts/ModSubUiAngularJsModeExportInterface":
    "@scml/mod-sub-ui-angular-js/ModSubUiAngularJsModeExportInterface",
  "../../../dist-BeforeSC2/Sc2EventTracer": "@scml/sc2-modloader/Sc2EventTracer",
  "../../../dist-BeforeSC2/DependenceChecker": "@scml/sc2-modloader/DependenceChecker",
  "../../../dist-BeforeSC2/SC2DataInfoCache": "@scml/sc2-modloader/SC2DataInfoCache",
  "../../TweeReplacerLinker/dist/TweeReplacerLinkerInterface":
    "@scml/addon-twee-replacer-linker/TweeReplacerLinkerInterface",
  "../../../src/BeforeSC2/SugarCube2": "@scml/sc2-modloader/SugarCube2",
  "../../../dist-BeforeSC2/HtmlTagSrcHook": "@scml/sc2-modloader/HtmlTagSrcHook",
  "../../../dist-BeforeSC2/SC2ApiRef": "@scml/sc2-modloader/SC2ApiRef",
  "../../../dist-BeforeSC2/WikifyTracer": "@scml/sc2-modloader/WikifyTracer",
  "../../../dist-BeforeSC2/IdbKeyValRef": "@scml/sc2-modloader/IdbKeyValRef",
};

export const typeAliasReverce = {
  "@scml/sc2-modloader/SC2DataManager": "../sugarcube-2-ModLoader/SC2DataManager.d.ts",
  "@scml/sc2-modloader/Utils": "../sugarcube-2-ModLoader/Utils.d.ts",
  "@scml/sc2-modloader/AddonPlugin": "../sugarcube-2-ModLoader/AddonPlugin.d.ts",
  "@scml/sc2-modloader/ModLoadController": "../sugarcube-2-ModLoader/ModLoadController.d.ts",
  "@scml/sc2-modloader/ModOrderContainer": "../sugarcube-2-ModLoader/ModOrderContainer.d.ts",
  "@scml/sc2-modloader/ModLoader": "../sugarcube-2-ModLoader/ModLoader.d.ts",
  "@scml/sc2-modloader/ModZipReader": "../sugarcube-2-ModLoader/ModZipReader.d.ts",
  "@scml/sc2-modloader/JSZipLikeReadOnlyInterface":
    "../sugarcube-2-ModLoader/JSZipLikeReadOnlyInterface.d.ts",
  "@scml/mod-sub-ui-angular-js/ModSubUiAngularJsModeExportInterface":
    "../Mod_SubUiAngularJs/ModSubUiAngularJsModeExportInterface.d.ts",
  "@scml/sc2-modloader/Sc2EventTracer": "../sugarcube-2-ModLoader/Sc2EventTracer.d.ts",
  "@scml/sc2-modloader/DependenceChecker": "../sugarcube-2-ModLoader/DependenceChecker.d.ts",
  "@scml/sc2-modloader/SC2DataInfoCache": "../sugarcube-2-ModLoader/SC2DataInfoCache.d.ts",
  "@scml/addon-twee-replacer-linker/TweeReplacerLinkerInterface":
    "../Addon_TweeReplacerLinker/TweeReplacerLinkerInterface.d.ts",
  "@scml/sc2-modloader/SugarCube2": "../sugarcube-2-ModLoader/SugarCube2.d.ts",
  "@scml/sc2-modloader/HtmlTagSrcHook": "../sugarcube-2-ModLoader/HtmlTagSrcHook.d.ts",
  "@scml/sc2-modloader/SC2ApiRef": "../sugarcube-2-ModLoader/SC2ApiRef.d.ts",
  "@scml/sc2-modloader/WikifyTracer": "../sugarcube-2-ModLoader/WikifyTracer.d.ts",
  "@scml/sc2-modloader/IdbKeyValRef": "../sugarcube-2-ModLoader/IdbKeyValRef.d.ts",
};

/** 使用 dolTypeAlias 的 tsdown 包默认 external 列表（三方包不参与 dts 打包，改为引用 node_modules 中的类型） */
export const dolTypeTsdownExternal = [
  "lodash",
  "jszip",
  "idb-keyval",
  "moment",
  "idb",
  "jquery",
  ...Object.keys(dolTypeAlias),
] as const;

export interface DolTypeTsdownPresetOptions {
  /** dts 使用的 tsconfig 路径，默认 "./remote/tsconfig.json" */
  tsconfig?: string;
  /** 追加的 external 包名 */
  extraExternal?: string[];
}

/**
 * 生成供 tsdown 使用的 DTS 预设配置（alias、external、dts、build:done 替换 hook），
 * 各包在 tsdown.config.ts 中展开后补充 entry、outDir 等即可。
 */
export function createDolTypeTsdownDtsPreset(options: DolTypeTsdownPresetOptions = {}) {
  const { tsconfig = "./remote/tsconfig.json", extraExternal = [] } = options;
  const external = [...dolTypeTsdownExternal, ...extraExternal];

  return {
    alias: dolTypeAlias,
    external,
    dts: {
      sourcemap: false,
      compilerOptions: {
        emitDeclarationOnly: true,
        noImplicitAny: false,
      },
      emitDtsOnly: true,
      tsconfig,
    },
    // 构建完成后对输出文件做内容替换：将 dolTypeAlias 的 key 替换为 value
    hooks: {
      "build:done": async (ctx: {
        options: { cwd: string; outDir: string };
        chunks: Array<{ fileName: string }>;
      }) => {
        const { options: opts, chunks } = ctx;
        const entries = Object.entries(dolTypeAlias).sort(([a], [b]) => b.length - a.length);
        for (const chunk of chunks) {
          const filePath = join(opts.outDir, chunk.fileName);
          console.log(filePath);
          try {
            const raw = readFileSync(filePath, "utf-8").toString();
            let content = raw;
            for (const [key, value] of entries) {
              content = content.split(key).join(value);
            }
            if (content !== raw) writeFileSync(filePath, content, "utf-8");
          } catch {
            // 忽略无法读取的文件（如 sourcemap）
          }
        }
      },
    },
  };
}

export type GlobalImportItem = [
  specifier: string,
  imports?: ESMImport | ESMImport[],
  options?: ESMCodeGenOptions,
];

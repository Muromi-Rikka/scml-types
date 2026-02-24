import * as path from "node:path";
import { defineConfig } from "@rspress/core";
import { pluginLlms } from "@rspress/plugin-llms";
import { pluginSitemap } from "@rspress/plugin-sitemap";
export default defineConfig({
  root: path.join(__dirname, "docs"),
  plugins: [pluginLlms(), pluginSitemap({ siteUrl: "https://scml-type.pages.dev" })],
  lang: "en",
  locales: [
    {
      lang: "en",
      label: "English",
      title: "SugarCube 2 ModLoader Type",
      description:
        "TypeScript type declarations for SugarCube 2 Mod Loader and related Mods / Addons",
    },
    {
      lang: "zh",
      label: "简体中文",
      title: "SugarCube 2 ModLoader Type",
      description: "SugarCube 2 Mod Loader 及相关 Mod / Addon 的 TypeScript 类型声明",
    },
  ],
  title: "SugarCube 2 ModLoader Type",
  icon: "/logo.png",
  logo: {
    light: "/logo.png",
    dark: "/logo.png",
  },
  themeConfig: {
    llmsUI: true,
    lastUpdated: true,
    enableContentAnimation: true,
    enableAppearanceAnimation: true,
    enableScrollToTop: true,
    editLink: {
      docRepoBaseUrl: "https://github.com/Muromi-Rikka/scml-types/tree/master/website/docs",
    },
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/Muromi-Rikka/scml-types",
      },
    ],
  },
});

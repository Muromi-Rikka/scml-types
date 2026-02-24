import * as path from "node:path";
import { defineConfig } from "@rspress/core";

export default defineConfig({
  root: path.join(__dirname, "docs"),
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
      description:
        "SugarCube 2 Mod Loader 及相关 Mod / Addon 的 TypeScript 类型声明",
    },
  ],
  title: "My Site",
  icon: "/rspress-icon.png",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png",
  },
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/web-infra-dev/rspress",
      },
    ],
  },
});

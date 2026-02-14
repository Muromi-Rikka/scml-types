import { downloadTemplate } from "giget";
await downloadTemplate("github:Lyoko-Jeremie/sugarcube-2-ModLoaderGui/src#master", {
  forceClean: true,
  dir: "remote",
});

await downloadTemplate("github:Lyoko-Jeremie/GM_config_TS#master", {
  forceClean: true,
  dir: "remote/GM_config_TS",
});

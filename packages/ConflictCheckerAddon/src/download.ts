import { downloadTemplate } from "giget";
await downloadTemplate("github:Lyoko-Jeremie/ConflictCheckerAddon/src#master", {
  forceClean: true,
  dir: "remote",
});

import { downloadTemplate } from "giget";
const { source, dir } = await downloadTemplate("github:Lyoko-Jeremie/sugarcube-2-ModLoader/src#master",{
    forceClean:true,
    dir:"remote",
});
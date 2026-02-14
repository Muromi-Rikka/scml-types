# dol-type

TypeScript type definitions monorepo for the SugarCube 2 Mod Loader ecosystem. Each package fetches source from upstream repos and emits `.d.ts` for use by modules and tools in the ecosystem.

## Tech stack

- **Package manager**: pnpm workspace
- **Build orchestration**: Turbo
- **Type generation**: tsdown (generates types from remote source into `type-dist/`)
- **Source fetch**: giget (each package’s `download` script pulls upstream from GitHub)

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm build` | Full build: runs `download` then `build` for each package; output goes to each package’s `type-dist/` |
| `pnpm typecheck` | Full type check |

Per-package commands:

- `pnpm run download`: Fetch source from upstream into the package’s `remote/` (see the package’s `src/download.ts`)
- `pnpm run build`: Generate types from `remote/` and local config (tsdown + after-build)
- `pnpm run typecheck`: Run `tsc --noEmit` for that package

## Packages

Type definition sources are documented in each package’s README.

| Package | Description |
|---------|-------------|
| [sugarcube-2-ModLoader](packages/sugarcube-2-ModLoader) | Mod Loader core |
| [ConflictCheckerAddon](packages/ConflictCheckerAddon) | Conflict checker addon |
| [CoT_Mod_CheckGameVersion](packages/CoT_Mod_CheckGameVersion) | CoT game version check |
| [DoL_Mod_CheckDoLCompressorDictionaries](packages/DoL_Mod_CheckDoLCompressorDictionaries) | DoL compressor dictionaries check |
| [DoL_Mod_CheckGameVersion](packages/DoL_Mod_CheckGameVersion) | DoL game version check |
| [DoL_Mod_ReplacePatch](packages/DoL_Mod_ReplacePatch) | Replace patch |
| [DoL_Mod_TweeReplacer](packages/DoL_Mod_TweeReplacer) | Twee replacer |
| [DoL_Mod_i18nMod](packages/DoL_Mod_i18nMod) | DoL i18n mod |
| [DoL_BeautySelectorAddonMod](packages/DoL_BeautySelectorAddonMod) | Beauty selector addon |
| [DoL_ImgLoaderHooker](packages/DoL_ImgLoaderHooker) | Image loader hook |
| [DoL_ModuleCssReplacerAddon](packages/DoL_ModuleCssReplacerAddon) | Module CSS replacer addon |
| [DoL_ModdedClothesAddon](packages/DoL_ModdedClothesAddon) | Modded clothes addon |
| [DoL_ModdedFeatsAddon](packages/DoL_ModdedFeatsAddon) | Modded feats addon |
| [DoL_ModdedHairAddon](packages/DoL_ModdedHairAddon) | Modded hair addon |
| [DoLTimeWrapperAddonMod](packages/DoLTimeWrapperAddonMod) | Time wrapper addon |
| [DoLLinkButtonFilter](packages/DoLLinkButtonFilter) | Link button filter |
| [DoLHookMacroRng](packages/DoLHookMacroRng) | Macro RNG hook |
| [GameOriginalImagePackMod](packages/GameOriginalImagePackMod) | Game original image pack |
| [I18nScriptListAddonMod](packages/I18nScriptListAddonMod) | i18n script list addon |
| [I18nTweeListAddonMod](packages/I18nTweeListAddonMod) | i18n Twee list addon |
| [I18nTweeReplacerMod](packages/I18nTweeReplacerMod) | i18n Twee replacer |
| [ImageLoaderHook2BeautySelectorAddon](packages/ImageLoaderHook2BeautySelectorAddon) | Image loader hook → beauty selector |
| [Mod_Diff3WayMerge](packages/Mod_Diff3WayMerge) | Three-way merge |
| [ModSubUiAngularJs](packages/ModSubUiAngularJs) | Sub UI (AngularJS) |
| [ModLoaderGui](packages/ModLoaderGui) | Mod Loader GUI |
| [SweetAlert2Mod](packages/SweetAlert2Mod) | SweetAlert2 mod |
| [TweePrefixPostfixAddonMod](packages/TweePrefixPostfixAddonMod) | Twee prefix/postfix addon |
| [TweeReplacerLinkerAddon](packages/TweeReplacerLinkerAddon) | Twee replacer linker addon |
| [utils](packages/utils) | Workspace internal utilities (no external source fetch) |

## Development

```bash
git clone <repo>
cd dol-type
pnpm install
pnpm build
pnpm typecheck
```

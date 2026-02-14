# SugarCube 2 Mod Loader Types

TypeScript type definitions monorepo for the SugarCube 2 Mod Loader ecosystem. Each package fetches source from upstream repos and emits `.d.ts` for use by modules and tools in the ecosystem.

## Tech stack

- **Package manager**: pnpm workspace
- **Build orchestration**: Turbo
- **Type generation**: tsdown (generates types from remote source into `type-dist/`)
- **Source fetch**: giget (each package’s `download` script pulls upstream from GitHub)

## Scripts

| Command          | Description                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------------- |
| `pnpm build`     | Full build: runs `download` then `build` for each package; output goes to each package’s `type-dist/` |
| `pnpm typecheck` | Full type check                                                                                       |

Per-package commands:

- `pnpm run download`: Fetch source from upstream into the package’s `remote/` (see the package’s `src/download.ts`)
- `pnpm run build`: Generate types from `remote/` and local config (tsdown + after-build)
- `pnpm run typecheck`: Run `tsc --noEmit` for that package

## Packages

Type definition sources are documented in each package’s README.

| Package                                                                               | Description                                             |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [Addon_ConflictChecker](packages/Addon_ConflictChecker)                               | Conflict checker addon                                  |
| [Addon_ImageLoaderHook2BeautySelector](packages/Addon_ImageLoaderHook2BeautySelector) | Image loader hook → beauty selector                     |
| [Addon_ModuleCssReplacer](packages/Addon_ModuleCssReplacer)                           | Module CSS replacer addon                               |
| [Addon_ModdedClothes](packages/Addon_ModdedClothes)                                   | Modded clothes addon                                    |
| [Addon_ModdedFeats](packages/Addon_ModdedFeats)                                       | Modded feats addon                                      |
| [Addon_ModdedHair](packages/Addon_ModdedHair)                                         | Modded hair addon                                       |
| [Addon_TweeReplacerLinker](packages/Addon_TweeReplacerLinker)                         | Twee replacer linker addon                              |
| [AddonMod_BeautySelector](packages/AddonMod_BeautySelector)                           | Beauty selector addon                                   |
| [AddonMod_I18nScriptList](packages/AddonMod_I18nScriptList)                           | i18n script list addon                                  |
| [AddonMod_I18nTweeList](packages/AddonMod_I18nTweeList)                               | i18n Twee list addon                                    |
| [AddonMod_TweePrefixPostfix](packages/AddonMod_TweePrefixPostfix)                     | Twee prefix/postfix addon                               |
| [AddonModTimeWrapper](packages/AddonModTimeWrapper)                                   | Time wrapper addon                                      |
| [GameOriginalImagePackMod](packages/GameOriginalImagePackMod)                         | Game original image pack                                |
| [Hook_ImgLoader](packages/Hook_ImgLoader)                                             | Image loader hook                                       |
| [Hook_MacroRng](packages/Hook_MacroRng)                                               | Macro RNG hook                                          |
| [Mod_CheckDoLCompressorDictionaries](packages/Mod_CheckDoLCompressorDictionaries)     | DoL compressor dictionaries check                       |
| [Mod_CheckGameVersion](packages/Mod_CheckGameVersion)                                 | DoL game version check                                  |
| [Mod_CoTCheckGameVersion](packages/Mod_CoTCheckGameVersion)                           | CoT game version check                                  |
| [Mod_Diff3WayMerge](packages/Mod_Diff3WayMerge)                                       | Three-way merge                                         |
| [Mod_i18n](packages/Mod_i18n)                                                         | DoL i18n mod                                            |
| [Mod_I18nTweeReplacer](packages/Mod_I18nTweeReplacer)                                 | i18n Twee replacer                                      |
| [Mod_LinkButtonFilter](packages/Mod_LinkButtonFilter)                                 | Link button filter                                      |
| [Mod_LoaderGui](packages/Mod_LoaderGui)                                               | Mod Loader GUI                                          |
| [Mod_ReplacePatch](packages/Mod_ReplacePatch)                                         | Replace patch                                           |
| [Mod_SubUiAngularJs](packages/Mod_SubUiAngularJs)                                     | Sub UI (AngularJS)                                      |
| [Mod_SweetAlert2](packages/Mod_SweetAlert2)                                           | SweetAlert2 mod                                         |
| [Mod_TweeReplacer](packages/Mod_TweeReplacer)                                         | Twee replacer                                           |
| [sugarcube-2-ModLoader](packages/sugarcube-2-ModLoader)                               | Mod Loader core                                         |
| [utils](packages/utils)                                                               | Workspace internal utilities (no external source fetch) |

## Development

```bash
git clone <repo>
cd scml-types
pnpm install
pnpm build
pnpm typecheck
```

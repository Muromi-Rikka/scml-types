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

| Package                                                                               | npm                                                                                                                                                                   | Description                                             |
| ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [Addon_ConflictChecker](packages/Addon_ConflictChecker)                               | [![npm](https://img.shields.io/npm/v/@scml/addon-conflict-checker)](https://www.npmjs.com/package/@scml/addon-conflict-checker)                                       | Conflict checker addon                                  |
| [Addon_ImageLoaderHook2BeautySelector](packages/Addon_ImageLoaderHook2BeautySelector) | [![npm](https://img.shields.io/npm/v/@scml/addon-image-loader-hook-2-beauty-selector)](https://www.npmjs.com/package/@scml/addon-image-loader-hook-2-beauty-selector) | Image loader hook → beauty selector                     |
| [Addon_ModuleCssReplacer](packages/Addon_ModuleCssReplacer)                           | [![npm](https://img.shields.io/npm/v/@scml/addon-module-css-replacer)](https://www.npmjs.com/package/@scml/addon-module-css-replacer)                                 | Module CSS replacer addon                               |
| [Addon_ModdedClothes](packages/Addon_ModdedClothes)                                   | [![npm](https://img.shields.io/npm/v/@scml/addon-modded-clothes)](https://www.npmjs.com/package/@scml/addon-modded-clothes)                                           | Modded clothes addon                                    |
| [Addon_ModdedFeats](packages/Addon_ModdedFeats)                                       | [![npm](https://img.shields.io/npm/v/@scml/addon-modded-feats)](https://www.npmjs.com/package/@scml/addon-modded-feats)                                               | Modded feats addon                                      |
| [Addon_ModdedHair](packages/Addon_ModdedHair)                                         | [![npm](https://img.shields.io/npm/v/@scml/addon-modded-hair)](https://www.npmjs.com/package/@scml/addon-modded-hair)                                                 | Modded hair addon                                       |
| [Addon_TweeReplacerLinker](packages/Addon_TweeReplacerLinker)                         | [![npm](https://img.shields.io/npm/v/@scml/addon-twee-replacer-linker)](https://www.npmjs.com/package/@scml/addon-twee-replacer-linker)                               | Twee replacer linker addon                              |
| [AddonMod_BeautySelector](packages/AddonMod_BeautySelector)                           | [![npm](https://img.shields.io/npm/v/@scml/addon-mod-beauty-selector)](https://www.npmjs.com/package/@scml/addon-mod-beauty-selector)                                 | Beauty selector addon                                   |
| [AddonMod_I18nScriptList](packages/AddonMod_I18nScriptList)                           | [![npm](https://img.shields.io/npm/v/@scml/addon-mod-i18n-script-list)](https://www.npmjs.com/package/@scml/addon-mod-i18n-script-list)                               | i18n script list addon                                  |
| [AddonMod_I18nTweeList](packages/AddonMod_I18nTweeList)                               | [![npm](https://img.shields.io/npm/v/@scml/addon-mod-i18n-twee-list)](https://www.npmjs.com/package/@scml/addon-mod-i18n-twee-list)                                   | i18n Twee list addon                                    |
| [AddonMod_TweePrefixPostfix](packages/AddonMod_TweePrefixPostfix)                     | [![npm](https://img.shields.io/npm/v/@scml/addon-mod-twee-prefix-postfix)](https://www.npmjs.com/package/@scml/addon-mod-twee-prefix-postfix)                         | Twee prefix/postfix addon                               |
| [AddonModTimeWrapper](packages/AddonModTimeWrapper)                                   | [![npm](https://img.shields.io/npm/v/@scml/addon-mod-time-wrapper)](https://www.npmjs.com/package/@scml/addon-mod-time-wrapper)                                       | Time wrapper addon                                      |
| [GameOriginalImagePackMod](packages/GameOriginalImagePackMod)                         | [![npm](https://img.shields.io/npm/v/@scml/game-original-image-pack-mod)](https://www.npmjs.com/package/@scml/game-original-image-pack-mod)                           | Game original image pack                                |
| [Hook_ImgLoader](packages/Hook_ImgLoader)                                             | [![npm](https://img.shields.io/npm/v/@scml/hook-img-loader)](https://www.npmjs.com/package/@scml/hook-img-loader)                                                     | Image loader hook                                       |
| [Hook_MacroRng](packages/Hook_MacroRng)                                               | [![npm](https://img.shields.io/npm/v/@scml/hook-macro-rng)](https://www.npmjs.com/package/@scml/hook-macro-rng)                                                       | Macro RNG hook                                          |
| [Mod_CheckDoLCompressorDictionaries](packages/Mod_CheckDoLCompressorDictionaries)     | [![npm](https://img.shields.io/npm/v/@scml/mod-check-dol-compressor-dictionaries)](https://www.npmjs.com/package/@scml/mod-check-dol-compressor-dictionaries)         | DoL compressor dictionaries check                       |
| [Mod_CheckGameVersion](packages/Mod_CheckGameVersion)                                 | [![npm](https://img.shields.io/npm/v/@scml/mod-check-game-version)](https://www.npmjs.com/package/@scml/mod-check-game-version)                                       | DoL game version check                                  |
| [Mod_CoTCheckGameVersion](packages/Mod_CoTCheckGameVersion)                           | [![npm](https://img.shields.io/npm/v/@scml/mod-cot-check-game-version)](https://www.npmjs.com/package/@scml/mod-cot-check-game-version)                               | CoT game version check                                  |
| [Mod_Diff3WayMerge](packages/Mod_Diff3WayMerge)                                       | [![npm](https://img.shields.io/npm/v/@scml/mod-diff3-way-merge)](https://www.npmjs.com/package/@scml/mod-diff3-way-merge)                                             | Three-way merge                                         |
| [Mod_i18n](packages/Mod_i18n)                                                         | [![npm](https://img.shields.io/npm/v/@scml/mod-i18n)](https://www.npmjs.com/package/@scml/mod-i18n)                                                                   | DoL i18n mod                                            |
| [Mod_I18nTweeReplacer](packages/Mod_I18nTweeReplacer)                                 | [![npm](https://img.shields.io/npm/v/@scml/mod-i18n-twee-replacer)](https://www.npmjs.com/package/@scml/mod-i18n-twee-replacer)                                       | i18n Twee replacer                                      |
| [Mod_LinkButtonFilter](packages/Mod_LinkButtonFilter)                                 | [![npm](https://img.shields.io/npm/v/@scml/mod-link-button-filter)](https://www.npmjs.com/package/@scml/mod-link-button-filter)                                       | Link button filter                                      |
| [Mod_LoaderGui](packages/Mod_LoaderGui)                                               | [![npm](https://img.shields.io/npm/v/@scml/mod-loader-gui)](https://www.npmjs.com/package/@scml/mod-loader-gui)                                                       | Mod Loader GUI                                          |
| [Mod_ReplacePatch](packages/Mod_ReplacePatch)                                         | [![npm](https://img.shields.io/npm/v/@scml/mod-replacer-patch)](https://www.npmjs.com/package/@scml/mod-replacer-patch)                                               | Replace patch                                           |
| [Mod_SubUiAngularJs](packages/Mod_SubUiAngularJs)                                     | [![npm](https://img.shields.io/npm/v/@scml/mod-sub-ui-angular-js)](https://www.npmjs.com/package/@scml/mod-sub-ui-angular-js)                                         | Sub UI (AngularJS)                                      |
| [Mod_SweetAlert2](packages/Mod_SweetAlert2)                                           | [![npm](https://img.shields.io/npm/v/@scml/mod-sweet-alert2)](https://www.npmjs.com/package/@scml/mod-sweet-alert2)                                                   | SweetAlert2 mod                                         |
| [Mod_TweeReplacer](packages/Mod_TweeReplacer)                                         | [![npm](https://img.shields.io/npm/v/@scml/mod-twee-replacer)](https://www.npmjs.com/package/@scml/mod-twee-replacer)                                                 | Twee replacer                                           |
| [sugarcube-2-ModLoader](packages/sugarcube-2-ModLoader)                               | [![npm](https://img.shields.io/npm/v/@scml/sc2-modloader)](https://www.npmjs.com/package/@scml/sc2-modloader)                                                         | Mod Loader core                                         |
| [utils](packages/utils)                                                               | [![npm](https://img.shields.io/npm/v/@scml/utils)](https://www.npmjs.com/package/@scml/utils)                                                                         | Workspace internal utilities (no external source fetch) |

## Development

```bash
git clone <repo>
cd scml-types
pnpm install
pnpm build
pnpm typecheck
```

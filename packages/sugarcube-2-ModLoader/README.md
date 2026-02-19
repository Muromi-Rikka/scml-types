# @scml/sc2-modloader

TypeScript type definitions for SugarCube 2 Mod Loader.

## Installation

```bash
pnpm add -D @scml/sc2-modloader
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/sc2-modloader" />
```

Main entry augments these global properties: `jQuery`, `$`, `modSC2DataManager`, `modUtils`, `jsPreloader`, `modModLoadController`, `modAddonPluginManager`, `modSC2JsEvalContext`.

### Subpath imports

```ts
import type { SomeType } from '@scml/sc2-modloader/AddonPlugin';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./AddonPlugin` | Type declarations |
| `./DecoratorUtils` | Type declarations |
| `./DependenceChecker` | Type declarations |
| `./export2window` | Type declarations |
| `./expose-loader` | Type declarations |
| `./extname` | Type declarations |
| `./getGlobal` | Type declarations |
| `./HtmlTagSrcHook` | Type declarations |
| `./IdbKeyValRef` | Type declarations |
| `./JqueryInjector` | Type declarations |
| `./JsPreloader` | Type declarations |
| `./JSZipLikeReadOnlyInterface` | Type declarations |
| `./LanguageManager` | Type declarations |
| `./MergeSC2DataInfoCache` | Type declarations |
| `./ModLoadController` | Type declarations |
| `./ModLoader` | Type declarations |
| `./ModOrderContainer` | Type declarations |
| `./ModZipReader` | Type declarations |
| `./PassageTracer` | Type declarations |
| `./polyfill` | Type declarations |
| `./ReplacePatcher` | Type declarations |
| `./SC2ApiRef` | Type declarations |
| `./SC2DataInfoCache` | Type declarations |
| `./SC2DataManager` | Type declarations |
| `./Sc2EventTracer` | Type declarations |
| `./SC2JsEvalContext` | Type declarations |
| `./SimulateMerge` | Type declarations |
| `./SugarCube2` | Type declarations |
| `./Utils` | Type declarations |
| `./WikifyTracer` | Type declarations |
| `./ModPack/ModMeta` | Type declarations |
| `./ModPack/ModPack` | Type declarations |
| `./ModPack/ModPackFileReaderInterface` | Type declarations |
| `./ModPack/ModPackJsZipAdaptor` | Type declarations |
| `./SemVer/InfiniteSemVer` | Type declarations |
| `./Utils/LazyIteratorAdaptor.d.ts` | Type declarations |
| `./WeakRefPool/WeakRefPool` | Type declarations |

## Types

### Main entry
- **`jQuery`** / **`$`** – jQuery on `window`.
- **`modSC2DataManager`** – Core data manager for mods and game data.
- **`modUtils`** – Mod loader utilities.
- **`jsPreloader`** – Script preloader.
- **`modModLoadController`** – Mod load lifecycle controller.
- **`modAddonPluginManager`** – Manages addon plugins.
- **`modSC2JsEvalContext`** – JS evaluation context for mods.

### Core subpaths
- **`./ModLoader`** – **`ModLoader`**, **`ModBootJson`**, **`ModBootJsonAddonPlugin`**, **`DependenceInfo`**, **`ModImg`**, **`IModImgGetter`** – Core mod loading types.
- **`./SC2DataManager`** – **`SC2DataManager`** – Central data manager.
- **`./ModLoadController`** – Load controller and **`LogWrapper`**.
- **`./AddonPlugin`** – **`AddonPluginManager`**, **`AddonPluginHookPointEx`**, **`LifeTimeCircleHook`** – Addon plugin interfaces.
- **`./ReplacePatcher`** – Patch/replace utilities.
- **`./ModOrderContainer`** – **`ModOrderContainer`**, **`ModOrderItem`**, **`ModLoadFromSourceType`** – Load order types.
- **`./ModZipReader`** – **`ModZipReader`**, **`LocalLoader`**, **`RemoteLoader`**, **`IndexDBLoader`** – Mod zip and loader types.
- **`./SC2DataInfoCache`** – **`SC2DataInfo`**, **`CacheRecord`**, **`StyleTextFileItem`**, **`ScriptTextFileItem`**, **`PassageDataItem`** – Cached game data types.
- **`./SugarCube2`** – **`Passage`** – SugarCube passage type.
- **`./ModPack/*`** – **`ModPack`**, **`ModMeta`**, **`ModPackFileReaderInterface`** – Mod pack types.
- **`./SemVer/InfiniteSemVer`** – **`InfiniteSemVer`** – Version parsing.
- **`./Utils`** – **`ModUtils`** – Utility types.
- Other subpaths: **`DecoratorUtils`**, **`DependenceChecker`**, **`export2window`**, **`expose-loader`**, **`extname`**, **`getGlobal`**, **`HtmlTagSrcHook`**, **`IdbKeyValRef`**, **`JqueryInjector`**, **`JsPreloader`**, **`JSZipLikeReadOnlyInterface`**, **`LanguageManager`**, **`MergeSC2DataInfoCache`**, **`PassageTracer`**, **`polyfill`**, **`SC2ApiRef`**, **`SC2DataInfoCache`**, **`Sc2EventTracer`**, **`SC2JsEvalContext`**, **`SimulateMerge`**, **`WikifyTracer`**, **`WeakRefPool`**.

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/sugarcube-2-ModLoader
- Default branch: master
- Build: `pnpm run download && pnpm run build`

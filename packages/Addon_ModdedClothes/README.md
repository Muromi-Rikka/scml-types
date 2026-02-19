# @scml/addon-modded-clothes

TypeScript type definitions for Modded clothes addon.

## Installation

```bash
pnpm add -D @scml/addon-modded-clothes
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/addon-modded-clothes" />
```

Main entry augments these global properties: `addonModdedClothesAddon` (instance of `ModdedClothesAddon`).

### Subpath imports

```ts
import type { SomeType } from '@scml/addon-modded-clothes/ModdedClothesAddon';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./ModdedClothesAddon` | Type declarations |
| `./ModdedClothesAddonParams` | Type declarations |

## Types

### Main entry
- **`addonModdedClothesAddon`** – Addon for adding and patching modded clothes data.

### `./ModdedClothesAddon`
- **`ModdedClothesAddon`** – Addon plugin managing `clothesAddInfo: Map<string, ClothesAddInfo>`. Methods: `registerMod()`, `addClothes()`, `exportDataZip()`, `init()`.
- **`ClothesAddInfo`** – `{ modName, clothes: ClothesInfo[], patch: ClothesPatchInfo[] }`.
- **`ClothesInfo`** – `{ key, data: ClothesItem[] }`.
- **`searchClothesByName()`**, **`checkForOutfitWarmth()`** – Utility functions.

### `./ModdedClothesAddonParams`
- **`ModdedClothesAddonParams`** – Config: `clothes: AddClothesItem[]`, `patch?: string[]`.
- **`AddClothesItem`**, **`ClothesPatchInfo`**, **`ClothesPatchUpdateType`** – Param types.
- **`checkParams`**, **`checkAddClothesItem`**, **`checkClothesPatchInfo`** – Type guards.

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/DoL_ModdedClothesAddon
- Default branch: master
- Build: `pnpm run download && pnpm run build`

# @scml/addon-modded-feats

TypeScript type definitions for Modded feats addon.

## Installation

```bash
pnpm add -D @scml/addon-modded-feats
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/addon-modded-feats" />
```

Main entry augments these global properties: `addonModdedFeatsAddon` (instance of `ModdedFeatsAddon`).

### Subpath imports

```ts
import type { SomeType } from '@scml/addon-modded-feats/ModdedFeatsAddon';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./ModdedFeatsAddon` | Type declarations |
| `./ModdedFeatsAddonParams` | Type declarations |

## Types

### Main entry
- **`addonModdedFeatsAddon`** – Addon for adding and merging modded feats data.

### `./ModdedFeatsAddon`
- **`ModdedFeatsAddon`** – Addon plugin with `featsData: Map<string, FeatsObject>`. Methods: `registerMod()`, `exportDataZip()`, `init()`.
- **`mergeFeatsObject()`**, **`appendFeatsObject()`** – Merge/append feats utilities.

### `./ModdedFeatsAddonParams`
- Params config for the addon; see subpath for type definitions.

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/DoL_ModdedFeatsAddon
- Default branch: master
- Build: `pnpm run download && pnpm run build`

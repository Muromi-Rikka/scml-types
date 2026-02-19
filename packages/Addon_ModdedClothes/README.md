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

Main entry augments these global properties: `addonModdedClothesAddon`

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

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/DoL_ModdedClothesAddon
- Default branch: master
- Build: `pnpm run download && pnpm run build`

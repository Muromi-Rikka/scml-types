# @scml/addon-modded-hair

TypeScript type definitions for Modded hair addon.

## Installation

```bash
pnpm add -D @scml/addon-modded-hair
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/addon-modded-hair" />
```

Main entry augments these global properties: `addonModdedHairAddon`

### Subpath imports

```ts
import type { SomeType } from '@scml/addon-modded-hair/ModdedHairAddon';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./ModdedHairAddon` | Type declarations |
| `./ModdedHairAddonParams` | Type declarations |

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/DoL_ModdedHairAddon
- Default branch: master
- Build: `pnpm run download && pnpm run build`

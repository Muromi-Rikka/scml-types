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

Main entry augments these global properties: `addonModdedFeatsAddon`

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

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/DoL_ModdedFeatsAddon
- Default branch: master
- Build: `pnpm run download && pnpm run build`

# @scml/game-original-image-pack-mod

TypeScript type definitions for Game original image pack.

## Installation

```bash
pnpm add -D @scml/game-original-image-pack-mod
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/game-original-image-pack-mod" />
```

Main entry augments these global properties: `modGameOriginalImagePack` (instance of `GameOriginalImagePack`).

### Subpath imports

```ts
import type { SomeType } from '@scml/game-original-image-pack-mod/GameOriginalImagePack';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./GameOriginalImagePack` | Type declarations |

## Types

### Main entry
- **`modGameOriginalImagePack`** – Provides access to the game’s original image pack.

### `./GameOriginalImagePack`
- **`GameOriginalImagePack`** – Mod class for loading and exposing original game images.

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/GameOriginalImagePackMod
- Default branch: master
- Build: `pnpm run download && pnpm run build`

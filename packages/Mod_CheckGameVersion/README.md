# @scml/mod-check-game-version

TypeScript type definitions for DoL game version check.

## Installation

```bash
pnpm add -D @scml/mod-check-game-version
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/mod-check-game-version" />
```

Main entry augments these global properties: `modCheckGameVersion` (instance of `CheckGameVersion`).

### Subpath imports

```ts
import type { SomeType } from '@scml/mod-check-game-version/CheckGameVersion';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./CheckGameVersion` | Type declarations |

## Types

### Main entry
- **`modCheckGameVersion`** – Checks DoL game version compatibility.

### `./CheckGameVersion`
- **`CheckGameVersion`** – Implements `Sc2EventTracerCallback`. Methods: `checkGameVersion()`, `whenSC2StoryReady()`.

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/Degrees-of-Lewdity_Mod_CheckGameVersion
- Default branch: master
- Build: `pnpm run download && pnpm run build`

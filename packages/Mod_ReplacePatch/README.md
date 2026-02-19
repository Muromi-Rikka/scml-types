# @scml/mod-replacer-patch

TypeScript type definitions for Replace patch.

## Installation

```bash
pnpm add -D @scml/mod-replacer-patch
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/mod-replacer-patch" />
```

Main entry augments these global properties: `addonReplacePatcher` (instance of `ReplacePatcher`).

### Subpath imports

```ts
import type { SomeType } from '@scml/mod-replacer-patch/ReplacePatcher';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./ReplacePatcher` | Type declarations |

## Types

### Main entry
- **`addonReplacePatcher`** – Performs search-and-replace patches on game/mod content.

### `./ReplacePatcher`
- **`ReplacePatcher`** – Addon class for applying replacement patches (find/replace over content).

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/Degrees-of-Lewdity_Mod_ReplacePatch
- Default branch: master
- Build: `pnpm run download && pnpm run build`

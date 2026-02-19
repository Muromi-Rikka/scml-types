# @scml/mod-check-dol-compressor-dictionaries

TypeScript type definitions for DoL compressor dictionaries check.

## Installation

```bash
pnpm add -D @scml/mod-check-dol-compressor-dictionaries
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/mod-check-dol-compressor-dictionaries" />
```

Main entry augments these global properties: `modCheckDoLCompressorDictionaries` (instance of `CheckDoLCompressorDictionaries`).

### Subpath imports

```ts
import type { SomeType } from '@scml/mod-check-dol-compressor-dictionaries/CheckDoLCompressorDictionaries';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./CheckDoLCompressorDictionaries` | Type declarations |

## Types

### Main entry
- **`modCheckDoLCompressorDictionaries`** – Checks DoL compressor dictionary compatibility.

### `./CheckDoLCompressorDictionaries`
- **`CheckDoLCompressorDictionaries`** – Addon class that validates compressor dictionaries.

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/Degrees-of-Lewdity_Mod_CheckDoLCompressorDictionaries
- Default branch: master
- Build: `pnpm run download && pnpm run build`

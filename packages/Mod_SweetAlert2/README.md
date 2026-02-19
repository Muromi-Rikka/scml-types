# @scml/mod-sweet-alert2

TypeScript type definitions for SweetAlert2 mod.

## Installation

```bash
pnpm add -D @scml/mod-sweet-alert2
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/mod-sweet-alert2" />
```

Main entry augments these global properties: `modSweetAlert2Mod`

### Subpath imports

```ts
import type { SomeType } from '@scml/mod-sweet-alert2/SweetAlert2Mod';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./SweetAlert2Mod` | Type declarations |

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/SweetAlert2Mod
- Default branch: master
- Build: `pnpm run download && pnpm run build`

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

Main entry augments these global properties: `modSweetAlert2Mod` (instance of `SweetAlert2Mod`).

### Subpath imports

```ts
import type { SomeType } from '@scml/mod-sweet-alert2/SweetAlert2Mod';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./SweetAlert2Mod` | Type declarations |

## Types

### Main entry
- **`modSweetAlert2Mod`** – Wraps SweetAlert2 for use in SugarCube mods.

### `./SweetAlert2Mod`
- **`SweetAlert2Mod`** – Provides `fire` (typeof `Swal.fire`), `fireWithOptions(options: SweetAlertOptions)`, and `Swal` (typeof SweetAlert2).

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/SweetAlert2Mod
- Default branch: master
- Build: `pnpm run download && pnpm run build`

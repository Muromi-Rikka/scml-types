# @scml/hook-macro-rng

TypeScript type definitions for Macro RNG hook.

## Installation

```bash
pnpm add -D @scml/hook-macro-rng
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/hook-macro-rng" />
```

Main entry augments these global properties: `hookMacroRng` (instance of `HookMacroRng`).

### Subpath imports

```ts
import type { SomeType } from '@scml/hook-macro-rng/HookMacroRng';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./HookMacroRng` | Type declarations |

## Types

### Main entry
- **`hookMacroRng`** – Hooks the RNG used by SugarCube macros for deterministic or custom RNG behavior.

### `./HookMacroRng`
- **`HookMacroRng`** – Addon class that installs the macro RNG hook (exported from `inject_early.d.ts`).

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/DoLHookMacroRng
- Default branch: master
- Build: `pnpm run download && pnpm run build`

# @scml/addon-conflict-checker

TypeScript type definitions for Conflict checker addon.

## Installation

```bash
pnpm add -D @scml/addon-conflict-checker
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/addon-conflict-checker" />
```

Main entry augments these global properties: `addonConflictChecker` (instance of `ConflictChecker`).

### Subpath imports

```ts
import type { SomeType } from '@scml/addon-conflict-checker/ConflictChecker';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./ConflictChecker` | Type declarations |
| `./ConflictCheckerParams` | Type declarations |

## Types

### Main entry
- **`addonConflictChecker`** – `ConflictChecker` instance exposed on `window`. Used to detect and manage mod load-order conflicts.

### `./ConflictChecker`
- **`ConflictChecker`** – Addon plugin class implementing `LifeTimeCircleHook` and `AddonPluginHookPointEx`. Holds `modList: Map<string, ConflictCheckerParams>`, provides `registerMod()`, `ModLoaderLoadEnd()`.

### `./ConflictCheckerParams`
- **`ConflictCheckerParams`** – Config for load-order constraints: `mustBefore`, `mustAfter`, `optionalBefore`, `optionalAfter`, `blackBefore`, `blackAfter` (all `ModLimit[]`).
- **`ModLimit`** – `{ modName: string; version: string }`.
- **`checkModLimit`**, **`checkParams`** – Type guards.

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/ConflictCheckerAddon
- Default branch: master
- Build: `pnpm run download && pnpm run build`

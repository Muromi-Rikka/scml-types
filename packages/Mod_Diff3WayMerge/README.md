# @scml/mod-diff3-way-merge

TypeScript type definitions for Three-way merge.

## Installation

```bash
pnpm add -D @scml/mod-diff3-way-merge
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/mod-diff3-way-merge" />
```

Main entry augments these global properties: `diff3WayMerge` (instance of `Diff3WayMerge`).

### Subpath imports

```ts
import type { SomeType } from '@scml/mod-diff3-way-merge/Diff3WayMerge';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./Diff3WayMerge` | Type declarations |
| `./Diff3WayMergeParams` | Type declarations |
| `./DiffFormat` | Type declarations |
| `./diff_match_patch/diff_match_patch` | Type declarations |

## Types

### Main entry
- **`diff3WayMerge`** – Performs three-way merges (base + ours + theirs) for mod patches.

### `./Diff3WayMerge`
- **`Diff3WayMerge`** – Addon with `info: Map<string, ModMergeInfo>`. Methods: `registerMod()`, `afterPatchModToGame()`, `do_patch()`, `readOriginFile()`, `readModFile()`, `readDiffFormatFile()`.
- **`ModMergeInfo`** – `{ addonName, mod, modZip }`.

### `./Diff3WayMergeParams` / `./DiffFormat` / `./diff_match_patch/diff_match_patch`
- Merge params, diff format types, and diff-match-patch library bindings.

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/Mod_Diff3WayMerge
- Default branch: master
- Build: `pnpm run download && pnpm run build`

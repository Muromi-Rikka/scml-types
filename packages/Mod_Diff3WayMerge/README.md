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

Main entry augments these global properties: `diff3WayMerge`

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

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/Mod_Diff3WayMerge
- Default branch: master
- Build: `pnpm run download && pnpm run build`

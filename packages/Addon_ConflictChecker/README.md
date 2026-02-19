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

Main entry augments these global properties: `addonConflictChecker`

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

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/ConflictCheckerAddon
- Default branch: master
- Build: `pnpm run download && pnpm run build`

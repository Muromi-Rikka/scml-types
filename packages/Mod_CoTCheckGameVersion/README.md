# @scml/mod-cot-check-game-version

TypeScript type definitions for CoT game version check.

## Installation

```bash
pnpm add -D @scml/mod-cot-check-game-version
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/mod-cot-check-game-version" />
```

Main entry augments these global properties: `modCheckGameVersion` (instance of `CheckGameVersion`).

### Subpath imports

```ts
import type { SomeType } from '@scml/mod-cot-check-game-version/CheckGameVersion';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./CheckGameVersion` | Type declarations |

## Types

### Main entry
- **`modCheckGameVersion`** – Checks CoT (Cape on the Tower) game version compatibility.

### `./CheckGameVersion`
- **`CheckGameVersion`** – Addon class that validates game version at runtime.

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/CheckGameVersionCot
- Default branch: master
- Build: `pnpm run download && pnpm run build`

# @scml/addon-twee-replacer-linker

TypeScript type definitions for Twee replacer linker addon.

## Installation

```bash
pnpm add -D @scml/addon-twee-replacer-linker
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/addon-twee-replacer-linker" />
```

Main entry augments these global properties: `addonTweeReplacerLinker`

### Subpath imports

```ts
import type { SomeType } from '@scml/addon-twee-replacer-linker/TweeReplacerLinker';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./TweeReplacerLinker` | Type declarations |
| `./TweeReplacerLinkerInterface` | Type declarations |

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/TweeReplacerLinkerAddon
- Default branch: master
- Build: `pnpm run download && pnpm run build`

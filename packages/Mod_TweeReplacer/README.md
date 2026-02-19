# @scml/mod-twee-replacer

TypeScript type definitions for Twee replacer.

## Installation

```bash
pnpm add -D @scml/mod-twee-replacer
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/mod-twee-replacer" />
```

Main entry augments these global properties: `addonTweeReplacer`

### Subpath imports

```ts
import type { SomeType } from '@scml/mod-twee-replacer/TweeReplacer';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./TweeReplacer` | Type declarations |

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/Degrees-of-Lewdity_Mod_TweeReplacer
- Default branch: master
- Build: `pnpm run download && pnpm run build`

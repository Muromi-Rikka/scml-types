# @scml/mod-i18n

TypeScript type definitions for DoL i18n mod.

## Installation

```bash
pnpm add -D @scml/mod-i18n
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/mod-i18n" />
```

Main entry augments these global properties: `modI18N`

### Subpath imports

```ts
import type { SomeType } from '@scml/mod-i18n/I18N';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./GetPromiseWithResolvers` | Type declarations |
| `./I18N` | Type declarations |
| `./TypeB` | Type declarations |

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/Degrees-of-Lewdity_Mod_i18nMod
- Default branch: master
- Build: `pnpm run download && pnpm run build`

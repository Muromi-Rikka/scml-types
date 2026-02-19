# @scml/mod-i18n-twee-replacer

TypeScript type definitions for i18n Twee replacer.

## Installation

```bash
pnpm add -D @scml/mod-i18n-twee-replacer
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/mod-i18n-twee-replacer" />
```

Main entry augments these global properties: `modI18nTweeList`

### Subpath imports

```ts
import type { SomeType } from '@scml/mod-i18n-twee-replacer/I18nTweeReplacer';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./CustomReadonlyMapHelper` | Type declarations |
| `./I18nTweeReplacer` | Type declarations |

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/I18nTweeReplacerMod
- Default branch: master
- Build: `pnpm run download && pnpm run build`

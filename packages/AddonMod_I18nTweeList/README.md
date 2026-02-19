# @scml/addon-mod-i18n-twee-list

TypeScript type definitions for i18n Twee list addon.

## Installation

```bash
pnpm add -D @scml/addon-mod-i18n-twee-list
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/addon-mod-i18n-twee-list" />
```

Main entry augments these global properties: `modI18nTweeList`

### Subpath imports

```ts
import type { SomeType } from '@scml/addon-mod-i18n-twee-list/I18nTweeList';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./I18nTweeList` | Type declarations |

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/I18nTweeListAddonMod
- Default branch: master
- Build: `pnpm run download && pnpm run build`

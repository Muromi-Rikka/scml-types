# @scml/addon-mod-i18n-script-list

TypeScript type definitions for i18n script list addon.

## Installation

```bash
pnpm add -D @scml/addon-mod-i18n-script-list
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/addon-mod-i18n-script-list" />
```

Main entry augments these global properties: `modI18nScriptList` (instance of `I18nScriptList`).

### Subpath imports

```ts
import type { SomeType } from '@scml/addon-mod-i18n-script-list/I18nScriptList';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./I18nScriptList` | Type declarations |

## Types

### Main entry
- **`modI18nScriptList`** – Addon managing i18n script lists for mods.

### `./I18nScriptList`
- **`I18nScriptList`** – Addon class for registering and managing i18n script list data.

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/I18nScriptListAddonMod
- Default branch: master
- Build: `pnpm run download && pnpm run build`

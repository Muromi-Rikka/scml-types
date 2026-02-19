# @scml/addon-mod-beauty-selector

TypeScript type definitions for Beauty selector addon.

## Installation

```bash
pnpm add -D @scml/addon-mod-beauty-selector
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/addon-mod-beauty-selector" />
```

Main entry augments these global properties: `addonBeautySelectorAddon` (instance of `BeautySelectorAddon`).

### Subpath imports

```ts
import type { SomeType } from '@scml/addon-mod-beauty-selector/BeautySelectorAddon';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./BeautySelectorAddon` | Type declarations |
| `./BeautySelectorAddonInterface` | Type declarations |
| `./BeautySelectorAddonType` | Type declarations |
| `./extname` | Type declarations |
| `./ModImageStore` | Type declarations |
| `./utils/getRelativePath` | Type declarations |
| `./utils/traverseZipFolder` | Type declarations |
| `./GUI_StringTable/CN` | Type declarations |
| `./GUI_StringTable/EN` | Type declarations |
| `./GUI_StringTable/StringTable` | Type declarations |

## Types

### Main entry
- **`addonBeautySelectorAddon`** – Beauty selector addon integrating with Sub UI AngularJS and Mod Image Store.

### `./BeautySelectorAddon`
- **`BeautySelectorAddon`** – Main addon class; manages beauty options, params, and AngularJS components.

### `./BeautySelectorAddonInterface`
- Interface for beauty selector addon behavior.

### `./BeautySelectorAddonType`
- **`BeautySelectorAddonParamsType0`**, **`Type1`**, **`Type2`** – Param config types.
- **`TypeOrderItem`**, **`BeautySelectorAddonParamsType2ATypeItem`**, **`Type2BTypeItem`** – Option item types.

### `./ModImageStore`
- **`ModImageStore`** – Image store for mod assets.
- **`CachedFileList`** – Cached file list type.

### `./extname` / `./utils/*` / `./GUI_StringTable/*`
- Utility types and i18n string tables.

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/DoL_BeautySelectorAddonMod
- Default branch: master
- Build: `pnpm run download && pnpm run build`

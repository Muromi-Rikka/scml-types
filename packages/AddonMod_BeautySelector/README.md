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

Main entry augments these global properties: `addonBeautySelectorAddon`

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

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/DoL_BeautySelectorAddonMod
- Default branch: master
- Build: `pnpm run download && pnpm run build`

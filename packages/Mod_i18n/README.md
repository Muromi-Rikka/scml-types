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

Main entry augments these global properties: `modI18N` (instance of `ModI18N`).

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

## Types

### Main entry
- **`modI18N`** – DoL i18n mod instance; handles translation and locale data.

### `./I18N`
- **`ModI18N`** – Main i18n class. Properties: `modUtils`, `modSC2DataManager`, `logger`, `idbRef`, `idbKeyValRef`, `typeB`. Methods: `patchVersionString()`, `readZipStream()`, `readZipSelf()`, `checkItem()`.
- **`sleep()`** – Utility `Promise` delay.

### `./GetPromiseWithResolvers` / `./TypeB`
- **`GetPromiseWithResolvers`** – Promise resolver helper.
- **`TypeB`** – Type definitions for i18n input/output and `ModI18NTypeB`, `TypeBI18NInputType`.

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/Degrees-of-Lewdity_Mod_i18nMod
- Default branch: master
- Build: `pnpm run download && pnpm run build`

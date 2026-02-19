# @scml/addon-module-css-replacer

TypeScript type definitions for Module CSS replacer addon.

## Installation

```bash
pnpm add -D @scml/addon-module-css-replacer
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/addon-module-css-replacer" />
```

Main entry augments these global properties: `addonModuleCssReplacer`

### Subpath imports

```ts
import type { SomeType } from '@scml/addon-module-css-replacer/ModuleCssReplacer';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./ModuleCssReplacer` | Type declarations |

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/DoL_ModuleCssReplacerAddon
- Default branch: master
- Build: `pnpm run download && pnpm run build`

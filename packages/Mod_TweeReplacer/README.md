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

Main entry augments these global properties: `addonTweeReplacer` (instance of `TweeReplacer`).

### Subpath imports

```ts
import type { SomeType } from '@scml/mod-twee-replacer/TweeReplacer';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./TweeReplacer` | Type declarations |

## Types

### Main entry
- **`addonTweeReplacer`** – Performs find/replace on Twee passage content.

### `./TweeReplacer`
- **`TweeReplacer`** – Addon implementing `AddonPluginHookPointEx` and `TweeReplacerLinkerClientInterface`. Holds `info: Map<string, ReplaceInfo>`. Methods: `registerMod()`, `enableLinkerMode()`, `afterEarlyLoad()`, `afterPatchModToGame()`, `do_patch()`, `init()`.
- **`ReplaceParams`** – `{ passage, findString?, findRegex?, regexFlag?, replace?, replaceFile?, debug?, all? }`.
- **`ReplaceInfo`** – `{ addonName, mod, modZip }`.
- **`ModBootJsonAddonPluginTweeReplacer`** – Boot config with `paramsFiles?: string[]`.
- **`isReplaceParams()`** – Type guard.

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/Degrees-of-Lewdity_Mod_TweeReplacer
- Default branch: master
- Build: `pnpm run download && pnpm run build`

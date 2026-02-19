# @scml/addon-twee-replacer-linker

TypeScript type definitions for Twee replacer linker addon.

## Installation

```bash
pnpm add -D @scml/addon-twee-replacer-linker
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/addon-twee-replacer-linker" />
```

Main entry augments these global properties: `addonTweeReplacerLinker` (instance of `TweeReplacerLinker`).

### Subpath imports

```ts
import type { SomeType } from '@scml/addon-twee-replacer-linker/TweeReplacerLinker';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./TweeReplacerLinker` | Type declarations |
| `./TweeReplacerLinkerInterface` | Type declarations |

## Types

### Main entry
- **`addonTweeReplacerLinker`** – Links TweeReplacer clients; coordinates replacement callbacks across mods.

### `./TweeReplacerLinker`
- **`TweeReplacerLinker`** – Addon implementing `TweeReplacerLinkerInterface`. Methods: `registerClient()`, `addUserMod()`, `registerMod()`, `afterPatchModToGame()`.
- **`TweeReplacerLinkerCallbackData`** – Callback registration data.

### `./TweeReplacerLinkerInterface`
- **`TweeReplacerLinkerInterface`** – `registerClient()`, `addUserMod()`.
- **`TweeReplacerLinkerClientInterface`** – `enableLinkerMode()`.
- **`TweeReplacerLinkerClientCallbackType`** – `(sc: SC2DataInfo) => Promise<any>`.

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/TweeReplacerLinkerAddon
- Default branch: master
- Build: `pnpm run download && pnpm run build`

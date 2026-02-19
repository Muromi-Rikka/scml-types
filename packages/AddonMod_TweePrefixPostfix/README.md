# @scml/addon-mod-twee-prefix-postfix

TypeScript type definitions for Twee prefix/postfix addon.

## Installation

```bash
pnpm add -D @scml/addon-mod-twee-prefix-postfix
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/addon-mod-twee-prefix-postfix" />
```

Main entry augments these global properties: `addonTweePrefixPostfixAddon` (instance of `TweePrefixPostfixAddon`).

### Subpath imports

```ts
import type { SomeType } from '@scml/addon-mod-twee-prefix-postfix/TweePrefixPostfixAddon';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./TweePrefixPostfixAddon` | Type declarations |
| `./TweePrefixPostfixAddonJsCallback` | Type declarations |

## Types

### Main entry
- **`addonTweePrefixPostfixAddon`** – Addon that applies prefix/postfix transformations to Twee content.

### `./TweePrefixPostfixAddon`
- **`TweePrefixPostfixAddon`** – Addon class for prefix/postfix processing.

### `./TweePrefixPostfixAddonJsCallback`
- **`TweePrefixPostfixAddonJsCallback`** – Callback type for custom prefix/postfix logic.

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/TweePrefixPostfixAddonMod
- Default branch: master
- Build: `pnpm run download && pnpm run build`

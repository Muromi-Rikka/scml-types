# @scml/addon-image-loader-hook-2-beauty-selector

TypeScript type definitions for Image loader hook → beauty selector.

## Installation

```bash
pnpm add -D @scml/addon-image-loader-hook-2-beauty-selector
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/addon-image-loader-hook-2-beauty-selector" />
```

Main entry augments these global properties: `modImageLoaderHook2BeautySelectorAddon` (instance of `ImageLoaderHook2BeautySelectorAddon`).

### Subpath imports

```ts
import type { SomeType } from '@scml/addon-image-loader-hook-2-beauty-selector/ImageLoaderHook2BeautySelectorAddon';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./ImageLoaderHook2BeautySelectorAddon` | Type declarations |

## Types

### Main entry
- **`modImageLoaderHook2BeautySelectorAddon`** – Addon that bridges image loader hook to the beauty selector UI.

### `./ImageLoaderHook2BeautySelectorAddon`
- **`ImageLoaderHook2BeautySelectorAddon`** – Main addon class; extends image loader hook with beauty selector integration.

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/ImageLoaderHook2BeautySelectorAddon
- Default branch: master
- Build: `pnpm run download && pnpm run build`

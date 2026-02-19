# @scml/hook-img-loader

TypeScript type definitions for Image loader hook.

## Installation

```bash
pnpm add -D @scml/hook-img-loader
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/hook-img-loader" />
```

Main entry augments these global properties: `modImgLoaderHooker` (instance of `ImgLoaderHooker`).

### Subpath imports

```ts
import type { SomeType } from '@scml/hook-img-loader/ImgLoaderHooker';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./utils` | Type declarations |
| `./SimpleDolFunctionHook` | Type declarations |
| `./NodeMutationObserver` | Type declarations |
| `./ImgLoaderHookerCore` | Type declarations |
| `./ImgLoaderHooker` | Type declarations |
| `./CssReplacer` | Type declarations |
| `./createFunctionFromCode` | Type declarations |

## Types

### Main entry
- **`modImgLoaderHooker`** – Hooks into the image loader to allow mods to provide custom images.

### `./ImgLoaderHooker`
- **`ImgLoaderHooker`** – Extends `ImgLoaderHookerCore`; installs hook and waits for init. Methods: `init()`, `installHook()`.

### `./ImgLoaderHookerCore` / `./NodeMutationObserver` / `./SimpleDolFunctionHook`
- Core hook infrastructure and mutation/function hook utilities.

### `./CssReplacer` / `./utils` / `./createFunctionFromCode`
- CSS replacement helpers, utilities, and function-from-code factory.

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/DoL_ImgLoaderHooker
- Default branch: master
- Build: `pnpm run download && pnpm run build`

# @scml/addon-mod-time-wrapper

TypeScript type definitions for Time wrapper addon.

## Installation

```bash
pnpm add -D @scml/addon-mod-time-wrapper
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/addon-mod-time-wrapper" />
```

Main entry augments these global properties: `addonDoLTimeWrapperAddon`

### Subpath imports

```ts
import type { SomeType } from '@scml/addon-mod-time-wrapper/DoLTimeWrapperAddon';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./OldTimeFunctionHook` | Type declarations |
| `./TimeProxyManager` | Type declarations |
| `./DoLTimeWrapperAddonPlugin` | Type declarations |
| `./DoLTimeWrapperAddon` | Type declarations |

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/DoLTimeWrapperAddonMod
- Default branch: master
- Build: `pnpm run download && pnpm run build`

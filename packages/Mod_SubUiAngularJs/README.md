# @scml/mod-sub-ui-angular-js

TypeScript type definitions for Sub UI (AngularJS).

## Installation

```bash
pnpm add -D @scml/mod-sub-ui-angular-js
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/mod-sub-ui-angular-js" />
```

Main entry augments these global properties: `diff3WayMerge`

### Subpath imports

```ts
import type { SomeType } from '@scml/mod-sub-ui-angular-js/ModSubUiAngularJs';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./AppContainerManagerMethodsInterface` | Type declarations |
| `./ModSubUiAngularJs` | Type declarations |
| `./ModSubUiAngularJsBody` | Type declarations |
| `./ModSubUiAngularJsModeExportInterface` | Type declarations |
| `./AngularJs/appInit` | Type declarations |
| `./AngularJs/ExternalComponentManager` | Type declarations |
| `./AngularJs/ExternalComponentManagerInterface` | Type declarations |
| `./AngularJs/Componnet/EnableOrderComponent` | Type declarations |
| `./AngularJs/Componnet/OrderComponent` | Type declarations |
| `./AngularJs/Componnet/SimpleSelectComponent` | Type declarations |

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/ModSubUiAngularJs
- Default branch: master
- Build: `pnpm run download && pnpm run build`

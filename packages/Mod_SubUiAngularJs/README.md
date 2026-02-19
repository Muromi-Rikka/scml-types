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

Main entry augments these global properties: `diff3WayMerge` (exposes `ModSubUiAngularJs`; note: global name may vary).

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

## Types

### Main entry
- **`diff3WayMerge`** – AngularJS-based sub-UI manager (bootstrap/release, add/clean components).

### Subpaths
- **`./ModSubUiAngularJs`** / **`./ModSubUiAngularJsBody`** – Main sub-UI AngularJS module and body.
- **`./AppContainerManagerMethodsInterface`** – Bootstrap/release/addComponent/cleanComponent/registryComponent for `ModGuiConfig` and `ModInGameConfig`.
- **`./ModSubUiAngularJsModeExportInterface`** – Mode export interface.
- **`./AngularJs/appInit`** – **`NgAppContainer`** – Angular app container.
- **`./AngularJs/ExternalComponentManager`** – **`ExternalComponentManager`** – Registers and manages external components.
- **`./AngularJs/Componnet/*`** – Order, enable order, simple select components.

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/ModSubUiAngularJs
- Default branch: master
- Build: `pnpm run download && pnpm run build`

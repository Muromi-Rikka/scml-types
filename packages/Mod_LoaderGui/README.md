# @scml/mod-loader-gui

TypeScript type definitions for Mod Loader GUI.

## Installation

```bash
pnpm add -D @scml/mod-loader-gui
```

## Usage

### Main entry (global types)

```ts
/// <reference types="@scml/mod-loader-gui" />
```

Main entry augments these global properties: `modLoaderGui_LoadingProgress`, `modLoaderGui_PassageTracer`, `modLoaderGui`, `modLoaderGui_ModSubUiAngularJsService`.

### Subpath imports

```ts
import type { SomeType } from '@scml/mod-loader-gui/Gui';
```

## Exports

| Subpath | Description |
|--------|------|
| `.` | Main entry, augments Window/global |
| `./DebugExport` | Type declarations |
| `./Gui` | Type declarations |
| `./KeyFilter` | Type declarations |
| `./LoadingProgress` | Type declarations |
| `./ModLoadSwitch` | Type declarations |
| `./ModManagerSubUi` | Type declarations |
| `./ModSubUiAngularJsService` | Type declarations |
| `./ModSubUiAngularJsServiceInterface` | Type declarations |
| `./PassageTracer` | Type declarations |
| `./GUI_StringTable/CN` | Type declarations |
| `./GUI_StringTable/EN` | Type declarations |
| `./GUI_StringTable/StringTable` | Type declarations |
| `./GM_config_TS/gm_config` | Type declarations |
| `./GM_config_TS/Greasemonkey` | Type declarations |

## Types

### Main entry
- **`modLoaderGui_LoadingProgress`** – Loading progress UI component.
- **`modLoaderGui_PassageTracer`** – Tracks passage navigation.
- **`modLoaderGui`** – Main GUI controller (`Gui`).
- **`modLoaderGui_ModSubUiAngularJsService`** – AngularJS service for mod sub-UI.

### Subpaths
- **`./Gui`** – Main GUI class.
- **`./ModLoadSwitch`**, **`./ModManagerSubUi`** – Mod load switch and manager UI.
- **`./LoadingProgress`**, **`./PassageTracer`**, **`./KeyFilter`** – UI and tracing components.
- **`./DebugExport`** – Debug utilities.
- **`./ModSubUiAngularJsService`** – AngularJS service interface.
- **`./GUI_StringTable/*`** – i18n string tables (CN, EN, StringTable).
- **`./GM_config_TS/*`** – GM_config and Greasemonkey types.

## Type definition source

- Upstream: https://github.com/Lyoko-Jeremie/sugarcube-2-ModLoaderGui
- Default branch: master
- Build: `pnpm run download && pnpm run build`

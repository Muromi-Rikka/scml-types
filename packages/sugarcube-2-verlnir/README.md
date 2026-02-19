# @scml/sc2-verlnir

TypeScript type definitions for SugarCube 2 API (based on verlnir).

This package uses type declarations from `src/` directly in the repository. No `download` or `build` required.

## Installation

```bash
pnpm add -D @scml/sc2-verlnir
```

## Usage

### Main entry (global SugarCube types)

```ts
/// <reference types="@scml/sc2-verlnir" />
```

The main entry `./src/global.d.ts` declares SugarCube 2's global API.

## Types

### Global APIs (via `declare global`)
- **`Story`** – `StoryAPI` – Story and passage access.
- **`Config`** – `ConfigAPI` – Engine configuration.
- **`State`** – `StateAPI` – Game state, history, temporary variables.
- **`Passage`** – `PassageConstructor` – Current passage.
- **`Save`** – `SaveAPI` – Save/load.
- **`Dialog`** – `DialogAPI` – Dialog system.
- **`Engine`** – `EngineAPI` – Engine control.
- **`Macro`** – `MacroAPI` – Macro definitions.
- **`Scripting`** – `ScriptingAPI` – Script evaluation.
- **`Template`** – `TemplateAPI` – Template engine.
- **`UI`** / **`UIBar`** – `UIAPI` / `UIBarAPI` – UI components.
- **`Alert`**, **`Browser`**, **`Config`**, **`DebugBar`**, **`Fullscreen`**, **`Has`**, **`L10n`**, **`Links`**, **`LoadScreen`**, **`Setting`**, **`SimpleAudio`**, **`SimpleStore`**, **`Util`**, **`Visibility`**, **`Wikifier`** – Other SugarCube APIs.
- **`version`** – `VersionInfo`.
- **`session`**, **`storage`** – `SimpleStoreInstanceAPI | null`.
- **`settings`**, **`setup`** – `Record<string, unknown>`.
- **`idb`** – `IdbAPI`.
- **`window.SugarCube`** – Object containing all above APIs for detection and debugging.

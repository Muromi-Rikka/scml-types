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

The main entry `./src/global.d.ts` declares SugarCube 2's global API, including:

- `Story`, `Config`, `State`, `Passage`, `Save`, `Dialog`, and more
- `window.SugarCube` object
- Global variables such as `settings`, `setup`, `storage`, `session`

/*
	Global `SugarCube` object.  Allows scripts to detect if they're running in SugarCube by
	testing for the object (e.g. `"SugarCube" in window`) and contains exported identifiers
	for debugging purposes.
*/
import type { AlertAPI } from './alert.d.ts';
import type { BrowserAPI } from './browser.d.ts';
import type { ConfigAPI } from './config.d.ts';
import type { DebugBarAPI } from './debugbar.d.ts';
import type { DialogAPI } from './dialog.d.ts';
import type { EngineAPI } from './engine.d.ts';
import type { FullscreenAPI } from './fullscreen.d.ts';
import type { HasAPI } from './has.d.ts';
import type { IdbAPI } from './idb.d.ts';
import type { L10nAPI } from './l10n.d.ts';
import type { LinksAPI } from './links.d.ts';
import type { LoadScreenAPI } from './loadscreen.d.ts';
import type { MacroAPI } from './macro.d.ts';
import type { PassageAPI, PassageConstructor } from './passage.d.ts';
import type { SaveAPI } from './save.d.ts';
import type { ScriptingAPI } from './scripting.d.ts';
import type { SettingAPI } from './setting.d.ts';
import type { SimpleAudioAPI } from './simpleaudio.d.ts';
import type { SimpleStoreAPI, SimpleStoreInstanceAPI } from './simplestore.d.ts';
import type { StateAPI } from './state.d.ts';
import type { StoryAPI } from './story.d.ts';
import type { TemplateAPI } from './template.d.ts';
import type { UIBarAPI } from './uibar.d.ts';
import type { UIAPI } from './ui.d.ts';
import type { UtilAPI } from './util.d.ts';
import type { VersionInfo } from './version.d.ts';
import type { VisibilityAPI } from './visibility.d.ts';
import type { WikifierAPI } from './wikifier.d.ts';

declare global {
	const Alert: AlertAPI;
	const Browser: BrowserAPI;
	const Config: ConfigAPI;
	const DebugBar: DebugBarAPI;
	const Dialog: DialogAPI;
	const Engine: EngineAPI;
	const Fullscreen: FullscreenAPI;
	const Has: HasAPI;
	const L10n: L10nAPI;
	const Links: LinksAPI;
	const LoadScreen: LoadScreenAPI;
	const Macro: MacroAPI;
	const Passage: PassageConstructor;
	const Save: SaveAPI;
	const Scripting: ScriptingAPI;
	const Setting: SettingAPI;
	const SimpleAudio: SimpleAudioAPI;
	const SimpleStore: SimpleStoreAPI;
	const State: StateAPI;
	const Story: StoryAPI;
	const Template: TemplateAPI;
	const UIBar: UIBarAPI;
	const UI: UIAPI;
	const Util: UtilAPI;
	const Visibility: VisibilityAPI;
	const Wikifier: WikifierAPI;

	/* Version object. */
	const version: VersionInfo;
	/* Session storage manager object. */
	const session: SimpleStoreInstanceAPI | null;
	/* Settings object. */
	const settings: Record<string, unknown>;
	/* Setup object. */
	const setup: Record<string, unknown>;
	/* Persistant storage manager object. */
	const storage: SimpleStoreInstanceAPI | null;
	const idb: IdbAPI;

	/* Legacy aliases. */
	const browser: BrowserAPI;
	const config: ConfigAPI;
	const has: HasAPI;
	const History: StateAPI;
	const state: StateAPI;
	const tale: StoryAPI;
	const TempVariables: StateAPI['temporary'];

	interface Window {
		SugarCube: {
			Browser: BrowserAPI;
			Config: ConfigAPI;
			Dialog: DialogAPI;
			Engine: EngineAPI;
			Fullscreen: FullscreenAPI;
			Has: HasAPI;
			L10n: L10nAPI;
			Macro: MacroAPI;
			Passage: typeof Passage;
			Save: SaveAPI;
			Scripting: ScriptingAPI;
			Setting: SettingAPI;
			SimpleAudio: SimpleAudioAPI;
			State: StateAPI;
			Story: StoryAPI;
			UI: UIAPI;
			UIBar: UIBarAPI;
			DebugBar: DebugBarAPI;
			Util: UtilAPI;
			Visibility: VisibilityAPI;
			Wikifier: WikifierAPI;
			session: SimpleStoreInstanceAPI | null;
			settings: Record<string, unknown>;
			setup: Record<string, unknown>;
			storage: SimpleStoreInstanceAPI | null;
			version: VersionInfo;
		};
	}
}

export {};

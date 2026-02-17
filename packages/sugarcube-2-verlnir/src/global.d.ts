/*
	Global `SugarCube` object.  Allows scripts to detect if they're running in SugarCube by
	testing for the object (e.g. `"SugarCube" in window`) and contains exported identifiers
	for debugging purposes.
*/
import type { AlertAPI } from './alert';
import type { BrowserAPI } from './browser';
import type { ConfigAPI } from './config';
import type { DebugBarAPI } from './debugbar';
import type { DialogAPI } from './dialog';
import type { EngineAPI } from './engine';
import type { FullscreenAPI } from './fullscreen';
import type { HasAPI } from './has';
import type { IdbAPI } from './idb';
import type { L10nAPI } from './l10n';
import type { LinksAPI } from './links';
import type { LoadScreenAPI } from './loadscreen';
import type { MacroAPI } from './macro';
import type { PassageAPI, PassageConstructor } from './passage';
import type { SaveAPI } from './save';
import type { ScriptingAPI } from './scripting';
import type { SettingAPI } from './setting';
import type { SimpleAudioAPI } from './simpleaudio';
import type { SimpleStoreAPI, SimpleStoreInstanceAPI } from './simplestore';
import type { StateAPI } from './state';
import type { StoryAPI } from './story';
import type { TemplateAPI } from './template';
import type { UIBarAPI } from './uibar';
import type { UIAPI } from './ui';
import type { UtilAPI } from './util';
import type { VersionInfo } from './version';
import type { VisibilityAPI } from './visibility';
import type { WikifierAPI } from './wikifier';

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

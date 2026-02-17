/*
	Object Exports.
	General settings.
	Audio settings.
	State history settings.
	Macros settings.
	Navigation settings.
	Passages settings.
	Saves settings.
	UI settings.
*/
export interface ConfigHistoryAPI {
	controls: boolean;
	maxStates: number;
	maxSessionStates: number;
	maxExpired: number;
}

export interface ConfigAudioAPI {
	pauseOnFadeToZero: boolean;
	preloadMetadata: boolean;
}

export interface ConfigMacrosAPI {
	ifAssignmentError: boolean;
	maxLoopIterations: number;
	typeSkipKey: string;
	typeVisitedPassages: boolean;
}

export interface ConfigNavigationAPI {
	override: ((...args: unknown[]) => unknown) | null | undefined;
	gotohell: unknown;
	rememberYPos: unknown;
}

export interface ConfigPassagesAPI {
	descriptions: boolean | Record<string, string> | ((this: null) => string | undefined) | null | undefined;
	displayTitles: boolean;
	nobr: boolean;
	onProcess: ((opts: { title: string; tags: string[]; text: string }) => string) | null | undefined;
	start: string | null | undefined;
	transitionOut: string | number | null | undefined;
}

export interface ConfigSavesAPI {
	autoload: boolean | string | ((...args: unknown[]) => unknown) | null | undefined;
	autosave: boolean | string[] | ((...args: unknown[]) => unknown) | null | undefined;
	id: string;
	isAllowed: ((...args: unknown[]) => unknown) | null | undefined;
	slots: number;
	tryDiskOnMobile: boolean;
	version: unknown;
	useLZString: number;
}

export interface ConfigUIAPI {
	stowBarInitially: boolean | number;
	updateStoryElements: boolean;
}

export interface ConfigAPI {
	debug: boolean;
	addVisitedLinkClass: boolean;
	cleanupWikifierOutput: boolean;
	loadDelay: number;
	audio: ConfigAudioAPI;
	history: ConfigHistoryAPI;
	macros: ConfigMacrosAPI;
	navigation: ConfigNavigationAPI;
	passages: ConfigPassagesAPI;
	saves: ConfigSavesAPI;
	ui: ConfigUIAPI;
}

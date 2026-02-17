export interface SimpleAudioTracksAPI {
	add(name: string, definition: unknown): void;
	delete(name: string): void;
	clear(): void;
	has(name: string): boolean;
	get(name: string): unknown;
}

export interface SimpleAudioGroupsAPI {
	add(name: string, definition: unknown): void;
	delete(name: string): void;
	clear(): void;
	has(name: string): boolean;
	get(name: string): unknown;
}

export interface SimpleAudioListsAPI {
	add(name: string, definition: unknown): void;
	delete(name: string): void;
	clear(): void;
	has(name: string): boolean;
	get(name: string): unknown;
}

export interface SimpleAudioAPI {
	tracks: SimpleAudioTracksAPI;
	groups: SimpleAudioGroupsAPI;
	lists: SimpleAudioListsAPI;
	select: unknown;
	load(...args: unknown[]): void;
	loadWithScreen(...args: unknown[]): void;
	mute(flag?: boolean): void;
	muteOnHidden(flag?: boolean): void;
	rate(value?: number): number;
	stop(): void;
	unload(): void;
	volume(value?: number): number;
}

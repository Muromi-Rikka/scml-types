/*
	Module Exports.
	Enumerations.
	Settings Functions.
	Definitions Functions.
*/
export interface SettingTypesAPI {
	[key: string]: unknown;
}

export interface SettingAPI {
	readonly Types: SettingTypesAPI;
	init(): void;
	create(): void;
	save(): void;
	load(): void;
	clear(): void;
	reset(): void;
	forEach(callback: (...args: unknown[]) => void): void;
	add(name: string, definition: unknown): void;
	addHeader(name: string, definition: unknown): void;
	addToggle(name: string, definition: unknown): void;
	addList(name: string, definition: unknown): void;
	addRange(name: string, definition: unknown): void;
	isEmpty(): boolean;
	has(name: string): boolean;
	get(name: string): unknown;
	delete(name: string): void;
}

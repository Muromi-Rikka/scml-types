/*
	Module Exports.
	Save Functions.
	Autosave Functions.
	Slots Functions.
	Disk Import/Export Functions.
	Serialization Functions.
	Event Functions.
*/
export interface SaveOnLoadAPI {
	add(handler: (...args: unknown[]) => unknown): void;
	clear(): void;
	delete(handler: (...args: unknown[]) => unknown): void;
	readonly size: number;
	readonly handlers: readonly ((...args: unknown[]) => unknown)[];
}

export interface SaveOnSaveAPI {
	add(handler: (...args: unknown[]) => unknown): void;
	clear(): void;
	delete(handler: (...args: unknown[]) => unknown): void;
	readonly size: number;
	readonly handlers: readonly ((...args: unknown[]) => unknown)[];
}

export interface SaveAutosaveAPI {
	ok(): boolean;
	has(): boolean;
	get(): unknown;
	load(): void;
	save(): void;
	delete(): void;
}

export interface SaveSlotsAPI {
	ok(): boolean;
	readonly length: number;
	isEmpty(): boolean;
	count(): number;
	has(slot: number): boolean;
	get(slot: number): unknown;
	load(slot: number): void;
	save(slot: number, title?: string): void;
	delete(slot: number): void;
}

export interface SaveAPI {
	init(): void;
	get(): { autosave: unknown; slots: unknown[] };
	clear(): void;
	ok(): boolean;
	autosave: SaveAutosaveAPI;
	slots: SaveSlotsAPI;
	export(): void;
	import(): void;
	serialize(): string;
	deserialize(data: string): unknown;
	onLoad: SaveOnLoadAPI;
	onSave: SaveOnSaveAPI;
	readonly meta: unknown;
}

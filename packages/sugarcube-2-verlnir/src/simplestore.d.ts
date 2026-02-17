/*
	Adapters List.
	Core Functions.
*/
export interface SimpleStoreInstanceAPI {
	readonly name: string;
	readonly id: string;
	readonly persistent: boolean;
	size(): number;
	keys(): string[];
	has(key: string): boolean;
	get(key: string): unknown;
	set(key: string, value: unknown): void;
	delete(key: string): void;
}

export interface SimpleStoreAPI {
	readonly adapters: unknown[];
	create(storageId: string, persistent: boolean): SimpleStoreInstanceAPI;
}

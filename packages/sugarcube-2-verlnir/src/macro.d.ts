/*
	Module Exports.
	Macro Functions.
	Hook API
	Tags Functions.
	Legacy Aliases.
*/
export interface MacroTagsAPI {
	register(name: string, handler: (...args: unknown[]) => unknown): void;
	unregister(name: string): void;
	has(name: string): boolean;
	get(name: string): (...args: unknown[]) => unknown;
}

export interface MacroHooksAPI {
	on(event: string, handler: (...args: unknown[]) => void): void;
	off(event: string, handler?: (...args: unknown[]) => void): void;
	emit(event: string, ...args: unknown[]): void;
}

export interface MacroAPI {
	add(name: string, definition: unknown): void;
	delete(name: string): void;
	isEmpty(): boolean;
	has(name: string): boolean;
	get(name: string): unknown;
	init(): void;
	hooks: MacroHooksAPI;
	tags: MacroTagsAPI;
	evalStatements(...args: unknown[]): unknown;
}

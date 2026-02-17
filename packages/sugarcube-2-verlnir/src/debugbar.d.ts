/*
	Module Exports.
	Debug Bar Functions.
	Watch Functions.
*/
export interface DebugBarWatchAPI {
	add(name: string, getValue: () => unknown): void;
	all(): void;
	clear(): void;
	delete(name: string): void;
	disable(name: string): void;
	enable(name: string): void;
	isEnabled(name: string): boolean;
	toggle(name: string): void;
}

export interface DebugBarAPI {
	init(): void;
	isStowed(): boolean;
	start(): void;
	stow(): void;
	toggle(): void;
	unstow(): void;
	watch: DebugBarWatchAPI;
}

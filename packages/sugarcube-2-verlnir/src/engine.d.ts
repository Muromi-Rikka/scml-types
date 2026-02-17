/*
	Module Exports.
	Constants.
	Core Functions.
	Legacy Functions.
*/
/* Engine state types object (pseudo-enumeration). */
export interface EngineStatesAPI {
	Idle: string;
	Playing: string;
	Rendering: string;
}

export interface EngineAPI {
	/* Constants. */
	readonly States: EngineStatesAPI;
	/* Minimum delay for DOM actions (in milliseconds). */
	readonly minDomActionDelay: number;
	init(): void;
	start(): void;
	restart(): void;
	readonly state: string;
	isIdle(): boolean;
	isPlaying(): boolean;
	isRendering(): boolean;
	readonly lastPlay: number | null;
	goTo(index: number): void;
	go(delta: number): void;
	backward(): void;
	forward(): void;
	show(passage: string, ...args: unknown[]): void;
	play(passage?: string, ...args: unknown[]): void;
	/* Legacy Functions. */
	display(passage?: string, ...args: unknown[]): void;
	flags: Record<string, unknown>;
}

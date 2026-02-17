/*
	State Functions.
	Moment Functions.
	History Functions.
	PRNG Functions.
	Temporary Variables Functions.
	Local variables.
	Variable Chain Parsing Functions.
	Story Metadata Functions.
	qc stuff
	Legacy Aliases.
*/
export interface StateMoment {
	readonly title: string;
	readonly variables: Record<string, unknown>;
}

export interface StateMetadataAPI {
	clear(): void;
	delete(key: string): boolean;
	entries(): Iterable<[string, unknown]>;
	get(key: string): unknown;
	has(key: string): boolean;
	keys(): Iterable<string>;
	set(key: string, value: unknown): void;
	readonly size: number;
}

export interface StatePRNGAPI {
	init(seed: string | number): void;
	isEnabled(): boolean;
	pull: number;
	readonly seed: string | number;
	str2int(str: string): number;
	test(seed: string | number): boolean;
	peek(): number;
}

export interface StateAPI {
	/* State Functions. */
	reset(): void;
	restore(soft?: boolean): boolean;
	marshalForSave(): unknown;
	unmarshalForSave(stateObj: unknown): void;
	readonly expired: string[];
	readonly turns: number;
	readonly passages: string[];
	hasPlayed(passage: string): boolean;
	getSessionState(): unknown;
	setSessionState(state: unknown): void;

	/* Moment Functions. */
	readonly active: StateMoment;
	readonly activeIndex: number;
	/** shortcut for `State.active.title` */
	readonly passage: string;
	/** shortcut for `State.active.variables` */
	readonly variables: Record<string, unknown>;

	/* History Functions. */
	readonly history: StateMoment[];
	readonly length: number;
	readonly size: number;
	isEmpty(): boolean;
	readonly current: StateMoment | undefined;
	readonly top: StateMoment | undefined;
	readonly bottom: StateMoment | undefined;
	index(offset?: number): number;
	peek(offset?: number): StateMoment | undefined;
	has(offset: number): boolean;
	create(): StateMoment;
	goTo(index: number): void;
	go(delta: number): void;
	deltaEncode(moments: StateMoment[]): unknown;
	deltaDecode(data: unknown): StateMoment[];

	/* PRNG Functions. */
	readonly prng: StatePRNGAPI;
	random(): number;

	/* Temporary Variables Functions. */
	clearTemporary(): void;
	readonly temporary: Record<string, unknown>;

	/* Local variables. */
	pushLocal(): void;
	popLocal(): Record<string, unknown> | undefined;
	peekLocal(): Record<string, unknown> | undefined;
	readonly local: Record<string, unknown>;
	clearLocal(): void;

	/* Variable Chain Parsing Functions. */
	getVar(path: string): unknown;
	setVar(path: string, value: unknown): void;

	/* Story Metadata Functions. */
	readonly metadata: StateMetadataAPI;

	/* qc stuff */
	readonly qc: unknown;
	qcadd(fn: (...args: unknown[]) => void): void;

	/* Legacy Aliases. */
	initPRNG(seed: string | number): void;
	restart(): void;
	backward(): void;
	forward(): void;
	display(...args: unknown[]): void;
	show(...args: unknown[]): void;
	play(...args: unknown[]): void;
}

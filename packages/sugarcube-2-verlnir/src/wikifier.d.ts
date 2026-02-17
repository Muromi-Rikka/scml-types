export interface WikifierParserProfileAPI {
	readonly profiles: unknown;
	compile(name: string, compiler: (...args: unknown[]) => string): void;
	isEmpty(): boolean;
	has(name: string): boolean;
	get(name: string): unknown;
}

export interface WikifierParserAPI {
	readonly parsers: unknown[];
	add(parser: { name: string; [key: string]: unknown }): void;
	delete(name: string): void;
	isEmpty(): boolean;
	has(name: string): boolean;
	get(name: string): unknown;
	readonly Profile: WikifierParserProfileAPI;
}

export interface WikifierHelpersAPI {
	inlineCss?: (w: { nextMatch: number; [key: string]: unknown }) => void;
	[key: string]: unknown;
}

export interface WikifierStaticAPI {
	Parser: WikifierParserAPI;
	helpers: WikifierHelpersAPI;
	stopWikify: boolean;
	getValue: (path: string) => unknown;
	setValue: (path: string, value: unknown) => void;
	parse: (script: string) => unknown;
	evalExpression: (script: string) => unknown;
	evalStatements: (script: string) => unknown;
	textPrimitives: unknown;
}

export interface WikifierConstructor {
	new (context: DocumentFragment | Element, text: string, options?: unknown): unknown;
}

export type WikifierAPI = WikifierConstructor & WikifierStaticAPI;

export interface UtilAPI {
	getType(value: unknown): string;
	isBoolean(value: unknown): boolean;
	isIterable(value: unknown): boolean;
	isNumeric(value: unknown): boolean;
	sameValueZero(x: unknown, y: unknown): boolean;
	toEnum<T extends Record<string, string>>(obj: T): T;
	toStringTag(value: unknown): string;
	slugify(str: string): string;
	sanitizeFilename(str: string): string;
	escapeMarkup(str: string): string;
	escape(str: string): string;
	unescape(str: string): string;
	charAndPosAt(str: string, index: number): { char: string; start: number; end: number };
	now(): number;
	fromCssTime(value: string): number;
	toCssTime(value: number): string;
	fromCssProperty(value: string): unknown;
	parseUrl(url: string): { href: string; [key: string]: unknown };
	newExceptionFrom(ex: unknown): Error;
	scrubEventKey(key: string): string;
	hasMediaQuery(query: string): boolean;
	random(): number;
	entityEncode(str: string): string;
	entityDecode(str: string): string;
	evalExpression(script: string): unknown;
	evalStatements(script: string): unknown;
}

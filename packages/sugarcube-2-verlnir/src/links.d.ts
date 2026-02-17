export interface LinksAPI {
	init(): void;
	generate(): void;
	generateLinkNumbers(): void;
	pushTheButton(): void;
	numberPrepend: string;
	numberAppend: string;
	skipElements: unknown;
	includeElements: unknown;
	enabled: boolean;
	disableRNGReload: boolean;
	disableNumbers: boolean;
	throttle: number;
	readonly currentLinks: unknown;
}

/*
	Passage Class.
	Passage title/ID.
	Passage data element (within the story data element; i.e. T1: '[tiddler]', T2: 'tw-passagedata').
	Passage tags array (unique).
*/
export interface PassageAPI {
	readonly title: string;
	readonly element: Element | null;
	readonly tags: readonly string[];
	readonly domId: string;
	readonly classes: readonly string[];
	readonly className: string;
	readonly text: string;
	description(): string;
	processText(): string;
	render(options?: unknown): DocumentFragment;
}

/** Constructor type for Passage (static methods live here). */
export interface PassageConstructor {
	new (title: string, el?: Element | null): PassageAPI;
	getExcerptFromNode(node: Node, count?: number): string;
	getExcerptFromText(text: string, count?: number): string;
}

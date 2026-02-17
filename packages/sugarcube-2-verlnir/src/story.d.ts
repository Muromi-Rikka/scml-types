/*
	Module Exports.
	Story Functions.
	Passage Functions.
*/
import type { PassageAPI } from './passage';

export interface StoryAPI {
	load(): void;
	init(): void;
	readonly title: string;
	readonly domId: string;
	readonly ifId: string;
	add(passage: PassageAPI): void;
	has(title: string): boolean;
	get(title: string): PassageAPI;
	getAllInit(): readonly PassageAPI[];
	getAllRegular(): readonly PassageAPI[];
	getAllScript(): readonly string[];
	getAllStylesheet(): readonly string[];
	getAllWidget(): readonly string[];
	lookup(tags: string | string[]): PassageAPI[];
	lookupWith(predicate: (p: PassageAPI) => boolean): PassageAPI[];
}

/*
 * "simple" indexedDB backend for storing save data, working similarly to existing webStorage system
 * indexedDB works faster, has virtually unlimited storage, but does not work properly in private mode. then again, localStorage doesn't persist in private mode either
 * indexedDB operates asynchronously, by making requests that may be fulfilled or rejected later, without blocking the rest of the code, but also without a guarantee that requested values will be available when that rest of the code runs. this requires some working around.
 * unlike old synchronous operations, most functions do not return the value immediately, but a promise to return it when it's completed. these promises can then be used to retrieve that data by calling Promise.then() callback function
 * for example, `idb.getItem(0).then((value) => console.log(value))` will first attempt to retrieve save data from slot 0, and then when that is done - the then() function triggers, in this case printing retrieved value to the console
 *
 * this implementation doesn't rely on caches, doesn't compress save data in any way, and separates save details store from save data store to speed up building the save list and allow extra features like timestamp highlighting at minimal processing cost
 * as a consequence, it requires more disk space, and a completely separate namespace that might need extra setup for games that override the default save list appearance
 * generally though, just adding a "saveList" id or class to the div element where the saves should appear and replacing the function/macro that populates that div with "if (idb.active) idb.saveList(); else old-custom-way-of-building-save-menu" should be enough to make it work.
 */
export interface IdbAPI {
	dbName: string;
	lock: boolean;
	active: boolean;
	listLength: number;
	listPage: number;
	footerHTML: string | false;
	readonly baddies: unknown;
	init(dbName?: string): Promise<unknown>;
	getSaveDetails(): Promise<unknown>;
	getAllSaves(): Promise<unknown>;
	saveList(): void;
	saveState(): Promise<unknown>;
	loadState(): Promise<unknown>;
	setItem(slot: number, value: unknown): Promise<void>;
	getItem(slot: number): Promise<unknown>;
	deleteItem(slot: number): Promise<void>;
	clearAll(): Promise<void>;
	updateSettings(): void;
	funNuke(): void;
	ekuNnuf(): void;
	importFromLocalStorage(): Promise<void>;
}

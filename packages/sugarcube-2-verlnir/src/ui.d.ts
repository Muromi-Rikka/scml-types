/*
	UI Functions, Core.
	UI Functions, Built-ins.
	Legacy Aliases.
*/
import type { DialogAPI } from './dialog';

export interface UIAPI {
	assembleLinkList(passage?: string): unknown;
	alert(title: string, message: string): void;
	jumpto(): void;
	restart(): void;
	saves(): void;
	settings(): void;
	share(): void;
	buildAutoload(): unknown;
	buildJumpto(): unknown;
	buildRestart(): unknown;
	buildSaves(): unknown;
	buildSettings(): unknown;
	buildShare(): unknown;
	stow(): void;
	unstow(): void;
	setStoryElements(): void;
	isOpen(...args: Parameters<DialogAPI['isOpen']>): boolean;
	body(): ReturnType<DialogAPI['body']>;
	setup(...args: Parameters<DialogAPI['setup']>): ReturnType<DialogAPI['setup']>;
	addClickHandler(...args: unknown[]): unknown;
	open(...args: Parameters<DialogAPI['open']>): DialogAPI;
	close(...args: Parameters<DialogAPI['close']>): DialogAPI;
	resize(): void;
	buildDialogAutoload(): unknown;
	buildDialogJumpto(): unknown;
	buildDialogRestart(): unknown;
	buildDialogSaves(): unknown;
	buildDialogSettings(): unknown;
	buildDialogShare(): unknown;
	buildLinkListFromPassage(passage?: string): unknown;
}

/*
	UI Bar Functions.
	Object Exports.
	Legacy Functions.
*/
export interface UIBarAPI {
	destroy(): void;
	hide(): UIBarAPI;
	init(): void;
	isHidden(): boolean;
	isStowed(): boolean;
	show(): UIBarAPI;
	start(): void;
	stow(): void;
	unstow(): void;
	update(): void;
	setStoryElements(): void;
}

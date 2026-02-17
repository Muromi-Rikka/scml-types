export interface DialogAPI {
	append(...args: unknown[]): DialogAPI;
	body(): HTMLElement | undefined;
	close(ev?: unknown): DialogAPI;
	create(title?: string, classNames?: string): DialogAPI;
	empty(): DialogAPI;
	init(): void;
	isOpen(classNames?: string): boolean;
	open(options?: { top?: number }, onClose?: () => void): DialogAPI;
	resize(options?: { top?: number }): void;
	wiki(...args: unknown[]): DialogAPI;
	wikiPassage(name: string): DialogAPI;
	/** Deprecated Functions. */
	setup(title?: string, classNames?: string): HTMLElement | undefined;
}

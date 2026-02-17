export interface FullscreenAPI {
	readonly vendor: unknown;
	readonly element: Element | null;
	isEnabled(): boolean;
	isFullscreen(): boolean;
	request(): Promise<void>;
	exit(): Promise<void>;
	toggle(): Promise<void>;
	onChange(handler: () => void): void;
	offChange(handler: () => void): void;
	onError(handler: (err: unknown) => void): void;
	offError(handler: (err: unknown) => void): void;
}

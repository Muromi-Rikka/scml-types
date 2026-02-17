export interface BrowserAPI {
	readonly userAgent: string;
	readonly isMobile: boolean;
	readonly isGecko: boolean;
	readonly isIE: boolean;
	readonly ieVersion: number | null;
	readonly isOpera: boolean;
	readonly operaVersion: number | null;
	readonly isVivaldi: boolean;
}

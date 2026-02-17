/* Module Exports. */
export interface HasAPI {
	readonly audio: boolean;
	readonly fileAPI: boolean;
	readonly geolocation: boolean;
	readonly mutationObserver: boolean;
	readonly performance: boolean;
	readonly touch: boolean;
	readonly transitionEndEvent: string;
}

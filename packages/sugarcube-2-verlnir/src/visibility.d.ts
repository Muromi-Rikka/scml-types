export interface VisibilityAPI {
	readonly vendor: unknown;
	readonly state: string;
	isEnabled(): boolean;
	isHidden(): boolean;
	readonly hiddenProperty: string | undefined;
	readonly stateProperty: string | undefined;
	readonly changeEvent: string | undefined;
}

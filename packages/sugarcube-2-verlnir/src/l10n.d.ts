export interface L10nAPI {
	init(): void;
	get(id: string, context?: Record<string, unknown>): string;
}

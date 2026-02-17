export interface TemplateAPI {
	add(name: string, template: string | ((...args: unknown[]) => string)): void;
	delete(name: string): void;
	get(name: string): ((...args: unknown[]) => string) | undefined;
	has(name: string): boolean;
	readonly size: number;
}

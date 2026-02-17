export interface AlertAPI {
	error(title: string | null, message: string, ex?: unknown): void;
	fatal(title: string | null, message: string, ex?: unknown): never;
}

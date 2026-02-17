/*
	Version object.
*/
export interface VersionInfo {
	readonly title: string;
	readonly major: string;
	readonly minor: string;
	readonly patch: string;
	readonly prerelease: string;
	readonly build: string;
	readonly date: Date;
	readonly extensions: Record<string, unknown>;
	toString(): string;
	short(): string;
	long(): string;
}

export interface LoadScreenAPI {
	init(): void;
	clear(): void;
	hide(): void;
	show(): void;
	lock(): number;
	unlock(lockId: number): void;
}

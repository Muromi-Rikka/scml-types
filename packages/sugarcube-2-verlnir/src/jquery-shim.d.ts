declare interface JQuery {
	append(...args: unknown[]): JQuery;
	empty(): JQuery;
	get(index: number): Element | undefined;
	hasClass(className: string): boolean;
	removeClass(): JQuery;
	addClass(classNames: string): JQuery;
	trigger(eventType: string): JQuery;
	off(events?: string): JQuery;
	on(events: string, handler: (ev: JQuery.TriggeredEvent) => void): JQuery;
	one(events: string, selector: string, handler: (ev: JQuery.TriggeredEvent) => void): JQuery;
	css(propertyName: string): string;
	css(properties: Record<string, string | number>): JQuery;
	attr(attributeName: string): string | undefined;
	attr(attributeName: string, value: string | number | null): JQuery;
	removeAttr(name: string): JQuery;
	find(selector: string): JQuery;
	hide(): JQuery;
	show(): JQuery;
	wiki(...args: unknown[]): JQuery;
	[key: string]: unknown;
}

declare namespace JQuery {
	interface TriggeredEvent {
		target: EventTarget;
		[key: string]: unknown;
	}
}

declare interface JQueryStatic {
	(selector: string | Element | DocumentFragment): JQuery;
	(event: { type: string }): JQuery;
}

declare var jQuery: JQueryStatic;
declare var $: JQueryStatic;

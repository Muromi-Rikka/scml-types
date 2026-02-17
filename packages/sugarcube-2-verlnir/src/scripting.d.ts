export interface ScriptingAPI {
	parse(script: string): unknown;
	evalJavaScript(script: string): unknown;
	evalTwineScript(script: string): unknown;
}

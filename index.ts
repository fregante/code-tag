// Prettier supports these languages:
// https://github.com/prettier/prettier/blob/e46aba0ab279c764dc26e0f41f15c55122440c51/src/language-js/embed.js#L13

/**
Enable highlighting/prettifying when used as html`<div>` or css`.a {}`
https://prettier.io/docs/en/options.html#embedded-language-formatting
*/
function concatenateTemplateLiteralTag(
	strings: TemplateStringsArray,
	...keys: string[]
): string {
	return strings
		.map((string, i) => string + (i < keys.length ? keys[i]! : ''))
		.join('');
}

/**
Enable highlighting/prettifying when used as html`<div>` or css`.a {}`
https://prettier.io/docs/en/options.html#embedded-language-formatting
*/
export const any = concatenateTemplateLiteralTag;

/**
Enable highlighting/prettifying when used as html`<div>` or css`.a {}`
https://prettier.io/docs/en/options.html#embedded-language-formatting
*/
export const html = concatenateTemplateLiteralTag;

/**
Enable highlighting/prettifying when used as html`<div>` or css`.a {}`
https://prettier.io/docs/en/options.html#embedded-language-formatting
*/
export const css = concatenateTemplateLiteralTag;

/**
Enable highlighting/prettifying when used as html`<div>` or css`.a {}`
https://prettier.io/docs/en/options.html#embedded-language-formatting
*/
export const gql = concatenateTemplateLiteralTag;

/**
Enable highlighting/prettifying when used as html`<div>` or css`.a {}`
https://prettier.io/docs/en/options.html#embedded-language-formatting
*/
export const graphql = concatenateTemplateLiteralTag;

/**
Enable highlighting/prettifying when used as html`<div>` or css`.a {}`
https://prettier.io/docs/en/options.html#embedded-language-formatting
*/
export const md = concatenateTemplateLiteralTag;

/**
Enable highlighting/prettifying when used as html`<div>` or css`.a {}`
https://prettier.io/docs/en/options.html#embedded-language-formatting
*/
export const markdown = concatenateTemplateLiteralTag;

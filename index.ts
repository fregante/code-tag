// Prettier supports these languages:
// https://github.com/prettier/prettier/blob/e46aba0ab279c764dc26e0f41f15c55122440c51/src/language-js/embed.js#L13

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
const any = concatenateTemplateLiteralTag;

export {
	any,
	any as html,
	any as css,
	any as gql,
	any as graphql,
	any as md,
	any as markdown,
};

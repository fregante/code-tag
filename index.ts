// Prettier supports these languages:
// https://github.com/prettier/prettier/blob/e46aba0ab279c764dc26e0f41f15c55122440c51/src/language-js/embed.js#L13

const concatenateTemplateLiteralTag = (
	raw: TemplateStringsArray,
	...keys: string[]
): string => String.raw({raw}, ...keys);

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
	any as sql,
};

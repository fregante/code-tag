# code-tag [![npm version](https://img.shields.io/npm/v/code-tag.svg)](https://www.npmjs.com/package/code-tag)

> noop functions to help formatters and syntax highlighters recognize embedded code

When embedding other languages in JavaScript, you can mark those strings with a [tag function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) to help JavaScript tools recognize the string as code:

```js
document.body.innerHTML = html`
	<p>This is inline HTML</p>
	<!-- Including comments -->
	<style>.and {css: 'too'}</style>
`;
```

You can find such tag functions in:

- **code-tag**: this package, it returns the string as is
- [lit-html](https://lit.dev/docs/templates/overview/): it helps write Web Components
- [Apollo](https://www.apollographql.com/docs/resources/graphql-glossary/#gql-function): it parses GraphQL strings
- [Emotion](https://emotion.sh/docs/@emotion/css): it defines CSS-in-JS
- etc…

Here are some tools that support them natively:

- [Prettier](https://prettier.io/docs/en/options.html#embedded-language-formatting): it formats the strings as real non-JavaScript code
- GitHub: it highlights the syntax in the strings as code (as seen in the example above)

## Install

```sh
npm install code-tag
```

## Usage

```js
import {html, css, gql, md, sql} from 'code-tag';
// Or:
// const {html, css, gql, md, sql} = require('code-tag');

document.body.innerHTML = html`
	<p>This is HTML in JS</p>
`;

document.querySelector('style').textContent = css`
	.this.is {
		css: 'in JS';
	}
`;

await githubQuery(gql`
	query {
		repository(owner: "fregante", name: "template-tags") {
			nameWithOwner
		}
	}
`);

yourMarkdownConverter(md`
	# Markdown

	Is _highlighted_ [as well](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
`);

await sqlQuery(sql`select * from users`);
```

There's also an `any` export that you can rename as you please:

```js
import {any as mdx} from 'code-tag';

mdx`
	Some other <New>Language</New>
`;
```

## License

MIT © [Federico Brigante](https://fregante.com)

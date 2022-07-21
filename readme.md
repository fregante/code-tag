# code-tags [![npm version](https://img.shields.io/npm/v/code-tags.svg)](https://www.npmjs.com/package/code-tags)

> noop functions to help formatters and syntax highlighters recognize embedded code

By marking your embedded code with one of these functions, Prettier and syntax highlighters will recognize a string as a piece of code to format or highlight. You can see that GitHub also correctly highlights HTML within javascript as long as it uses the tag

```js
document.body.innerHTML = html`
	<!-- Uses the tag        👆 -->
	<p>Highlighted HTML in JS 🙂</p>
	<style>
		.and {
			css: 'too';
		}
	</style>
`;

document.body.innerHTML = `
	<!-- No tag             👆 -->
	<p>Just HTML in JS 😕</p>
	<style>.and {raw: 'css'}</style>
`;
```

## Install

```sh
npm install code-tags
```

## Usage

```js
import {html, css, gql, md} from 'code-tags';

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
```

There's also an `any` export that you can rename as you please:

```js
import {any as mdx} from 'code-tags';

mdx`
	Some other <New>Language</New>
`;
```

## License

MIT © [Federico Brigante](https://fregante.com)

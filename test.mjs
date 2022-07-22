import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {describe, it} from 'node:test';

// The tests specifically import the built files to ensure that they're generated correctly
import * as esm from './dist/index.mjs';

const require = createRequire(import.meta.url);
const cjs = require('./dist/index.js');

testContext(cjs, 'cjs');
testContext(esm, 'esm');

function testContext({any, html, css, gql, md}, name) {
	describe(name + ' imports', () => {
		it('exports', () => {
			assert.equal(any, html);
			assert.equal(any, css);
			assert.equal(any, gql);
			assert.equal(any, md);
		});

		it('code-tags', () => {
			assert.equal(any`a`, 'a');
			assert.equal(any` a `, ' a ', 'Preserve boundary whitespace');
			assert.equal(any`a${'b'}c${1}`, 'abc1', 'Interpolate with strings and numbers');
			assert.equal(any`\\\na${'\\\na'}`, '\\\na\\\na', 'Preserve escape sequences');
			assert.equal(any`🇪🇺 ${'🇺🇳'}`, '🇪🇺 🇺🇳', 'Preserve combined emojis');
		});

		it('stringifiable objects', () => {
			const stringifiableObject = new Date();
			const stringifiedObject = String(stringifiableObject);

			assert.equal(any`${stringifiableObject}`, stringifiedObject, 'Interpolate objects with toString');
		});
	});
}

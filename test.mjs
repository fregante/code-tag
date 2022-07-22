import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {describe, it} from 'node:test';

// The tests specifically expect the built versions to ensure that they're create correctly
import * as esm from './dist/index.mjs';

const require = createRequire(import.meta.url);
const cjs = require('./dist/index.js');

testContext(cjs, 'cjs');
testContext(esm, 'esm');

function testContext({any, html, css, gql, md}, name) {
	describe(name + ' imports', () => {
		it('base string', () => {
			assert.equal(any`a`, 'a');
			assert.equal(html`a`, 'a');
			assert.equal(css`a`, 'a');
			assert.equal(gql`a`, 'a');
			assert.equal(md`a`, 'a');
		});

		it('template with interpolation', () => {
			assert.equal(any`a${'b'}c${1}`, 'abc1');
			assert.equal(html`a${'b'}c${1}`, 'abc1');
			assert.equal(css`a${'b'}c${1}`, 'abc1');
			assert.equal(gql`a${'b'}c${1}`, 'abc1');
			assert.equal(md`a${'b'}c${1}`, 'abc1');
		});

		it('strings with escapes', () => {
			assert.equal(any`\\\na${'\\\na'}`, '\\\na\\\na');
			assert.equal(html`\\\na${'\\\na'}`, '\\\na\\\na');
			assert.equal(css`\\\na${'\\\na'}`, '\\\na\\\na');
			assert.equal(gql`\\\na${'\\\na'}`, '\\\na\\\na');
			assert.equal(md`\\\na${'\\\na'}`, '\\\na\\\na');
		});

		it('stringifiable objects', () => {
			const stringifiableObject = new Date();
			const objectAsString = String(stringifiableObject);

			assert.equal(any`${stringifiableObject}`, objectAsString);
			assert.equal(html`${stringifiableObject}`, objectAsString);
			assert.equal(css`${stringifiableObject}`, objectAsString);
			assert.equal(gql`${stringifiableObject}`, objectAsString);
			assert.equal(md`${stringifiableObject}`, objectAsString);
		});
	});
}

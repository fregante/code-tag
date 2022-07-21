import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {describe, it} from 'node:test';

import esmDefaultExport, * as esm from './dist/index.mjs';

const require = createRequire(import.meta.url);
const cjs = require('./dist/index.js');
const {destructuredgFromRequire} = require('./dist/index.js'); 

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
			assert.equal(destructuredgFromRequire, cjs);
			assert.equal(cjs.anything, cjs);
			assert.equal(esmDefaultExport, any);
			assert.equal(esmDefaultExport.anything, any);
		});

		it('template with interpolation', () => {
			assert.equal(any`a${'b'}c${1}`, 'abc1');
			assert.equal(html`a${'b'}c${1}`, 'abc1');
			assert.equal(css`a${'b'}c${1}`, 'abc1');
			assert.equal(gql`a${'b'}c${1}`, 'abc1');
			assert.equal(md`a${'b'}c${1}`, 'abc1');
		});
	});
}

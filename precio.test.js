import test from 'node:test';
import assert from 'node:assert/strict';
import { total } from './precio.js';

test('2 plazas de 5 euros cuestan 10', () => {
  assert.equal(total(2, 5), 10);
});
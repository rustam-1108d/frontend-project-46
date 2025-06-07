import { fileURLToPath } from 'url';
import path from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test('gendiff flat json files (stylish format)', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const expected = readFixture('expected-stylish.txt').trim();

  const result = genDiff(file1, file2);
  expect(result).toBe(expected);
});

test('gendiff flat yaml files (stylish format)', () => {
  const file1 = getFixturePath('file1.yml');
  const file2 = getFixturePath('file2.yml');
  const expected = readFixture('expected-stylish.txt').trim();

  const result = genDiff(file1, file2);
  expect(result).toBe(expected);
});

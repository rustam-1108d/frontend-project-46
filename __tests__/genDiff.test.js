import { fileURLToPath } from 'url'
import path from 'path'
import { readFileSync } from 'fs'
import genDiff from '../src/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFixture = filename => readFileSync(getFixturePath(filename), 'utf-8')

test('gendiff nested json files (stylish format)', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')
  const expected = readFixture('expected-stylish.txt').trim()

  const result = genDiff(file1, file2)
  expect(result).toBe(expected)
})

test('gendiff nested yaml files (stylish format)', () => {
  const file1 = getFixturePath('file1.yml')
  const file2 = getFixturePath('file2.yml')
  const expected = readFixture('expected-stylish.txt').trim()

  const result = genDiff(file1, file2)
  expect(result).toBe(expected)
})

test('gendiff nested yaml (.yaml) files (stylish format)', () => {
  const file1 = getFixturePath('file1.yaml')
  const file2 = getFixturePath('file2.yaml')
  const expected = readFixture('expected-stylish.txt').trim()

  const result = genDiff(file1, file2)
  expect(result).toBe(expected)
})

test('gendiff nested json files (plain format)', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')
  const expected = readFixture('expected-plain.txt').trim()

  const result = genDiff(file1, file2, 'plain')
  expect(result).toBe(expected)
})

test('gendiff nested yaml files (plain format)', () => {
  const file1 = getFixturePath('file1.yml')
  const file2 = getFixturePath('file2.yml')
  const expected = readFixture('expected-plain.txt').trim()

  const result = genDiff(file1, file2, 'plain')
  expect(result).toBe(expected)
})

test('gendiff nested json files (json format)', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')
  const expected = readFixture('expected-json.json').trim()

  const result = genDiff(file1, file2, 'json')
  expect(result).toBe(expected)
})

test('gendiff nested yaml files (json format)', () => {
  const file1 = getFixturePath('file1.yml')
  const file2 = getFixturePath('file2.yml')
  const expected = readFixture('expected-json.json').trim()

  const result = genDiff(file1, file2, 'json')
  expect(result).toBe(expected)
})

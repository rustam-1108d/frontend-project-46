import getParsedFile from './parsers.js'
import buildDiffTree from './buildDiffTree.js'
import getFormatter from './formatters/index.js'

export default function genDiff(filepath1, filepath2, formatName = 'stylish') {
  const data1 = getParsedFile(filepath1)
  const data2 = getParsedFile(filepath2)

  const diffTree = buildDiffTree(data1, data2)
  const format = getFormatter(formatName)

  return format(diffTree)
}

import getParsedFile from './parsers.js';
import buildDiffTree from './buildDiffTree.js';
import formatStylish from './formatters/formatStylish.js';

export default function genDiff(filepath1, filepath2, formatName = 'stylish') {
  const data1 = getParsedFile(filepath1);
  const data2 = getParsedFile(filepath2);

  const diffTree = buildDiffTree(data1, data2);

  if (formatName === 'stylish') {
    return formatStylish(diffTree);
  }

  throw new Error(`Unknown format: ${formatName}`);
}

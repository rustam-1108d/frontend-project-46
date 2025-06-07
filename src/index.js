import _ from 'lodash';
import getParsedFile from './parsers.js';

const buildDiffTree = (data1, data2) => {
  const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));

  const result = keys.map((key) => {
    if (!Object.hasOwn(data2, key)) {
      return { key, type: 'removed', value: data1[key] };
    }
    if (!Object.hasOwn(data1, key)) {
      return { key, type: 'added', value: data2[key] };
    }
    if (data1[key] !== data2[key]) {
      return {
        key,
        type: 'changed',
        oldValue: data1[key],
        newValue: data2[key],
      };
    }
    return { key, type: 'unchanged', value: data1[key] };
  });

  return result;
};

const formatStylish = (diffTree) => {
  const lines = diffTree.map((node) => {
    switch (node.type) {
      case 'removed':
        return `  - ${node.key}: ${node.value}`;
      case 'added':
        return `  + ${node.key}: ${node.value}`;
      case 'changed':
        return [
          `  - ${node.key}: ${node.oldValue}`,
          `  + ${node.key}: ${node.newValue}`,
        ].join('\n');
      case 'unchanged':
        return `    ${node.key}: ${node.value}`;
      default:
        throw new Error(`Unknown type: ${node.type}`);
    }
  });

  return `{\n${lines.join('\n')}\n}`;
};

export default function genDiff(filepath1, filepath2) {
  const data1 = getParsedFile(filepath1);
  const data2 = getParsedFile(filepath2);

  const diffTree = buildDiffTree(data1, data2);

  return formatStylish(diffTree);
}

const indent = (depth, spacesCount = 4) => ' '.repeat(Math.max(depth * spacesCount - 2, 0));

const stringify = (value, depth) => {
  if (typeof value !== 'object' || value === null) {
    return String(value);
  }

  const entries = Object.entries(value);
  const lines = entries.map(
    ([key, val]) => `${indent(depth + 1)}  ${key}: ${stringify(val, depth + 1)}`,
  );

  const closingIndent = ' '.repeat(depth * 4);
  return `{\n${lines.join('\n')}\n${closingIndent}}`;
};

const formatStylish = (tree, depth = 1) => {
  const lines = tree.map((node) => {
    const {
      key, type, value, oldValue, newValue, children,
    } = node;

    switch (type) {
      case 'added':
        return `${indent(depth)}+ ${key}: ${stringify(value, depth)}`;
      case 'removed':
        return `${indent(depth)}- ${key}: ${stringify(value, depth)}`;
      case 'unchanged':
        return `${indent(depth)}  ${key}: ${stringify(value, depth)}`;
      case 'changed':
        return [
          `${indent(depth)}- ${key}: ${stringify(oldValue, depth)}`,
          `${indent(depth)}+ ${key}: ${stringify(newValue, depth)}`,
        ].join('\n');
      case 'nested':
        return `${indent(depth)}  ${key}: ${formatStylish(children, depth + 1)}`;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  });

  const closingIndent = ' '.repeat((depth - 1) * 4);
  return `{\n${lines.join('\n')}\n${closingIndent}}`;
};

export default formatStylish;

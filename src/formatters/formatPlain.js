const stringifyPlainValue = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  }

  if (typeof value === 'string') {
    return `'${value}'`;
  }

  return String(value);
};

const formatPlain = (tree, parentPath = '') => {
  const lines = tree.flatMap((node) => {
    const {
      key, type, value, oldValue, newValue, children,
    } = node;

    const propertyPath = parentPath ? `${parentPath}.${key}` : key;

    switch (type) {
      case 'added':
        return `Property '${propertyPath}' was added with value: ${stringifyPlainValue(value)}`;
      case 'removed':
        return `Property '${propertyPath}' was removed`;
      case 'changed':
        return `Property '${propertyPath}' was updated. From ${stringifyPlainValue(oldValue)} to ${stringifyPlainValue(newValue)}`;
      case 'nested':
        return formatPlain(children, propertyPath);
      case 'unchanged':
        return [];
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  });

  return lines.join('\n');
};

export default formatPlain;

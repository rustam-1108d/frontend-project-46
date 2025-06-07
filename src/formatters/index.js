import formatStylish from './formatStylish.js';
import formatPlain from './formatPlain.js';

const getFormatter = (formatName) => {
  switch (formatName) {
    case 'stylish':
      return formatStylish;
    case 'plain':
      return formatPlain;
    default:
      throw new Error(`Unknown format: ${formatName}`);
  }
};

export default getFormatter;

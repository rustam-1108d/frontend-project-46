import fs from 'fs';
import path from 'path';

const getFileExtension = (filepath) => path.extname(filepath).slice(1);

export const readFile = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath);
  return fs.readFileSync(fullPath, 'utf-8');
};

export const parse = (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    default:
      throw new Error(`Unsupported format: ${format}`);
  }
};

export const getParsedFile = (filepath) => {
  const data = readFile(filepath);
  const format = getFileExtension(filepath);
  return parse(data, format);
};

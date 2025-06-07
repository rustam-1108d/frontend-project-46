import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const getFileExtension = (filepath) => path.extname(filepath).slice(1);

const readFile = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath);
  return fs.readFileSync(fullPath, 'utf-8');
};

const parse = (data, format) => {
  if (format === 'json') {
    return JSON.parse(data);
  }

  if (format === 'yml' || format === 'yaml') {
    return yaml.load(data);
  }

  throw new Error(`Unsupported format: ${format}`);
};

const getParsedFile = (filepath) => {
  const data = readFile(filepath);
  const format = getFileExtension(filepath);
  return parse(data, format);
};

export default getParsedFile;

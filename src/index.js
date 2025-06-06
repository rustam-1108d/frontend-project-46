import { getParsedFile } from './parser.js';

export default function genDiff(filepath1, filepath2) {
  const data1 = getParsedFile(filepath1);
  const data2 = getParsedFile(filepath2);

  console.log('File 1 parsed:', data1);
  console.log('File 2 parsed:', data2);

  return 'Diff not implemented yet';
}

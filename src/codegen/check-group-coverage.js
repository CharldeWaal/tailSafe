// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

const typesPath = path.resolve(__dirname, '../generated/generatedTailwindTypes.d.ts');
const colorsPath = path.resolve(__dirname, '../generated/generatedTailwindColors.d.ts');
const groupsPath = path.resolve(__dirname, '../generated/generatedTailwindGroups.d.ts');

function extractClassnames(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = [...content.matchAll(/\|\s*'([^']+)'/g)];
  return matches.map(m => m[1]);
}

function extractGroupClassnames(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = [...content.matchAll(/\|\s*'([^']+)'/g)];
  return new Set(matches.map(m => m[1]));
}

const allClassnames = [
  ...extractClassnames(typesPath),
  ...extractClassnames(colorsPath),
];
const groupClassnames = extractGroupClassnames(groupsPath);

const missing = allClassnames.filter(cn => !groupClassnames.has(cn));

if (missing.length) {
  // eslint-disable-next-line no-console
  console.error('Missing classnames in group types:', missing);
  process.exit(1);
} else {
  // eslint-disable-next-line no-console
  console.log('🦈 All classnames are covered by group types!');
  process.exit(0);
} 
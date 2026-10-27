const path = require('node:path');
const { buildSync } = require('esbuild');
buildSync({
  entryPoints: [path.join(__dirname, '../components/effects/experience.tsx')],
  outfile: path.join(__dirname, '../public/experience.js'),
  bundle: true,
  minify: true,
  format: 'iife',
  platform: 'browser',
  target: ['es2020'],
  jsx: 'automatic',
  define: { 'process.env.NODE_ENV': '"production"' },
  legalComments: 'linked',
});
console.log('Built shared interactive portfolio effects.');

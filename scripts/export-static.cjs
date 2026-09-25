/* Keep the GitHub Pages entry in sync with the Next.js page source. */
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

const root = path.resolve(__dirname, '..');
function compile(file) {
  const source = fs.readFileSync(file, 'utf8');
  const result = ts.transpileModule(source, { fileName:file, compilerOptions:{ target:ts.ScriptTarget.ES2020, module:ts.ModuleKind.CommonJS, jsx:ts.JsxEmit.ReactJSX, esModuleInterop:true } });
  const compiled = new Module(file, module);
  compiled.filename=file;
  compiled.paths=Module._nodeModulePaths(path.dirname(file));
  const original=compiled.require.bind(compiled);
  compiled.require=(specifier)=>{
    if(specifier==='next/script') return function StaticScript(){return null;};
    if(specifier.startsWith('.')) {
      const target=path.resolve(path.dirname(file),specifier);
      for(const ext of ['.tsx','.ts']) if(fs.existsSync(target+ext)) return compile(target+ext);
    }
    return original(specifier);
  };
  compiled._compile(result.outputText,file);
  return compiled.exports;
}
const pages=compile(path.join(root,'components','portfolio.tsx'));
for(const [name,Page] of [['index.html',pages.default],['projects.html',pages.ProjectArchive]]) {
const body = renderToStaticMarkup(React.createElement(Page));
const html = `<!DOCTYPE html>
<!-- Generated from components/portfolio.tsx by npm run sync:static. -->
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Taha Zerrad's engineering student portfolio: a Gotham-inspired newspaper of projects, learning, and ideas in software, AI, and data.">
  <meta name="theme-color" content="#191713">
  <title>Taha Zerrad | The Gotham Times</title>
  <link rel="stylesheet" href="style.css">
  <script src="public/translations.js" defer></script>
  <script src="public/newspaper.js" defer></script>
</head>
<body>${body}</body>
</html>
`;

fs.writeFileSync(path.join(root, name), html, 'utf8');
console.log('Updated '+name+' from components/portfolio.tsx.');
}

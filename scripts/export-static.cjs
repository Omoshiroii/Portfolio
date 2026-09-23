/* Keep the GitHub Pages entry in sync with the Next.js page source. */
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

const root = path.resolve(__dirname, '..');
const pagePath = path.join(root, 'app', 'page.tsx');
const source = fs.readFileSync(pagePath, 'utf8');
const result = ts.transpileModule(source, {
  fileName: pagePath,
  reportDiagnostics: true,
  compilerOptions: {
    target: ts.ScriptTarget.ES2020,
    module: ts.ModuleKind.CommonJS,
    jsx: ts.JsxEmit.ReactJSX,
    esModuleInterop: true,
  },
});

const errors = (result.diagnostics || []).filter(
  (diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error,
);

if (errors.length) {
  const formatHost = {
    getCanonicalFileName: (fileName) => fileName,
    getCurrentDirectory: () => root,
    getNewLine: () => '\n',
  };
  throw new Error(ts.formatDiagnosticsWithColorAndContext(errors, formatHost));
}

// Compile in memory so no generated JavaScript is left alongside the TSX source.
const pageModule = new Module(pagePath, module);
pageModule.filename = pagePath;
pageModule.paths = Module._nodeModulePaths(path.dirname(pagePath));
const originalRequire = pageModule.require.bind(pageModule);
pageModule.require = (specifier) => {
  // The standalone document includes its own deferred browser script below.
  if (specifier === 'next/script') return function StaticScript() { return null; };
  return originalRequire(specifier);
};
pageModule._compile(result.outputText, pagePath);

const Home = pageModule.exports.default;
if (typeof Home !== 'function') {
  throw new Error('app/page.tsx must default-export the Home component.');
}

const body = renderToStaticMarkup(React.createElement(Home));
const html = `<!DOCTYPE html>
<!-- Generated from app/page.tsx by npm run sync:static. -->
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Taha Zerrad's engineering student portfolio: a Gotham-inspired newspaper of projects, learning, and ideas in software, AI, and data.">
  <meta name="theme-color" content="#191713">
  <title>Taha Zerrad | The Gotham Times</title>
  <link rel="stylesheet" href="style.css">
  <script src="public/newspaper.js" defer></script>
</head>
<body>${body}</body>
</html>
`;

fs.writeFileSync(path.join(root, 'index.html'), html, 'utf8');
console.log('Updated index.html from app/page.tsx.');

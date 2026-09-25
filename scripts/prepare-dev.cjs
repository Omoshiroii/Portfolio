// OneDrive cloud files can look like symlinks to Next 14's cache cleaner.
// On Windows, let the native filesystem provider clear only the generated dev cache.
const { spawnSync } = require('node:child_process');
const path = require('node:path');

if (process.platform === 'win32') {
  const root = path.resolve(__dirname, '..');
  const result = spawnSync('powershell.exe', [
    '-NoProfile', '-NonInteractive', '-ExecutionPolicy', 'Bypass',
    '-File', path.join(__dirname, 'prepare-dev.ps1'),
  ], { cwd: root, stdio: 'inherit', windowsHide: true });
  if (result.error) console.error(result.error.message);
  process.exit(result.status ?? 1);
}

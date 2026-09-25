$ErrorActionPreference = 'Stop'
$workspacePath = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$cachePath = [System.IO.Path]::GetFullPath((Join-Path $workspacePath '.next-dev'))
if ([System.IO.Path]::GetDirectoryName($cachePath) -ne $workspacePath -or [System.IO.Path]::GetFileName($cachePath) -ne '.next-dev') {
    throw 'Refusing to clean a path outside the generated development cache.'
}
if (Test-Path -LiteralPath $cachePath) {
    $cacheItem = Get-Item -LiteralPath $cachePath -Force
    if ($cacheItem.LinkType -in @('SymbolicLink', 'Junction')) {
        throw 'The development cache is a filesystem link. Refusing recursive cleanup.'
    }
    try {
        Remove-Item -LiteralPath $cachePath -Recurse -Force
        Write-Host 'Cleared generated development cache (Windows / OneDrive compatibility).'
    } catch {
        throw "Unable to clear .next-dev. Stop any other development server for this folder, then retry. $($_.Exception.Message)"
    }
}

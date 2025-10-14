<#
Auto-push watcher

Run this script from the project root in PowerShell to automatically git add, commit and push
when files change. Use with caution — it will commit all changes it sees.

Usage:
  powershell -ExecutionPolicy Bypass -File .\scripts\auto-push.ps1

Notes:
- The script ignores common folders ('.git', 'node_modules', 'venv').
- It debounces rapid changes (default 2000ms) to avoid repeated commits.
- Customize the $exclude array below if you want to ignore additional paths.
#>

Param(
  [string]$Path = (Get-Location).Path,
  [int]$DebounceMs = 2000
)

Write-Host "Starting auto-push watcher on: $Path"
Write-Host "Debounce: ${DebounceMs}ms. Press Ctrl+C to stop."

$exclude = @('.git', 'node_modules', 'venv', '\\public\\files\\MeryemileBirikiminSirriwatermarked2025.pdf')

$changedFiles = [System.Collections.Generic.HashSet[string]]::new()
$timer = $null

$fsw = New-Object System.IO.FileSystemWatcher $Path -Property @{ 
  IncludeSubdirectories = $true
  NotifyFilter = [System.IO.NotifyFilters]'FileName, LastWrite, DirectoryName'
  Filter = '*.*'
}

function ShouldIgnore([string]$fullPath) {
  foreach ($ex in $exclude) {
    if ($fullPath -like "*${ex}*") { return $true }
  }
  return $false
}

$action = {
  param($sender, $e)
  $full = $e.FullPath
  if (ShouldIgnore $full) { return }
  $changedFiles.Add($full) | Out-Null

  if ($timer) { $timer.Stop(); $timer.Dispose() }
  $timer = New-Object Timers.Timer($DebounceMs)
  $timer.AutoReset = $false
  $timer.add_Elapsed({
    try {
      $files = $changedFiles -join '; '
      $changedFiles.Clear()
      Write-Host "Detected changes: $files"
      Write-Host "Staging changes..."
      git add -A
      $msg = "autosave: " + (Get-Date -Format 'yyyy-MM-dd HH:mm:ss') + " - " + ($files -replace '\\n',' ')
      # try commit; if there's nothing to commit, ignore error
      git commit -m $msg 2>$null | Out-Null
      Write-Host "Pushing to remote..."
      git push
      Write-Host "Push finished. Watching for more changes..."
    } catch {
      Write-Host "Error during git operations: $_"
    }
  })
  $timer.Start()
}

Register-ObjectEvent $fsw Changed -Action $action | Out-Null
Register-ObjectEvent $fsw Created -Action $action | Out-Null
Register-ObjectEvent $fsw Renamed -Action $action | Out-Null
Register-ObjectEvent $fsw Deleted -Action $action | Out-Null

$fsw.EnableRaisingEvents = $true

try {
  while ($true) { Start-Sleep -Seconds 1 }
} finally {
  $fsw.Dispose()
}

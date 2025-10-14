Auto-push watcher

This PowerShell script watches your project folder for file changes and automatically runs `git add -A`, `git commit` and `git push`.

Usage
1. Open PowerShell in the project root.
2. Run:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\auto-push.ps1
```

Notes
- The script ignores `.git`, `node_modules`, `venv` and the financial literacy PDF by default. Edit the `$exclude` array in `auto-push.ps1` to change this.
- Commits are debounced (default 2 seconds) to avoid too many commits during rapid file updates.
- Use with caution: the script commits all local changes it sees.

Stopping
- Press Ctrl+C in the PowerShell window to stop the watcher.

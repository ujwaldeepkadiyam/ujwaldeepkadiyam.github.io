# Local Build Guide

## Git Bash

### Daily local development

```bash
JEKYLL_ENV=development ./bin/jekyll.cmd serve --config _config.yml,_config_dev.yml --incremental
```

### Production-equivalent preview

```bash
JEKYLL_ENV=production ./bin/jekyll.cmd serve --config _config.yml
```

### Production build only

```bash
JEKYLL_ENV=production ./bin/jekyll.cmd build --config _config.yml --profile
```

## PowerShell

### Daily local development

```powershell
$env:JEKYLL_ENV="development"
.\bin\jekyll.cmd serve --config _config.yml,_config_dev.yml --incremental
```

### Production-equivalent preview

```powershell
$env:JEKYLL_ENV="production"
.\bin\jekyll.cmd serve --config _config.yml
```

### Production build only

```powershell
$env:JEKYLL_ENV="production"
.\bin\jekyll.cmd build --config _config.yml --profile
```

## Why this repository uses `bin/jekyll.cmd`

On this Windows and Ruby installation, running:

```bash
bundle exec jekyll ...
```

results in:

```text
bundler: command not found: jekyll
```

The repository wrapper is therefore the canonical way to run Jekyll:

```text
./bin/jekyll.cmd
```

Use `.\bin\jekyll.cmd` in PowerShell. The wrapper invokes the correct Bundler environment for this repository.

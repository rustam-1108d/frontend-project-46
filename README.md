[![Actions Status](https://github.com/rustam-1108d/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/rustam-1108d/frontend-project-46/actions)
[![CI](https://github.com/rustam-1108d/frontend-project-46/actions/workflows/ci.yml/badge.svg)](https://github.com/rustam-1108d/frontend-project-46/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=rustam-1108d_frontend-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=rustam-1108d_frontend-project-46)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=rustam-1108d_frontend-project-46&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=rustam-1108d_frontend-project-46)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=rustam-1108d_frontend-project-46&metric=coverage)](https://sonarcloud.io/summary/new_code?id=rustam-1108d_frontend-project-46)

# Difference Calculator (Gendiff)

## Description

**Gendiff** is a CLI tool that compares two configuration files and shows a difference.  
It supports `.json`, `.yml`, and `.yaml` file formats.

The tool can output results in several formats:

- **stylish** (default) — human-friendly tree structure
- **plain** — flat textual description of changes
- **json** — machine-readable JSON format

## Installation

```bash
git clone https://github.com/rustam-1108d/frontend-project-46.git
cd frontend-project-46
make install
```

## Usage

```bash
gendiff [options] <filepath1> <filepath2>

Options:
  -V, --version        output the version number
  -f, --format [type]  output format (stylish, plain, json)
  -h, --help           display help for command
```

## Project Features

✅ Supports **JSON**, **YAML** (`.yml`, `.yaml`) formats  
✅ Supports **nested structures** (recursive diff)  
✅ Multiple output formats: stylish, plain, json  
✅ Immutable functional code (no classes, no side effects)  
✅ Full unit test coverage with Jest  
✅ ESLint  
✅ CI with GitHub Actions  
✅ Test coverage reporting with SonarCloud  

## Requirements

- Node.js
- npm

## Linting

```bash
make lint
```
```bash
make lint-fix
```

## Running tests

```bash
make test
```

```bash
make test-coverage
```

## Demo

### gendiff CLI help (gendiff -h)

[![asciicast](https://asciinema.org/a/u38KU2BfoVxgwxVTPKSbRULuT.svg)](https://asciinema.org/a/u38KU2BfoVxgwxVTPKSbRULuT)

### Comparing flat json files

[![asciicast](https://asciinema.org/a/qGxRU1tKXwGiiBXKwCYW9wPJu.svg)](https://asciinema.org/a/qGxRU1tKXwGiiBXKwCYW9wPJu)

### Comparing flat yml/yaml files

[![asciicast](https://asciinema.org/a/xz7Xh0958o8uIqlOAGHe8FQY9.svg)](https://asciinema.org/a/xz7Xh0958o8uIqlOAGHe8FQY9)

### Comparing files with nested structures, Stylish format

[![asciicast](https://asciinema.org/a/PF6qnd9KdOQckUb3j7GU9OQfU.svg)](https://asciinema.org/a/PF6qnd9KdOQckUb3j7GU9OQfU)

### Plain format

[![asciicast](https://asciinema.org/a/8iDAdOXz7eeOv56lX3WWvTpoD.svg)](https://asciinema.org/a/8iDAdOXz7eeOv56lX3WWvTpoD)

### JSON format

[![asciicast](https://asciinema.org/a/DyFlmIhq2tpZw6ZqsmucMjuJC.svg)](https://asciinema.org/a/DyFlmIhq2tpZw6ZqsmucMjuJC)

### Linting and Testing

[![asciicast](https://asciinema.org/a/zMsq58oVYTD6qpkZGw5KyAO7u.svg)](https://asciinema.org/a/zMsq58oVYTD6qpkZGw5KyAO7u)
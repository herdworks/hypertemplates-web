---
created_at: 2025-03-04T14:00:00-08:00
updated_at: 2025-03-04T14:00:00-08:00
title: hyperctl content-type inspect
summary: |
    `hyperctl content-type inspect` command reference
breadcrumb: inspect
---

## `hyperctl content-type inspect` command

<auto-toc selectors="h3,h4,h5,h6,dl dt"></auto-toc>

### Overview 

### Usage

```plaintext
$ hyperctl content-type inspect -h
Inspect content types.

Usage:
        hyperctl content-type inspect [options] <type>

Options:
        -c, --config  path to the website configuration file. (required) (env: HYPER_CONFIG) (default: site.yaml)
        -h, --help    Display help information.
```

### Options

**`-c`, `--config`**
: Path to the website configuration file (`site.yaml` or `site.json`).

  Defaults to the `HYPER_CONFIG` environment variable, if set.

  To configure a default, use the `export` command.

  ```plaintext
  export HYPER_CONFIG="site.yaml"
  ```

---
created_at: 2025-03-04T14:00:00-08:00
updated_at: 2025-03-04T14:00:00-08:00
title: hyperctl asset add
summary: |
    `hyperctl asset add` command reference.
breadcrumb: add
---

## `hyperctl asset add` command

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview

Add static assets to a website.
The `hyperctl asset add` command reads website configuration and copies external assets into the configured static asset directory (see [`site.config.static_dir`]).

### Usage

```plaintext
$ hyperctl asset add -h
Add a static asset to a website.

Usage:
        hyperctl asset add [options] <asset> <path>

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

<!-- Links -->
[`site.config.static_dir`]: /docs/reference/cms/website/#site-config

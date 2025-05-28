---
created_at: 2025-03-04T14:00:00-08:00
updated_at: 2025-03-04T14:00:00-08:00
title: hyperctl page inspect
summary: |
    `hyperctl page inspect` command reference.
breadcrumb: inspect
---

## `hyperctl page inspect` command

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview
------------

The `hyperctl page inspect` command inspects website pages.

### Usage
---------

```plaintext
$ hyperctl page inspect -h
Inspect website pages.

Usage:
        hyperctl page inspect [options] <path>

Options:
        -c, --config  path to the website configuration file. (required) (env: HYPER_CONFIG) (default: site.yaml)
        -h, --help    Display help information.
```

#### Example
------------

```plaintext

```

### Options
-----------

**`-c`, `--config`**
: Path to the website configuration file (`site.yaml` or `site.json`).

  Defaults to the `HYPER_CONFIG` environment variable, if set.

  To configure a default, use the `export` command.

  ```plaintext
  export HYPER_CONFIG="site.yaml"
  ```

<!-- Links -->
[`site.config.static_dir`]: /docs/reference/cms/website/#site-config

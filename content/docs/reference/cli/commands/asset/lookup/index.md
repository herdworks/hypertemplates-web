---
created_at: 2025-03-04T14:00:00-08:00
updated_at: 2025-03-04T14:00:00-08:00
title: lookup
summary: |
    `hyperctl asset lookup` command reference.
---

## `hyperctl asset lookup` command

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview

Lookup a static asset by its path.
The `hyperctl asset lookup` command reads website configuration and searches the configured theme, website, and content subdirectories for the asset source file.

<doc-quote ht-element success>

**hyperctl's `which` command.** The `hyperctl asset lookup` command is similar to the POSIX `which` command, which is used to lookup the binary for a given command.
In a similar way, the `hyperctl asset lookup` command is used to determine which source file is being used for a given asset path.

See the [asset hierarchy] reference for more information.

</doc-quote>

### Usage

```plaintext
lookup a static asset by its path.

Usage:
        hyperctl asset lookup [options] <path>

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
[asset hierarchy]: /docs/reference/cms/assets/#asset-hierarchy
---
created_at: 2025-03-04T14:00:00-08:00
updated_at: 2025-03-04T14:00:00-08:00
title: hyperctl theme ls
summary: |
    `hyperctl theme ls` reference documentation.
breadcrumb: complete
---

## `hyperctl theme ls` command

<auto-toc selectors="h3,h4,h5,h6,dl dt"></auto-toc>

### Overview
------------

The `hyperctl theme ls` command installs [themes].

### Usage
---------

```plaintext
$ hyperctl theme ls -h
Install a theme from a package archive.

Usage:
        hyperctl theme ls [options]

Options:
        -c, --config  Path to the website configuration file. (required) (env: HYPER_CONFIG) (default: site.yaml)
        -f, --file    Path to theme package file (zip archive). (required)
        -h, --help    Display help information.
```

<!-- TODO: add #### Example header with example build output. -->

### Options
-----------

**`-c`, `--config`**
: Path to the website configuration file (`site.yaml` or `site.json`).

  Defaults to the `HYPER_CONFIG` environment variable, if set.

  To configure a default, use the `export` command.

  ```plaintext
  export HYPER_CONFIG="site.yaml"
  ```

**`-f`, `--file`**
: TODO



<!-- Links -->
[themes]: /docs/reference/core/themes/

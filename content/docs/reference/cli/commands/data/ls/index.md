---
created_at: 2025-03-04T14:00:00-08:00
updated_at: 2025-03-04T14:00:00-08:00
title: ls
summary: |
    `hyperctl data ls` command reference documentation
---

## `hyperctl data ls` command

<auto-toc selectors="h3,h4,h5,h6,dl dt"></auto-toc>

### Overview

The `hyperctl data ls` command is used to list website global [data namespaces].

### Usage

```plaintext
$ hyperctl data ls -h
List global data namespaces.

Usage:
        hyperctl data ls [options]

Options:
        -c, --config  path to the website configuration file. (required) (env: HYPER_CONFIG) (default: site.yaml)
        -h, --help    Display help information.
```

#### Example

Use the `hyperctl data ls` command to list available namespaces.

```plaintext
$ hyperctl data ls
Namespace   Size
---------   ----
newsletter  163
twitter     44
customers   925
downloads   18
nav         1455
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
[data namespaces]: /docs/reference/cms/namespaces/
[template data]: /docs/reference/core/data/
[template data key]: /docs/reference/core/data/#template-data-keys
[`jq`]: https://jqlang.org

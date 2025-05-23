---
created_at: 2025-03-04T14:00:00-08:00
updated_at: 2025-03-04T14:00:00-08:00
title: hyperctl data transform
summary: |
    `hyperctl data transform` command reference documentation
breadcrumb: transform
---

## `hyperctl data transform` command

<auto-toc selectors="h3,h4,h5,h6,dl dt"></auto-toc>

### Overview

The `hyperctl data transform` command is used to apply transformations to website global [data namespaces].

<doc-quote ht-element caution>

**🚧 EXPERIMENTAL FEATURE 🚧** 

The `hyperctl data transform` command is an active experiment and subject to change in future releases.

</doc-quote>

### Usage

```plaintext
$ hyperctl data transform -h
Transform global data namespace.

Usage:
        hyperctl data transform <namespace> [options]

Options:
        -c, --config           path to the website configuration file. (required) (env: HYPER_CONFIG) (default: site.yaml)
        -o, --opml-enrichment  Enrich OPML data with additional properties.
        -h, --help             Display help information.
```

#### Example

Use the `hyperctl data transform` command to list available namespaces.

```plaintext
$ hyperctl data transform
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

**`-o`, `--opml-enrichment`**
: Enrich OPML data with additional properties.

<!-- Links -->
[data namespaces]: /docs/reference/cms/namespaces/
[template data]: /docs/reference/core/data/
[template data key]: /docs/reference/core/data/#template-data-keys
[`jq`]: https://jqlang.org

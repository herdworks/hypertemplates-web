---
created_at: 2025-03-04T14:00:00-08:00
updated_at: 2025-03-04T14:00:00-08:00
title: hyperctl generate
summary: |
    `hyperctl generate` reference documentation.
breadcrumb: generate
---

## `hyperctl generate` command

<auto-toc selectors="h3,h4,h5,h6,dl dt"></auto-toc>

### Overview

The `hyperctl generate` command performs an [incremental build].

### Usage

```plaintext
Generate a single page build from a HyperTemplate.

Usage:
        hyperctl generate [options] [content]

Options:
        -c, --config  path to the website configuration file. (required) (env: HYPER_CONFIG) (default: site.yaml)
        -p, --page    Path to the content index file. (required)
        -i, --id      Identifier to use for the build (useful for retrying builds). (default: a45e1b1e-39c2-4326-9fcf-e6a15e42ff98)
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

**`-p`, `--page`**
: The path to the page index file to use for the build.

  The `--page` argument is required to perform an incremental build.

**`-i`, `--id`**
: The identifier to use for the build.
  
  Defaults to a randomly generated UUIDv4 string.

  <doc-quote ht-block warning>

  **WARNING:** providing a `--id` can cause `hyperctl build` to overwite an existing build.
  This can be useful in some cases (e.g. when using an external HTTP server to serve a specific build). 
  In most cases it is unecessary to provide a `--id`, and in some cases it can cause confusion.

  </doc-quote>

<!-- Links -->
[incremental build]: /docs/reference/cms/build/#incremental-builds

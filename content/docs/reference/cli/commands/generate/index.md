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
------------

The `hyperctl generate` command performs an [incremental build].

### Usage
---------

```plaintext
$ hyperctl generate -h
Perform an incremental build of a single page and its associated contents.

Usage:
        hyperctl generate [options] [content]

Options:
        -c, --config       Path to the website configuration file. (required) (env: HYPER_CONFIG)
        -p, --page         Path to the page index file. (required)
        -i, --id           Identifier to use for the build. (default: e96001dc-5c38-4e59-bd96-ce5c8d9afe93)
            --content-dir  Relative path to the content directory to use for the build (overwrites site.config.content_dir). (env: HYPER_CONTENT_DIR)
            --data-dir     Relative path to the data directory to use for the build (overwrites site.config.data_dir). (env: HYPER_DATA_DIR)
            --static-dir   Relative path to the static directory to use for the build (overwrites site.config.static_dir). (env: HYPER_STATIC_DIR)
            --theme        Relative path to theme config to use for the build (overwrites site.config.theme). (env: HYPER_THEME)
        -h, --help         Display help information.
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

**`--content-dir`**
: Relative path to the content directory to use for the build (overwrites [`site.config.content_dir`]).
  Uses the `HYPER_CONTENT_DIR` environment variable as a default value, if set.

  <doc-quote ht-block new>
  **NEW!** the `--content-dir` flag is available in `hyperctl` version 0.17.0 and later.
  </doc-quote>


**`--data-dir`**
: Relative path to the data directory to use for the build (overwrites [`site.config.data_dir`]).
  Uses the `HYPER_DATA_DIR` environment variable as a default value, if set.

  <doc-quote ht-block new>
  **NEW!** the `--data-dir` flag is available in `hyperctl` version 0.17.0 and later.
  </doc-quote>

**`--static-dir`**
: Relative path to the static directory to use for the build (overwrites [`site.config.static_dir`]).
  Uses the `HYPER_STATIC_DIR` environment variable as a default value, if set.

  <doc-quote ht-block new>
  **NEW!** the `--static-dir` flag is available in `hyperctl` version 0.17.0 and later.
  </doc-quote>

**`--theme`**
: Relative path to theme config to use for the build (overwrites [`site.config.theme`]).
  Uses the `HYPER_THEME` environment variable as a default value, if set.

  <doc-quote ht-block new>
  **NEW!** the `--theme` flag is available in `hyperctl` version 0.17.0 and later.
  </doc-quote>

<!-- Links -->
[incremental build]: /docs/reference/cms/builds/#incremental-builds
[`site.config.content_dir`]: /docs/reference/cms/website/#site-config
[`site.config.data_dir`]: /docs/reference/cms/website/#site-config
[`site.config.static_dir`]: /docs/reference/cms/website/#site-config
[`site.config.theme`]: /docs/reference/cms/website/#site-config

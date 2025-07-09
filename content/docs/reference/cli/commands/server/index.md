---
created_at: 2025-03-04T14:00:00-08:00
updated_at: 2025-03-04T14:00:00-08:00
title: hyperctl server
summary: |
    `hyperctl server` reference documentation.
breadcrumb: server
---

## `hyperctl server` command

<auto-toc selectors="h3,h4,h5,h6,dl dt"></auto-toc>

### Overview 
------------

The `hyperctl server` command performs a full website build and serves the resulting build output over HTTP.

### Usage
---------

```plaintext
 $ hyperctl server -h
Run a local HTTP server.

Usage:
        hyperctl server [options] [content]

Options:
        -c, --config       Path to the website configuration file. (required) (env: HYPER_CONFIG)
        -i, --id           Build ID. (env: HYPER_BUILD_ID) (default: 57f75fcc-afd0-4ee6-bbca-05dbcc4417aa)
        -I, --interval     Live reload interval seconds. (env: HYPER_REFRESH) (default: 2)
        -H, --host         Development server host. (env: HYPER_HOST) (default: localhost)
        -P, --port         Development server port. (env: HYPER_PORT) (default: 8080)
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

**`-i`, `--id`**
: The identifier to use for the build.
  
  Defaults to a randomly generated UUIDv4 string.

  <doc-quote ht-block warning>

  **WARNING:** providing a `--id` can cause `hyperctl build` to overwite an existing build.
  This can be useful in some cases (e.g. when using an external HTTP server to serve a specific build). 
  In most cases it is unecessary to provide a `--id`, and in some cases it can cause confusion.

  </doc-quote>

**`-I`, `--interval`**
: The development server refresh interval, in seconds. 

  The default `--interval` is 2 seconds.

**`-H`, `--host`**
: The development server hostname.

  The default `--host` is `127.0.0.1`.

**`-P`, `--port`**
: The path to the data file to use for the render.

  The default `--port` is `8080`.

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
[`site.config.content_dir`]: /docs/reference/cms/website/#site-config
[`site.config.data_dir`]: /docs/reference/cms/website/#site-config
[`site.config.static_dir`]: /docs/reference/cms/website/#site-config
[`site.config.theme`]: /docs/reference/cms/website/#site-config

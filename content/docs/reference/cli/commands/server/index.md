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
        -c, --config    Path to the website configuration file. (required) (env: HYPER_CONFIG)
        -i, --id        Build ID. (env: HYPER_BUILD_ID) (default: c221cb13-856a-47a7-988c-440b732cf9f2)
        -I, --interval  Live reload interval seconds. (env: HYPER_REFRESH) (default: 2)
        -H, --host      Development server host. (env: HYPER_HOST) (default: localhost)
        -P, --port      Development server port. (env: HYPER_PORT) (default: 8080)
        -h, --help      Display help information.
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

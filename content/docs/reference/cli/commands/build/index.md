---
created_at: 2025-03-04T14:00:00-08:00
updated_at: 2026-02-26T10:00:00-08:00
title: hyperctl build
summary: |
    `hyperctl build` reference documentation.
breadcrumb: build
---

## `hyperctl build` command

<auto-toc selectors="h3,h4,h5,h6,dl dt"></auto-toc>

### Overview
------------

The `hyperctl build` command is used to perform full-site and incremental [builds].

### Usage
---------

```plaintext
$ hyperctl build -h
Build management tools

Usage:
	hyperctl build [options]

Options:
	-c, --config       Path to the website configuration file. (required) (env: HYPER_CONFIG) (default: site.yaml)
	-i, --id           Identifier to use for the build. (default: c858bf52-01dc-4f5c-8236-de95dae708dc)
	    --incremental  Switch from full-site build mode to incremental build mode. Requires --page.
	-p, --page         Path to the page index file for incremental builds.
	    --content-dir  Relative path to the content directory to use for the build (overwrites site.config.content_dir). (env: HYPER_CONTENT_DIR)
	    --data-dir     Relative path to the data directory to use for the build (overwrites site.config.data_dir). (env: HYPER_DATA_DIR)
	    --static-dir   Relative path to the static directory to use for the build (overwrites site.config.static_dir). (env: HYPER_STATIC_DIR)
	    --theme        Relative path to theme config to use for the build (overwrites site.config.theme). (env: HYPER_THEME)
	    --data-file    Relative path to write an optional build data JSON file (e.g. build.json).
	    --log-file     Relative path to write an optional build log file (e.g. build.log).
	-h, --help         Display help information.
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

**`-i`, `--id`**
: The identifier to use for the build.
  
  Defaults to a randomly generated UUIDv4 string.

  <doc-quote ht-block warning>

  **WARNING:** providing a `--id` can cause `hyperctl build` to overwite an existing build.
  This can be useful in some cases (e.g. when using an external HTTP server to serve a specific build). 
  In most cases it is unecessary to provide a `--id`, and in some cases it can cause confusion.

  </doc-quote>

**`--incremental`**
: Perform an [incremental build].
  
  <doc-quote ht-block notice>
  **NOTE:** the `--page` argument is required for `--incremental` builds.
  </doc-quote>

  <doc-quote ht-block new>
  **NEW!** the `--log-file` flag is available in `hyperctl` version 0.22.0 and later.
  </doc-quote>  

**`-p`, `--page`**
: The path to the page data file to use for the build.

  <doc-quote ht-block notice>
  The `--page` argument is required to perform an incremental build.
  </doc-quote>

  <doc-quote ht-block new>
  **NEW!** the `--log-file` flag is available in `hyperctl` version 0.22.0 and later.
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

**`--data-file`**
: Relative path to write an optional build data JSON file (e.g. `build.json`).

  <doc-quote ht-block notice>
  **NOTE:** if `--data-file` is set, a [`.deploymentignore` file] will be generated with the data file name.
  </doc-quote>

  <doc-quote ht-block new>
  **NEW!** the `--data-file` flag is available in `hyperctl` version 0.22.0 and later.
  </doc-quote>  

**`--log-file`**
: Relative path to write an optional build log file (e.g. `build.log`).

  <doc-quote ht-block notice>
  **NOTE:** if `--log-file` is set, a [`.deploymentignore` file] will be generated with the log file name.
  </doc-quote>

  <doc-quote ht-block new>
  **NEW!** the `--log-file` flag is available in `hyperctl` version 0.22.0 and later.
  </doc-quote>  

<!-- Links -->
[builds]: /docs/reference/cms/builds/
[`site.config.content_dir`]: /docs/reference/cms/website/#site-config
[`site.config.data_dir`]: /docs/reference/cms/website/#site-config
[`site.config.static_dir`]: /docs/reference/cms/website/#site-config
[`site.config.theme`]: /docs/reference/cms/website/#site-config
[incremental build]: /docs/reference/cms/builds/#incremental-builds
[`.deploymentignore` file]: /docs/reference/cms/providers/#deploymentignore-file

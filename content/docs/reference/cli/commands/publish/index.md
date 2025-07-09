---
created_at: 2025-03-04T14:00:00-08:00
updated_at: 2025-03-04T14:00:00-08:00
title: hyperctl publish
summary: |
    `hyperctl publish` reference documentation.
breadcrumb: publish
---

## `hyperctl publish` command

<auto-toc selectors="h3,h4,h5,h6,dl dt"></auto-toc>

### Overview 
------------

The `hyperctl generate` command performs an [incremental build] and deploys the resulting build output to the configured [provider].

### Usage
---------

```plaintext
$ hyperctl publish -h
Publish a single page build to a HyperProvider.

Usage:
        hyperctl publish [options] <content>

Options:
        -c, --config       Path to the website configuration file. (required) (env: HYPER_CONFIG)
        -p, --page         Path to the content index file. (required)
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
[incremental build]: /docs/reference/cms/build/#incremental-builds
[provider]: /docs/reference/cms/providers/
[`site.config.content_dir`]: /docs/reference/cms/website/#site-config
[`site.config.data_dir`]: /docs/reference/cms/website/#site-config
[`site.config.static_dir`]: /docs/reference/cms/website/#site-config
[`site.config.theme`]: /docs/reference/cms/website/#site-config

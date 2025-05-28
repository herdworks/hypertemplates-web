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
        -c, --config  Path to the website configuration file. (required) (env: HYPER_CONFIG) (default: site.yaml)
        -p, --page    Path to the content index file. (required)
        -h, --help    Display help information.
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

<!-- Links -->
[incremental build]: /docs/reference/cms/build/#incremental-builds
[provider]: /docs/reference/cms/providers/

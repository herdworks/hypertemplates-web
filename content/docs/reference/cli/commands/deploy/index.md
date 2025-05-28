---
created_at: 2025-03-04T14:00:00-08:00
updated_at: 2025-03-04T14:00:00-08:00
title: hyperctl deploy
summary: |
    `hyperctl deploy` reference documentation.
breadcrumb: deploy
---

## `hyperctl deploy` command

<auto-toc selectors="h3,h4,h5,h6,dl dt"></auto-toc>

### Overview
------------

The `hyperctl deploy` command performs a full website build and deploys the resulting build output to the configured [provider].

<doc-quote ht-block>

**NOTE:** files are only written to the provider on successful build.

</doc-quote>

### Usage
---------

```plaintext
$ hyperctl deploy -h
Deploy a static site build to a HyperProvider.

Usage:
        hyperctl deploy [options]

Options:
        -c, --config  path to the website configuration file. (required) (env: HYPER_CONFIG) (default: site.yaml)
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

<!-- Links -->
[provider]: /docs/reference/cms/providers/

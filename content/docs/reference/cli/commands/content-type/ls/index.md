---
created_at: 2025-03-04T14:00:00-08:00
updated_at: 2025-03-04T14:00:00-08:00
title: hyperctl content-type ls
summary: |
    `hyperctl content-type ls` reference documentation
breadcrumb: ls
---

## `hyperctl content-type ls` command

<auto-toc selectors="h3,h4,h5,h6,dl dt"></auto-toc>

### Overview

The `hyperctl content-type ls` command lists available [content types] for the configured HyperTemplates theme.

### Usage

```plaintext
$ hyperctl content-type ls -h
List content types.

Usage:
        hyperctl content-type ls [options]

Options:
        -c, --config  path to the website configuration file. (required) (env: HYPER_CONFIG) (default: site.yaml)
        -h, --help    Display help information.
```

#### Example

```plaintext
$ hyperctl content-type ls
Name        Description
----        -----------
Blog Post   Long-form editorial content.
Link Post   A hyperlink per day keeps the algorithms away.
Page        New marketing page
Photo Post  Pics or it didn't happen!
Quick Post  Like a tweet, but without the arbitrary character limit.
Status      Passing thoughts that disappear after 24 hours!
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
[content types]: /docs/reference/cms/content-types/

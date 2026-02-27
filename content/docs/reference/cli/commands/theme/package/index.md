---
created_at: 2025-03-04T14:00:00-08:00
updated_at: 2025-03-04T14:00:00-08:00
title: hyperctl theme package
summary: |
    `hyperctl theme package` reference documentation.
breadcrumb: complete
---

## `hyperctl theme package` command

<auto-toc selectors="h3,h4,h5,h6,dl dt"></auto-toc>

### Overview
------------

The `hyperctl theme package` command installs [themes].

### Usage
---------

```plaintext
$ hyperctl theme package -h
Package a theme into a zip archive.

Usage:
        hyperctl theme package [options]

Options:
        -c, --config  Path to the website configuration file. (required) (env: HYPER_CONFIG) (default: site.yaml)
        -t, --theme   Path to the theme configuration file. (required) (env: HYPER_THEME) (default: theme.json)
        -f, --file    Output file path for the theme package (zip archive).
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

**`-t`, `--theme`**
: Path to the theme configuration file (`theme.json`).

  Defaults to the `HYPER_THEME` environment variable, if set.

  To configure a default, use the `export` command.

  ```plaintext
  export HYPER_THEME="theme/theme.json"
  ```

**`-f`, `--file`**
: Path to the theme archive file to be created (e.g. `mywebsite-theme-v0.1.0.zip`).

  Defaults to a file named `<Name>-v<Version>.zip` using the configured [`website.theme.name`] and [`website.theme.version`] values.
  If `-f` or `--file` is not provided, and no theme name and version is configured, `hyperctl theme package` will generate a theme archive file named `Untitled-v0.0.0.zip`. 

<!-- Links -->
[themes]: /docs/reference/core/themes/
[`website.theme.name`]: /docs/reference/cms/website/#site-config
[`website.theme.version`]: /docs/reference/cms/website/#site-config

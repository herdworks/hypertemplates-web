---
created_at: 2025-03-04T14:00:00-08:00
updated_at: 2025-03-04T14:00:00-08:00
title: hyperctl render
summary: |
    `hyperctl render` reference documentation.
breadcrumb: render
---

## `hyperctl render` command

<auto-toc selectors="h3,h4,h5,h6,dl dt"></auto-toc>

### Overview 
------------

The `hyperctl render` command provides direct access to the underlying HyperTemplates rendering engine for generating HTML files from a layout and some data.

<doc-quote ht-block success>

**What is it good for?** 🎵

When is it appropriate to use the `hyperctl render` command instead of [`hyperctl build`] or [`hyperctl generate`]? 
The `hyperctl render` command does not apply any of the opinions that are built in to the HyperTemplates CMS (se [HyperText Management System]).
This makes it useful for things like the [Learn HyperTemplates] tutorial, and debugging.

</doc-quote>

### Usage
---------

```plaintext
$ hyperctl render -h
Render a HyperTemplate

Usage:
        hyperctl render [options]

Options:
        -d, --data    Path to a HyperTemplates data file (json, yaml, or markdown). (required) (env: HYPER_DATA)
        -l, --layout  Path to a HyperTemplates layout file (html).
        -u, --untidy  Disable tidy mode.
        -h, --help    Display help information.
```

### Options
-----------

**`-d`, `--data`**
: The path to the data file to use for the render.

  The `--data` argument is required to render a layout.

**`-l`, `--layout`**
: The path to the layout template to use for the render.

  The `--layout` argument is required to render a layout.

**`-u`, `--untidy`**
: Disable tidy mode.

  See [`site.config.tidy_mode`] for more information.




<!-- Links -->
[HyperText Management System]: /docs/reference/cms/
[Learn HyperTemplates]: /docs/tutorials/learn/
[`hyperctl build`]: /docs/reference/cli/commands/build
[`hyperctl generate`]: /docs/reference/cli/commands/generate
[`site.config.tidy_mode`]: /docs/reference/cms/website/#site-config-tidy_mode

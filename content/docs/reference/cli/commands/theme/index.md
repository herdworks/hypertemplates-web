---
created_at: 2025-02-24T15:00:00-08:00
updated_at: 2026-02-26T10:00:00-08:00
title: hyperctl theme
summary: |
    `hyperctl theme` reference documentation.
breadcrumb: theme
---

## `hyperctl theme` command

<auto-toc selectors="h3,h4,h5,h6"></auto-toc>

### Overview
------------

The `hyperctl theme` command provides [theme] management tools.

### Usage
---------

```plaintext
$ hyperctl theme -h
Theme management tools

Usage:
        hyperctl theme [command] [options]

Available commands:
        ls       List installed themes.
        install  Install a theme from a package archive.
        package  Package a theme into a zip archive.
        migrate  Migrate a theme to current directive syntax.

Options:
        -h, --help  Display help information.
```

### Commands
------------

The `hyperctl theme` command has the following subcommands:

**`ls`**
: The `hyperctl theme ls` command lists installed themes.

  <learn-more ht-block href='./ls/' data-toc='h4' title='ls'></learn-more>

**`install`**
: The `hyperctl theme install` command installs themes.

  <learn-more ht-block href='./install/' data-toc='h4' title='install'></learn-more>

**`package`**
: The `hyperctl theme package` command creates theme package archives for sharing and/or distribution.

  <learn-more ht-block href='./package/' data-toc='h4' title='package'></learn-more>

**`migrate`**
: The `hyperctl theme migrate` command updates a theme's legacy directives to current syntax.

  <learn-more ht-block href='./migrate/' data-toc='h4' title='migrate'></learn-more>

<!-- Links -->
[themes]: /docs/reference/core/themes/
[theme]:  /docs/reference/core/themes/

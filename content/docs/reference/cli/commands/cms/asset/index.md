---
created_at: 2025-03-04T14:00:00-08:00
updated_at: 2026-02-26T10:00:00-08:00
title: hyperctl cms asset
summary: |
    `hyperctl cms asset` command reference documentation.
breadcrumb: asset
---

## `hyperctl cms asset` command

<auto-toc selectors='h3,h4,h5,h6'></auto-toc>

### Overview
------------

The `hyperctl cms asset` command is used to manage website [assets].

### Usage
---------

```plaintext
$ hyperctl cms asset -h
Manage website assets.

Usage:
        hyperctl cms asset [command] [options]

Available commands:
        add     Add a static asset to a website.
        lookup  lookup a static asset by its path.

Options:
        -h, --help  Display help information.
```

### Commands
------------

The `hyperctl cms asset` command has the following subcommands:

**`add`**
: `hyperctl cms asset add` reference documentation.

  <learn-more ht-block href='./add/' data-toc='h4' title='add'></learn-more>

**`ls`**
: `hyperctl cms asset ls` reference documentation.

  <learn-more ht-block href='./ls/' data-toc='h4' title='ls'></learn-more>

**`lookup`**
: `hyperctl cms asset lookup` reference documentation.

  <learn-more ht-block href='./lookup/' data-toc='h4' title='lookup'></learn-more>

<!-- Links -->
[assets]: /docs/reference/cms/assets/

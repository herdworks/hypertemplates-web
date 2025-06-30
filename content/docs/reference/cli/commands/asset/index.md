---
created_at: 2025-03-04T14:00:00-08:00
updated_at: 2025-03-04T14:00:00-08:00
title: hyperctl asset
summary: |
    `hyperctl asset` command reference documentation.
breadcrumb: asset
---

## `hyperctl asset` command

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview
------------

The `hyperctl asset` command is used to manage website [assets].

### Usage
---------

```plaintext
$ hyperctl asset -h
Manage website assets.

Usage:
        hyperctl asset [command] [options]

Available commands:
        add     Add a static asset to a website.
        lookup  lookup a static asset by its path.

Options:
        -h, --help  Display help information.
```

### Commands
------------

The `hyperctl asset` command has the following subcommands:

**`add`**
: `hyperctl asset add` reference documentation.

  <learn-more ht-block href='./add/'></learn-more>

**`ls`**
: `hyperctl asset ls` reference documentation.

  <learn-more ht-block href='./ls/'></learn-more>

**`lookup`**
: `hyperctl asset lookup` reference documentation.

  <learn-more ht-block href='./lookup/'></learn-more>

<!-- Links -->
[assets]: /docs/reference/cms/assets/

---
created_at: 2025-03-04T14:00:00-08:00
updated_at: 2026-02-26T10:00:00-08:00
layout: default
title: hyperctl cms
summary: |
    `hyperctl cms` reference documentation.
breadcrumb: cms
---

## `hyperctl cms` command

<auto-toc selectors="h3,h4,h5,h6"></auto-toc>

### Overview
------------

Use `hyperctl cms` to access content management system commands.

### Usage
---------

```plaintext
$ hyperctl cms -h
Content management tools

Usage:
        hyperctl cms [command] [options]

Available commands:
        new           Create a new website or page.
        asset         Manage website assets.
        content-type  Manage content-types.
        data          Manage global template data.
        page          Manage pages and drafts.

Options:
        -h, --help  Display help information.
```

### Commands
------------

The `hyperctl cms` command has the following subcommands:

**`new`**
: The `hyperctl cms new` command creates new websites and pages.

  <learn-more ht-block href='./new/' data-toc='h4' title='new'></learn-more>

**`asset`**
: The `hyperctl cms asset` command manages assets.

  <learn-more ht-block href='./asset/' data-toc='h4' title='asset'></learn-more>

**`content-type`**
: The `hyperctl cms content-type` command manages content-types.

  <learn-more ht-block href='./content-type/' data-toc='h4' title='content-type'></learn-more>

**`data`**
: The `hyperctl cms data` command manages global template data.

  <learn-more ht-block href='./data/' data-toc='h4' title='data'></learn-more>

**`page`**
: The `hyperctl cms page` command manages pages.

  <learn-more ht-block href='./page/' data-toc='h4' title='page'></learn-more>

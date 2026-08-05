---
created_at: 2025-03-04T14:00:00-08:00
updated_at: 2026-02-26T10:00:00-08:00
title: hyperctl cms content-type
summary: |
    `hyperctl cms content-type` reference documentation.
breadcrumb: content-type
---

## `hyperctl cms content-type` command

<auto-toc selectors="h3,h4,h5,h6"></auto-toc>

### Overview
------------

Inspect HyperTemplate theme content types.

### Usage
---------

```plaintext
$ hyperctl cms content-type -h
Inspect HyperTemplate theme content types.

Usage:
        hyperctl cms content-type [command] [options]

Available commands:
        ls       List content types.
        inspect  Inspect content types.

Options:
        -h, --help  Display help information.
```

### Commands
------------

The `hyperctl cms content-type` command has the following subcommands:

**`ls`**
: The `hyperctl cms content-type ls` command lists content types.

  <learn-more ht-block href='./ls/' data-toc='h4' title='ls'></learn-more>

**`inspect`**
: The `hyperctl cms content-type inspect` command inspects content types.

  <learn-more ht-block href='./inspect/' data-toc='h4' title='inspect'></learn-more>

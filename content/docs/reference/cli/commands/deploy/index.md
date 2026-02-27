---
created_at: 2025-03-04T14:00:00-08:00
updated_at: 2026-02-26T10:00:00-08:00
title: hyperctl deploy
summary: |
    `hyperctl deploy` reference documentation.
breadcrumb: build
---

## `hyperctl deploy` command

<auto-toc selectors="h3,h4,h5,h6,dl dt"></auto-toc>

### Overview
------------

The `hyperctl deploy` command provides deployment management tools.

### Usage
---------

```plaintext
$ hyperctl deploy -h
Deployment management tools

Usage:
        hyperctl deploy [command] [options] <path>

Available commands:
        complete     Deploy a complete build.
        incremental  Deploy an incremental build.

Options:
        -h, --help  Display help information.
```

### Commands
------------

The `hyperctl deploy` command has the following subcommands:

**`complete`**
: The `hyperctl deploy complete` command deploys a complete build.

  <learn-more ht-block href='./complete/'></learn-more>

**`incremental`**
: The `hyperctl deploy incremental` command deploys an incremental build.

  <learn-more ht-block href='./incremental/'></learn-more>

<!-- Links -->

---
created_at: 2025-05-21T13:00:00-07:00
updated_at: 2026-02-26T10:00:00-08:00
title: hyperctl cms data
summary: |
    `hyperctl cms data` command reference documentation.
breadcrumb: data
---

## `hyperctl cms data` command

<auto-toc selectors="h3,h4,h5,h6,dl dt"></auto-toc>

### Overview 
------------
The `hyperctl cms data` command is used to manage global [data namespaces].

### Usage
---------

```plaintext
$ hyperctl cms data -h
Manage global template data.

Usage:
        hyperctl cms data [command] [options]

Available commands:
        ls       List global data namespaces.
        inspect  Inspect global data namespace.

Options:
        -h, --help  Display help information
```

### Commands
------------

The `hyperctl cms data` command has the following subcommands:

**`ls`**
: The `hyperctl cms data ls` command lists global data namespaces.

  <learn-more ht-block href='./ls/'></learn-more>

**`inspect`**
: The `hyperctl cms data inspect` command inspects global data namespaces.

  <learn-more ht-block href='./inspect/'></learn-more>

<!-- Links -->
[data namespaces]: /docs/reference/cms/namespaces/
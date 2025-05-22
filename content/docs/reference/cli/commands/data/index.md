---
created_at: 2025-05-21T13:00:00-07:00
updated_at: 2025-05-21T13:00:00-07:00
title: data
summary: |
    `hyperctl data` command reference documentation.
---

## `hyperctl data` command

<auto-toc selectors="h3,h4,h5,h6,dl dt"></auto-toc>

### Overview 

The `hyperctl data` command is used to manage global [data namespaces].

### Usage

```plaintext
$ hyperctl data -h
Manage global data.

Usage:
        hyperctl data [command] [options]

Available commands:
        ls         List global data namespaces.
        inspect    Inspect global data namespace.
        transform  Transform global data namespace.

Options:
        -h, --help  Display help information.
```

### Commands

The `hyperctl data` command has the following subcommands:

**`ls`**
: The `hyperctl data ls` command lists global data namespaces.

  <learn-more ht-element href='./ls/'></learn-more>

**`inspect`**
: The `hyperctl data inspect` command inspects global data namespaces.

  <learn-more ht-element href='./inspect/'></learn-more>

**`transform`**
: The `hyperctl data transform` command applies trasnformations to global data namespaces.

  <learn-more ht-element href='./transform/'></learn-more>

<!-- Links -->
[data namespaces]: /docs/reference/cms/namespaces/
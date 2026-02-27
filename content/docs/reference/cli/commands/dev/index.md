---
created_at: 2025-02-24T15:00:00-08:00
updated_at: 2026-02-26T10:00:00-08:00
title: hyperctl dev
summary: |
    `hyperctl dev` reference documentation.
breadcrumb: build
---

## `hyperctl dev` command

<auto-toc selectors="h3,h4,h5,h6,dl dt"></auto-toc>

### Overview
------------

The `hyperctl dev` command provides developer tools for working with HyperTemplates websites.

### Usage
---------

```plaintext
$ hyperctl dev -h
Developer tools

Usage:
        hyperctl dev [command] [options] <path>

Available commands:
        graph     Web scraper utilities.
        mimetype  Mimetype utilities.
        render    HyperTemplate rendering utilities.
        server    Live-reloading development server.

Options:
        -h, --help  Display help information.
```

### Commands
------------

The `hyperctl dev` command has the following subcommands:

**`graph`**
: The `hyperctl dev graph` command is a web scraping utility.

  <learn-more ht-block href='./graph/'></learn-more>

**`mimetype`**
: The `hyperctl dev mimetype` command is a mimetype utility.

  <learn-more ht-block href='./mimetype/'></learn-more>

**`render`**
: The `hyperctl dev render` command is a template rendering utility.

  <learn-more ht-block href='./render/'></learn-more>

**`server`**
: The `hyperctl dev server` command is a live-reloading development server.

  <learn-more ht-block href='./server/'></learn-more>


<!-- Links -->

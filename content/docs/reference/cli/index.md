---
created_at: 2025-01-30T12:00:00-08:00
updated_at: 2026-02-26T10:00:00-08:00
title: hyperctl
summary: |
    The `hyperctl` CLI tool is a fully featured static site generator based on HyperTemplates.
breadcrumb: CLI
---

## `hyperctl`

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview
------------

The `hyperctl` (pronounced "hyper control" or "hyper C-T-L") CLI tool is a fully-featured static site generator based on HyperTemplates.

#### What is a static site generator?
-------------------------------------

A static site generator is a tool for building websites.

<doc-quote ht-block info>

A static site generator is a tool that generates a [static] HTML website based on raw data and a set of templates.
Essentially, a static site generator automates the task of coding individual HTML pages and gets those pages ready to serve to users ahead of time. 
Because these HTML pages are pre-built, they can load very quickly in users' browsers.

&mdash; [Cloudflare](https://www.cloudflare.com/learning/performance/static-site-generator/)

</doc-quote>

#### What is a static website?
------------------------------

The term "static website" typically refers to the practice of serving pre-built HTML pages.
The alternative approach to static websites is often referred to as a "dynamic website", in which pages are generated on-demand.
In practice neither approach guarantees or restricts the type of content that can be created using these methods, they're just different workflows.

### Usage
---------

<code-snippet ht-block filename='hyperctl'>

```plaintext
 $ hyperctl -h
hyperctl is a simple static site generator.

Usage:
        hyperctl [command] [options]

Available commands:
        cms     Content management tools
        theme   Theme management tools
        build   Build management tools
        deploy  Deployment management tools
        dev     Developer tools

Options:
        -h, --help  Display help information.
```

</code-snippet>

### Commands
------------

**`cms`**
: Content management tools.

  <learn-more ht-block href='./commands/cms/'></learn-more>

**`theme`**
: Theme management tools.

  <learn-more ht-block href='./commands/theme/'></learn-more>

**`build`**
: Build management tools.

  <learn-more ht-block href='./commands/build/'></learn-more>

**`deploy`**
: Deployment management tools.

  <learn-more ht-block href='./commands/deploy/'></learn-more>

**`dev`**
: Development tools.

  <learn-more ht-block href='./commands/dev/'></learn-more>

---
created_at: 2025-01-30T12:00:00-08:00
title: CLI
summary: |
    The `hyperctl` CLI tool is a fully featured static site generator based on HyperTemplates.
---

## `hyperctl`

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview

The `hyperctl` (pronounced "hyper control" or "hyper C-T-L") CLI tool is a fully featured static site generator based on HyperTemplates.

#### What is a static site generator?

Coming soon...

### Usage

<code-snippet ht-element filename='hyperctl'>

```plaintext
$ hyperctl -h
hyperctl is a lightweight static site generator based on HyperTemplates.

Usage:
        hyperctl [command] [options]


Available commands:
        asset         Manage website assets.
        build         Build a static site from HyperTemplates.
        content-type  Inspect HyperTemplate theme content types.
        data          Manage global data.
        deploy        Deploy a static site build to a HyperProvider.
        generate      Generate a single page build from a HyperTemplate.
        graph         Fetch entity and page metadata from the HyperGraph™️.
        mimetype      Get file mimetype.
        new           Create a new website or page.
        page          Manage pages and drafts.
        publish       Publish a single page build to a HyperProvider.
        render        Render a HyperTemplate
        server        Run a local HTTP server.

Options:
        -h, --help  Display help information.
```

</code-snippet>

### Commands

**`asset`**
: Manage website assets.

  <learn-more ht-element href='/docs/reference/cli/commands/asset/'></learn-more>

**`build`**
: Build a static site from HyperTemplates.

  <learn-more ht-element href='/docs/reference/cli/commands/build/'></learn-more>

**`content-type`**
: Inspect HyperTemplate theme content types.

  <learn-more ht-element href='/docs/reference/cli/commands/content-type/'></learn-more>

**`data`**
: Inspect HyperTemplate global data.

  <learn-more ht-element href='/docs/reference/cli/commands/data/'></learn-more>

**`deploy`**
: Deploy a static site build to a HyperProvider.

  <learn-more ht-element href='/docs/reference/cli/commands/deploy/'></learn-more>

**`generate`**
: Generate a single page build from a HyperTemplate.

  <learn-more ht-element href='/docs/reference/cli/commands/generate/'></learn-more>

**`graph`**
: Fetch entity and page metadata from the HyperGraph™️.

  <learn-more ht-element href='/docs/reference/cli/commands/graph/'></learn-more>

**`mimetype`**
: Get file mimetype information.

  <learn-more ht-element href='/docs/reference/cli/commands/mimetype/'></learn-more>

**`new`**
: Create a new website or page.

  <learn-more ht-element href='/docs/reference/cli/commands/new/'></learn-more>

**`page`**
: Manage pages and drafts.

  <learn-more ht-element href='/docs/reference/cli/commands/page/'></learn-more>

**`publish`**
: Publish a single page build to a HyperProvider.

  <learn-more ht-element href='/docs/reference/cli/commands/publish/'></learn-more>

**`render`**
: Render a HyperTemplate

  <learn-more ht-element href='/docs/reference/cli/commands/render/'></learn-more>

**`server`**
: Run a local HTTP server.

  <learn-more ht-element href='/docs/reference/cli/commands/server/'></learn-more>

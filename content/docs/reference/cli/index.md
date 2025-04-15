---
created_at: 2025-01-30T12:00:00-08:00
title: CLI
summary: |
    The `hyperctl` CLI tool is a fully featured static site generator based on HyperTemplates.
---

## `hyperctl`

* [Overview](#overview)
  * [What is a static site generator?](#what-is-a-static-site-generator)
* [Configuration](#configuration)
* [Commands](#commands)

### Overview

The `hyperctl` (pronounced "hyper control" or "hyper C-T-L") CLI tool is a fully featured static site generator based on HyperTemplates.

<code-snippet ht-element filename='hyperctl'>

```none
$ hyperctl is a lightweight static site generator based on HyperTemplates.

Usage:
        hyperctl [command] [options]

Available commands:
        asset         Manage website assets.
        build         Build a static site from HyperTemplates.
        content-type  Inspect HyperTemplate theme content types.
        deploy        Deploy a static site build to a HyperProvider.
        generate      Generate a single page build from a HyperTemplate.
        graph         Fetch entity and page metadata from the HyperGraph™️.
        new           Create a new website or page.
        publish       Publish a single page build to a HyperProvider.
        render        Render a HyperTemplate
        server        Run a local HTTP server.

Options:
        -h, --help  Display help information
```

</code-snippet>

#### What is a static site generator?

Coming soon...


### Configuration

Static sites managed with `hyperctl` are configured via a configuration file in YAML or JSON format.

<code-snippet ht-element filename='site.yaml'>

```yaml
---
base_url: https://preview.hypertemplates.net
title: HyperTemplates
description: A pure-HTML templating system for the modern web.
author:
  username: "@hypertemplates.net"
  name: HyperTemplates
  href: /
  favicon: /img/favicon-512x512.png
  email: contact@hypertemplates.net
favicons:
  - href: /img/apple-touch-icon.png
    sizes: 180x180
    rel: apple-touch-icon
  - href: /img/favicon-128x128.png
    sizes: 128x128
  - href: /img/favicon-192x192.png
    sizes: 192x192
  - href: /img/favicon-256x256.png
    sizes: 256x256
  - href: /img/favicon-512x512.png
    sizes: 512x512

feeds:
  - link: /

provider:
    kind: s3
    endpoint: https://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.r2.cloudflarestorage.com
    store: hypertemplates-web-preview
    secrets:
        - name: access_key_id
          provider: env
          key: AWS_ACCESS_KEY_ID
        - name: secret_access_key
          provider: env
          key: AWS_SECRET_ACCESS_KEY

config:
    markdown:
        mentions:
            href_prefix: /tags/
            href_suffix: /
    theme:
        settings: themes/hyper/theme.json
    tidy_mode: true
```

</code-snippet>

<learn-more ht-element href='/docs/reference/cli/config/'></learn-more>

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

**`deploy`**
: Deploy a static site build to a HyperProvider.

  <learn-more ht-element href='/docs/reference/cli/commands/deploy/'></learn-more>

**`generate`**
: Generate a single page build from a HyperTemplate.

  <learn-more ht-element href='/docs/reference/cli/commands/generate/'></learn-more>

**`graph`**
: Fetch entity and page metadata from the HyperGraph™️.

  <learn-more ht-element href='/docs/reference/cli/commands/graph/'></learn-more>

**`new`**
: Create a new website or page.

  <learn-more ht-element href='/docs/reference/cli/commands/new/'></learn-more>

**`publish`**
: Publish a single page build to a HyperProvider.

  <learn-more ht-element href='/docs/reference/cli/commands/publish/'></learn-more>

**`render`**
: Render a HyperTemplate

  <learn-more ht-element href='/docs/reference/cli/commands/render/'></learn-more>

**`server`**
: Run a local HTTP server.

  <learn-more ht-element href='/docs/reference/cli/commands/server/'></learn-more>

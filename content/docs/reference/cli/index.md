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
  * [`render`](#render)
  * [`build`](#build)
  * [`server`](#server)
  * [`deploy`](#deploy)

### Overview

The `hyperctl` (pronounced "hyper control" or "hyper C-T-L") CLI tool is a fully featured static site generator based on HyperTemplates.

<code-snippet ht-element filename='hyperctl'>

```none
$ hyperctl --help

hyperctl is a lightweight static site generator based on HyperTemplates.

Usage:
        hyperctl [command] [options]


Available commands:
        render        Render a HyperTemplate
        generate      Generate a single page build from a HyperTemplate.
        build         Build a static site from HyperTemplates.
        publish       Publish a single page build to a HyperProvider.
        deploy        Deploy a static site build to a HyperProvider.
        server        Run a local HTTP server.
        content-type  Inspect HyperTemplate theme content types.
        new           Create a new page.

Options:
        -h, --help  Display help information.
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
theme: hyper
title: HyperTemplates
description: A pure-HTML templating system for the modern web.
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
author:
  username: "@hypertemplates.net"
  name: HyperTemplates
  href: /
  favicon: /img/favicon-512x512.png
  email: contact@hypertemplates.net
feeds:
  - link: /
config:
    tidy_mode: true
    provider:
        kind: s3
        uri: https://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.r2.cloudflarestorage.com
        store: hypertemplates-web-preview
        secrets:
            - name: access_key_id
              provider: env
              key: AWS_ACCESS_KEY_ID
            - name: secret_access_key
              provider: env
              key: AWS_SECRET_ACCESS_KEY
```

</code-snippet>

### Commands

#### `render`

#### `build`

#### `server`

#### `deploy`


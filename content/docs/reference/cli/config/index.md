---
created_at: 2025-01-26T11:00:00-08:00
title: Configuration
---

## Website Configuration

* [Overview](#overview)
* [Example](#example)
* [Specification](#specification)
  * [Configuration as template data](#configuration-as-template-data)
  * [Properties](#properties)
    * [`site.base_url`](#sitebase_url)
    * [`site.theme`](#sitetheme)
    * [`site.title`](#sitetitle)
    * [`site.description`](#sitedescription)
    * [`site.favicon`](#sitefavicon)
    * [`site.favicons`](#sitefavicons)
    * [`site.author`](#siteauthor)
    * [Custom properties](#custom-properties)

### Overview

### Example

Static sites managed with `hyperctl` are configured via a configuration file in YAML or JSON format.

<code-snippet ht-element filename='site.yaml (example)'>

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

</code-snippet>

### Specification

#### Configuration as template data

#### Properties

##### `site.base_url`

##### `site.theme`

##### `site.title`

##### `site.description`

##### `site.favicon`

##### `site.favicons`

##### `site.author`

##### Custom properties

<!-- Links -->

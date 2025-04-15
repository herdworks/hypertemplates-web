---
created_at: 2025-02-10T12:00:00-08:00
title: Website
summary: |
    The HyperText Management System "website" reference.
---

## Website reference

* [Overview](#overview)
* [Example](#overview)
* [Content organization](#content-organization)
* [Properties](#properties)
  * [`base_url`](#base_url)
  * [`title`](#title)
  * [`description`](#description)
  * [`author`](#author)
  * [`favicon`](#favicon)
  * [`favicons`](#favicons)
  * [`feeds`](#feeds)
  * [`metadata`](#metadata)
  * [Custom properties](#custom-properties)

### Overview

A website is a collection of [pages] (HTML documents).
A website is managed as a directory containing a configuration file in YAML (`site.yaml`) or JSON (`site.json`) format.

### Example

A HyperText Management System website configuration file.

<code-snippet ht-element filename='site.yaml'>

```yaml
---
base_url: https://preview.hypertemplates.net
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
  - link: /blog
    tags:
      - blog
      - post
      - news
      - announcement
```

</code-snippet>

The website configuration file provides a standardized set of core [properties](#properties) for layout and theme developers.

<doc-quote ht-element notice>

**NOTE:** the contents of the website configuration file are available as [template data properties] with the `site.` prefix.

</doc-quote>

### Content organization

The HyperText Management System uses the directory structure of website content files to determine how the generated website files should be organized.

```shell
site.yaml             # website configuration file
content/              # 
    index.md          # URL: /index.html
    about/            # 
        index.md      # URL: /about/index.html
        me.png        # URL: /about/me.png
    blog/             # 
        index.yaml    # URL: /blog/index.html
        helloworld/   #
            index.md  # URL: /blog/helloworld/index.html
```

For more information on how pages are managed, see the [pages reference documentation].

### Properties

#### `base_url`

#### `title`

#### `description`

#### `author`

#### `favicon`

#### `favicons`

#### `feeds`

#### `metadata`

#### Custom properties

<!-- Links -->
[pages]: /docs/reference/cms/pages/
[template data properties]: /docs/reference/core/data/#template-data-properties
[pages reference documentation]: /docs/reference/cms/pages/
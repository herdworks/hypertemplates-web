---
created_at: 2025-01-30T12:00:00-08:00
title: Reference
summary: |
    HyperTemplates reference documenation
---

<auto-toc ht-element scope='main'></auto-toc>

## Reference Documentation

* [Template attributes](#template-attributes)
* [Template data](#template-data)
* [Template pipeline](#template-pipeline)
* [Themes](#themes)
* [Static site generator](#static-site-generator)
  * [Website configuration](#website-configuration)

### Template attributes

HyperTemplates layouts are configured using a predefined set of HTML attributes.

<code-snippet ht-element filename='example.html'>

```html
<!DOCTYPE html>
<html lang='en-US'>
    <head>
        <meta charset='utf-8'>
        <title ht-content='page.title'></title>
        <meta name='description' ht-attrs='content:page.description,site.description'>
    </head>
    <body>
        <header>
            <h1 ht-content='page.title'>Placeholder title</h1>
        </header>
        <article id='article' ht-content='markdown:page.content'></article>
        <footer>
            <p>&copy; 2024 HyperTemplates</p>
        </footer>
    </body>
</html>
```

</code-snippet>

<learn-more ht-element href='/docs/reference/attributes/'></learn-more>

### Template data

Template data is content in key-value pairs used to hydrate a layout template.

```javascript
{
    site: {
        base_url: "https://hypertemplates.net",
        theme: "hyper",
        title: "HyperTemplates",
        description: "The pure-HTML templating system for the modern web"
    },
    page: {
        title: "Attributes",
        description: "HyperTemplates Attribute Reference",
        content: "..."
    }
}
```

<learn-more ht-element href='/docs/reference/data/'></learn-more>

### Template pipeline

The HyperTemplates rendering engine processes HTML templates in a pipeline.
Understanding the order of pipeline operations can help you more efficiently structure your HTML templates. 

<learn-more ht-element href='/docs/reference/pipeline/'></a>

### Themes

HyperTemplates has built-in support for themes.

```shell
# example theme structure
elements/
layouts/
  default.html
  home.html
partials/
static/
  components/
  css/
  fonts/
  js/
  img/
```

<learn-more ht-element href='/docs/reference/themes/'></learn-more>

### Static site generator

The `hyperctl` CLI tool is a fully-featured static site generator based on HyperTemplates.

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

<learn-more ht-element href='/docs/reference/cli/'></learn-more>

#### Website configuration

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
  - link: /blog
    tags: [ blog ]
```

</code-snippet>

<learn-more ht-element href='/docs/reference/cli/config/'></learn-more>

<!-- Links -->

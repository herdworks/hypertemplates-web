---
created_at: 2025-02-10T12:00:00-08:00
title: Website
description: Website reference documentation.
summary: |
    The HyperText Management System "website" reference.
---

## Website reference

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview

A website is a collection of [pages] (HTML documents).
A website is managed as a directory containing a configuration file in YAML (`site.yaml`) or JSON (`site.json`) format.

### Directory structure

Each HyperText Management System (HTMS) website is a directory. The structure of website subdirectories and files to determine how the generated website content will be organized.

<!-- Inspiration: https://gohugo.io/getting-started/directory-structure/ -->

```shell
my-website/         # website directory
  site.yaml         # website configuration file
  content/          # website content subdirectory
    index.md        # URL: /index.html
    about/          # URL: /about/
      index.md      # URL: /about/index.html
      me.png        # URL: /about/me.png
    blog/           # URL: /blog/
      index.yaml    # URL: /blog/index.html
      hello-world/  # URL: /blog/hello-world/
        index.md    # URL: /blog/hello-world/index.html
  static/           # website assets subdirectory
      favicon.ico   # URL: /favicon.ico
```

For more information on how pages are managed, see the [pages reference documentation].

### Example

A HyperText Management System website configuration file.

<code-snippet ht-block filename='site.yaml'>

```yaml
---
base_url: https://hypertemplates.net
title: HyperTemplates
description: the pure-HTML templating system for the modern web.
author:
    username: "@hypertemplates.net"
    name: HyperTemplates
    href: /
    favicon: /img/favicon-512x512.png
    email: contact@hypertemplates.net
links:
  - rel: apple-touch-icon
    href: /img/apple-touch-icon.png
    sizes: 180x180
  - rel: icon
    href: /img/apple-touch-icon.png
    sizes: 180x180
  - rel: icon
    href: /img/favicon-128x128.png
    sizes: 128x128
  - rel: icon
    href: /img/favicon-192x192.png
    sizes: 192x192
  - rel: icon
    href: /img/favicon-256x256.png
    sizes: 256x256
  - rel: icon
    href: /img/favicon-512x512.png
    sizes: 512x512
  - rel: me
    href: https://github.com/hypertemplates
  - rel: me
    href: https://mastodon.social/@herdworks
copyright: "2025"
config:
    tidy_mode: true
    theme_dir: theme
    tag_layout: tag
provider:
    kind: s3
    endpoint: https://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.r2.cloudflarestorage.com
    store: hypertemplates-net
    secrets:
        - name: access_key_id
          provider: env
          key: AWS_ACCESS_KEY_ID
        - name: secret_access_key
          provider: env
          key: AWS_SECRET_ACCESS_KEY
```

</code-snippet>

The website configuration file provides a standardized set of core [properties](#properties) for layout and theme developers.

<doc-quote ht-block notice>

**NOTE:** the contents of the website configuration file are available as [template data properties] with the `site.` prefix.
See [custom properties] for more information.

</doc-quote>

### Properties

**`site.base_url`**
: The website URL.

**`site.title`**
: The website title.
  
  The `site.title` [template data property] should be used by theme developers as the default value for the `<title>` element.

  **Example**

  ```html
  <title ht-content='page.title,site.title'></title>
  ```

**`site.description`**
: The website description.

  The `site.description` [template data property] should be used by theme developers as the default value for the `<meta name='description'>` element.

  **Example**

  ```html
  <meta name='description' ht-attrs='content:page.description,site.description'>
  ```

**`site.author`**
: The website author.

  The `site.author` property is a key-value object with the following properties: `username`, `name`, `href`, `favicon`, and `email`.

  **Sample**

  <code-snippet ht-block filename='site.yaml' highlight=5-11>

  ```yaml
  ---
  title: HyperTemplates
  description: the pure-HTML templating system for the modern web.
  ...: ...
  author:
      username: "@hypertemplates.net"
      name: "HyperTemplates"
      href: "/"
      favicon: "/favicon.ico"
      email: "contact@hypertemplates.net"
  ```

  </code-snippet>

  The `site.author` [template data property] should be used by theme developers as the default value for the `<meta name='author'>` element and related page metadata (e.g. [OpenGraph Protocol]).

  **Example**

  ```html
  <meta name='author' ht-attrs='content:page.author.name,site.author.name'>
  ```

**`site.metadata`**
: A list of website metadata properties.

  **Sample**

  <code-snippet ht-block filename='site.yaml' highlight=5-15>

  ```yaml
  ---
  title: HyperTemplates
  description: the pure-HTML templating system for the modern web.
  ...: ...
  metadata:
    - name: example
      content: example
    - property: og:type
      content: website
    - property: og:url
      content: https://hypertemplates.net/
    - property: og:title
      content: HyperTemplates
    - property: og:description
      content: the pure-HTML templating system for the modern web.
  ```

  </code-snippet>

  The `site.metadata` [template data property] should be used by theme developers as a default source for [`<meta>` elements].

  **Example**

  ```html
  <meta ht-template='meta:site.metadata' ht-attrs='name:meta.name; property:meta.property; content:meta.content'>
  ```

  <doc-quote ht-block>

  See the [HTML `<meta>` attributes] reference documentation for more information on the supported properties of a `site.metadata` value.

  </doc-quote>

**`site.links`**
: A list of website links, or [relationships], to other resources.

  **Sample**

  <code-snippet ht-block filename='site.yaml' highlight=5-9>

  ```yaml
  ---
  title: HyperTemplates
  description: the pure-HTML templating system for the modern web.
  ...: ...
  links:
    - rel: icon
      href: /favicon.ico
    - rel: me
      href: https://mastodon.social/@calebhailey
  ```

  </code-snippet>

  The `site.links` [template data property] should be used by theme developers as a source for [`<link>` elements].

  ```html
  <link ht-template='link:site.links' ht-attrs='rel:link.rel; href:link.href; type:link.type; sizes:link.sizes'>
  ```

  <doc-quote ht-block>

  See the [HTML `<link>` attributes] reference documentation for more information on the supported properties of a `site.links` value.

  </doc-quote>

**Custom properties**
: All properties defined in `site.yaml` or `site.json` files are available as [template data properties] with the `site.` prefix.
  
  **Example**

  <code-snippet ht-block filename='site.yaml' highlight='5'>

  ```yaml
  ---
  title: Example website
  description: Example website description
  ...: ...
  banana: yellow
  ```

  </code-snippet>

  In this example, the `banana` property is available in [layouts] as the `site.banana` [template data property].

### Configuration

**`site.config`**
: The website configuration.

  All `site.config` properties have default values, so these only need to be added to `site.yaml` or `site.json` if a value other than the default is preferred.

  **Example**

  ```javascript
  {
    site: {
      config: {
        builds_dir:  "builds",
        content_dir:  "content",
        data_dir:  "data",
        drafts_dir:  "drafts",
        static_dir:  "static",
        theme_dir:  "theme",
        tag_layout: "tag.html",
        refresh_interval: 0,
        tidy_mode: true
        markdown: {
          mentions: {
            href_prefix: "/tags/",
            href_suffix: "/"
          }
        }
      }
    }
  }
  ```

  The `site.config` property is a key:value template data object containing the following properties:

  * `site.config.builds_dir` (default: `"builds"`)

    Configures the build output subdirectory.

  * `site.config.content_dir` (default: `"content"`)

    Configures the page content subdirectory.

  * `site.config.data_dir` (default: `"data"`)

    Configures the [namespaced template data] subdirectory.

  * `site.config.drafts_dir` (default: `"drafts"`)

    Configures the draft pages subdirectory.

  * `site.config.static_dir` (default: `"static"`)

    Configures the static assets subdirectory.

  * `site.config.theme_dir` (default: `"theme"`)

    Configures the theme subdirectory (e.g. layouts, theme assets, etc).
    Set `site.config.theme_dir: "."` to use the website root directory as the theme directory.

  * `site.config.tag_layout` (default: `"tag.html"`)

    See [`site.config.tag_layout`](#site-config-tag_layout) below.

  * `site.config.refresh_interval` (default: integer `0`)

    See [`site.config.refresh_interval`](#site-config-refresh_interval) below.

  * `site.config.tidy_mode` (default: boolean `false`)

    See [`site.config.tidy_mode`](#site-config-tidy_mode) below.
  
  * `site.config.markdown`

    See [`site.config.markdown`](#site-config-markdown) below.

  The directory configuration settings provide HyperTemplates with instructions on where to look for the various

**`site.config.tag_layout`**
: Configures the layout to use for automatically generated tag pages (default: `"tag.html"`).

**`site.config.refresh_interval`**
: Configures [the `page.refresh` computed property](/docs/reference/cms/page/#page-refresh) interval for redirect pages.

**`site.config.tidy_mode`**
: Configures whether [template attributes] should be removed from rendered pages.
  Set `site.config.tidy_mode: true` to strip all template attributes from generated HTML files.

**`site.config.markdown`**
: The website markdown configuration.

  **Sample**

  ```javascript
  {
    site: {
      config: {
        markdown: {
          mentions: {
            href_prefix: "/tags/"
            href_suffix: "/"
          }
        }
      }
    }
  }
  ```

  The `site.config.markdown` property is a key:value template data object containing the following properties:

  * `site.config.markdown.mentions` (default: `{}`)
  * `site.config.markdown.mentions.href_prefix` (default: `"/tags/"`)
  * `site.config.markdown.mentions.href_suffix` (default: `"/"`)


### Guides

**Link Verification**
: How to configure link verification using `rel="me"` links.
  
  <learn-more ht-block href='/docs/guides/link-verification/'></learn-more>



<!-- Links -->
[pages]: /docs/reference/cms/page/
[custom properties]: #custom-properties
[template data object]: /docs/reference/core/data/#template-data-object
[template data property]: /docs/reference/core/data/#template-data-properties
[template data properties]: /docs/reference/core/data/#template-data-properties
[pages reference documentation]: /docs/reference/cms/page/
[standard metadata names]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name
[OpenGraph Protocol]: https://ogp.me
[relationships]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link
[`<meta>` elements]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta
[HTML `<meta>` attributes]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta#attributes
[`<link>` elements]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link
[HTML `<link>` attributes]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link#attributes
[layouts]: /docs/reference/core/layouts/
[namespaced template data]: /docs/reference/cms/namespaces/
[template attributes]: /docs/reference/core/attributes/
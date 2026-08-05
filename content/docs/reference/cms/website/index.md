---
created_at: 2025-02-10T12:00:00-08:00
updated_at: 2026-02-26T10:00:00-08:00
title: Website
description: Website reference documentation.
summary: |
    The HyperTexting CMS "website" reference.
---

## Website reference

<auto-toc selectors='h3,h4,h5,h6,dl:not(:has(learn-more)) dt'></auto-toc>

### Overview
------------

A website is a collection of [pages] (HTML documents).
A website is managed as a directory containing a configuration file in YAML (`site.yaml`) or JSON (`site.json`) format.

### Directory structure
-----------------------

In the HyperTexting CMS, every website is a directory.
The structure of website subdirectories and files to determine how the generated website content will be organized.

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
-----------

A HyperTexting CMS website configuration file.

<code-snippet ht-block filename='site.yaml'>

```yaml
---
base_url: https://hypertemplates.net
title: HyperTemplates
description: the pure-HTML templating system for the modern web.
copyright: "2026"
byline:
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

config:
    tidy_mode: true
    theme_dir: theme
    tag_layout: tag

providers:
  default:
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

environments:
  production: [s3]
```

</code-snippet>

The website configuration file provides a standardized set of core [properties](#properties) for layout and theme developers.

<doc-quote ht-block notice>

**NOTE:** the contents of the website configuration file are available as [template data properties] with the `site.` prefix.
See [custom properties] for more information.

</doc-quote>

### Properties
--------------

**`site.base_url`**
: The website URL.

**`site.title`**
: The website title.
  
  The `site.title` [template data property] should be used by theme developers as the default value for the `<title>` element.

  **Example**

  ```html
  <title ht-apply>${ page.title, site.title, "Placeholder" }</title>
  ```

**`site.description`**
: The website description.

  The `site.description` [template data property] should be used by theme developers as the fallback or default value for the `<meta name='description'>` element.

  **Example**

  ```html
  <meta ht-apply name='description' content='${ page.description, site.description }'>
  ```

**`site.byline`**
: The website author.

  The `site.byline` property is a key-value object with the following properties: `name`, `favicon`, `href`, and `email`.

  **Sample**

  <code-snippet ht-block filename='site.yaml' highlight=5-11>

  ```yaml
  ---
  title: HyperTemplates
  description: the pure-HTML templating system for the modern web.
  ...: ...
  byline:
      name: "HyperTemplates"
      href: "/"
      favicon: "/favicon.ico"
      email: "contact@hypertemplates.net"
  ```

  </code-snippet>

  The `site.byline` [template data property] should be used by theme developers as the default/fallback value for the `<meta name='author'>` element and related page metadata (e.g. [OpenGraph Protocol]).

  **Example**

  ```html
  <meta ht-apply name='author' content='${ page.byline.name, site.byline.name }'>
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
  <meta ht-each='meta in ${ site.metadata }' name='${ meta.name }' property='${ meta.property }' content='${ meta.content }'>
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
  <link ht-each='link in ${ site.links }' rel='${ link.rel }' href='${ link.href }' type='${ link.type }' sizes='${ link.sizes }'>
  ```

  <doc-quote ht-block>

  See the [HTML `<link>` attributes] reference documentation for more information on the supported properties of a `site.links` value.

  </doc-quote>

**`site.config`**
: Website configuration settings.

  **Sample**

  <code-snippet ht-block filename='site.yaml' highlight=5-8>

  ```yaml
  ---
  title: HyperTemplates
  description: the pure-HTML templating system for the modern web.
  ...: ...
  config:
    builds_dir: .builds
    theme: themes/ht/theme.json
    tag_layout: tag.html
  ```

  </code-snippet>

  See [Configuration](#configuration) for more information.


**`site.providers`**
: A list of named hosting provider configurations.

  **Sample**

  <code-snippet ht-block filename='site.yaml' highlight=5-19>

  ```yaml
  ---
  title: HyperTemplates
  description: the pure-HTML templating system for the modern web.
  ...: ...
  providers:
    default:
      kind: s3
      base_url: https://hypertemplates.net
      endpoint: https://5a8b6c901ff20ee02892cf121b1ead54.r2.cloudflarestorage.com
      config:
        bucket: hypertemplates-web-prod
      exclude:
        paths:
          - '(^|/)\.DS_Store$'
      secrets:
        - name: access_key_id
          key: AWS_ACCESS_KEY_ID
        - name: secret_access_key
          key: AWS_SECRET_ACCESS_KEY
  ```

  </code-snippet>

  See [Hosting Providers](#hosting-providers) for more information.

**`site.environments`**
: A list of named hosting environments.

  **Sample**

  <code-snippet ht-block filename='site.yaml' highlight=5-19>

  ```yaml
  ---
  title: HyperTemplates
  description: the pure-HTML templating system for the modern web.
  ...: ...
  environments:
    default: [s3, cdn]
    production: [s3, cdn]
    staging: [github]
  ```

  </code-snippet>

  See [Hosting Environments](#hosting-environments) for more information.

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
-----------------

**`site.config.builds_dir`**
: The build output directory (default: `"builds"`).

**`site.config.data_dir`**
: The [namespaced template data] subdirectory (default: `"data"`).

**`site.config.content_dir`** 
: The content directory (default: `"content"`).

**`site.config.layouts_dir`** 
: The [layouts] subdirectory (default: `"layouts"`).

**`site.config.fragments_dir`**
: The [fragments] subdirectory (default: `"fragments"`).

**`site.config.static_dir`** 
: The [static assets] subdirectory (default: `"static"`).

**`site.config.plugins_dir`**
: The [template variable plugins] subdirectory (default: `"plugins"`).

**`site.config.themes_dir`**
: The [themes] subdirectory (default: `"themes"`).

**`site.config.theme`** 
: The active [theme] (default: `"./theme.json"`).

  Set `site.config.theme: "./theme."` to use the website root directory as the theme directory.

**`site.config.tag_layout`**
: Configures the layout to use for automatically generated tag pages (default: `"default"`).

**`site.config.tag_path`**
: Configures the path prefix for auto-generated tag pages (default: `"tag"`).

**`site.config.tidy_mode`**
: Configures whether [template directives] should be removed from rendered pages.
  Set `site.config.tidy_mode: true` to strip all template directives from generated HTML files.

**`site.config.markdown`**
: The website markdown configuration.

  **Sample**

  <code-snippet ht-block filename='site.yaml' highlight=5-19>

  ```yaml
  ---
  title: HyperTemplates
  description: the pure-HTML templating system for the modern web.
  ...: ...
  config:
    markdown:
      mentions:
        href_prefix: /tags/
        href_suffix: /
  ```

  </code-snippet>

  The `site.config.markdown` property is a key:value template data object containing the following properties:

  * `mentions` (default: `{}`)
  * `mentions.href_prefix` (default: `"/tags/"`)
  * `mentions.href_suffix` (default: `"/"`)

  <doc-quote ht-block info>

  **NOTE:** the `href_prefix` and `href_suffix` properties are used to configure the `<a href>` for hashtag links.
  Use `href_prefix: "https://x.com/hashtag/"` and `href_suffix: "/"` to create links to an external hashtag service.

  </doc-quote>


### Hosting Providers
---------------------

**`site.providers.<name>`**
: Hosting providers are named using a [template data key].

  **Sample**

  <code-snippet ht-block filename='site.yaml' highlight=6>

  ```yaml
  ---
  title: HyperTemplates
  description: the pure-HTML templating system for the modern web.
  ...: ...
  providers:
    github:
      kind: git
      endpoint: git@github.com:herdworks/hypertemplates-web.git
      config:
        branch: gh-pages
        publish_dir: .
      secrets:
        - name: ssh_private_key
          key: GH_PRIVATE_KEY
  ```

  </code-snippet>

  In this this example, we have configured a provider named `github`.

**`site.providers.<name>.kind`**
: The hosting provider kind (required).

  **Supported provider kinds:**
  * `s3` 
  * `git`

**`site.providers.<name>.endpoint`**
: The hosting provider endpoint (required).
  
  All hosting providers require an endpoint URL.

**`site.providers.<name>.config`**
: Provider-specific configuration settings (optional).

  **Examples**

  ```yaml
  providers:
    cloudflare_r2:
      kind: s3
      endpoint: https://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.r2.cloudflarestorage.com
      config:
        bucket: my-website
      secets:
        - name: access_key_id
          key: AWS_ACCESS_KEY_ID
        - name: secret_access_key
          key: AWS_SECRET_ACCESS_KEY
  ```

**`site.providers.<name>.secrets`**
: Authentication secrets for accessing the configured provider (required).


### Hosting Environments
------------------------

**`site.environments.<name>`**
: Hosting environments are named using a [template data key].

  **Sample**

  <code-snippet ht-block filename='site.yaml' highlight=6>

  ```yaml
  ---
  title: HyperTemplates
  description: the pure-HTML templating system for the modern web.
  ...: ...
  environments:
    production: [git]
  ```

  </code-snippet>

  In this this example, we have configured a hosting environment named `production`.

**`site.environments.<name>` providers**
: Hosting environments are configured by providing a list of [provider names](#site-providers-name).

  **Sample**

  <code-snippet ht-block filename='site.yaml' highlight='6,16'>

  ```yaml
  ---
  title: HyperTemplates
  description: the pure-HTML templating system for the modern web.
  ...: ...
  providers:
    github:
      kind: git
      endpoint: git@github.com:herdworks/hypertemplates-web.git
      config:
        branch: gh-pages
        publish_dir: .
      secrets:
        - name: ssh_private_key
          key: GH_PRIVATE_KEY
  environments:
    production: [github]
  ```

  </code-snippet>

  In this this example, we have configured the `production` environment to use the `github` provider. 

### Guides
----------

**Link Verification**
: How to configure link verification using `rel="me"` links.
  
  <learn-more ht-block href='/docs/guides/link-verification/' data-toc='h4' title='Link Verification'></learn-more>



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
[namespaced template data]: /docs/reference/cms/namespaces/
[layouts]: /docs/reference/core/layouts/
[fragments]: /docs/reference/core/fragments/
[static assets]: /docs/reference/cms/assets/
[template variable plugins]: /docs/reference/core/variables/#template-variable-plugins
[themes]: /docs/reference/core/themes/
[template directives]: /docs/reference/core/directives/
[HyperMark]: /docs/reference/core/markdown/
[template data key]: /docs/reference/core/data/#template-data-keys

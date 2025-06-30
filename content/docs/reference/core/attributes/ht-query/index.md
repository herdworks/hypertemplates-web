---
created_at: 2025-05-22T12:00:00-08:00
title: ht-query attribute
summary: |
    `ht-query` attribute reference documentation
breadcrumb: ht-query
---

## `ht-query` attribute reference

<auto-toc selectors='h3,h4,h5,h6'></auto-toc>

### Overview
------------

The `ht-query` [attribute] annotates URLs in HTML attributes with query parameters.

<doc-quote ht-block caution>
**NEW!** The `ht-query` attribute is available in `hyperctl` version 0.16.0 and later.
</doc-quote>

### Example
-----------

The `ht-query` attribute is used to annotate URLs with query parameters.

One use case for `ht-query` is to append a "version query" to `<link>` and `<script>` tag `href` and `src` attributes for [cache busting](#cache-busting) purposes.
Let's see how that works in the following example.

<code-snippet ht-block filename='partials/head.html' highlight='3-8,11' line-numbers='on'>

```html
<!-- Global Styles -->
<link rel='stylesheet' href='/css/reset.css'>
<link rel='stylesheet' href='/css/variables.css' ht-query='href?version:site.version'>
<link rel='stylesheet' href='/css/colors.css' ht-query='href?version:site.version'>
<link rel='stylesheet' href='/css/typography.css' ht-query='href?version:site.version'>
<link rel='stylesheet' href='/css/grid.css' ht-query='href?version:site.version'>
<link rel='stylesheet' href='/css/styles.css' ht-query='href?version:site.version'>
<link rel='stylesheet' href='/css/chroma-base16-snazzy.css' ht-query='href?version:site.version'>

<!-- Global Scripts -->
<script src='/js/main.js' defer ht-query='src?version:site.version'></script>
```

</code-snippet>

In this example the `ht-query` attribute is used to append a `?version=` query parameter to our CSS and JavaScript files.
With this example we can easily update these external resource URLs for cache busting purposes.
Here's what the result would look like if `site.version` had a value of `2`.

```html
<!-- Global Styles -->
<link rel='stylesheet' href='/css/reset.css'>
<link rel='stylesheet' href='/css/variables.css?version=2'>
<link rel='stylesheet' href='/css/colors.css?version=2'>
<link rel='stylesheet' href='/css/typography.css?version=2'>
<link rel='stylesheet' href='/css/grid.css?version=2'>
<link rel='stylesheet' href='/css/styles.css?version=2'>
<link rel='stylesheet' href='/css/chroma-base16-snazzy.css?version=2'>

<!-- Global Scripts -->
<script src='/js/main.js?version=2' defer></script>
```

Nice!
With this example `ht-query` attribute we can version our CSS and JavaScript files by changing a single property.

### Specification
-----------------

#### Supported elements
-----------------------

The `ht-query` attribute can be used with any HTML element.

**Example**

```html
<link rel='stylesheet' href='/css/styles.css' ht-query='href?version=site.version'>
```

#### Attribute syntax
---------------------

The `ht-base` attribute is expressed as a semicolon-separated list of `attribute?param:value` triplets.

The `attribute` indicates which element [HTML attribute] should be annotated. 
The `param` indicates the [URLSearchParams] _key_ name.
The `value` is comma-separated list of dot-notation style references to one or more [template data properties]. If multiple properties are defined for a given template variable, the first non-empty property will be used.

**Example**

```html
<link rel='stylesheet' href='/css/styles.css' ht-query='href?version=site.version'>
```

In this example `ht-query` is used to annotate the `href` attribute URL with a `version` attribute using the value from a [custom template data property] `site.version`.
If `site.version` is set to `2`, the resulting element would look like the following:

```html
<link rel='stylesheet' href='/css/styles.css?version=2'>
```

#### Cache busting
------------------

Web browsers do a lot of work to make web pages load as fast as possible.
One of the things modern browsers do well is avoid reloading files that have already been downloaded.
This practice is called [caching] and it generally works well in providing your website visitors with a better experience by loading pages faster.
However, this same caching behavior can sometimes cause unexpected results when you make changes to certain files (e.g. CSS and JavaScript). 
Without providing some indication to help the browser determine that it needs to download a new version or a replacement of certain files, some users may not see changes you've made.
Techniques used for updating URLs to inform browsers to re/download files are called [cache busting](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching#cache_busting).


<!-- Links -->
[HTML attribute]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[attribute]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[template data]: /docs/reference/core/data/
[template data properties]: /docs/reference/core/data/#template-data-properties
[attribute selector]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors
[`page.path`]: /docs/reference/cms/page/#page-path
[`page.feed.pages`]: /docs/reference/cms/page/#page-feed-pages
[Cloudflare Images]: https://www.cloudflare.com/developer-platform/products/cloudflare-images/
[data: URLs]: https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Schemes/data
[document fragment link]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links#document_fragments
[URLSearchParams]: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
[custom template data property]: /docs/reference/cms/website/#custom-properties
[caching]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching

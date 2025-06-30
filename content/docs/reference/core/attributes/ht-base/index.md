---
created_at: 2025-05-22T12:00:00-08:00
title: ht-base attribute
summary: |
    `ht-base` attribute reference documentation
breadcrumb: ht-base
---

## `ht-base` attribute reference

<auto-toc selectors='h3,h4,h5,h6'></auto-toc>

### Overview
------------

The `ht-base` [attribute] specifies the base URL to use for all relative URLs in a given element. 

The `ht-base` attribute is inspired by the HTML `<base>` element which serves a similar purpose.
Unlike the `<base>` element which can only only be used once per document, there can be multiple `ht-base` elements in a template.

<doc-quote ht-block caution>
**NEW!** Available in `hyperctl` version 0.15.0 and later.
</doc-quote>

### Example
-----------

The `ht-base` attribute is used to resolve relative links.
Let's take the following Markdown as an example.
It defines an image with some alt text.

<code-snippet ht-block filename='content/blog/hello-world/index.md' highlight='5' line-numbers='on'>

```plaintext
---
title: Hello World
---

![blog post cover image description](cover.png)

Hello, world! 👋
```

</code-snippet>

This Markdown image references an image with the relative path `cover.png`.
Given the page index file path of `content/blog/hello-world/index.md` we could expect to find the source image file at `content/blog/hello-world/cover.png`.
This Markdown image would be rendered as follows:

```html
<img src='cover.png' alt='blog post cover image description' />
```

This would result in an image that is displayed correctly when viewed on the `/blog/hello-world/` page of our website.
But what would happen if this `<img>` tag were to appear in a feed on the `/blog/` page?
The browser would resolve `src='cover.png` to the URL `/blog/cover.png` instead of `/blog/hello-world/cover.png`.

<mark>This kind of templating challenge can be solved using the `ht-base` attribute.</mark>
Let's look at how that works in the following example which shows the `ht-base` attribute being used to template a feed page `<blog-post>` element.

<code-snippet ht-block filename='layouts/feed.html' highlight='9'>

```html
<html lang='en-US'>
    <head>
        <meta ht-include='partials/head.html' />
        <style>/* insert feed styles here */</style>
    </head>
    <body>
        <header ht-include='partials/header.html'></header>
        <main>
            <feed-entry ht-template='entry:page.feed.pages' ht-base='src:entry.path'>
                <entry-meta>
                    <h3 ht-content='entry.title'>Post Title</h3>
                </entry-meta>
                <entry-summary ht-content='entry.summary,entry.content'></entry-summary>
                <entry-link>
                    <a ht-attrs='href:entry.path'>Continue reading &rightarrow;</a>
                </entry-link>
            </feed-entry>
        </main>
        <footer ht-include='partials/footer'></footer>
    </body>
</html>
```

</code-snippet>

The `ht-base='src:entry.path'` attribute instructs HyperTemplates to use the [template data] value of `entry.path` to resolve relative `src` attribute URLs.
If we wanted to resolve `href` attributes as well, we could amend the attribute to `ht-base='src:entry.path;href:entry.path'`.

### Specification
-----------------

#### Supported elements
-----------------------

The `ht-base` attribute can be used with any HTML element.

**Example**

```html
<blog-feed>
    <blog-post ht-template='post:page.feed.pages' ht-base='src:post.path'>
        <!-- Blog post layout -->
    </blog-post>
</blog-feed>
```

#### Attribute syntax
---------------------

The `ht-base` attribute is expressed as a semicolon-separated list of `attribute:value` pairs. 

The `attribute` is an [attribute selector] sans the square brackets (e.g. `src` or `href`). 
HyperTemplates will wrap the provided `attribute` in square brackets, so `src` becomes `[src]` and query the rendered HTML for all child elements matching the attribute selector (i.e. `src` becomes `element.querySelectorAll("[src]")`).

The `value` is comma-separated list of dot-notation style references to one or more [template data properties]. If multiple properties are defined for a given template variable, the first non-empty property will be used.

**Example**

```html
<blog-feed>
    <blog-post ht-template='page:page.feed.pages' ht-base='src:site.cdn,post.path; href:post.path'>
        <!-- Blog post layout -->
    </blog-post>
</blog-feed>
```

In this example two `ht-base` directives are configured: one that will resolve `src` attributes, and one that will resolve `href` attributes.

The `src:site.cdn,post.path` attribute will use the `site.cdn` [custom property](/docs/reference/cms/website/#custom-properties) as the base URL (if configured), otherwise it will use the [`page.path`] property.
Being able to configure a global/default value like `site.cdn` is helpful in case we use an external image hosting service like [Cloudflare Images].

<doc-quote ht-block info>

**NOTE:** because this example uses `ht-template='page:page.feed.pages'` to remap the `page.` prefix to the contents of pages in a feed (see [`page.feed.pages`]) rather than the _current page_, it will effectively resolve relative links for each page in the feed using the correct path.

For example, let's assume `page.feed.pages` contains two pages with the following paths: 

1. `/blog/hello-world/`
1. `/blog/hello-again/`

When `ht-template` processes the first page, the value of `page.path` will be `/blog/hello-world/`.
When it processes the second page, the value of `page.path` will be `/blog/hello-again/`.

</doc-quote>

#### Absolute links
-------------------

HyperTemplates uses the following rules to determine if a URL is "absolute":

1. URLs that begin with the `http:` or `https:` scheme are absolute links
1. URLs that begin with the `data:` scheme are absolute links (see [data: URLs])
1. URLs that begin with `/` are absolute links

All other URLs are considered relative links and subject to resolution by `ht-base`, when configured.


<!-- Links -->
[attribute]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[template data]: /docs/reference/core/data/
[template data properties]: /docs/reference/core/data/#template-data-properties
[attribute selector]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors
[`page.path`]: /docs/reference/cms/page/#page-path
[`page.feed.pages`]: /docs/reference/cms/page/#page-feed-pages
[Cloudflare Images]: https://www.cloudflare.com/developer-platform/products/cloudflare-images/
[data: URLs]: https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Schemes/data
[document fragment link]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links#document_fragments

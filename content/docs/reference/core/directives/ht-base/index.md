---
created_at: 2025-05-22T12:00:00-08:00
updated_at: 2026-08-04T10:00:00-08:00
title: ht-base directive
summary: |
    `ht-base` directive reference documentation
---

## `ht-base` directive reference

<auto-toc selectors='h3,h4,h5,h6'></auto-toc>

### Overview
------------

The `ht-base` directive specifies a base URL to use for relative attribute URLs.
The `ht-base` directive applies to the target element and its child elements.

The `ht-base` directive is inspired by the [HTML `<base>` element], which serves a similar purpose.
However, unlike the HTML <base> element (which can only only be used once per document), multiple `ht-base` directives can be used to configure more flexible relative URL resolution.

### Example
-----------

The `ht-base` directive is used to resolve relative links.
Let's take the following Markdown as an example.
It defines an image with some alt text.

<code-snippet ht-block filename='content/blog/hello-world/index.md' highlight='6' line-numbers='on'>

```plaintext
---
title: Hello World
canonical_url: https://example.com/blog/hello-world/
---

![blog post cover image description](cover.png)

Hello, world! 👋
```

</code-snippet>

This Markdown contains an image with alt text and a relative path (`cover.png`), which would be rendered as follows:

```html
<img src='cover.png' alt='blog post cover image description' />
```

If this `<img>` element is rendered on a page at `https://example.com/blog/hello-world/`, the relative `src='cover.png'` attribute is implicitly resolved to `https://example.com/blog/hello-world/cover.png`.

However, if this same `<img>` element is rendered in a feed page at `https://example.com/blog/`, the relative `src='cover.png'` attribute is implicitly resolved to `https://example.com/blog/cover.png`.

<mark>This kind of templating challenge can be solved using the `ht-base` directive.</mark>
Note how the `ht-base` directive is used to resolve `src` attribute URLs in the following layout:

<code-snippet ht-block filename='layouts/feed.html' highlight='9'>

```html
<html lang='en-US'>
    <head>
        <!-- standard head elements go here -->
    </head>
    <body>
        <header ht-include='fragments/header.html'></header>
        <main>
            <blog-feed>
                <blog-post ht-each='page in ${ page.feed.pages }' ht-base='src on ${ page.canonical_url }'>
                    <post-meta ht-if='${ page.title }'>
                        <h3 ht-apply>${ page.title }</h3>
                    </post-meta>
                    <post-summary ht-apply>
                        ${ markdown(page.summary, page.content) }
                    </post-summary>
                    <post-link>
                        <a ht-apply href='${ page.canonical_url }'>Continue reading &rightarrow;</a>
                    </post-link>
                </blog-post>
            </blog-feed>
        </main>
        <footer ht-include='fragments/footer'></footer>
    </body>
</html>
```

</code-snippet>

The `ht-base='src on ${ page.canonical_url }'` directive instructs HyperTemplates to use the [template data] value of `page.canonical_url` to resolve relative `src` attribute URLs.

<doc-quote ht-block notice>

**NOTE:** If we wanted to resolve `href` attributes in addition to `src` attributes, we could add a second `ht-base` directive (see [multiple directives](#multiple-directives)).

```html
<blog-post ht-each='page in ${ page.feed.pages }'
           ht-base='src on ${ page.canonical_url }'
           ht-base='href on ${ page.canonical_url }'>
    <!-- post preview -->
</blog-post>
```

</doc-quote>

### Specification
-----------------

#### Supported elements
-----------------------

The `ht-base` directive can be used with any HTML element.

**Example**

```html
<blog-feed>
    <blog-post ht-each='post in ${ page.feed.pages }' ht-base='src on ${ post.canonical_url }'>
        <!-- post preview -->
    </blog-post>
</blog-feed>
```

#### Attribute syntax
---------------------

Each `ht-base` directive may contain exactly one `attribute on ${ variable }` expression:
The `attribute` is any attribute name that contains URL values (e.g. `src` or `href`).
The `variable` is any [template variable] that resolves to an absolute URL.

**Example**

```html
<blog-feed>
    <blog-post ht-each='post in ${ page.feed.pages }' ht-base='src on ${ post.canonical_url }'>
        <!-- post preview -->
    </blog-post>
</blog-feed>
```

In this example, `ht-base` resolves all child `src` attributes using the value of `post.canonical_url`.

#### Multiple directives
------------------------

Use multiple `ht-base` directives to configure URL resolvers for multiple attributes.
When using multilple `ht-base` directives the attribute selectors must be unique (i.e. you cannot set two `ht-base='href on ${ ... }'` directives).

```html
<blog-feed>
    <blog-post ht-each='page in ${ page.feed.pages }'
               ht-base='src on ${ site.cdn.base_url, page.canonical_url }'
               ht-base='href on ${ page.canonical_url }'>
        <!-- post preview -->
    </blog-post>
</blog-feed>
```

In this example two `ht-base` directives are configured: one that will resolve `src` attributes, and one that will resolve `href` attributes.
The `${ site.cdn.base_url, page.canonical_url }` portion of the directive will use the `site.cdn.base_url` [custom property](/docs/reference/cms/website/#custom-properties) as the base URL (if configured), otherwise it will use the [`page.canonical_url`] property.
Being able to configure a global/default value like `site.cdn` is helpful in case we use an external image hosting service like [Cloudflare Images].

#### Absolute links
-------------------

HyperTemplates uses the following rules to determine if a URL is "absolute":

1. URLs that begin with the `http:` or `https:` scheme are absolute links
1. URLs that begin with the `data:` scheme are absolute links (see [data: URLs])
1. URLs that begin with `/` are absolute links

All other URLs are considered relative links and subject to resolution by `ht-base`, when configured.


<!-- Links -->
[attribute]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[HTML `<base>` element]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/base
[template data]: /docs/reference/core/data/
[template data properties]: /docs/reference/core/data/#template-data-properties
[attribute selector]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors
[`page.path`]: /docs/reference/cms/page/#page-path
[`page.feed.pages`]: /docs/reference/cms/page/#page-feed-pages
[Cloudflare Images]: https://www.cloudflare.com/developer-platform/products/cloudflare-images/
[data: URLs]: https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Schemes/data
[document fragment link]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links#document_fragments
[template variable]: /docs/reference/core/variables/
[`page.canonical_url`]: /docs/reference/cms/page/#page-canonical_url
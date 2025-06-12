---
created_at: 2025-02-10T12:00:00-08:00
title: Feeds
summary: The HyperTexting CMS "feeds" reference
---

# Feeds reference

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview
------------

A feed is a collection of pages.
HyperTexting feeds are generated in [Atom] format by default.


### Example
-----------

Feeds are configured using the [`page.feed`] property.

<code-snippet ht-block filename='content/blog/index.md' highlight='5-9'>

```plaintext
---
created_at: 2025-06-02T12:00:00-07:00
title: Blog
description: Stay up-to-date with all the latest website news
feed:
    title: Blog
    tags:
      - blog
      - news
---
```

</code-snippet>

This example shows a feed that will include all pages with the `blog` or `news` tag.

### Properties
--------------

**`feed.title`**
: The feed title.

  Defaults to the value of the [`site.title`] property.

**`feed.description`**
: The feed description.

  Defaults to the value of the [`site.description`] property.

**`feed.author`**
: The feed author.

  Defaults to the value of the [`site.author`] property.

**`feed.tags`**
: Tag-based feed filters.

  An array of strings.

**`feed.paths`**
: Path-based feed filters.
  
  An array of strings.
  Supports regular expressions.

**`feed.pages`**
: A computed property containing the feeds pages.
  
  The `feed.pages` property is an array of [page] objects (i.e. page [template data]).

<!-- Links -->
[Atom]: https://www.ietf.org/rfc/rfc4287.txt
[`page.feed`]: /docs/reference/core/page/#page-feed
[`site.title`]: /docs/reference/cms/website/#site-title
[`site.description`]: /docs/reference/cms/website/#site-description
[`site.author`]: /docs/reference/cms/website/#site-author
[page]: /docs/reference/cms/page/
[`page.feed.pages`]: /docs/reference/cms/page/#page-feed-pages
[template data]: /docs/reference/core/data/
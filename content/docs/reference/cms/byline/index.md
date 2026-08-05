---
created_at: 2025-02-10T12:00:00-08:00
title: Bylines
summary: The HyperTexting CMS "bylines" reference
---

# Bylines reference

<auto-toc selectors='h3,h4,h5,h6,dl:not(:has(learn-more)) dt'></auto-toc>

### Overview
------------

The author of a HyperTexting website or individual web page is a byline. 
Bylines are configured using [`site.byline`] and [`page.byline`].

### Example
-----------

<code-snippet ht-block filename='site.yaml' highlight='7-11'>

```yaml
---
base_url: https://hypertemplates.net
title: HyperTemplates
description: The pure-HTML templating system for the modern web.
copyright: "2026"
author: Herd Works, Inc.
byline:
    username: '@hypertemplates.net'
    name: HyperTemplates
    favicon: /img/favicon-512x512.png
    href: /
...: ...
```

</code-snippet>

### Properties
--------------

**`byline.name`**
: The website display name (e.g. `HyperTemplates`).

**`byline.username`**
: The website author root domain name in username format (e.g. `@hypertemplates.net`).

  Defaults to the root domain of [`site.base_url`].

**`byline.href`**
: The website author href. 

  Defaults to `/`. 

**`byline.favicon`**
: The website author favicon URL.

**`byline.email`**
: The website author contact email address.

### Guides
----------

:construction: Coming soon... :construction:

<!-- Links -->
[`page.byline`]: /docs/reference/cms/page/#page-byline
[`site.base_url`]: /docs/reference/cms/website/#site-base_url
[`site.byline`]: /docs/reference/cms/website/#site-byline

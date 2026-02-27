---
created_at: 2026-02-26T10:00:00-08:00
updated_at: 2026-02-26T10:00:00-08:00
title: Fragments
description: HyperTemplates Fragment reference documentation.
breadcrumb: Fragments
---

## Fragments

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview
------------

A HyperTemplates fragment is an [HTML DocumentFragment].
Generally speaking, a HyperTemplates layout is an HTML fragment _template_ with at least one [HyperTemplates attribute], but this is not a hard requirement.

HyperTemplates fragments are the most useful building block in the HyperTemplates templating system.

### Example
-----------

This example shows a simple HyperTemplates fragment.

<code-snippet ht-block filename='layouts/default.html'>

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

### Specification
-----------------

#### Valid HTML
---------------

Fragments must be valid HTML DocumentFragment.
Fragments must not contain `<html>`, `<head>`, or `<body>` elements.
From a practical perspective a HyperTemplates fragment a file containing valid HTML with at least one [template attribute].
To learn more about how to develop HyperTemplates fragments, please visit the [HyperTemplates attribute reference].


<!-- Links -->
[HTML DocumentFragment]: https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
[HyperTemplates attribute reference]: /docs/reference/core/attributes
[HyperTemplates attribute]: /docs/reference/core/attributes
[template attribute]: /docs/reference/core/attributes

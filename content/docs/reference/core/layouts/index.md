---
created_at: 2025-01-26T11:00:00-08:00
title: Layouts
description: HyperTemplates Layout reference documentation.
breadcrumb: Layouts
---

## Layouts

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview

A HyperTemplates layout is an [HTML document].
Generally speaking, a HyperTemplates layout is an HTML document _template_ with at least one [HyperTemplates attribute], but this is not a hard requirement.

HyperTemplates layouts are the most important building block in the HyperTemplates templating system.

### Example

This example shows a simple HyperTemplates layout.

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

#### Valid HTML

Layouts must be valid HTML documents.
That's technically the entire specification.
From a practical perspective a HyperTemplates layout is a valid HTML document with at least one [template attribute].
To learn more about how to develop HyperTemplates layouts, please visit the [HyperTemplates attribute reference].

### Guides

**Precompiling layouts**
: How to precompile layouts for improved performance & theme distribution.

  <learn-more ht-block href='/docs/guides/precompiling-layouts/'>


<!-- Links -->
[HTML document]: /docs/#introduction-to-templating
[HyperTemplates attribute reference]: /docs/reference/core/attributes
[HyperTemplates attribute]: /docs/reference/core/attributes
[template attribute]: /docs/reference/core/attributes

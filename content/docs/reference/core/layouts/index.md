---
created_at: 2025-01-26T11:00:00-08:00
title: Layouts
summary: |
    Layouts
---

## Layouts

* [Overview](#overview)
* [Example](#specification)
* [Specification](#specification)
* [Guides](#guides)

### Overview

A HyperTemplates layout is an [HTML document].
Generally speaking, a HyperTemplates layout is an HTML document _template_ with at least one [HyperTemplates attribute], but this is not a hard requirement.

HyperTemplates layouts are the most important building block in the HyperTemplates templating system.

### Example

This example shows a simple HyperTemplates layout.

<code-snippet ht-element filename='layouts/default.html'>

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
That's the entire specification.
To learn more about how to develop HyperTemplates layouts, please visit the [HyperTemplates attribute reference].

### Guides

#### Precompiling layouts

Coming soon...

<!-- Links -->
[HTML document]: /docs/#introduction-to-templating
[HyperTemplates attribute reference]: /docs/reference/core/attributes
[HyperTemplates attribute]: /docs/reference/core/attributes
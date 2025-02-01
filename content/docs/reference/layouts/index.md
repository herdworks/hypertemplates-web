---
created_at: 2025-01-24T16:00:00-08:00
updated_at: 2025-01-24T16:00:00-08:00
title: Layouts
---

## HyperTemplates Layouts

A HyperTemplates layout is an HTML5 document containing one or more [template directives](#template-directives).

<code-snippet hyper-code filename='layout.html' highlight='5,8' with-line-numbers>

```html
<!DOCTYPE html>
<html lang='en-US'>
    <head>
        <meta charset='utf-8'>
        <title data-hyper-content='page.title'></title>
    </head>
    <body>
        <section id='article' data-hyper-content='page.content'></section>
    </body>
</html>
```

</code-snippet>

### Template Directives

HyperTemplates uses HTML element attributes for configuring layouts.
In [strict mode](/docs/reference/config/#strict-mode), HyperTemplates requires all template directives to be [HTML `data-*` attributes]. 
However, since most modern web browsers aren't so strict about HTML validation, HyperTemplates also supports custom element attributes as template directives.

The complete set of template directives supported by HyperTemplates are as follows:

* `data-hyper-include` or `hyper-include` (see: [Template Includes](/docs/reference/layouts/includes/))
* `data-hyper-if` or `hyper-if` (see: [Template Conditionals](/docs/reference/layouts/conditionals/))
* `data-hyper-not` or `hyper-not` (see: [Template Conditionals](/docs/reference/layouts/conditionals/))
* `data-hyper-template` or `hyper-template` (see: [Template Iterators](/docs/reference/layouts/iterators/))
* `data-hyper-attrs` or `hyper-attrs` (see: [Attribute Templating](/docs/reference/layouts/attributes/))
* `data-hyper-content` or `hyper-content` (see: [Content Templating](/docs/reference/layouts/content/))
* `data-hyper-code` or `hyper-code` (see: [Shortcode Templating](/docs/reference/layouts/codes/))

### Why HTML Attributes?

See [why HTML]?


<!-- Links -->
[HTML `data-*` attributes]: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*
[Why HTML]: /docs/#why-html
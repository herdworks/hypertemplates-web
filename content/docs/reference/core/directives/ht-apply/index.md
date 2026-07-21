---
created_at: 2026-05-06T12:00:00-07:00
updated_at: 2026-05-06T12:00:00-07:00
title: ht-apply directive
summary: |
    `ht-apply` directive reference documentation
breadcrumb: ht-apply
---

## `ht-apply` directive reference

<auto-toc selectors='h3,h4,h5,h6'></auto-toc>

### Overview 
------------

The `ht-apply` directive performs [variable substitution] on the target HTML elements [attributes] and child [text nodes].

### Example
-----------

This example shows the `ht-apply` directive being used to template the `<title>` element.

<code-snippet ht-block filename='layout.html' highlight='4-5' line-numbers='on'>

```html
<html lang='en-US'>
    <head>
        <meta charset='utf-8'>
        <title ht-apply>${site.title} | ${page.title}</title>
        <meta ht-apply name='description' content='${ page.description, "" }'>
    </head>
    <body>
        <header></header>
        <main></main>
        <footer></footer>
    </body>
</html>
```

</code-snippet>

<details><summary><strong>Example output <code>index.html</code></strong></summary>

Let's see what happens when we process this template with the following [template data].

```javascript
{
    site: {
        title: "HyperTemplates"
    },
    page: {
        title: "ht-apply directive",
        description: "ht-apply directive reference documentation"
    }
}
```

The `<title>` and `<meta name='description'>` elements are updated with the variables substituted:

```html
<html lang='en-US'>
    <head>
        <meta charset='utf-8'>
        <title>HyperTemplates | ht-apply directive</title>
        <meta name='description' content='ht-apply directive reference documentation'>
    </head>
    <body>
        <header></header>
        <main></main>
        <footer></footer>
    </body>
</html>
```

</details>

### Specification
-----------------

#### Supported elements
-----------------------

The `ht-apply` directive can be used with any HTML element, including [void elements].

```html
<meta ht-apply name='description' content='${ page.description, "Placeholder description." }' />
```

#### Directive syntax
---------------------

The `ht-apply` directive is an [HTML boolean attribute].
If it is present, HyperTemplates will process the element as a nested layout template.

**Example:**

```html
<title ht-apply='false'>${ page.title }</pull-quote>
```

This example demonstrates that `ht-apply` directives are invoked by the presence of the `ht-apply` attribute (i.e. `ht-apply` attribute values are ignored).

#### Implicit variable substitution
-----------------------------------

The `ht-apply` directive is implied by the [`ht-template`] and [`ht-block`] directives, so it is not necessary to set the `ht-apply` attribute to invoke variable substitution on `ht-template` and `ht-block` elements.

**Example**

In this example, it is not necessary to add the `ht-apply` directive to the `<a>` element.
Variable substitution is implied by `ht-template`.

```html
<header>
    <nav>
        <menu>
            <a ht-template='link:data.nav.links' href='${ link.href }'>
        </menu>
    </nav>
</header>
```


<!-- Links -->
[`ht-block`]: /docs/reference/core/directives/ht-block/
[`ht-template`]: /docs/reference/core/directives/ht-template/
[attributes]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes
[HTML boolean attribute]: https://developer.mozilla.org/en-US/docs/Glossary/Boolean/HTML
[text nodes]: https://developer.mozilla.org/en-US/docs/Web/API/Text
[variable substitution]: /docs/reference/core/variables/
[void elements]: https://developer.mozilla.org/en-US/docs/Glossary/Void_element

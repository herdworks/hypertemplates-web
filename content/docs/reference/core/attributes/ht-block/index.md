---
created_at: 2025-02-03T12:00:00-08:00
title: ht-block attribute
summary: |
    `ht-block` attribute reference documentation
breadcrumb: ht-block
---

## `ht-block` attribute reference

<auto-toc selectors='h3,h4,h5,h6'></auto-toc>

### Overview 
------------
The `ht-block` attribute progressively enhances a [custom element].

<doc-quote ht-block success>

**PROTIP:** the `ht-block` attribute is the only template attribute that is accessible from your content. ✨

The `ht-block` attribute was heavily inspired by [Hugo Shortcodes] and is intended to be used for inserting custom elements into your content.
This effectively exposes a subset of HyperTemplates templating capabilities to content management systems (i.e. whereever you edit content that will be rendered using HyperTemplates).

</doc-quote>

### Specification
-----------------

This example shows the `ht-block` attribute being used to enhance a [Markdown] code block.

<code-snippet ht-block filename='index.md' highlight='5' line-numbers='on'>

~~~plaintext
### Example
-----------

This example shows the `ht-content` attribute being used to template the `<title>` and `<h1>` elements.

<code-snippet ht-block filename='layout.html' highlight='5,9' line-numbers='on'>

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title ht-content='page.title,site.title'>Placeholder Title</title>
    </head>
    <body>
        <header>
            <h1 ht-content='page.title'>Hello, world.</h1>
        </header>
        <article>
            <p>Lorem ipsum, hipsters get some.</p>
        </article>
    </body>
</html>
```

</code-snippet>
~~~

</code-snippet>

In fact, this example is an excerpt from the [`ht-content` reference documentation] content file.

#### Supported elements
-----------------------

The `ht-block` attribute was designed to be used with [custom elements].

#### Attribute syntax
---------------------

The `ht-block` attribute is an [HTML boolean attribute].
If it it set, HyperTemplates will process the element as a nested layout template.

#### Custom element include sources
-----------------------------------

HyperTemplates processes HTML elements with the `ht-block` attribute as nested layout templates.
In practice, `ht-block` elements are what you might expect if you combined [`ht-include`] and [`ht-template`].
`ht-block` differs from `ht-include` in that `ht-block` tag names are used to lookup external sources.

**Example**

```plaintext
<newsletter-signup ht-block></newsletter-signup>
```

In this example Markdown document, the `ht-block` attribute will cause HyperTemplates to replace the `newsletter-signup` element with the rendered contents of `elements/newsletter-signup.html`.

#### Custom element template data
---------------------------------

HyperTemplates processes HTML elements with the `ht-block` attribute as nested layout templates.
In practice, `ht-block` elements are what you might expect if you combined [`ht-include`] and [`ht-template`].
`ht-block` differs from `ht-template` in how their respective [template data objects] are constructed.
The `ht-block` attribute will cause HyperTemplates to construct a template data object using the placeholder element attributes as [template data properties], plus a single property called `content` with the body of the element as its value.

**Example**

```plaintext
<pull-quote ht-block cite='Caleb Hailey'>

The HyperTemplates `ht-block` attribute is fun and useful.

</pull-quote>
```

In this example Markdown document, the `ht-block` attribute will cause HyperTemplates to render the layout of `elements/pull-quote.html` with a template data object containing two properties: `cite` and `content`.

```javascript
{
    cite: "Caleb Hailey",
    content: "<p>The HyperTemplates <code>ht-block</code> attribute is fun and useful.</p>"
}
```


<!-- Links -->
[custom element]: https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
[custom elements]: https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
[hugo shortcodes]: https://gohugo.io/content-management/shortcodes/
[markdown]: /docs/reference/core/markdown/
[`ht-content` reference documentation]: /docs/reference/core/attributes/ht-content/#example
[void elements]: https://developer.mozilla.org/en-US/docs/Glossary/Void_element
[HTML boolean attribute]: https://developer.mozilla.org/en-US/docs/Glossary/Boolean/HTML
[`ht-include`]: /docs/reference/core/attributes/ht-include/
[`ht-template`]: /docs/reference/core/attributes/ht-template/
[template data objects]: /docs/reference/data/#template-data-object
[template data properties]: /docs/reference/data/#template-data-properties


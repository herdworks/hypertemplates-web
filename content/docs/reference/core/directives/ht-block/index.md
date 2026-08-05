---
created_at: 2025-02-03T12:00:00-08:00
title: ht-block directive
summary: |
    `ht-block` directive reference documentation
breadcrumb: ht-block
---

## `ht-block` directive reference

<auto-toc selectors='h3,h4,h5,h6'></auto-toc>

### Overview 
------------
The `ht-block` directive progressively enhances a [custom element].

<doc-quote ht-block info>

**PROTIP:** the `ht-block` directive is the only templating directive that is accessible from your content. ✨

The `ht-block` directive was heavily inspired by [Hugo Shortcodes] and is intended to be used for inserting custom elements into your content.
This effectively exposes a subset of HyperTemplates templating capabilities to content management systems (i.e. whereever you edit content that will be rendered using HyperTemplates).

</doc-quote>

### Specification
-----------------

This example shows the `ht-block` directive being used to enhance a [Markdown] code block.

<code-snippet ht-block filename='index.md' highlight='5' line-numbers='on'>

~~~plaintext
### Example
-----------

This example shows the `ht-apply` directive being used to template the `<title>`, `<meta>`, `<h1>`, and `<article>` elements.

<code-snippet ht-block filename='layout.html' highlight='5-6,10,12-14' line-numbers='on'>

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title ht-apply>${ site.title } | ${ "Placeholder Title" }</title>
        <meta ht-apply name='description' content='${ page.description, site.description }'>
    </head>
    <body>
        <header>
            <h1 ht-apply>${ page.title, "Hello, world." }</h1>
        </header>
        <article ht-apply>
            ${ markdown(page.content, "") }
        </article>
    </body>
</html>
```

</code-snippet>
~~~

</code-snippet>

In fact, this example is an excerpt from the [`ht-apply` reference documentation] content file.

#### Supported elements
-----------------------

The `ht-block` directive was designed to be used with [custom elements].

#### Directive syntax
---------------------

The `ht-block` directive is an [HTML boolean attribute].
If it is present, HyperTemplates will process the element as a nested layout template.

**Example:**

```html
<pull-quote ht-block='false'>

Lorem ipsum, hipsters get some.

</pull-quote>
```

<!-- NOTE: the uses of "ht-block attribute" and "ht-block attribute values" are correct here -->

This example demonstrates that `ht-block` directives are invoked by the presence of the `ht-block` attribute (i.e. `ht-block` attribute values are ignored).

#### Custom element include sources
-----------------------------------

HyperTemplates processes HTML elements with the `ht-block` directive as nested layout templates.
In practice, `ht-block` elements are what you might expect if you combined [`ht-include`] and [`ht-each`], with one important difference: unlike the `ht-include` directive, `ht-block` uses tag names to lookup the corresponding layout fragment.

**Example**

```plaintext
<newsletter-signup ht-block></newsletter-signup>
```

In this example Markdown document, the `ht-block` directive will cause HyperTemplates to replace the `newsletter-signup` element with the `elements/newsletter-signup.html` fragment.

#### Custom element template data
---------------------------------

HyperTemplates processes HTML elements with the `ht-block` directive as nested layout templates with access to `page.*` and `block.*` template data properties.
In practice, `ht-block` elements are what you might expect if you combined [`ht-include`] and [`ht-each`].
`ht-block` differs from `ht-each` in how their respective [template data objects] are constructed.
The `ht-block` directive will cause HyperTemplates to construct a template data object using the placeholder element attributes as [template data properties], plus a property called `block.content` with the body of the element as its value.

**Example**

```plaintext
<pull-quote ht-block cite='Caleb Hailey'>

The HyperTemplates `ht-block` directive is fun and useful.

</pull-quote>
```

In this example Markdown document, the `ht-block` directive will cause HyperTemplates to render the layout of `elements/pull-quote.html` with a template data object containing two properties: `block.cite` and `block.content`.

```javascript
{
    block: {
        cite: "Caleb Hailey",
        content: "<p>The HyperTemplates <code>ht-block</code> directive is fun and useful.</p>"
    }
}
```

<doc-quote ht-block warning>

**NOTE:** beginning with `hyperctl` version 0.18.0, all `ht-block` element attributes are parsed as `block.`-prefixed template data properties (see [template data sources]).

<details><summary><strong>Example</strong></summary>

Let's take this [page data file] as an example:

```markdown
---
created_at: "2026-04-21T12:00:00-07:00
title: Hello ht-block world
---

Hello, world. 

This is an example markdown document containing a @hypertemplates.net `ht-block` element.

<example-element ht-block foo='bar'></example-element>

Please visit the [`ht-block` reference documentation] to learn more.

<!-- Links -->
[`ht-block` reference documentation]: https://hypertemplates.net/docs/reference/core/directives/ht-block/
```

In `hyperctl` versions 0.14.x through 0.17.x, the resulting template data would look as follows:

```javascript
{
    foo: "bar" // accessible to ht-block fragments as "foo"
}
```

In `hyperctl` versions 0.18.0 and newer, the resulting template data would look as follows:

```javascript
{
    block: {
        foo: "bar" // accessible to ht-block fragments as "block.foo"
    }
}
```

In `hyperctl` versions 0.19.0 and newer, the resulting template data would also include the `page.*` properties: 

```javascript
{
    page: { ... },
    block: {
        foo: "bar" // accessible to ht-block fragments as "block.foo"
    }
}
```

</details>

</doc-quote>

<doc-quote ht-block new>

**NEW**: `hyperctl` version 0.19.0 adds support for `page.*` template data properties in `ht-block` elements. 

</doc-quote>

<!-- Links -->
[custom element]: https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
[custom elements]: https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
[hugo shortcodes]: https://gohugo.io/content-management/shortcodes/
[markdown]: /docs/reference/core/markdown/
[`ht-apply` reference documentation]: /docs/reference/core/directives/ht-apply/#example
[void elements]: https://developer.mozilla.org/en-US/docs/Glossary/Void_element
[HTML boolean attribute]: https://developer.mozilla.org/en-US/docs/Glossary/Boolean/HTML
[`ht-include`]: /docs/reference/core/directives/ht-include/
[`ht-each`]: /docs/reference/core/directives/ht-each/
[template data objects]: /docs/reference/core/data/#template-data-object
[template data properties]: /docs/reference/core/data/#template-data-properties
[template data sources]: /docs/reference/core/data/#template-data-sources
[page data file]: /docs/reference/cms/page/#page-files
---
created_at: 2025-02-03T12:00:00-08:00
title: ht-param
summary: |
    `ht-param` attribute reference
---

## `ht-param` attribute reference

<auto-toc selectors='h3,h4,h5,h6'></auto-toc>

### Overview

The `ht-param` [attribute] causes HyperTemplates to replace the associated element with [Text nodes] or [Element nodes].

### Example

This example shows the `ht-param` attribute being used to template a `<p>` element.

<code-snippet ht-element filename='example.html' highlight='9'>

```html
<p>Hello, <param ht-param='page.title,site.title' /> world! 👋</p>
```

</code-snippet>

This template will cause the `<param>` element to be replaced with the value of the [template data] `page.title` or `site.title` property.
If no [template data value] is found, the `<param>` element is simply removed.

<details><summary><strong>Example output <code>example.html</code></strong></summary>

Let's see what happens when we process this template with the following sample [template data].

```javascript
{
    site: {
        title: "HyperTemplates"
    }
}
```

Notice that this example template data object does have a `site.title` property, but does not have a `page.title` property.
The `<param>` element will be replaced by the value of `site.title`, as shown here:

```html
<p>Hello, HyperTemplates world! 👋</p>
```

If no matching value was found, the `<param>` element would simply be removed, as shown below:

```html
<p>Hello, world! 👋</p>
```

</details>

In cases where a fallback or default value is desired, a `data-default` or `default` attribute value may be provided.

<code-snippet ht-element filename='example.html' highlight='9'>

```html
<p>Hello, <param ht-param='page.foo' default='Documentation' /> world! 👋</p>
```

</code-snippet>

This template will attempt to replace the `<param>` element with the value of the [template data] `site.nope` property.
If no [template data value] if found, the `<param>` element is replaced with the default value.

<details><summary><strong>Example output <code>example.html</code></strong></summary>

Let's see what happens when we process this template with the following sample [template data].

```javascript
{
    page: {
        title: "ht-param",
        description: "ht-param attribute reference"
    }
}
```

Notice that this example template data object does have a `page.title` and `page.description` property, but it does not not have a `page.foo` property.
The result is that the `<param>` element will be replaced by the default value of `Documentation`.

```html
<p>Hello, Documentation world! 👋</p>
```

</details>

### Specification

#### Supported elements

The `ht-param` attribute can be used with any HTML element.
The `ht-param` attribute is best used with [void elements], simply because they do not require closing tags and thus improve template brevity.

```html
<param ht-param='page.title' />
```

<doc-quote ht-element info>

**A brief aside about the HTML `<param>` element**

Why are we using the deprecated [HTML `<param>` element] in these examples, when HyperTemplates [layouts] are supposed to be valid HTML5 documents?
Because we prefer to use the `ht-param` attribute with [Void elements], and the only void element that isn't actively in use is the `<param>` element.
And we like how it looks in our templates. 🤓
But the most important reason is because HyperTemplates will **always** remove or replace elements with `ht-param` attributes, so we'll never see them in rendered HTML.

</doc-quote>

<doc-quote ht-element danger>

**NOTE:** although the `ht-param` attribute can be added to any HTML element, `ht-param` elements cannot be nested inside of elements that only support [Text nodes], such as the [`<title>`] element.
Most HTML parsers – including the [`net/html`] standard library used by HyperTemplates – will ignore tags within elements that can only contain text, effectively treating them as plain text.

For templating elements that contain only text (e.g. the `<title>` element), please see the [`ht-content`] reference.

</doc-quote>

#### Attribute syntax

The `ht-param` attribute provides content templating instructions, expressed as a single `format:value` pair, where `value` is a comma-separated list of dot-notation style references to one or more [template data properties].

```html
<param ht-param='markdown:page.summary,page.content' />
```

See [content formats] for more information.

#### Default values

The `ht-param` attribute will only insert content if the specified [template data property] is found.
In cases where no value is found, the associated element is simply removed.

In scenarios where a default or fallback value is desired, add a `data-default` or `default` attribute.

```html
<h1><param ht-param='page.title' default='Placeholder Title' /></h1>
```

In this example, if the [template data] `page.title` property does not exist, HyperTemplates will replace the `<param>` element with the default value of `Placeholder Title`.

#### Content formats

The `ht-param` attribute can optionally specify the format of the data to be inserted into the layout.
The supported formats are `text`, `html`, and `markdown`.
If no format is specified, the content is treated as plain text and inserted as a [Text node].

```html
<article ht-param='markdown:page.content'></article>
```

In this example, `markdown:page.content` configures HyperTemplates to parse the value of `page.content` as [Markdown].
The rendered Markdown (i.e. [Element nodes]) are then appended as child nodes to the content element, in a similar manner as the [Javascript `appendChild()` method].

<doc-quote ht-element notice>

**NOTE:** Unsupported formats are ignored, effectively resulting in the default behavior (plain `text` format).

</doc-quote>


<!-- Links -->
[attribute]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[layouts]: /docs/reference/core/layouts/
[template data]: /docs/reference/core/data/
[template data property]: /docs/reference/core/data/#template-data-property
[template data value]: /docs/reference/core/data/#template-data-value
[template data properties]: /docs/reference/core/data/#template-data-property
[void elements]: https://developer.mozilla.org/en-US/docs/Glossary/Void_element
[Text]: https://developer.mozilla.org/en-US/docs/Web/API/Text
[Text node]: https://developer.mozilla.org/en-US/docs/Web/API/Text
[Text nodes]: https://developer.mozilla.org/en-US/docs/Web/API/Text
[Element node]: https://developer.mozilla.org/en-US/docs/Web/API/Element
[Element nodes]: https://developer.mozilla.org/en-US/docs/Web/API/Element
[Markdown]: /docs/reference/core/markdown/
[Javascript `appendChild()` method]: https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
[content formats]: #content-formats
[`net/html`]: https://pkg.go.dev/golang.org/x/net/html
[`<title>`]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/title
[`ht-content`]: /docs/reference/core/attributes/ht-content/
[HTML `<param>` element]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/param

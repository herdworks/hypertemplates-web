---
created_at: 2025-02-03T12:00:00-08:00
title: ht-content attribute
summary: |
    `ht-content` attribute reference documentation
breadcrumb: ht-content
---

## `ht-content` attribute reference

<auto-toc selectors='h3,h4,h5,h6'></auto-toc>

### Overview 

The `ht-content` [attribute] inserts text or HTML content from [template data] into the target HTML element.

### Example

This example shows the `ht-content` attribute being used to template the `<title>` and `<h1>` elements.

<code-snippet ht-block filename='layout.html' highlight='5,9' with-line-numbers>

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

This template will cause the `<title>` element to be populated with the value of the [template data] `page.title` or `site.title` property, or else do nothing (resulting in the the default value "Placeholder title" being used).
The `<h1>` element will be populated with the value of the `page.title` property, or else do nothing (resulting in the default value "Hello, world." being used).

<details><summary><strong>Example output <code>index.html</code></strong></summary>

Let's see what happens when we process this template with the following [template data].

```javascript
{
    site: {
        title: "Acme, Inc"
    }
}
```

Notice that this example template data object does have a `site.title` property, but does not have a `page.title` property.
The `<title>` element child [Text node] (`"Placeholder Title"`) will be replaced by the value of `site.title`.
What will happen to the `<h1>` element?

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title>Acme, Inc</title>
    </head>
    <body>
        <header>
            <h1>Hello, world.</h1>
        </header>
        <article>
            <p>Lorem ipsum, hipsters get some.</p>
        </article>
    </body>
</html>
```

The `<h1>` element was not modified because the example template data did not contain a value for `page.title`.
This simple example demonstrates how to configure default values using HyperTemplates – just include them in the template using HTML!

</details>

### Specification

#### Supported elements

The `ht-content` attribute can be used with any HTML element that can have child nodes.
The `ht-content` attribute should not be used with [void elements].

```html
<h1 ht-content='page.title'></h1>
```

#### Attribute syntax

The `ht-content` attribute provides content templating instructions, expressed as a single `format:value` pair, where `value` is a comma-separated list of dot-notation style references to one or more [template data properties].

```html
<h1 ht-content='html:page.title,site.title'></h1>
```

See [content formats] for more information.

#### Default values

The `ht-content` attribute will only insert content in the target element if the specified [template data property] is found.
In cases where no value is found, HyperTemplates ignores the attribute.

In scenarios where a default or fallback value is desired, simply add the default content in the template as child nodes.

```html
<title ht-content='page.title'>ACME Inc</title>
```

In this example, if the [template data] `page.title` property does not exist, HyperTemplates will do nothing.
The end result will be a valid `<title>` element with a value of "ACME Inc" (a child [Text node]).

#### Content formats

The `ht-content` attribute can optionally specify the format of the content to be inserted into the layout.
The supported formats are `text`, `html`, and `markdown`.
If no format is specified, the content is treated as plain text and inserted as a [Text node].

```html
<article ht-content='markdown:page.content'></article>
```

In this example, `markdown:page.content` configures HyperTemplates to parse the value of `page.content` as [Markdown].
The rendered Markdown (i.e. HTML elements) are then appended as child nodes to the content element, in a similar manner as the [Javascript `appendChild()` method].

<doc-quote ht-block notice>

**NOTE:** Unsupported formats are ignored, effectively resulting in the default behavior (plain text format).

</doc-quote>


<!-- Links -->
[attribute]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[template data]: /docs/reference/core/data/
[template data property]: /docs/reference/core/data/#template-data-property
[template data properties]: /docs/reference/core/data/#template-data-property
[void elements]: https://developer.mozilla.org/en-US/docs/Glossary/Void_element
[Text node]: https://developer.mozilla.org/en-US/docs/Web/API/Text
[Text nodes]: https://developer.mozilla.org/en-US/docs/Web/API/Text
[Element node]: https://developer.mozilla.org/en-US/docs/Web/API/Element
[Element nodes]: https://developer.mozilla.org/en-US/docs/Web/API/Element
[Markdown]: /docs/reference/core/markdown/
[Javascript `appendChild()` method]: https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
[content formats]: #content-formats

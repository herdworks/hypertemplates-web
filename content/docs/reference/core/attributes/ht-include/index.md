---
created_at: 2025-02-03T12:00:00-08:00
title: ht-include attribute
summary: |
    `ht-include` attribute reference documentation
breadcrumb: ht-include
---

## `ht-include` attribute reference

<auto-toc selectors='h3,h4,h5,h6'></auto-toc>

### Overview

The `ht-include` [attribute] causes HyperTemplates to replace target HTML elements with elements from an external source (a local or remote file).
The `ht-include` attribute is one of the most powerful tools in the HyperTemplates toolbox, making it possible to compose complex layouts from reusable components.

### Example

This example shows the `ht-include` attribute being used to template the `<header>` element.

<code-snippet ht-element filename='layout.html' highlight='8' with-line-numbers>

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title>Introducing: Template Includes</title>
    </head>
    <body>
        <header ht-include='partials/header.html' id='hero'></header>
        <article>
            <h2>Hello, world</h2>
            <p>Lorem ipsum, hipsters get some.</p>
        </article>
    </body>
</html>
```

</code-snippet>

The `ht-include` attribute in this example will replace the placeholder `<header>` element with the contents of the referenced [include source](#include-sources) (`partials/header.html`), which contains an [HTML `DocumentFragment`].

### Specification

#### Supported elements

The `ht-include` attribute can be used with any HTML element.

```html
<a href='/'>
    <svg ht-include='img/logo.svg'></svg>
</a>
```

<doc-quote ht-element info>

**A BRIEF ASIDE:** Discovering that we could use `ht-include` to template SVG images was one of the major "aha" moments we experienced early on in the development of HyperTemplates.
This was a delightful side effect of the "pure-HTML" philosophy behind HyperTemplates.
We suspect there are yet other unexpected but delightful side effects that we haven't yet discovered. 
If you encounter any such deligtful surprises, please [let us know](/contact)!

</doc-quote>


#### Attribute syntax

The `ht-include` attribute provides templating instructions, expressed as a comma-separated list of [include URIs](#include-uris), where each URI contains an [include source](#include-sources). 

```html
<header ht-include='partials/hero'></header>
```

#### Placeholder elements

An HTML element with an `ht-include` attribute is called a "placeholder element".
If the [template data property] referenced by a given `ht-include` attribute exists, the placeholder element is replaced by the [include source](#include-sources).

```html
<button ht-include='path/to/source.html'></button>
```

In this example, the `<button>` element is a placeholder element.

#### Attribute forwarding

When the tag name of a [placeholder element](#placeholder-element) matches the tag name of the first element in the [include source](#include-sources), HyperTemplates will copy HTML attributes from the placeholder element to the first element in the include source.
Attribute templating occurs before include source elements are inserted into the template.

```html
<nav>
    <a href='/'>
        <svg ht-include='static/img/logo.svg' height='120' width='auto'></svg>
    </a>
</nav>
```

In this example the `height` and `width` attributes will be copied to the `<svg>` element in `static/img/logo.svg` before it is inserted into the temlpate.

<doc-quote ht-element notice>

**NOTE:** The `ht-include` attribute is excluded from attribute forwarding.

</doc-quote>

#### Include URIs

HyperTemplates `ht-include` attributes contain URIs that reference files containing DOM elements.
These URIs are referred to as "include URIs".
The contents of the include URI files are [include sources](#include-sources).

```html
<button ht-include='path/to/source.html'></button>
```

In this example, `path/to/source.html` is an include URI.

<doc-quote ht-element>

**PROTIP:** because HyperTemplates is the pure-HTML templating system, it assumes that same-origin include URIs are references to HTML documents with `.html` file extensions.

An include URI of `/path/to/source` is the same as `/path/to/source.html`.

</doc-quote>


#### Include sources

An include source is an [HTML `DocumentFragment`] referenced by a `ht-include` attribute.

<doc-quote ht-element notice>

**What is a `DocumentFragment`?** An [HTML `DocumentFragment`] is a collection of one or more HTML elements, not a complete [HTML `Document`] containing a root `<html>` element with child `<head>` and `<body>` elements.

</doc-quote>


<!-- Links -->
[attribute]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[template data]: /docs/reference/core/data/
[template data property]: /docs/reference/core/data/#template-data-property
[template data properties]: /docs/reference/core/data/#template-data-property
[attribute syntax]: #attribute-syntax
[HTML `DocumentFragment`]: https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
[HTML `Document`]: https://developer.mozilla.org/en-US/docs/Web/API/Document
---
created_at: 2025-02-03T12:00:00-08:00
updated_at: 2026-02-26T10:00:00-08:00
title: ht-include directive
summary: |
    `ht-include` directive reference documentation
breadcrumb: ht-include
---

## `ht-include` directive reference

<auto-toc selectors='h3,h4,h5,h6'></auto-toc>

### Overview
------------

The `ht-include` directive replaces target element with an HTML fragment from the configured theme. 
Includes are one of the most powerful tools in the HyperTemplates toolbox, making it possible to compose complex layouts from reusable components.

### Example
-----------

This example shows the `ht-include` directive being used to template the `<header>` element.

<code-snippet ht-block filename='layout.html' highlight='8' line-numbers='on'>

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title>Introducing: Template Includes</title>
    </head>
    <body>
        <header ht-include='fragments/header.html' id='hero'></header>
        <article>
            <h2>Hello, world</h2>
            <p>Lorem ipsum, hipsters get some.</p>
        </article>
    </body>
</html>
```

</code-snippet>

The `ht-include` directive in this example will replace the placeholder `<header>` element with the contents of the referenced [include source](#include-sources) (`fragments/header.html`), which contains an [HTML `DocumentFragment`].

### Specification
-----------------

#### Supported elements
-----------------------

The `ht-include` directive can be used with any HTML element except the `<html>`, `<head>`, and `<body>` elements.

**Example** 

```html
<a href='/'>
    <svg ht-include='static/img/logo.svg'></svg>
</a>
```

Even though `ht-include` doesn't support the `<head>` element itself, we strongly recommend using an `ht-include` directive _inside_ the `<head>` element.
This is an excellent way to ensure that certain `<head>` elements are included in every page across an entire website.

<code-snippet ht-block filename='layouts/default.html' highlight='4'>

```html
<!DOCTYPE html>
<html lang='en-US'>
    <head>
        <meta ht-include='fragments/head.html'></meta>
        <!-- other head elements -->
    </head>
    <body>
        <!-- page content -->
    </body>
</html>
```

</code-snippet>


<doc-quote ht-block info>

**A BRIEF ASIDE:** Discovering that we could use `ht-include` to template SVG images was one of the major "aha" moments we experienced early on in the development of HyperTemplates.
This was a delightful side effect of the "pure-HTML" philosophy behind HyperTemplates.
We suspect there are yet other unexpected but delightful side effects that we haven't yet discovered. 
If you encounter any such deligtful surprises, please join the @hypertexting.community 💬 and let us know!

</doc-quote>

<doc-quote ht-block notice>

**NOTE:** `ht-include` directives are processed recursively, allowing components to be composed of other components.

</doc-quote>

#### Directive syntax
---------------------

An `ht-include` expression is one theme-relative fragment path. 
The `.html` extension is optional: `fragments/header` and `fragments/header.html` are equivalent.

```html
<header ht-include='fragments/hero'></header>
```

#### Placeholder elements
-------------------------

An HTML element with an `ht-include` directive is called a "placeholder element".
If the [fragment] referenced by a given `ht-include` directive exists, the placeholder element is replaced by the [include source](#include-sources).

```html
<button ht-include='path/to/source.html'></button>
```

In this example, the `<button>` element is a placeholder element.

#### Attribute forwarding
-------------------------

When [placeholder elements](#placeholder-element) contain additional HTML attributes, HyperTemplates will copy the HTML attributes from the placeholder element to the first element in the included fragment.

```html
<nav>
    <a href='/'>
        <svg ht-include='static/img/logo.svg' height='120' width='auto'></svg>
    </a>
</nav>
```

In this example the `height` and `width` attributes will be copied to the `<svg>` element in `static/img/logo.svg` before it is inserted into the temlpate.

<doc-quote ht-block notice>

**NOTE:** The `ht-include` and `ht-block` directive attributes are excluded from attribute forwarding.

</doc-quote>

#### Include sources
--------------------

An include source is an [HTML `DocumentFragment`] referenced by an `ht-include` directive.

See [fragments] for more information.

<!-- Links -->
[attribute]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[template data]: /docs/reference/core/data/
[fragment]: /docs/reference/core/fragments
[fragments]: /docs/reference/core/fragments
[template data properties]: /docs/reference/core/data/#template-data-property
[directive syntax]: #directive-syntax
[HTML `DocumentFragment`]: https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
[HTML `Document`]: https://developer.mozilla.org/en-US/docs/Web/API/Document
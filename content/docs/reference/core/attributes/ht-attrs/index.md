---
created_at: 2025-02-03T12:00:00-08:00
updated_at: 2025-02-03T12:00:00-08:00
title: ht-attrs attribute
summary: |
    `ht-attrs` attribute reference documentation
breadcrumb: ht-attrs
---

## `ht-attrs` attribute reference

<auto-toc selectors='h3,h4,h5,h6'></auto-toc>

### Overview 

The `ht-attrs` [attribute] causes HyperTemplates to annotate target HTML elements with one or more HTML attributes.

### Example

This example shows the `ht-attrs` attribute being used to template the page description `<meta>` element.

<code-snippet ht-element filename='layout.html' highlight='5' with-line-numbers>

```html
<html>
    <head>
        <meta charset='utf-8'>
        <title>Acme Inc.</title>
        <meta name='description' content='Home of Acme Inc.' ht-attrs='content:site.description'>
    </head>
    <body>
        <article>
            <p>Lorem ipsum, hipsters get some.</p>
        </article>
    </body>
</html>
```

</code-snippet>

This template will cause the page description `<meta>` element `content` attribute to be populated with the value of the [template data] `page.description` or `site.description` property, or else do nothing (resulting in the default value "Home of Acme Inc." being used).

### Specification

#### Supported elements

The `ht-attrs` attribute can be used with any HTML element.

```html
<a ht-attrs='href:page.author.href,site.author.href' ht-content='page.author.name'></a>
```

#### Attribute syntax

The `ht-attrs` attribute defines target HTML element attributes, expressed as a semicolon-separated list of `name:value` pairs.
The `value` is a comma-separated list of dot-notation style references to one or more [template data properties].

```plaintext
ht-attrs='href:link.href,link.url;target:link.target'
```

In the following example, the `<meta>` element `ht-attrs` attribute configures a single named attribute: `content`.
The `<link>` element `ht-attrs` attribute configures three named attributes: `rel`, `href`, and `type`.

```html
<meta name='description' ht-attrs='content:site.description'>
<link rel='icon' ht-attrs='rel:site.favicon.rel;href:site.favicon.href;type:site.favicon.type'>
```

<doc-quote ht-element notice>

**NOTE:** in this example, if the [template data] `site.favicon.rel` property is not defined, the `<link>` element will use the default value of "icon" (as configured by the `rel='icon'` attribute).

</doc-quote>

#### Default values

The `ht-attrs` attribute will only cause attributes to be added to a target element if the specified [template data property] is found.
In cases where no value is found, HyperTemplates ignores the attribute.

In scenarios where a default or fallback value is desired, simply set the element attribute in the template.

```html
<meta name='author' content='ACME Inc' ht-attrs='content:page.author.name'>
```

In this example, if the [template data] `page.author.name` property does not exist, HyperTemplates will do nothing.
The end result will be a valid `<meta>` attribute with a value of "ACME Inc" (as configured by the `content` attribute).

#### Attribute names

The `ht-attrs` attribute can optionally specify the name of the attribute to be added to the target element.
The `ht-attrs` attribute syntax is `name:value`.
If no attribute name is specified, an ordinal value will be used (e.g. `data-attr-0`, `data-attr-1`, etc).

```html
<meta name='author' ht-attrs='content:page.author.name,site.author.name'>
```

In this example, HyperTemplates will set an element attribute named `content` to the value of the [template data] `page.author.name` or `site.author.name` property, or else do nothing.

#### Multiple attributes

The `ht-attrs` attribute can be used to configure multiple attributes on the target element.
See [attribute syntax] for more information.

<!-- Links -->
[attribute]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[template data]: /docs/reference/core/data/
[template data property]: /docs/reference/core/data/#template-data-property
[template data properties]: /docs/reference/core/data/#template-data-property
[attribute syntax]: #attribute-syntax

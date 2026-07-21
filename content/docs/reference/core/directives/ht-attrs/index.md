---
created_at: 2025-02-03T12:00:00-08:00
updated_at: 2026-02-26T10:00:00-08:00
title: ht-attrs directive
summary: |
    `ht-attrs` directive reference documentation
breadcrumb: ht-attrs
---

## `ht-attrs` directive reference

<auto-toc selectors='h3,h4,h5,h6'></auto-toc>

### Overview 
------------
The `ht-attr` and `ht-attrs` [attributes] are templating directives that annotate target HTML elements with one or more HTML attributes.

### Example
-----------

This example shows the `ht-attrs` directive being used to template the page description `<meta>` element.

<code-snippet ht-block filename='layout.html' highlight='5' line-numbers='on'>

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
-----------------

#### Supported elements
-----------------------

The `ht-attr` and `ht-attrs` directives can be used with any HTML element.

```html
<a ht-attr='href:page.byline.href,site.byline.href' ht-content='page.byline.name,site.byline.name'></a>
```

#### Directive syntax
---------------------

The `ht-attr` and `ht-attrs` directives define target HTML element attributes, expressed as a semicolon-separated list of `name:value` pairs.
The `value` is a comma-separated list of dot-notation style references to one or more [template data properties].

```plaintext
ht-attrs='href:link.href,link.url;target:link.target'
```

In the following example, the `<meta>` element `ht-attrs` directive configures a single named attribute: `content`.
The `<link>` element `ht-attrs` directive configures three named attributes: `rel`, `href`, and `type`.

```html
<meta name='description' ht-attrs='content:site.description'>
<link rel='icon' ht-attrs='rel:site.favicon.rel;href:site.favicon.href;type:site.favicon.type'>
```

<doc-quote ht-block notice>

**NOTE:** in this example, if the [template data] `site.favicon.rel` property is not defined, the `<link>` element will use the default value of "icon" (as configured by the `rel='icon'` attribute).

</doc-quote>

#### Directive variants
-----------------------

HyperTemplates attribute templating directives are available in two variants: `ht-attr` and `ht-attrs`.
The [directive syntax] is the same for both directives.
The only difference between `ht-attr` and `ht-attrs` is that multiple `ht-attr` directives are supported per HTML element.

<doc-quote ht-block new>

**NEW:** the `ht-attr` directive is new as of `hyperctl` 0.18.0.
The only functional difference between the original _plural_ `ht-attrs` directive and the new _singular_ `ht-attr` directive is that HyperTemplates supports multiple `ht-attr` directives per element, and only one `ht-attrs` directive per element.

The following examples are functionally identical and they can be used interchangeably.

```html
<!-- multiple ht-attr directives, one setting the [href] attribute and another setting the [rel] attribute -->
<a ht-attr='href:link.href' ht-attr='rel:link.rel'>
```

```html
<!-- singular ht-attr directive setting multiple attributes ([href] and [rel]) -->
<a ht-attr='href:link.href;rel:link.rel'>
```

```html
<!-- plural ht-attrs directive setting multiple attributes ([href] and [rel]) -->
<a ht-attrs='href:link.href;rel:link.rel'>
```

Determining which attribute templating style to use is effectively a matter of preference.

</doc-quote>

<doc-quote ht-block info>

**NOTE:** if [layouts] or [fragments] are parsed using an HTML validator prior to rendering, some HTML validators may flag duplicate attributes as medium-low severity errors. 
However, HyperTemplates automatically removes `ht-attr` and `ht-attrs` directives from generated HTML pages by default (see: [`site.config.tidy_mode`])


</doc-quote>


#### Default values
-------------------

The `ht-attrs` directive will only cause attributes to be added to a target element if the specified [template data property] is found.
In cases where no value is found, HyperTemplates ignores the attribute.

In scenarios where a default or fallback value is desired, simply set the element attribute in the template.

```html
<meta name='author' content='ACME Inc' ht-attrs='content:page.byline.name'>
```

In this example, if the [template data] `page.byline.name` property does not exist, HyperTemplates will do nothing.
The end result will be a valid `<meta>` attribute with a value of "ACME Inc" (as configured by the `content` attribute).

#### Attribute names
--------------------

The `ht-attr` and `ht-attrs` directives can optionally specify the name of the attribute to be added to the target element.
The `ht-attr` and `ht-attrs` directive syntax is `name:value`.
If no attribute name is specified, an ordinal value will be used (e.g. `data-attr-0`, `data-attr-1`, etc).

```html
<meta name='author' ht-attrs='content:page.byline.name,site.byline.name'>
```

In this example, HyperTemplates will set an element attribute named `content` to the value of the [template data] `page.byline.name` or `site.byline.name` property, or else do nothing.

#### Multiple attributes
------------------------

The `ht-attr` and `ht-attrs` directives can be used to configure multiple attributes on the target element.
See [directive syntax] for more information.

#### Attribute maps
-------------------

The `ht-attr` and `ht-attrs` directives support a shorthand for setting multiple attributes from [template data objects].
If an `ht-attr` or `ht-attrs` directive resolves to a [template data object] (a `key:value` pair), HyperTemplates will set one HTML attribute per [template data key]. 

<doc-quote ht-block warning>

**NOTE:** attribute maps are [syntactic sugar] – an advanced templating feature for experienced template developers. 
They are great for simplifying template _development_, but they can add contextual complexity for template _contributors_ – even if the contributor in question is the template author's future self. 😵‍💫

</doc-quote>

**Example**

To illustrate, consider the following example page:

<code-snippet ht-block filename='content/blog/introducing-hypertemplates/page.md'>

```markdown
---
created_at: 2025-06-12T08:00:00-07:00
layout: post
title: Introducing HyperTemplates
description: |
    The pure-HTML templating system for the modern web.
cover: cover-light.png
metadata:
  - name: "twitter:card"
    content: "summary_large_image"
  - name: "twitter:site"
    content: "@herdworks"
  - name: "twitter:title"
    content: "Introducing, HyperTemplates"
  - property: "og.type"
    content: "article"
  - property: "og.title"
    content: "Introducing, HyperTemplaes"
  - property: "og.description"
    content: "The pure-HTML templating system for the modern web."
  - property: "og.url"
    content: "https://hypertemplates.net/blog/introducing-hypertemplates/"
  - property: "og.image"
    content: "https://hypertemplates.net/blog/introducing-hypertemplates/cover-light.png"
```

</code-snippet>

Before template data maps, a template fragment to render these Twitter Card and OpenGraph metadata properties might have looked like this: 

```html
<!-- Iterate over page.metadata properties and create <meta> elements for each property -->
<meta ht-template='metadata:page.metadata' ht-attrs='name:metadata.name; property:metadata.property; content:metadata.content' />
```

With template data maps, that same template fragment can be simplified to the following: 

```html
<!-- Iterate over page.metadata properties and create <meta> elements for each property -->
<meta ht-template='metadata:page.metadata' ht-attrs='metadata' />
```

The resulting output for both templates would be as follows:

```html
<!-- Iterate over page.metadata properties and create <meta> elements for each property -->
<meta name='twitter:card' content='summary_large_image' />
<meta name='twitter:site' content='@herdworks' />
<meta name='twitter:title' content='Introducing, HyperTemplates' />
<meta property='og.type' content='article' />
<meta property='og.title' content='Introducing, HyperTemplaes' />
<meta property='og.description' content='The pure-HTML templating system for the modern web.' />
<meta property='og.url' content='https://hypertemplates.net/blog/introducing-hypertemplates/' />
<meta property='og.image' content='https://hypertemplates.net/blog/introducing-hypertemplates/cover-light.png' />
```

<!-- Links -->
[attributes]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[attribute]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[template data]: /docs/reference/core/data/
[template data property]: /docs/reference/core/data/#template-data-property
[template data properties]: /docs/reference/core/data/#template-data-property
[directive syntax]: #directive-syntax
[layouts]: /docs/reference/core/layouts/
[fragments]: /docs/reference/core/fragments/
[`site.config.tidy_mode`]: /docs/reference/cms/website/#site-config
[template data objects]: /docs/reference/core/data/#template-data-object
[template data object]: /docs/reference/core/data/#template-data-object
[template data key]: /docs/reference/core/data/#template-data-keys
[syntactic sugar]: https://en.wikipedia.org/wiki/Syntactic_sugar

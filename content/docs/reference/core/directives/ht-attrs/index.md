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

The `ht-attrs` [directive] sets one or more HTML element attributes from provided [template data objects].  

<doc-quote ht-block caution>

**NOTE:** the `ht-attrs` directive enables an advanced templating technique called [attribute mapping](#attribute-maps).
For simple HTML attribute templating, see the [`ht-apply`] directive. 

</doc-quote>

### Example
-----------

The `ht-attrs` directive is most effective when paired with the [`ht-each`] directive.
The following example shows how the `ht-attrs` directive can being used to configure `<link>` elements.

```html
<link ht-each='link in ${ site.links }' ht-attrs='${ link }'>
```

</code-snippet>

This template will generate `<link>` elements with attributes defined as template data key:value pairs.
The `ht-attrs` directive is especially useful for templating collections of objects that have inconsistent contents.
For example, in the following template data `site.links` collection, only one item has a `sizes` property:

```javascript
{
  site: {
    links: [
      { rel: "icon", href: "/img/favicon.png" },
      { rel: "apple-touch-icon", href: "/img/apple-touch-icon.png", sizes: "180x180" }
    ]
  }
}
```

Given the example template provided above, this data would result in the following two `<link>` elements:

```html
<link rel='icon' href='/img/favicon.png'>
<link rel='apple-touch-icon' href='/img/apple-touch-icon.png' sizes='180x180'>
```

### Specification
-----------------

#### Supported elements
-----------------------

The `ht-attrs` directives can be used with any HTML element.

```html
<a ht-attrs='${ link }'></a>
```

#### Directive syntax
---------------------

The `ht-attrs` directive accepts a single [template variable] argument that resolves to a template data object containing `key:value` pairs. 

```html
<meta ht-each='metadata in ${ site.metadata }' ht-attrs='${ metadata }'>
```

#### Default values
-------------------

The `ht-attrs` directive will only cause attributes to be added to a target element if the specified [template data property] exists.
In cases where no value exists, HyperTemplates ignores the attribute.

In scenarios where a default or fallback value is desired, simply set the element attribute in the template.

```html
<nav>
  <menu>
    <li ht-each='link in ${ data.nav.links }'>
      <a ht-apply ht-attrs='${ link }' href='#'>${ link.text, "Placeholder" }</a>
    </li>
  </menu>
</nav>
```

#### Attribute maps
-------------------

The `ht-attrs` directive resolves [template variables] to [template data objects] and sets one HTML attribute per [template data key].
This approach is referred to as "attribute maps".

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
<meta ht-each='metadata in ${ page.metadata }' name='${ metadata.name }' property='${ metadata.property }' content='${ metadata.content }' />
```

With template data maps, that same template fragment can be simplified to the following: 

```html
<!-- Iterate over page.metadata properties and create <meta> elements for each property -->
<meta ht-each='metadata in ${ page.metadata }' ht-attrs='${ metadata }' />
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
[`ht-each`]: /docs/reference/core/directives/ht-each/
[`ht-apply`]: /docs/reference/core/directives/ht-apply/
[`site.config.tidy_mode`]: /docs/reference/cms/website/#site-config
[attribute]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[attributes]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[directive]: /docs/reference/core/directives/
[directive syntax]: #directive-syntax
[fragments]: /docs/reference/core/fragments/
[layouts]: /docs/reference/core/layouts/
[syntactic sugar]: https://en.wikipedia.org/wiki/Syntactic_sugar
[template data key]: /docs/reference/core/data/#template-data-keys
[template data object]: /docs/reference/core/data/#template-data-object
[template data objects]: /docs/reference/core/data/#template-data-object
[template data properties]: /docs/reference/core/data/#template-data-property
[template data property]: /docs/reference/core/data/#template-data-property
[template data]: /docs/reference/core/data/
[template variable]: /docs/reference/core/variables/
---
created_at: 2025-02-03T12:00:00-08:00
title: ht-not attribute
summary: |
    `ht-not` attribute reference documentation.
breadcrumb: ht-not
---

## `ht-not` attribute reference

<auto-toc selectors='h3,h4,h5,h6'></auto-toc>

### Overview
------------

The `ht-not` [attribute] removes the target HTML element if the defined conditional expression evaluates to `true`.
If the conditional expression evaluates to `false`, the target HTML element is retained.

### Example
-----------

This example shows the `ht-not` attribute being used for conditional templating of a blockquote citation.

<code-snippet ht-block filename='layout.html' highlight='4'>

```html
<blockquote>
    <span ht-content='html:content'></span>
    <cite ht-if='cite'>
        <span ht-not='href' ht-content='text:cite'></span>
        <a ht-if='href' ht-attrs='href:href' ht-content='text:cite'></a>
    </cite>
</blockquote>
```

</code-snippet>

In this example the `ht-not` attribute is used together with the `ht-if` attribute on the following line.
If the `href` property is empty, the `ht-not` condition will evaluate to false so the `<span>` element will be retained; but the `ht-if` condition will also evaluate to false so the `<a>` element will be removed.

### Specification
-----------------

#### Supported elements
-----------------------

The `ht-not` attribute can be used with any HTML element.

#### Attribute syntax
---------------------

The `ht-not` attribute uses the [`ht-if` attribute syntax], with the opposite effect (see [exclusive templating]).
When an `ht-not` attribute evaluates `true`, the target HTML element is **removed**.

**Example**

```html
<address ht-not='page.author.kind,site.author.kind==person' ht-content='page.author.address'></address>
```

In this example, HyperTemplates will **remove** the `<address>` element if the value of the `page.author.kind` or `site.author.kind` [template data property] matches the expected [conditional value] of `person`.

#### Exclusive templating
-------------------------

The `ht-not` attribute is used for _exclusive_ templating.
If the condition evaluates as **`true`**, the target HTML element is **removed**.
See [`ht-if`] for _inclusive_ templating.

#### Conditional values
-----------------------

The `ht-not` attribute can optionally define a comma-separated list of one or more expected conditional values (see [attribute syntax]).

To explain how conditional values are evaluated, consider the following example [template data]. 

```javascript
{
    page: {
        title: "Introducing: HyperTemplates",
        author: {
            name: "Herd Works Inc.",
            href: "https://herd.works",
            kind: "organization",
        },
    }
}
```

Given this example template data, the conditional expression `ht-not='page.author.kind'` would evaluate `true` because the [template data property] exists and is not empty.
However, the conditional expression `ht-if='page.author.kind==person'` would evaluate `true` because the `page.author.kind` property has a value of "organization", not "person".

<!-- Links -->
[attribute]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[template data]: /docs/reference/core/data/
[template data property]: /docs/reference/core/data/#template-data-property
[template data properties]: /docs/reference/core/data/#template-data-property
[attribute syntax]: #attribute-syntax
[conditional value]: #conditional-values
[`ht-if`]: /docs/reference/core/attributes/ht-if/
[`ht-if` attribute syntax]: /docs/reference/core/attributes/ht-if/#attribute-syntax
[exclusive templating]: #exclusive-templating
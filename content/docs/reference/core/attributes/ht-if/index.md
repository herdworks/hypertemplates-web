---
created_at: 2025-02-03T12:00:00-08:00
title: ht-if attribute
summary: |
    `ht-if` attribute reference documentation
breadcrumb: ht-if
---

## `ht-if` attribute reference

<auto-toc selectors='h3,h4,h5,h6'></auto-toc>

### Overview
------------

The `ht-if` [attribute] retains the target HTML element if the defined conditional expression evaluates to `true`.
If the conditional expression evaluates to `false`, the target HTML element is removed.

### Example
-----------

This example shows the `ht-if` attribute being used to template the `<header>` element.

<code-snippet ht-block filename='layout.html' highlight='8-10' with-line-numbers>

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title ht-content='page.title,site.title'></title>
    </head>
    <body>
        <header ht-if='page.title'>
            <h1 ht-content='page.title'></h1>
        </header>
        <article ht-content='page.content'></article>
    </body>
</html>
```

</code-snippet>

The highlighted portion of this template will cause HyperTemplates to populate the `<h1>` element with the value of the [template data] `page.title` property, or else remove the parent `<header>` element if `page.title` is not present.

<details><summary><strong>Example output <code>index.html</code></strong></summary>

Let's see what happens when we process this template with the following [template data].

```javascript
{
    site: {
        title: "Conditional templating is fun!",
    },
    page: {
        content: "Lorem ipsum, hipsters get some"
    }
}
```

The `<header>` element will be removed because the example template data did not contain a `page.title` property.

```html
<!DOCTYPE html>
<html lang='en-US'>
    <head>
        <meta charset='utf-8'>
        <title>Conditional templating is fun!</title>
    </head>
    <body>
        <article>Lorem ipsum, hipsters get some.</article>
    </body>
</html>
```

</details>

### Specification
-----------------

#### Supported elements
-----------------------

The `ht-if` attribute can be used with any HTML element.

```html
<meta name='og:title' ht-if='data.opengraph' ht-attrs='content:data.opengraph.title'>
```

#### Attribute syntax
---------------------

The `ht-if` attribute defines templating conditions expressed as a semicolon-separated list of `property==value` pairs (delineated by the `==` characters).

The `property` is a comma-separated list of dot-notation style references to one or more [template data properties].
If multiple properties are defined for a given conditional expression, the first non-empty property will be used.

The `value` is a comma-separated list of values (e.g. a string, integer, float, etc).
If no `value` is provided, the `ht-if` attribute will evaluate `true` as long as the [template data property] exists, and the property value is not an empty string.
If multiple values are defined for a given conditional expression, only one of the values must match for the condition to be evaluated as `true`.

**Example**

```html
<address ht-if='page.author.kind,site.author.kind==organization,company,business' ht-content='page.author.address'></address>
```

In this example, HyperTemplates will retain the `<address>` element if the value of the `page.author.kind` or `site.author.kind` [template data property] matches one of the the expected [conditional values] of `organization`, `company`, or `business`.

#### Inclusive templating
-------------------------

The `ht-if` attribute is used for _inclusive_ templating.
If the condition evaluates as **`true`**, the target HTML element is **included**.
See [`ht-not`] for _exclusive_ templating.

#### Conditional values
-----------------------

The `ht-if` attribute can optionally define a comma-separated list of one or more expected conditional values (see [attribute syntax]).

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
        tags: [
            "blog",
            "announcement"
        ]
    }
}
```

Given this example template data, the conditional expression `ht-if='page.author.kind'` would evaluate `true` because the [template data property] exists and it not empty.
However, the conditional expression `ht-if='page.author.kind==person'` would evaluate `false` because the `page.author.kind` property has a value of "organization", not "person".

##### Conditional expressions and arrays
----------------------------------------

When a conditional expression with a conditional value is used on a property that is an array, such as the `page.tags` property in this example, the value is compared to all of the values in the array.
Please note the following examples based on the sample data shown above:

* **`ht-if='page.tags'`** would evaluate `true` because the `page.tags` array is not empty
* **`ht-if='page.tags==announcement'`** would evaluate `true` because `page.tags` contains the value `announcement`
* **`ht-if='page.tags==news'`** would evaluate `false` because `page.tags` does not contain the value `news`

<!-- Links -->
[attribute]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[template data]: /docs/reference/core/data/
[template data property]: /docs/reference/core/data/#template-data-property
[template data properties]: /docs/reference/core/data/#template-data-property
[attribute syntax]: #attribute-syntax
[conditional value]: #conditional-values
[conditional values]: #conditional-values
[`ht-not`]: /docs/reference/core/attributes/ht-not/

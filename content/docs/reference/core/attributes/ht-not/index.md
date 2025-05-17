---
created_at: 2025-02-03T12:00:00-08:00
title: ht-not
---

## `ht-not` attribute reference

<auto-toc ht-element scope='main'></auto-toc>

* [Overview](#overview)
* [Example](#example)
* [Specification](#specification)
  * [Supported elements](#supported-elements)
  * [Attribute syntax](#attribute-syntax)
  * [Exclusive templating](#exclusive-templating)
  * [Conditional values](#conditional-values)

### Overview

The `ht-not` [attribute] causes HyperTemplates to remove the target HTML element if the defined conditional expression evaluates to `true`.
If the conditional expression evaluates to `false`, the target HTML element is retained.

### Example

This example shows the `ht-not` attribute being used to template the contents of the `<tbd>` element.

<code-snippet ht-element filename='layout.html' highlight='8-10' with-line-numbers>

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title ht-content='page.title,site.title'></title>
    </head>
    <body>
        <!-- TODO -->
    </body>
</html>
```

</code-snippet>

The highlighted portion of this template will cause HyperTemplates to something something the `<example>` element something.

<details><summary><strong>Example output <code>index.html</code></strong></summary>

Let's see what happens when we process this template with the following [template data].

```javascript
{}
```

The `<example>` element will be removed because the example template data did not contain a `page.title` property.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title ht-content='page.title,site.title'></title>
    </head>
    <body>
        <!-- TODO -->
    </body>
</html>
```

</details>

### Specification

#### Supported elements

The `ht-not` attribute can be used with any HTML element.

```html
<!-- TODO -->
```

#### Attribute syntax

The `ht-not` attribute uses the [`ht-if` attribute syntax], with the opposite effect (see [exclusive templating]).
When an `ht-not` attribute evaluates `true`, the target HTML element is **removed**.

**Example**

```html
<address ht-not='page.author.kind,site.author.kind==person' ht-content='page.author.address'></address>
```

In this example, HyperTemplates will **remove** the `<address>` element if the value of the `page.author.kind` or `site.author.kind` [template data property] matches the expected [conditional value] of `person`.

#### Exclusive templating

The `ht-not` attribute is used for _exclusive_ templating.
If the condition evaluates as **`true`**, the target HTML element is **removed**.
See [`ht-if`] for _inclusive_ templating.

#### Conditional values

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
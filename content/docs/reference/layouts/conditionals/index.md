---
created_at: 2025-01-26T11:00:00-08:00
title: Template Conditionals
---

## Template Conditionals

Template conditionals retain or remove HTML elements based on a logical condition.
They are configured using the `data-hyper-if` and `data-hyper-not` [template directives].
Template conditionals are useful for defining dynamic layouts that adapt to the contents of [template data].

* [Example `data-hyper-if` directive](#example-data-hyper-if-directive)
* [Specification](#specification)
  * [Template directive](#template-directive)
  * [Conditional elements](#conditional-elements)
  * [Conditional values](#conditional-values)
  * [Inclusive and exclusive conditionals](#inclusive-and-exclusive-conditionals)

## Example `data-hyper-if` directive

The following example `layout.html` contains a template conditional directive on the `<header>` element.

<code-snippet hyper-code filename='layout.html' highlight='8-10' with-line-numbers>

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title data-hyper-content='page.title,site.title'></title>
    </head>
    <body>
        <header data-hyper-if='page.title'>
            <h1 data-hyper-content='page.title'></h1>
        </header>
        <article data-hyper-content='page.content'></article>
    </body>
</html>
```

</code-snippet>

The template include directive in this example will remove the placeholder `<header>` element if no [conditional value](#conditional-values) is provided for `page.title`.

For example, given the following [template data] (`data.json`), the conditional `<header>` element would be removed (see example output).

<code-snippet hyper-code filename='data.json'>

```json
{
    "site": {
        "title": "HyperTemplates Documentation"
    },
    "page": {
        "created_at": "2025-01-27T17:00:00-08:00",
        "content": "Lorem ipsum, hipsters get some."
    }
}
```

</code-snippet>

<details><summary>Example output <code>index.html</code></summary>

HyperTemplates removed the `<header>` element!

<code-snippet hyper-code filename='index.html'>

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title>HyperTemplates Documentation</title>
    </head>
    <body>
        <article>
            <p>Lorem ipsum, hipsters get some.</p>
        </article>
    </body>
</html>
```

</code-snippet>
</details>

### Specification

#### Template directive

The template include directives (`data-hyper-if` and `data-hyper-not`) can be added to any HTML element.
Template conditionals evaluate conditions to a boolean `true` or `false` value.

```html
<p data-hyper-if='page.summary'></p>
```

In this example, the `data-hyper-if` HTML attribute is a [template directive].

Template conditional HTML attribute values are [template data keys] (e.g. `page.summary`).

#### Conditional elements

An HTML element with a template conditional directive is called a "conditional element".

```html
<p data-hyper-if='page.summary'></p>
```

In this example, the `<p>` element is a conditional element.

#### Conditional values

Template conditionals directives can optionally define an expected [template data value].
Template conditionals are expressed as semicolon-separated list of `keys==values` pairs (delineated by the `==` characters).
Template conditional expressions can specify a comma-separated list of keys, and a comma-separated list of values; e.g. `page.author.kind,site.author.kind==organization,company` (i.e. `page.author.kind` or `site.author.kind` must be equal to `organization` or `company`).
When multiple keys are defined for a given conditional expression, the first non-empty key will be used.
When multiple values are defined for a given conditional expression, the [template data value] must match one of the values for the condition to be evaluated as `true`.

```html
<span data-hyper-if='page.author.kind==organization,company,business'></span>
```

In this example, the conditional value is `organization`, `company`, or `business`.
This sample template conditional would evaluate as `true` for the following [template data object]:

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

However, if `page.author.kind` was any other value than `organization`, the sample template conditional would evaluate as `false`.

Template conditionals with no conditional value will return `true` if the referenced [template data key] is present in the [template data object] _and_ if the resulting [template data value] is anything other than `false` or an empty string (`""`).

#### Inclusive and exclusive conditionals

Template conditionals come in two flavors: inclusive (`data-hyper-if` directives) and exclusive (`data-hyper-not` directives).
Inclusive template conditionals will **retain** the conditional element (and child elements, if any) if the condition is true.
Exclusive template conditionals will **remove** the conditional element (and child elements, if any) if the condition is true.

```html
<span data-hyper-not='page.author.kind==organization'></span>
```

In this example, the `<span>` element will be removed if `page.author.kind` is `organization`. 

<!-- Links -->
[template data]: /docs/reference/data/
[template data object]: /docs/reference/data/#template-data-object
[template data key]: /docs/reference/data/#template-data-keys
[template data keys]: /docs/reference/data/#temlpate-data-keys
[template data value]: /docs/reference/data/#template-data-values
[template directive]: /docs/reference/layouts/#template-directives
[template directives]: /docs/reference/layouts/#template-directives

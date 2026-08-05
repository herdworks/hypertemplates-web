---
created_at: 2025-02-03T12:00:00-08:00
title: ht-if directive
summary: |
    `ht-if` directive reference documentation
breadcrumb: ht-if
---

## `ht-if` directive reference

<auto-toc selectors='h3,h4,h5,h6'></auto-toc>

### Overview
------------

The `ht-if` directive retains the target HTML element if the defined conditional expression evaluates to `true`.
If the conditional expression evaluates to `false`, the target HTML element is removed.

### Example
-----------

This example shows the `ht-if` directive being used to template the `<header>` element.

<code-snippet ht-block filename='layout.html' highlight='8-10' line-numbers='on'>

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title ht-apply>${ page.title, site.title }</title>
    </head>
    <body>
        <header ht-if='${ page.title }'>
            <h1 ht-apply>${ page.title }</h1>
        </header>
        <article ht-apply>${ page.content, "Hello world." }</article>
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

The `ht-if` directive can be used with any HTML element.

```html
<meta ht-apply ht-if='${ data.opengraph }' name='og:title' content='${ data.opengraph.title }'>
```

#### Directive syntax
---------------------

The `ht-if` directive supports a variety of conditional expressions consisting of the following components:

* **Variables**: all `ht-if` expressions _must_ include at least one `${ ... }` [template variable].
* **Operator**: `ht-if` expressions may use a single operator, including: 
  * the `!` [unary operator]
  * a supported [binary operator] (`==`, `!=`, `~=`, and `!~`)
  * a supported membership operator  (`in`, and `not in`)
* **Literal values**: `ht-if` expressions may use literal values as conditional operands

##### Existence expressions
--------------------------

The most basic `ht-if` directive is a `ht-if='${ ... }'` existence expression.
Existence expressions evaluate `true` as long as the [template variable] returns a [truthy] value. 
In HyperTemplates the number `0` is considered truthy, and `""` empty strings are considered [falsy].

**Example**

```html
<meta ht-apply ht-if='${ page.redirect }' http-equiv='refresh' content='0; url=${ page.redirect }'>
```

In this example, the target `<meta>` element will be removed if `page.redirect` is not set.

##### Unary expressions
----------------------

HyperTemplates supports the [unary] `!` operator, which can be used to negate an [existence expression](#existence-expressions). 

**Example**

```html
<title ht-apply ht-if='!${ page.title }'>${ site.title }</title>
<title ht-apply ht-if='${ page.title }'>${ site.title } | ${ page.title }</title>
```

In this example, we are using the `!` operator to check if `page.title` is _not_ set. 
If `page.title` is not set, or if it has no value, then the first `<title>` element is used and the second is discarded.

##### Binary expressions
------------------------

HyperTemplates supports `==`, `!=`, `~=`, and `!~` [binary operators].
A binary operator compares two values.
The values being compared are called [operands], which can be [template variables] or literal values.
All binary expressions must contain at least one [template variable] operand.

**Examples**

Compare a template variable with a literal value using the equality operator (`==`).

```html
<title ht-if='${ page.path } == "/"'>Home</title>
```

Compare two template variables using the inequality operator (`!=`). 

```html
<section ht-include='fragments/example' ht-if='${ page.foo } != ${ page.bar }'><section>
```

Evaluate a template variable using a mathing regular expression operator (`~=`). 

```html
<section ht-include='fragments/related-posts' ht-if='${ page.path } =~ "^/blog/"'></section>
```

##### Membership expressions

HyperTemplates supports the `in` and `not in` membership operators.
Membership expressions must use the `<operand> <operator> <collection>` syntax.
Membership expression may use [template variables] or literal values as operands.
Membership expressions _must_ use a [template variable] for the colection.

**Examples**

```html
<section ht-include='fragments/testimonials' ht-if='${ page.service } in ${ data.testimonials.categories }'></section>
```

In this example, the testimonial section will be removed if the value of `${ page.service }` is not in the `data.testimonial.categories` collection.

#### Logical operators

##### Logical `OR` operator

The `ht-if` expressions support the logical `OR` operator.
The `OR` operator splits `ht-if` expressions into _statements_.
Statements are evaluated from left to right until a statement evaluates to `true`.
If the end of a logical `OR` expression is reached an no statement evaluated to `true`, the result is `false`.

**Examples**

```html
<a ht-if='${ page.foo } == "bar" OR ${ page.foo } == "baz"' href='#'>
    <!-- link content -->
</a>
```

In this example, the `<a>` element will be retained if the value of `${ page.foo }` is "bar" or "baz".

##### Logical `AND` operations

Multiple `ht-if` directives can be added to a single element to express logical `AND` operations.
Logical `AND` operations evaluate `ht-if` directives in HTML attribute order until an expression evaluates to `false`.
Every `ht-if` expression in a logical `AND` operation must evaluate to `true`, otherwise the result is `false`.

**Example**

```html
<a ht-if='${ page.foo } == "bar"' ht-if='${ page.bar } == "baz"' href='#'>
    <!-- link content -->
</a>
```

In this example, the `<a>` element will be retained if the value of `${ page.foo }` is "bar", AND the value of `${ page.bar }` is "baz".

<!-- Links -->
[attribute]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[template data]: /docs/reference/core/data/
[template data property]: /docs/reference/core/data/#template-data-property
[template data properties]: /docs/reference/core/data/#template-data-property
[directive syntax]: #directive-syntax
[conditional value]: #conditional-values
[conditional values]: #conditional-values
[unary]: https://en.wikipedia.org/wiki/Unary_operation
[unary operator]: https://en.wikipedia.org/wiki/Unary_operation
[binary]: https://en.wikipedia.org/wiki/Binary_operation
[binary operator]: https://en.wikipedia.org/wiki/Binary_operation
[template variable]: /docs/reference/core/variables/
[truthy]: https://developer.mozilla.org/en-US/docs/Glossary/Truthy
[falsy]: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
[operands]: https://en.wikipedia.org/wiki/Operand

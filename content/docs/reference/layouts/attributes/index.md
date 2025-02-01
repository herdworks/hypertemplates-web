---
created_at: 2025-01-26T11:00:00-08:00
title: Attribute Templating
---

## Attribute Templating

Attribute templating inserts [HTML element attributes], including [`data-*` attributes] into a [layout].
They are configured using the `data-hyper-attrs` [template directive].

* [Example `data-hyper-content` directive](#example-data-hyper-content-directive)
* [Specification](#specification)
  * [Template directive](#template-directive)
  * [Attribute elements](#content-elements)

### Example `data-hyper-attrs` directive

The following example `layout.html` contains an attribute templating directive on the `<meta>` description element.

<code-snippet hyper-code filename='layout.html' highlight='5' with-line-numbers>

```html
<html>
    <head>
        <meta charset='utf-8'>
        <title>Acme Inc.</title>
        <meta name='description' hyper-attrs='content:site.description'>
    </head>
    <body>
        <article>
            <p>Lorem ipsum, hipsters get some.</p>
        </article>
    </body>
</html>
```

</code-snippet>


Let's see what happens when we process this template with the following [template data].

```javascript
{
    site: {
        title: "Acme, Inc"
        description: "Makers of fine anvil products."
    }
}
```

<details><summary><strong>Example output <code>index.html</code></strong></summary>

```html
<html>
    <head>
        <meta charset='utf-8'>
        <title>Acme Inc.</title>
        <meta name='description' content='Makers of fine anvil products.'>
    </head>
    <body>
        <article>
            <p>Lorem ipsum, hipsters get some.</p>
        </article>
    </body>
</html>
```

</details>

### Specification

#### Template directive

The content templating directive (`data-hyper-attrs`) can be added to any HTML element.

```html
<a data-hyper-attrs='href:page.link'>click here</a>
```

In this example, the `data-hyper-attrs` HTML attribute is a [template directive].

#### Atribute names

The content templating directive (`data-hyper-attrs`) can add any attribute to any HTML element.
The template attributes are defined as a semicolon-separated list of `key:value` pairs (delineated by the `:` character).

```html
<a data-hyper-attrs='href:page.link'>click here</a>
```

In this example, the `href:page.link` directive  HTML attribute is a [template directive].


#### Attribute elements

An HTML element with a content templating directive is called a "content element".

```html
<h1 data-hyper-content='page.title'></h1>
```

In this example, the `<h1>` element is a content element.

#### Content formats

Content templating directives can optionally specify the format of the content to be inserted into the layout.
The directive syntax is `format:key`.
The supported formats are `html` and `markdown`.

```html
<article data-hyper-content='markdown:page.content'></article>
```

In this example, the `markdown:page.content` directive configures the layout to parse the value of `page.content` as [Markdown].
The rendered Markdown (i.e. HTML elements) are then appended as child nodes to the content element, in a similar manner as the [Javascript `appendChild()` method].


<!-- Links -->
[HTML element attributes]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[`data-*` attributes]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes
[layout]: /docs/reference/layouts
[template directive]: /docs/reference/layouts/#template-directives
[template data]: /docs/reference/data/
[template data value]: /docs/reference/data/#template-data-value
[template data values]: /docs/reference/data/#template-data-value
[template conditional]: /docs/reference/layouts/conditionals/

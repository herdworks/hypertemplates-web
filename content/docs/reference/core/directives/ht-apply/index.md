---
created_at: 2026-05-06T12:00:00-07:00
updated_at: 2026-05-06T12:00:00-07:00
title: ht-apply directive
summary: |
    `ht-apply` directive reference documentation
breadcrumb: ht-apply
---

## `ht-apply` directive reference

<auto-toc selectors='h3,h4,h5,h6'></auto-toc>

### Overview 
------------

The `ht-apply` directive performs [variable substitution] on the target HTML elements [attributes] and child [text nodes].

### Example
-----------

This example shows the `ht-apply` directive being used to template the `<title>`, `<meta>`, `<h1>`, and `<article>` elements.

<code-snippet ht-block filename='layout.html' highlight='5-6,10,12-14' line-numbers='on'>

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title ht-apply>${ site.title } | ${ "Placeholder Title" }</title>
        <meta ht-apply name='description' content='${ page.description, site.description }'>
    </head>
    <body>
        <header>
            <h1 ht-apply>${ page.title, "Hello, world." }</h1>
        </header>
        <article ht-apply>
            ${ markdown(page.content, "") }
        </article>
    </body>
</html>
```

</code-snippet>

<details><summary><strong>Example output <code>index.html</code></strong></summary>

Let's see what happens when we process this template with the following [template data].

```javascript
{
    site: {
        title: "HyperTemplates",
        description: "The pure-HTML templating system for the modern web."
    },
    page: {
        title: "ht-apply directive",
        description: "ht-apply directive reference documentation",
        content: "Lorem ipsum, _hipsters_ get some!"
    }
}
```

The `<title>` and `<meta name='description'>` elements are updated with the variables substituted:

```html
<html lang='en-US'>
    <head>
        <meta charset='utf-8'>
        <title>HyperTemplates | ht-apply directive</title>
        <meta name='description' content='ht-apply directive reference documentation'>
    </head>
    <body>
        <header>
            <h1>ht-apply directive</h1>
        </header>
        <article>
            <p>Lorem ipsum, <em>hipsters</em> get some.</p>
        </article>
    </body>
</html>
```

</details>

<doc-quote ht-block protip>

**PROTIP:** Why are there so many `ht-apply` directives in this simple example? See [declarative templating](#declarative-templating) below to learn why HyperTemplates does _not_ process every single element in your layouts. 

</doc-quote>

### Specification
-----------------

#### Supported elements
-----------------------

The `ht-apply` directive can be used with any HTML element, including [void elements].

```html
<meta ht-apply name='description' content='${ page.description, "Placeholder description." }' />
```

#### Directive syntax
---------------------

The `ht-apply` directive is an [HTML boolean attribute].
If it is present, HyperTemplates will perform [variable substitution] on the target element and its child [text nodes].

**Example:**

<!-- NOTE: leave the ht-apply='false' attribute value is used intentionally here -->

```html
<title ht-apply='false'>${ page.title }</pull-quote>
```

<!-- NOTE: the uses of "ht-apply attribute" and "ht-apply attribute values" are correct here -->

This example demonstrates that `ht-apply` directives are invoked by the presence of the `ht-apply` attribute (i.e. `ht-apply` attribute values are ignored).
The `${ page.title }` variable is a regular HTML text node

#### Declarative templating
---------------------------

HyperTemplates is a declarative templating system.
For example, `<h1 ht-apply>${ page.title }</h1>` uses the `ht-apply` directive to declare that HyperTemplates should perform [variable substitution] on the `<h1>` element.

Declarative templating systems codify _intent_. They also facilitate an important separation of concerns: theme developers only need to express the _what_, while the tooling is responsible for the _how_.

Declarative templating also comes with some nice benefits, including the overall performance of the templating system. Instead of scanning HTML files as plain text and looking for [template variables], HyperTemplates parses HTML documents and uses highly performant CSS selectors to process individual HTML elements in a deterministic order. 

<doc-quote ht-block protip>

**PROTIP:** [declarative programming](https://en.wikipedia.org/wiki/Declarative_programming) allows you to express desired outcomes without having to describe the entire control flow. In the context of a templating system like HyperTemplates, it means users don't have to think about the order in which elements are processed (see [Pipeline](/docs/reference/core/pipeline/)). 

</doc-quote>


#### Implicit variable substitution
-----------------------------------

The `ht-apply` directive is implied by the [`ht-each`] and [`ht-block`] directives, so it is not necessary to add the `ht-apply` directive to invoke variable substitution on `ht-each` and `ht-block` elements.

**Example**

In this example, it is not necessary to add the `ht-apply` directive to the `<a>` element.
Variable substitution is implied by `ht-each`.

```html
<header>
    <nav>
        <menu>
            <a ht-each='link in ${ data.nav.links }' href='${ link.href }'>${ link.text, "Link" }</a>
        </menu>
    </nav>
</header>
```


<!-- Links -->
[`ht-block`]: /docs/reference/core/directives/ht-block/
[`ht-each`]: /docs/reference/core/directives/ht-each/
[attributes]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes
[HTML boolean attribute]: https://developer.mozilla.org/en-US/docs/Glossary/Boolean/HTML
[text nodes]: https://developer.mozilla.org/en-US/docs/Web/API/Text
[template variables]: /docs/reference/core/variables/
[variable substitution]: /docs/reference/core/variables/
[void elements]: https://developer.mozilla.org/en-US/docs/Glossary/Void_element

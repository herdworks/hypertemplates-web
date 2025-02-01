---
created_at: 2025-01-26T11:00:00-08:00
title: Template Iterators
summary: |
    HyperTemplates Iterators
---

## Template Iterators

Template iterators bring the concept of iteration (e.g. `for...of` loops) directly into HyperTemplates.
Template iterators are configured using the `data-hyper-template` [template directive].
When combined with other HyperTemplates templating directives such as [template conditionals], [attribute templating], and [content templating], template iterators are a powerful building block for defining dynamic layouts that adapt to the contents of [template data].

* [Example `data-hyper-template` directive](#example-data-hyper-template-directive)
* [Specification](#specification)
  * [Template directive](#template-directive)
  * [Iterator templates](#iterator-templates)
  * [Iterator data objects](#iterator-data-objects)
  * [Iterator data values](#iterator-data-values)

### Example `data-hyper-template` directive

The following example `layout.html` containes a template iterator directive on the `<a>` element.

<code-snippet hyper-code filename='layout.html' highlight='10-12' with-line-numbers>

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title data-hyper-content='page.title,site.title'></title>
    </head>
    <body>
        <header>
            <nav>
                <a data-hyper-template='link:site.nav' data-hyper-attrs='href:link.href'>
                    <span data-hyper-content='link.label,link.title'></span>
                </a>
            </nav>
            <h1 data-hyper-content='page.title'></h1>
        </header>
        <article data-hyper-content='page.content'></article>
    </body>
</html>
```

</code-snippet>

If provided with the following [template data object], the template iterator would create three new `<a>` elements using the contents of `site.nav`.

```javascript
{
    site: {
        title: "HyperTemplates Documentation"
        nav: [
            { label: "Home", href: "/" },
            { label: "About", href: "/about/" },
            { label: "Contact", href: "/contact/" }
        ]
    },
    page: {
        created_at: "2025-01-27T17:00:00-08:00",
        title: "HyperTemplates Documentation"
    }
}
```

<details><summary><strong>Example output:</strong></summary>

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title>HyperTemplates Documentation</title>
    </head>
    <body>
        <header data-hyper-if='page.title'>
            <nav>
                <a href='/'>
                    <span>Home</span>
                </a>
                <a href='/about/'>
                    <span>About</span>
                </a>
                <a href='/contact/'>
                    <span>Contact</span>
                </a>
            </nav>
            <h1 data-hyper-content='page.title'></h1>
        </header>
        <article data-hyper-content='page.content'></article>
    </body>
</html>
```

</details>

### Specification

#### Template directive

The template iterator directive (`data-hyper-template`) can be added to any HTML element.

```html
<a data-hyper-template='link:site.nav'>
    <span data-hyper-content='link.label'></span>
</a>
```

In this example, the `data-hyper-template` HTML attribute is a [template directive].

#### Iterator templates

An HTML element with a template iterator directive is called an "iterator template"[^1].
Iterator templates and their child elements (if any) are effectively cloned once per iteration of the referenced [template data values].

```html
<a data-hyper-template='link:site.nav'>
    <span data-hyper-content='link.label'></span>
</a>
```

In this example, the `<a>` element together with its child `<span>` element make up an iterator template.

<doc-quote warning hyper-code>

**NOTE:** when processing HyperTemplates with [tidy mode] enabled, all template elements will be removed from the HTML output.

</doc-quote>

#### Iterator data objects

[Iterator templates](#iterator-templates) are rendered using a [template data object] containing <mark>only the values specified in the template iterator directive</mark>.
The template iterator directive uses a `key:value[,value]` schema.

```html
<a data-hyper-template='link:site.nav,site.menu'>
    <span data-hyper-content='link.label'></span>
</a>
```

In this example, the `link:site.nav,site.menu` template directive will produce a [template data object] key-value pair where the key is `link`, and the value is one iteration of `site.nav` _or_ `site.menu`.
This directive is effectively equivalent to the following Javascript expression:

```javascript
let site = { menu: [ { label: "Home", href: "/" } ] };
for (let link of (site.nav || site.menu )) { console.log(link.label) };
```

#### Iterator data values

The [template data values] referenced by a template data iterator are referred to as iterator data values.
Iterator data values can be any data type, but they are designed to work with collection data types like maps and arrays.

```javascript
{
    site: {
        title: "ACME Inc",
        author: {
            name: "ACME Inc",
            href: "https://example.com",
            email: "hello@example.com"
        },
        nav: [
            { label: "Home", href: "/" },
            { label: "About", href: "/about/" },
            { label: "Products", href: "/products/" }
        ],
        footer: {
            menu: [
                { label: "Home", href: "/" },
                { label: "About", href: "/about/" },
                { label: "Products", href: "/products/" }
            ]
        },
        copyright: 2024
    },
    page: {
        title: "Products"
    }
}
```

Using this [template data object] as a reference, note how the template iterators are applied in the following example layout:

<code-snippet hyper-code filename='layout.html'>

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title data-hyper-content='page.title,site.title'></title>
    </head>
    <body>
        <header>
            <!-- Insert header layout here -->
        </header>
        <article data-hyper-content='page.content'></article>
        <footer>
            <menu data-hyper-if='site.footer.menu,site.nav'>
                <a data-hyper-template='link:site.footer.menu,site.nav' data-hyper-attrs='href:link.href'>
            </menu>
        </footer>
    </body>
</html>
```

</code-snippet>



<!-- Links -->
[template directive]: /docs/reference/layouts/#template-directives
[template conditionals]: /docs/reference/layouts/conditionals/
[attribute templating]: /docs/reference/layouts/attributes/
[content templating]: /docs/reference/layouts/content/
[template data]: /docs/reference/data/#template-data
[template data object]: /docs/reference/data/#template-data-object
[template data values]: /docs/reference/data/#template-data-values
[tidy mode]: /docs/reference/layouts/#tidy-mode

<!-- Footnotes -->
[^1]: Try saying that ten times fast, I know.
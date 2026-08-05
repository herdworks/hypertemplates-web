---
created_at: 2025-05-22T12:00:00-08:00
updated_at: 2026-02-26T10:00:00-08:00
title: ht-pipe directive
summary: |
    `ht-pipe` directive reference documentation
breadcrumb: ht-pipe
---

## `ht-pipe` directive reference

<auto-toc selectors='h3,h4,h5,h6,dl:not(:has(learn-more)) dt'></auto-toc>

### Overview
------------

The `ht-pipe` directive _moves_ elements and element contents from one location in a document to another.

### Example
-----------

The `ht-pipe` directive is a general purpose utility for relocating elements in an HTML document.
In this example we're going to focus on one specific use case: generating page-specific CSS styles.

One of our favorite things about working with a true HTML templating system is the native support for CSS `<style>` elements.
Authoring HTML component fragments is quite refreshing when you can co-locate component styles alongside the corresponding layout. 
Instead of jumping back and forth between `partials/component-a.html` and `static/css/component-a.css`, everything you need is in one place. 

Let's use the following example [fragment](/docs/reference/core/fragments/) to illustrate this point:

<code-snippet ht-block filename='fragments/example.html'>

```html
<section class='banner'>
    <style css-component>
        /* Banner Styles */
        section.banner { background-color: light-dark(rgba(255,255,255,1.0), rgba(0,0,0,1.0)); }
        section.banner h3 { font-size: 1.25rem; }
    </style>
    <h3 ht-apply>${ page.banner.heading, "Banner heading" }</h3>
    <p ht-apply>${ page.banner.text, "Banner text." }</p>
</section>
```

</code-snippet>

There are several challenges with this approach in most HTML templating systems. One simple challenge is that `<style>` elements are applied in the order they are included in the document, and including them in the wrong order can cause unexpected cascade issues.

The `ht-pipe` directive can be used to address many of these issues by collecting disparate `<style>` elements into a predetermined location.
In the following example layout, the `ht-pipe` directive is used to collect elements matching the `[css-component]` [attribute selector]. 

<code-snippet ht-block filename='layouts/default.html' highlight='5'>

```html
<!DOCTYPE html>
<html lang='en-US'>
    <head>
        <!-- standard head elements go here -->
        <style id='components' ht-pipe='from "[css-component]" as css'></style>
        <style id='layout'>
            /* Layout-specific component styles go here */

            /* Use NYC-inspired light gray and '26 carbon black for the banner */
            section.banner { background-color: light-dark(rgba(212,212,212,1.0), rgba(26,26,26,1.0)); }
        </style>
    </head>
    <body>
        <header ht-include='fragments/header.html'></header>
        <main>
            <section ht-include='fragments/banner.html'></section>
            <section ht-include='fragments/example.html'></section>
            <section ht-include='fragments/sample.html'></section>
        </main>
        <footer ht-include='fragments/footer.html'></footer>
    </body>
</html>
```

</code-snippet>

When HyperTemplates encounters an element with an `ht-pipe` directive, it uses the provided [selector](#directive-syntax) to query the document for [matching element](#matching-elements).
If one or more matching elements are found, they are inserted into the `ht-pipe` element.

In the example above, the `ht-pipe='from "[css-component]" as css'` defines the `[css-component]` [attribute selector] (i.e. `document.querySelectorAll("[css-component]")`), and it inserts matching elements as `css` (see [pipe types](#pipe-types), below).

<details>
<summary>Example output <code>index.html</code></summary>

The resulting document will _always_ apply default component styles (in the `styles#components` element) before layout-specific styles (in the `styles#layout` element). 

```html
<!DOCTYPE html>
<html lang='en-US'>
    <head>
        <!-- standard head elements go here -->
        <style id='components'>
            /* Banner Styles */
            section.banner { background-color: light-dark(rgba(255,255,255,1.0), rgba(0,0,0,1.0)); }
            section.banner h3 { font-size: 1.25rem; }
        </style>
        <style id='layout'>
            /* Layout-specific component styles go here */

            /* Use NYC-inspired light gray and '26 carbon black for the banner */
            section.banner { background-color: light-dark(rgba(212,212,212,1.0), rgba(26,26,26,1.0)); }
        </style>
    </head>
    <body>
        <header>
            <!-- included fragments/header.html content -->
        </header>
        <main>
            <section class='banner'>
                <h3>Hello CSS world</h3>
                <p>Same CSS problems, different day.</p>
            </section>
            <section>
                <!-- included fragments/example.html content -->
            </section>
            <section>
                <!-- included fragments/sample.html content -->
            </section>
        </main>
        <footer>
            <!-- included fragments/footer.html content -->
        </footer>
    </body>
</html>
```

Notice that the banner section's child `<style>` element has been removed, and its contents have been added to the `style#components` element.

</details>


### Specification
-----------------

#### Supported elements
-----------------------

The `ht-pipe` directive can be used with any HTML element.

#### Directive syntax
---------------------

The `ht-pipe` directive provides content templating instructions, expressed as a single `from "selector" as type` expressions, where `selector` is any valid [CSS selector].
Selectors must be wrapped in quotes. 
The [pipe type](#pipe-types) is optional.

**Example**

```html
<style id='components' ht-pipe='from "[css-component]" as css'></style>
```

In this example, an element pipe has been configured to append matching `<style>` elements with `css-component` attributes to a [destination  element](#destination-element).

#### Destination elements
-------------------------

An element containing an `ht-pipe` directive is a destination element. 
Destination elements are declarative indicators of where [matching elements](#matching-elements) will be moved to.

#### Matching elements
----------------------

An element that matches an `ht-pipe` directive selector is a matching element.
Matching elements are removed from the document and inserted into [destination elements](#destination-elements).

#### Pipe types
---------------

The `ht-pipe` directive is used to move HTML elements. 
The manner in which elements are moved can be configured by providing a pipe "type" (see [directive syntax]).
The currently supported types are `element` (default), `text`, `css`, `js`, and `javascript`.
The `css`, `js`, and `javascript` pipe types are aliases for `text`.

* **Element pipes** append the target HTML _element_ to the destination element.

* **Text pipes** append the target HTML element _contents_ (as [text nodes]) to the destination element.

<doc-quote ht-block notice>

**NOTE:** Unsupported types are ignored, effectively resulting in the default behavior (`element` pipes).

</doc-quote>

**Example**

```html
<style id='components' ht-pipe='from "[css-component]" as css'></style>
```

In this example, we're creating a text pipe to move matching `<style>` element text contents to the `style#components` element.
Text pipes make it possible to aggregate snippets of code from multiple layout fragments into a single element.

<!-- Links -->
[`<title>`]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/title
[`ht-apply`]: /docs/reference/core/directives/ht-apply/
[`net/html`]: https://pkg.go.dev/golang.org/x/net/html
[attribute selector]: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Attribute_selectors
[attribute]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[content formats]: #content-formats
[CSS selector]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors
[directive syntax]: #directive-syntax
[Element node]: https://developer.mozilla.org/en-US/docs/Web/API/Element
[Element nodes]: https://developer.mozilla.org/en-US/docs/Web/API/Element
[HTML `<param>` element]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/param
[layouts]: /docs/reference/core/layouts/
[Markdown]: /docs/reference/core/markdown/
[pipe types]: #pipe-types
[template data properties]: /docs/reference/core/data/#template-data-property
[template data property]: /docs/reference/core/data/#template-data-property
[template data value]: /docs/reference/core/data/#template-data-value
[template data]: /docs/reference/core/data/
[text node]: https://developer.mozilla.org/en-US/docs/Web/API/Text
[Text nodes]: https://developer.mozilla.org/en-US/docs/Web/API/Text
[Text]: https://developer.mozilla.org/en-US/docs/Web/API/Text
[void elements]: https://developer.mozilla.org/en-US/docs/Glossary/Void_element

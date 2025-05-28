---
created_at: 2025-05-22T12:00:00-08:00
title: ht-pipe attribute
summary: |
    `ht-pipe` attribute reference documentation
breadcrumb: ht-pipe
---

## `ht-pipe` attribute reference

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview
------------

The `ht-pipe` [attribute] _moves_ target elements or target element contents.

### Example
-----------


This example shows the `ht-pipe` attribute being used to template a `<style>` element.

<code-snippet ht-block filename='theme/partials/footer.html' highlight='2'>

```html
<footer>
    <style ht-pipe='head'>
        /* Footer Styles */
        footer {
            display: block;
            width: 100%;
        }
    </style>
    <p>&copy; 2025 Herd Works &bullet; made with ❤️ in Portland, Oregon</p>
</footer>
```

</code-snippet>

This template will cause the `<style>` element to be moved from its original position in the `<footer>` element to its configured destination: the `<head>` element.

<details><summary>Example output</summary>

Let's see what would happen if our example `<footer>` element is loaded from the following layout template:

```html
<!DOCTYPE html>
<html lang="en-US">
    <head>
        <title></title>
        <link rel='stylesheet' href='/css/styles.css'>
        <style id='components'></style>
        <style id='layout'>
            /* Layout-specific style overrides */
            :root {
                --container-width: 840px;
            }
        </style>
    </head>
    <body>
        <header ht-include='partials/header'></header>
        <article ht-include='partials/article'></header>
        <footer ht-include='partials/footer'></footer>
    </body>
</html>
```

The `<footer>` element would be included into the generated page, but the footer's `<style>` element would be _moved_ (appended) to the `<head>`!

```html
<!DOCTYPE html>
<html lang="en-US">
    <head>
        <title></title>
        <link rel='stylesheet' href='/css/styles.css'>
        <style id='layout'>
            /* Layout-specific style overrides */
            :root {
                --container-width: 840px;
            }
        </style>
        <style>
            /* Footer Styles */
            footer {
                display: block;
                width: 100%;
            }
        </style>
    </head>
    <body>
        <header>
            <!-- the header element would be included here -->
        </header>
        <article>
            <!-- the article element would be included here -->
        </header>
        <footer>
            <p>&copy; 2025 Herd Works &bullet; made with ❤️ in Portland, Oregon</p>
        </footer>
    </body>
</html>
```

When HyperTemplates encounters an element with an `ht-pipe` attribute, it uses the provided [selector](#attribute-syntax) to query the document for a [destination element](#destination-elements).
If a matching element is found, it proceeds to move the target element into the destination element.

In this example, the `ht-pipe='head'` attribute defines `head` as the selector, which HyperTemplates uses to query the document (which query is effectively `document.querySelector("head")`).

</details>


### Specification
-----------------

#### Supported elements
-----------------------

The `ht-pipe` attribute can be used with any HTML element.

<doc-quote ht-block caution>

**NOTE:** some `ht-pipe` configurations may yield unexpected results.
See [pipe types] for more information.

</doc-quote>

#### Attribute syntax
---------------------

The `ht-pipe` attribute provides content templating instructions, expressed as a single `type:selector` pair, where `selector` is a valid [CSS selector].

**Example**

```html
<style ht-pipe='element:head'></style>
```

In this example, an element pipe has been configured to append the target `<style>` element to the `<head>` element.
Because the `element` pipe type is the default, this pipe could be configured as follows:

```html
<style ht-pipe='head'></style>
```


See [pipe types] for more information.

#### Destination elements
-------------------------

All `ht-pipe` attribute must define a selector (see [attribute syntax]) to indicate where the target element should be moved to.
The element selected by the configured selector is referred to as the destination element.

<doc-quote ht-block success>

**NOTE:** `ht-pipe` elements cannot be processed without a destination element.
In cases where the pipe selector does not match another element in the document, no action is taken.

</doc-quote>

#### Pipe types
---------------

The `ht-pipe` attribute is used to move HTML elements. 
The manner in which elements are moved can be configured by providing a pipe "type" (see [attribute syntax]).
The currently supported types are `element` (default), `text`, `css`, and `javascript`.
The `css` and `javascript` pipe types are aliases for `text`.

* **Element pipes** append the target HTML _element_ to the destination element.

* **Text pipes** append the target HTML element _contents_ (as [text nodes]) to the destination element.

<doc-quote ht-block notice>

**NOTE:** Unsupported types are ignored, effectively resulting in the default behavior (`element` pipes).

</doc-quote>

**Example**

```html
<style ht-pipe='css:style#components'>
    /* Your cool styles go here */
</style>
```

In this example, we're creating a text pipe to move the contents of the target `<style>` element to the `style#components` element.
Text pipes make it possible to aggregate snippets of code from multiple layout partials into a single element.

### Guides
----------

🚧 Coming soon... 🚧

<!-- Links -->
[CSS selector]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors
[attribute]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[layouts]: /docs/reference/core/layouts/
[template data]: /docs/reference/core/data/
[template data property]: /docs/reference/core/data/#template-data-property
[template data value]: /docs/reference/core/data/#template-data-value
[template data properties]: /docs/reference/core/data/#template-data-property
[void elements]: https://developer.mozilla.org/en-US/docs/Glossary/Void_element
[Text]: https://developer.mozilla.org/en-US/docs/Web/API/Text
[text node]: https://developer.mozilla.org/en-US/docs/Web/API/Text
[Text nodes]: https://developer.mozilla.org/en-US/docs/Web/API/Text
[Element node]: https://developer.mozilla.org/en-US/docs/Web/API/Element
[Element nodes]: https://developer.mozilla.org/en-US/docs/Web/API/Element
[Markdown]: /docs/reference/core/markdown/
[content formats]: #content-formats
[`net/html`]: https://pkg.go.dev/golang.org/x/net/html
[`<title>`]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/title
[`ht-content`]: /docs/reference/core/attributes/ht-content/
[HTML `<param>` element]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/param
[attribute syntax]: #attribute-syntax
[pipe types]: #pipe-types


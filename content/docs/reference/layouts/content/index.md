---
created_at: 2025-01-26T11:00:00-08:00
title: Content Templating
summary: |
    Content-templating is a core building block of the HyperTemplates system.
---

## Content Templating

Content templating inserts text and HTML content from [template data] into a [layout].
They are configured using the `data-hyper-content` [template directive].

* [Example `data-hyper-content` directive](#example-data-hyper-content-directive)
* [Specification](#specification)
  * [Template directive](#template-directive)
  * [Content elements](#content-elements)

### Example `data-hyper-content` directive

The following example `layout.html` contains a content templating directive on the `<title>` and `<h1>` elements.

<code-snippet hyper-code filename='layout.html' highlight='5,9' with-line-numbers>

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title data-hyper-content='page.title,site.title'>Placeholder Title</title>
    </head>
    <body>
        <header>
            <h1 data-hyper-content='page.title'>Hello, world.</h1>
        </header>
        <article>
            <p>Lorem ipsum, hipsters get some.</p>
        </article>
    </body>
</html>
```

</code-snippet>

Both the `<title>` and `<h1>` elements are configured to use the value of `page.title`, if available.
But the `<title>` element content templating directive configures a secondary value of `site.title`; if `page.title` is empty, the layout will use the value of `site.title`, or else do nothing.

Let's see what happens when we process this template with the following [template data].

```javascript
{
    site: {
        title: "Acme, Inc"
    }
}
```

<details><summary><strong>Example output <code>index.html</code></strong></summary>

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title>Acme, Inc</title>
    </head>
    <body>
        <header>
            <h1>Hello, world.</h1>
        </header>
        <article>
            <p>Lorem ipsum, hipsters get some.</p>
        </article>
    </body>
</html>
```

<doc-quote hyper-code>

**PROTIP:** did you notice how content templating handles default/fallback values?
The `<title>` element child [Text node] (`"Placeholder Title"`) was replaced by the value of `site.title`.
However, the the example [template data] did not contain a value for `page.title` so the `<h1>` element was not modified, leaving its child [Text node] (`Hello, world.`) unchanged.

</doc-quote>

</details>

### Specification

#### Template directive

The content templating directive (`data-hyper-content`) can be added to any HTML element.

```html
<h1 data-hyper-content='page.title'></h1>
```

In this example, the `data-hyper-content` HTML attribute is a [template directive].

#### Content elements

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
[layout]: /docs/reference/layouts
[template directive]: /docs/reference/layouts/#template-directives
[templating directives]: /docs/reference/layouts/#template-directives
[template data]: /docs/reference/data/
[template data value]: /docs/reference/data/#template-data-value
[template data values]: /docs/reference/data/#template-data-value
[template conditional]: /docs/reference/layouts/conditionals/
[Text node]: https://developer.mozilla.org/en-US/docs/Web/API/Text
[Markdown]: /docs/reference/layouts/markdown/
[Javascript `appendChild()` method]: https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
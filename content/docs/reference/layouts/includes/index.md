---
created_at: 2025-01-26T11:00:00-08:00
title: Template Includes
summary: |
    HyperTemplates layout includes.
---

## Template Includes

Template includes insert HTML elements from an external source into a [layout].
Template includes are configured using the `data-hyper-include` and `hyper-include` [template directives].
Template includes are helpful for composing complex layouts from reusable components.

* [Example `data-hyper-include` directive](#example-data-hyper-include-directive)
* [Specification](#specification)
  * [Template directive](#template-directive)
  * [Placeholder elements](#placeholder-elements)
  * [Include sources](#include-sources)
  * [Included elements](#included-elements)
  * [Attribute passthrough](#attribute-passthrough)

### Example `data-hyper-include` directive

In the following example `layout.html` containes a template include directive on the `<header>` element.

<code-snippet hyper-code filename='layout.html' highlight='8' with-line-numbers>

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title>Introducing: Template Includes</title>
    </head>
    <body>
        <header data-hyper-include='partials/header.html' id='hero'></header>
        <article>
            <h2>Hello, world</h2>
            <p>Lorem ipsum, hipsters get some.</p>
        </article>
    </body>
</html>
```

</code-snippet>

The template include directive in this example will replace the placeholder `<header>` element with the contents of the referenced [include source](#include-sources) (`partials/header.html`), which is an HTML document with one or more HTML elements. 

<code-snippet hyper-code filename='partials/header.html'>

```html
<header>
    <nav>
        <a href='/'>Home</a>
        <a href='/about'>About</a>
    </nav>
    <h1>Introducing: Template Includes</h1>
</header>
```

</code-snippet>

<details><summary><strong>Example output: <code>index.html</code></strong></summary>

<code-snippet hyper-code filename='index.html'>

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title>Introducing: Template Includes</title>
    </head>
    <body>
        <header id='hero'>
            <nav>
                <a href='/'>Home</a>
                <a href='/about'>About</a>
            </nav>
            <h1>Introducing: Template Includes</h1>
        </header>
        <article>
            <h2>Hello, world</h2>
            <p>Lorem ipsum, hipsters get some.</p>
        </article>
    </body>
</html>
```

<doc-quote hyper-code>

**PROTIP:** [Placeholder elements](#placeholder-elements) can pass through element attributes.
In this example, the placeholder `<header>` element _passes through_ the `id` attribute specified in `layout.html`, even though the include source (`partials/header.html`) does not specify an `id` attribute on the `<header>` element.

See [attribute passthrough](#attribute-passthrough) for more details.

</doc-quote>

</code-snippet>
</details>

### Specification

#### Template Directive

The template include directive (`data-hyper-include`) can be added to any HTML element.

```html
<button data-hyper-include='path/to/source.html'></button>
```

In this example, the `data-hyper-include` HTML attribute is a [template directive].

#### Placeholder elements

An HTML element with a template include directive is called a "placeholder element".

```html
<button data-hyper-include='path/to/source.html'>
```

In this example, the `<button>` element is a placeholder element.

#### Include sources

An include source is an HTML document referenced in a template include directive.
Include sources are generally **not** valid HTML5 documents, as they are generally HTML snippets that do not contain `<head>` and `<body>` elements.
Template include directive values should be relative references to include sources.

```html
<button data-hyper-include='path/to/source'>
```

In this example, the value of the include directive is `path/to/source`.

<doc-quote hyper-code>

**PROTIP:** because HyperTemplates are a pure-HTML templating system, we can always assume that include sources will be HTML documents with `.html` file extensions.

A template include directive like `data-hyper-include='path/to/source'` is the same as `data-hyper-include='path/to/source.html'`.

</doc-quote>

#### Included elements

Placeholder elements (including any child elements) will be replaced with the contents of the source HTML document (i.e. the "included elements").

See the [example `data-hyper-include` directive](#example-data-hyper-include-directive) and example output, above.

#### Attribute passthrough

If a placeholder element tag name matches the tag name of the first element in the include source


<!-- Links -->
[template directive]: /docs/reference/layouts/#template-directives
[template directives]: /docs/reference/layouts/#template-directives
[Layout]: /docs/reference/layouts/
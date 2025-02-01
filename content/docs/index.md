---
created_at: 2024-12-10T16:00:00-08:00
updated_at: 2024-12-10T16:00:00-08:00
title: HyperTemplates Documentation
summary: |
    Home of the HyperTemplates tutorial, guide, and reference documentation.
---

# HyperTemplates

HyperTemplates are a pure-HTML templating system for the modern web.  

* [What is HyperTemplates?](#what-is-hypertemplates)
* [How it works](#how-it-works)
* [Building blocks](#building-blocks)
* [Specification](#specification)
  * [Layouts](#layouts)
  * [Data](#data)
  * [Themes](#themes)

## What is HyperTemplates?

1. **A specification.**

   The HyperTemplates specification is a system for HTML templating.

   <learn-more hyper-code href='/docs/reference/layouts/'></learn-more>

1. **A library.**

   The HyperTemplates core (`libhypertemplates`) is a library with C bindings for HTML templating in native applications.

   <learn-more hyper-code href='/docs/reference/libhypertemplates/'></learn-more>

1. **A static site generator.**

   The HyperTemplates CLI `hyperctl` is a fully-featured static site generator.

   <learn-more hyper-code href='/docs/reference/cli/'></learn-more>

## How it works

HyperTemplates use structured data (content) and valid HTML documents (layout) as inputs, generating valid HTML documents as output.

```shell
[layout] + [data] = [HTML]
```

When processing a HyperTemplates layout with no data, the result is still a valid HTML document.

## Building Blocks

### Layouts

A HyperTemplates layout is an HTML5 document containing one or more [template directives](#template-directives).

<code-snippet hyper-code filename='layout.html'>

```html
<!DOCTYPE html>
<html lang='en-US'>
    <head>
        <meta charset='utf-8'>
        <title data-hyper-content='page.title'></title>
    </head>
    <body>
        <section id='article' data-hyper-content='page.content'></section>
    </body>
</html>
```

</code-snippet>

<learn-more hyper-code href='/docs/reference/layouts/'></learn-more>

### Data

HyperTemplates data is content in key-value pairs used to hydrate a layout template.
Template data is generally managed as content files in Markdown, YAML, or JSON format.

<code-snippet hyper-code filename='index.md'>

```markdown
---
created_at: 2025-01-29T12:00:00-08:00
title: Hello, world
---

## Hello, world

Lorem ipsum, hipsters get some.

```

</code-snippet>

<learn-more hyper-code href='/docs/reference/data/'></learn-more>

### Themes

Coming soon...


<!-- Links -->
[HTML5 data attributes]: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*


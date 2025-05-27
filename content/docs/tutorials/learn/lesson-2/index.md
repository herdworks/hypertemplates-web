---
created_at: 2025-05-25T08:00:00-07:00
title: Attribute Templating
description: Learn how attribute templating works in HyperTemplates
summary: |
    Learn how attribute templating works in HyperTemplates
breadcrumb: Attribute Templating
---

## Attribute Templating Tutorial

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Goal

### Introduction

In this lesson we will template HTML element attributes using HyperTemplates.

### Exercises

**EXERCISE 1: Create attribute templates**
: Create attribute templates.

  Let's add a description metadata element to our layout template.

  <code-snippet ht-block filename="layouts/default.html" highlight='5'>
  
  ```html
  <html lang='en-US'>
      <head>
          <meta charset='utf-8'>
          <title ht-content='title'>Learn HyperTemplates</title>
          <meta name='description' ht-attrs='content:description'>
      </head>
      <body>
          <main>
              <article ht-content='markdown:content'>
                  <h2>Hello, world</h2>
                  <p>
                      This is an <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'>HTML</a> layout!
                  </p>
              </article>
          </main>
      </body>
  </html>
  ```
  
  </code-snippet>

  [Frontmatter](/docs/reference/core/markdown/#frontmatter) properties in a [Markdown] document are accessible to HyperTemplates as [template data properties](/docs/reference/core/data/#template-data-properties).
  In this example we have templated the `<meta>` element using the [`ht-attrs` attribute](/docs/reference/core/attributes/ht-attrs/).
  The `content:description` value tells HyperTemplates to add an attribute named `content` to the `<meta>` element with the value of the `description` property from our page data file (`index.md`).

  <doc-quote ht-block>

  **Small but mighty!** 💪

  The [`ht-attrs`] attribute can be used to add multiple attributes to a single HTML element.
  This is really helpful because attributes are the primary interface for configuring HTML element appearance and behavior. :boom:

  </doc-quote>

  OK, let's move on to step 2 to create a new page that includes a description.


**EXERCISE 2: Create a new page**
: Create a new page with a description.

  Let's add a `description` property to our page:

  <code-snippet ht-block filename="content/index.md" highlight="3">
  
  ```plaintext
  ---
  title: Introduction to HTML templating
  description: My first HyperTemplates page!
  ---
  
  ## Hello, world
  
  This is my first HyperTemplates content!
  ```
  
  </code-snippet>
  
  
  Render the page to see the description `<meta>` tag populated, then refresh your browser to see what changed.
  
  ```shell
  hyperctl render -d content/index.md -l layouts/default.html > index.html
  ```
  
  To view the description in a browser, hover over the browser tab, or use "view source" to inspect the rendered HTML.
  Otherwise, just open `index.html` in your text editor.

### Discussion


### Learn more

* [Attributes reference](/docs/reference/core/attributes/)
  * [`ht-attrs` attribute](/docs/reference/core/ht-attrs/)
* [Data reference](/docs/reference/core/data/)
* [Markdown reference](/docs/reference/core/markdown/)
* [CLI reference](/docs/reference/cli/)

### Next Steps

<learn-more ht-block label='Lesson 3: Template Conditionals' href='../lesson-3/'>

<!-- Links -->
[`ht-attrs`]: /docs/reference/core/attributes/ht-attrs/
[element attributes]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes
[Markdown]: /docs/reference/core/markdown/

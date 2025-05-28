---
created_at: 2025-05-25T08:00:00-07:00
title: Content Templating
description: Learn how content templating works in HyperTemplates
summary: |
    Learn how content templating works in HyperTemplates
breadcrumb: Content Templating
---

## Content Templating Tutorial

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Goal
--------

In this lesson we will create a reusable layout template and then create our first web page using HyperTemplates.

### Introduction
----------------

🚧 Coming soon... 🚧

### Exercises
-------------

**EXERCISE 1: Create a layout**
: Write layouts in pure-HTML.

  HyperTemplates [layouts] are HTML files.
  Let's create a directory for our layout files, and add our first layout.
  
  ```plaintext
  mkdir layouts/
  touch layouts/default.html
  ```
  
  Now lets add a basic layout to `layouts/default.html`.
  
  <code-snippet ht-block filename="layouts/default.html">
  
  ```html
  <html lang='en-US'>
      <head>
          <meta charset='utf-8'>
          <title>Learn HyperTemplates</title>
      </head>
      <body>
          <main>
              <article>
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

  This layout is a simple HTML document with a header and a paragraph.
  Let's view this document in our browser:

  ```plaintext
  open layouts/default.html
  ```

  The problem with this layout is that we can't reuse it without modifying the HTML.
  This is where [templating](/docs/#introduction-to-templating) comes in.
  Let's move on to step 2 to convert this layout into a reusable template.

**EXERCISE 2: Create a layout template**
: Make a layout reusable using template attributes.

  Let's modify our layout so we can easily create new pages using this layout as a temlpate.

  <code-snippet ht-block filename="layouts/default.html" highlight='8'>
  
  ```html
  <html lang='en-US'>
      <head>
          <meta charset='utf-8'>
          <title>Learn HyperTemplates</title>
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

  This layout templates the `<article>` element using the [`ht-content` attribute](/docs/reference/core/attributes/ht-content/).
  The `markdown:` prefix in our `ht-content` attribute tells HyperTemplates to [format](/docs/reference/core/attributes/ht-content/#content-formats) the `content` as [Markdown](/docs/reference/core/markdown/).

  Now let's move on to step 3 to create a new page using this layout as a template.

**EXERCISE 3: Create a page**
: Write content using Markdown.

  HyperTemplates content comes from [data] files.
  Each content data file represents a page.
  The most common format for data files is called [Markdown].
  Let's create a directory for our content data files, and add our first page.

  ```plaintext
  mkdir content/
  touch content/index.md
  ```

  Add some content to `content/index.md`.
  
  <code-snippet ht-block filename="content/index.md">
  
  ```plaintext
  ## Hello, world
  
  This is my first HyperTemplates page!
  ```
  
  </code-snippet>
  
  The body of a markdown document (`index.md`) is accessible to HyperTemplates as the [template data](/docs/reference/core/data/) `content` property – the same property our layout will use to populate our template.
  
  OK, let's render our first page using HyperTemplates.
  
  ```shell
  hyperctl render --data content/index.md --layout layouts/default.html > index.html
  ```

  This command created a file called `index.html`.
  We can open this file in a text editor to see what it looks like, or we can view it in a browser!
  
  ```plaintext
  open index.html
  ```

  Did you notice?
  The contents of our layout template `<article>` element were replaced with the content in our `content/index.md` file. :boom:

**EXERCISE 4: Template the page title**
: Let's modify our layout template so we can update the page title.

  First, let's modify `<title>` element of our layout template.

  <code-snippet ht-block filename="layouts/default.html" highlight='4'>
  
  ```html
  <html lang='en-US'>
      <head>
          <meta charset='utf-8'>
          <title ht-content='title'>Learn HyperTemplates</title>
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

  Now let's update our page data file with a title property.

  <code-snippet ht-block filename="content/index.md" highlight='1-3' with-line-numbers>
  
  ```plaintext
  ---
  title: "Learn HyperTemplates: Lesson 1"
  ---

  ## Hello, world
  
  This is my first [HyperTemplates](https://preview.hypertemplates.net) page!
  ```
  
  </code-snippet>

  HyperTemplates supports [Markdown frontmatter](/docs/reference/core/markdown/) – a block of metadata properties at the _front_ of the markdown document.
  Markdown frontmatter blocks always begin and end with a line containing three hyphens (`---`).
  The contents of the frontmatter block are formatted with [YAML], which means we can all all sorts of information to our page data files.
  In this case we only need to add a title, which we've done by adding a `title:` key, with the value of `"Learn HyperTemplates: Lesson 1"`.

  <doc-quote ht-block>

  **Did you notice?**
  We made an extra change to line 7 of our `content/index.md` file.
  This is how you create a link using Markdown.
  This step isn't required to complete the tutorial, but we wanted to include this example in case you were wondering how to replicate the link in `layouts/default.html`'s example paragraph using Markdown. :sparkles:

  <learn-more ht-block href='/docs/reference/core/markdown/'></learn-more>

  </doc-quote>

  OK, let's re-render our page and see what happens.
  
  ```shell
  hyperctl render --data content/index.md --layout layouts/default.html > index.html
  ```

  If you still have `index.html` open in your browser you can refresh the page, or open it again: 

  ```plaintext
  open index.html
  ```

  To view a website or page title in a browser, hover over the browser tab, or use "view source" to inspect the rendered HTML. 
  Otherwise, just open index.html in your text editor.


### Discussion
--------------

🚧 Coming soon... 🚧

### Learn more
--------------

Learn more about the concepts in this lesson:

* [Layouts reference](/docs/reference/core/layouts/)
* [Attributes reference](/docs/reference/core/attributes/)
  * [`ht-content` attribute](/docs/reference/core/ht-content/)
* [Data reference](/docs/reference/core/data/)
* [Markdown reference](/docs/reference/core/markdown/)
* [CLI reference](/docs/reference/cli/)


<tutorial-nav ht-block 
         next-href='../lesson-2/' 
         next-label='Lesson 2: Attribute Templating'></tutorial-nav>


<!-- Links -->
[layouts]: /docs/reference/core/layouts/
[data]: /docs/reference/core/data/
[Markdown]: /docs/reference/core/markdown/
[YAML]: https://yaml.org

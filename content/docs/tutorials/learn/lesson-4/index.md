---
created_at: 2025-05-25T08:00:00-07:00
title: Template Includes
description: Learn how template includes work in HyperTemplates
summary: |
    Learn how template includes work in HyperTemplates
breadcrumb: Template Includes
---

## Template Includes Tutorial

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Goal

In this lesson we will split up a layout template into individual components to make our growing website easier to maintain.

### Introduction

As our layout template starts to become more complex, it would be nice if we could split up the layout code into individual components.
Organizing our code in this way not only makes it easier to maintain, it also makes the individual components reusable across multiple layouts!

### Exercises

**EXERCISE 1: Create layout partials**
: Create new `<header>` and `<footer>` layout partials.

  First let's create a new subdirectory and add two new files to our project.

  ```plaintext
  mkdir partials
  touch partials/header.html partials/footer.html
  ```

  Now lets add the `<header>` layout to `partials/header.html`.
  While we're at it, let's flesh it out a little bit by adding some navigation links.

  <code-snippet ht-block filename='partials/header.html'>

  ```html
  <header ht-if='title'>
      <nav>
          <menu>
              <a href='/'>Home</a>
              <a href='/about/'>About</a>
          </menu>
      </nav>
      <h1 ht-content='title'></h1>
  </header>
  ```

  </code-snippet>

  Next, let's add the `<footer>` layout to `partials/footer.html`.

  <code-snippet ht-block filename='partials/footer.html'>

  ```html
  <footer ht-if='copyright'>
      &copy; <span ht-content='html:copyright'>2024</span> &bullet; Powered by HyperTemplates&trade;
  </footer>
  ```

  </code-snippet>

  OK, great.
  We can now use these `<header>` and `<footer>` components across multiple layouts!
  Let's move on to the next step to see how to use these in our default layout.

**EXERCISE 2: Include external sources**
: Use the [`ht-include`] attribute to include external sources in a layout template.

  Let's update `layouts/default.html` to include the `<header>` and `<footer>` components.

  <code-snippet ht-block filename='layouts/default.html' highlights='8,17'>

  ```html
  <html lang='en-US'>
      <head>
          <meta charset='utf-8'>
          <title ht-content='title'>Learn HyperTemplates</title>
          <meta name='description' ht-attrs='content:description'>
      </head>
      <body>
          <header ht-include='partials/header.html' id='header'></header>
          <main>
              <article ht-content='markdown:content'>
                  <h2>Hello, world</h2>
                  <p>
                      This is an <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'>HTML</a> layout!
                  </p>
              </article>
          </main>
          <footer ht-include='partials/footer' id='footer'></footer>
      </body>
  </html>
  ```

  </code-snippet>

  Lookin' good!
  OK, let's render the page again, then refresh the browser or view the updated `index.html` file to see what changed.

  ```plaintext
  hyperctl render -d content/index.md -l layouts/default.html > index.html
  ```

  HyperTemplates replaced our placeholder `<header>` and `<footer>` elements with the contents of `partials/header.html` and `partials/footer`, respectively.

  <doc-quote ht-block>

  **PROTIP:** did you notice that one of our includes was not like the other one?
  We included our header with `ht-include='partials/header.html`, but our footer with `ht-include='partials/footer'`, sans file extension.
  This shorthand include reference **Just Works&trade;** in because HyperTemplates is a pure-HTML templating system, so we can safely assume that included file should have an .html extension. 🤌

  </doc-quote>

  The order of operations is important here: `ht-include` attributes are processed before all other templating steps, so our components are effectively inserted into our layout before content and attribute templating.

  Oh and there's one more thing: did you notice that the id attributes on the `<header>` and `<footer>` elements were retained in the rendered HTML? 
  This is called [attribute forwarding], and it's one of the many more subtle features of HyperTemplates that facilitate progressive enhancement.

### Discussion

### Next Steps

<learn-more ht-block label='Lesson 5: Template Iterators' href='../lesson-5/'>

<!-- Links -->
[`ht-include`]: /docs/reference/core/attributes/ht-include/
[attribute forwarding]: /docs/reference/core/attributes/ht-include/#attribute-forwarding

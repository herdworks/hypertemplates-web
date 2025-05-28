---
created_at: 2025-05-25T08:00:00-07:00
title: Template Conditionals
description: Learn how conditional templating works in HyperTemplates
summary: |
    Learn how conditional templating works in HyperTemplates
breadcrumb: Attribute Templating
---

## Conditional Templating Tutorial

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Goal
--------

In this lesson we will add some conditional logic to our layout template and learn how to show or hide content based on template data.

### Introduction
----------------

🚧 Coming soon... 🚧

### Exercises
-------------

**EXERCISE 1: Add template conditions**
: Use the `ht-if` attribute to show a `<header>` and `<footer>` if the `title` and `copyright` properties are present in the template data.

  <code-snippet ht-block filename='layouts/default.html' highlights='8-10,19-21'>

  ```html
  <html lang='en-US'>
      <head>
          <meta charset='utf-8'>
          <title ht-content='title'>Learn HyperTemplates</title>
          <meta name='description' ht-attrs='content:description'>
      </head>
      <body>
          <header ht-if='title'>
              <h1 ht-content='title'></h1>
          </header>
          <main>
              <article ht-content='markdown:content'>
                  <h2>Hello, world</h2>
                  <p>
                      This is an <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'>HTML</a> layout!
                  </p>
              </article>
          </main>
          <footer ht-if='copyright'>
              &copy; <span ht-content='copyright'>2024</span> &bullet; Powered by HyperTemplates&trade;
          </footer>
      </body>
  </html>
  ```

  </code-snippet>

  We've added two new [content sectioning] elements: `<header>` and `<footer>`.
  We've also added some conditional logic to our template by configure the [`ht-if`] attribute on both of these elements.
  The `ht-if` attribute retains HTML elements if the configured condition is true.
  If the condition is false, the entire element – including any child elements – will be removed from the page.
  Let's take a closer look at the two conditionals we added: 

  * `<header ht-if="title">`: retain if a property named `title` is provided
  * `<footer ht-if="copyright">`: retain if a property named `footer` is provided

  Let's render the page again, then refresh the browser or view the updated `index.html` file to see what changed.

  ```plaintext
  hyperctl render -d content/index.md -l layouts/default.html > index.html
  ```

  Did you notice? 
  The `<header>` element was retained in the rendered HTML, but the `<footer>` element was removed! 
  That's because our template data (`content/index.md`) only has `title`, `description`, and `content` properties. 

**EXERCISE 2: Show conditional content**
: Let's add a `copyright` property to our page to show the conditional `<footer>` element from step 1 above.

  <code-snippet ht-block filename="content/index.md" highlight="4">
  
  ```plaintext
  ---
  title: Introduction to HTML templating
  description: My first HyperTemplates page!
  coyright: 2025 Acme Inc
  ---
  
  ## Hello, world
  
  This is my first HyperTemplates content!
  ```
  
  </code-snippet>

  Now let's render the page again, then refresh the browser or view the updated `index.html` file to see what changed.

  ```plaintext
  hyperctl render -d content/index.md -l layouts/default.html > index.html
  ```

  If you see the footer then you're ready to move on to the next lesson. :raised_hands: 

### Discussion
--------------

🚧 Coming soon... 🚧

### Learn more
--------------


<tutorial-nav ht-block 
         prev-href='../lesson-2/' 
         prev-label='Lesson 2: Attribute Templating' 
         next-href='../lesson-4/' 
         next-label='Lesson 4: Template Includes'></tutorial-nav>


<!-- Links -->
[content sectioning]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements#content_sectioning
[`ht-if`]: /docs/reference/core/attributes/ht-if/

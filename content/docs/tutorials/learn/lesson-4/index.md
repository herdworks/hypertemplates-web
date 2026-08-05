---
created_at: 2025-05-25T08:00:00-07:00
updated_at: 2026-02-26T10:00:00-08:00
title: "Introducing: ht-include"
description: Learn how template includes work in HyperTemplates
summary: |
    Learn how template includes work in HyperTemplates
breadcrumb: ht-include
---

## Template Includes Tutorial

<auto-toc selectors='h3,h4,h5,h6,dl:not(:has(learn-more)) dt'></auto-toc>

### Goal
--------

In this lesson we will split up a layout template into individual components to make our growing website easier to maintain.

### Introduction
----------------

As our layout template starts to become more complex, it would be nice if we could split up the layout code into individual components.
Organizing our code in this way not only makes it easier to maintain, it also makes the individual components reusable across multiple layouts!

Let's see how to do this with the `ht-include` directive.

### Exercises
-------------

**EXERCISE 1: Create layout fragments**
: Create new `<header>` and `<footer>` layout fragments.

  First let's create a new subdirectory and add two new files to our project.

  ```plaintext
  mkdir fragments
  touch fragments/header.html fragments/footer.html
  ```

  Now lets add the `<header>` layout to `fragments/header.html`.
  While we're at it, let's flesh it out a little bit by adding some navigation links.

  <code-snippet ht-block filename='fragments/header.html'>

  ```html
  <header ht-if='${ title }'>
      <nav>
          <menu>
              <a href='/'>Home</a>
              <a href='/about/'>About</a>
          </menu>
      </nav>
      <h1 ht-apply>${ title }</h1>
  </header>
  ```

  </code-snippet>

  Next, let's add the `<footer>` layout to `fragments/footer.html`.

  <code-snippet ht-block filename='fragments/footer.html'>

  ```html
  <footer ht-apply ht-if='${ copyright }'>
      &copy; ${ copyright, "2024" } &bullet; Powered by HyperTemplates&trade;
  </footer>
  ```

  </code-snippet>

  OK, great.
  We can now use these `<header>` and `<footer>` components across multiple layouts!
  Let's move on to the next step to see how to use these in our default layout.

**EXERCISE 2: Include external sources**
: Use the [`ht-include`] directive to include external sources in a layout template.

  Let's update `layouts/default.html` to include the `<header>` and `<footer>` components.

  <code-snippet ht-block filename='layouts/default.html' highlights='8,12'>

  ```html
  <html lang='en-US'>
      <head>
          <meta charset='utf-8'>
          <title ht-apply>${ title, "Learn HyperTemplates" }</title>
          <meta ht-apply name='description' content='${ description }'>
      </head>
      <body>
          <header ht-include='fragments/header.html' id='header'></header>
          <main>
              <article ht-apply>${ markdown(content) }</article>
          </main>
          <footer ht-include='fragments/footer' id='footer'></footer>
      </body>
  </html>
  ```

  </code-snippet>

  Lookin' good!
  OK, let's render the page again, then refresh the browser or view the updated `index.html` file to see what changed.

  ```plaintext
  hyperctl dev render -d content/index.md -l layouts/default.html > index.html
  ```

  HyperTemplates replaced our placeholder `<header>` and `<footer>` elements with the contents of `fragments/header.html` and `fragments/footer`, respectively.

  <doc-quote ht-block>

  **PROTIP:** did you notice that one of our includes was not like the other one?
  We included our header with `ht-include='fragments/header.html`, but our footer with `ht-include='fragments/footer'`, sans file extension.
  This shorthand include reference **Just Works&trade;** in because HyperTemplates is a pure-HTML templating system, so we can safely assume that included file should have an .html extension. 🤌

  </doc-quote>

  The order of operations is important here: `ht-include` directives are processed before all other templating steps, so our components are effectively inserted into our layout before content and attribute templating.

  Oh and there's one more thing: did you notice that the id attributes on the `<header>` and `<footer>` elements were retained in the rendered HTML? 
  This is called [attribute forwarding], and it's one of the many more subtle features of HyperTemplates that facilitate progressive enhancement.

### Discussion
--------------

In this lesson we split our `<header>` and `<footer>` into smaller components and _composed_ them together using the `ht-include` directive.
This not only makes our `layouts/default.html` template easier to read, it means we can reuse the components we created in future layouts.
Bonus!

We also introduced a new type of templating opportunity during this lesson when we added navigation links to our header.
It's the first example we've encountered where we have a bit of layout that we'd like to repeat.
Let's learn how to configure repeating elements in the final lesson of this tutorial.

<doc-quote ht-block info>

**Core Concepts**

Learn more about the concepts in this lesson:

* [Attributes reference](/docs/reference/core/directives/)
* [`ht-include` directive](/docs/reference/core/directives/ht-include/)

</doc-quote>

Do you have any questions and/or feedback about `ht-include` or this "Learn HyperTemplates" tutorial? 
Join the @hypertexting.community and visit [the "Getting Started" category]. :speech_balloon:

When you're ready, let's go ahead and move on to lesson 5. :point_right:

<tutorial-nav ht-block 
    prev-href='../lesson-3/' 
    prev-label='Lesson 3: Introducing <code>ht-if</code>' 
    next-href='../lesson-5/' 
    next-label='Lesson 5: Introducing <code>ht-each</code>'>
</tutorial-nav>

<!-- Links -->
[`ht-include`]: /docs/reference/core/directives/ht-include/
[attribute forwarding]: /docs/reference/core/directives/ht-include/#attribute-forwarding
[the "Getting Started" category]: https://hypertexting.community/c/hypertemplates/getting-started/

---
created_at: 2025-05-25T08:00:00-07:00
title: "Introducing: ht-if"
description: Learn how conditional templating works in HyperTemplates
summary: |
    Learn how conditional templating works in HyperTemplates
breadcrumb: ht-if
---

## Conditional Templating Tutorial

<auto-toc selectors='h3,h4,h5,h6,dl:not(:has(learn-more)) dt'></auto-toc>

### Goal
--------

In this lesson we will add some conditional logic to our layout template and learn how to show or hide content based on template data.

### What is conditional templating?
-----------------------------------

The ability to show or hide content based on some condition becomes more important as a website grows over time. 
As new pages are added there will inevitably be some minor differences between pages that otherwise share the same basic structure and style.
Without the ability to _conditionally show or hide_ some portion of the layout based on the page contents, we would need multiple layout templates for very similar page types to accomodate the various differences that naturally occur from one page to another. 
This is the problem that conditional templating solves.

Most HTML templating systems are based on a more traditional programming language than HTML. 
The added complexity introduced by having to learn a new language in order to write simple HTML temlpates is a tradeoff for access to features like [`if...else`], [`for...in`], and [`for...of`] logic.

Let's see how HyperTemplates handles conditional templating with the [`ht-if`] directive. 

### Exercises
-------------

**EXERCISE 1: Add template conditions**
: Use the `ht-if` directive to show a `<header>` and `<footer>` if the `title` and `copyright` properties are present in the template data.

  <code-snippet ht-block filename='layouts/default.html' highlights='8-10,14-16'>

  ```html
  <html lang='en-US'>
      <head>
          <meta charset='utf-8'>
          <title ht-apply>${ title, "Learn HyperTemplates" }</title>
          <meta ht-apply name='description' content='${ description }'>
      </head>
      <body>
          <header ht-if='${ title }'>
              <h1 ht-apply>${ title }</h1>
          </header>
          <main>
              <article ht-apply>${ markdown(content) }</article>
          </main>
          <footer ht-apply ht-if='${ copyright }'>
              &copy; ${ copyright, "2024" } &bullet; Powered by HyperTemplates&trade;
          </footer>
      </body>
  </html>
  ```

  </code-snippet>

  We've added two new [content sectioning] elements: `<header>` and `<footer>`.
  We've also added some conditional logic to our template by configure the [`ht-if`] directive on both of these elements.
  The `ht-if` directive retains HTML elements if the configured condition is true.
  If the condition is false, the entire element – including any child elements – will be removed from the page.
  Let's take a closer look at the two conditionals we added: 

  * `<header ht-if="${ title }">`: retain if a property named `title` is provided
  * `<footer ht-if="${ copyright }">`: retain if a property named `footer` is provided

  Let's render the page again, then refresh the browser or view the updated `index.html` file to see what changed.

  ```plaintext
  hyperctl dev render -d content/index.md -l layouts/default.html > index.html
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
  copyright: 2025 Acme Inc
  ---
  
  ## Hello, world
  
  This is my first HyperTemplates content!
  ```
  
  </code-snippet>

  Now let's render the page again, then refresh the browser or view the updated `index.html` file to see what changed.

  ```plaintext
  hyperctl dev render -d content/index.md -l layouts/default.html > index.html
  ```

  If you see the footer then you're ready to move on to the next lesson. :raised_hands: 

### Discussion
--------------

In this lesson, we added a `<header>` and `<footer>` to our layout and we learned how to dynamically show or hide content using the `ht-if` directive.
Adding conditional logic facilitates template reuse ♻️ and makes our websites easier to reason about.

Our example layout template is already well on its way to becoming something we could actually use for a real website.
As we continue to improve our layout it will naturally become more complex.
It would be great if we could break it up into smaller pieces, and that's exactly what we'll cover in the next lesson. 👟

<doc-quote ht-block info>

**Core Concepts**

Learn more about the concepts in this lesson:

* [Attributes reference](/docs/reference/core/directives/)
* [`ht-if` directive](/docs/reference/core/directives/ht-if/)

</doc-quote>

Do you have any questions and/or feedback about `ht-if` or this "Learn HyperTemplates" tutorial? 
Join the @hypertexting.community and visit [the "Getting Started" category]. :speech_balloon:

When you're ready, let's go ahead and move on to lesson 4. :point_right:

<tutorial-nav ht-block 
    prev-href='../lesson-2/' 
    prev-label='Lesson 2: Introducing <code>ht-apply</code> (part 2)' 
    next-href='../lesson-4/' 
    next-label='Lesson 4: Introducing <code>ht-include</code>'>
</tutorial-nav>


<!-- Links -->
[template data]: /docs/reference/core/data/
[content sectioning]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements#content_sectioning
[`ht-if`]: /docs/reference/core/directives/ht-if/
[the "Getting Started" category]: https://hypertexting.community/c/hypertemplates/getting-started/
[`if...else`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
[`for...in`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
[`for...of`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

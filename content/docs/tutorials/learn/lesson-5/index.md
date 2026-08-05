---
created_at: 2025-05-25T08:00:00-07:00
updated_at: 2026-02-26T10:00:00-08:00
title: "Introducing: ht-each"
description: Learn how template iterators work in HyperTemplates
summary: |
    Learn how template iterators work in HyperTemplates
breadcrumb: ht-each
---

## Template Iterators Tutorial

<auto-toc selectors='h3,h4,h5,h6,dl:not(:has(learn-more)) dt'></auto-toc>

### Goal
--------

In this lesson we will learn how to implement repeating elements in a layout template using the [`ht-each`] directive.

### What is a template iterator?
--------------------------------

Whether it's lists, or an image gallery, or any other repetitive content, there will eventually come a time when some portion of a layout template needs to be repeated based on the page content.
Template iterators save time and make dymanic layouts possible by allowing us to reuse small portions of a layout template.
By keeping our layout templates [DRY] we also reduce the likelihood of inconsistencies, improving the overall quality of our websites.

As with conditional `if...else` templating, this is another area where templating systems that are based on traditional programming languages excel by providing access to [`for...in`] and [`for...of`] style loops.
The tradeoff is that these more advance templating features typically result in template code that can become difficult to reason about as you're blending HTML with something completely different from HTML in order to generate HTML.

Take this snippet from the [Hugo `range` documentation] for example: 

```plantext
{{ range $m }}
  <p>{{ .name }} is {{ .age }}</p>
{{ end }}
```

There's more Go code than HTML here, and this is a relatively simple example.

Let's see how iterators work in HyperTemplates via the following exercises.

### Exercises
-------------

**EXERCISE 1: Create a template iterator**
: Use the [`ht-each`] directive to repeat some portion layout once per occurrence of a [template data property].

  Let's template those hard-coded `<nav>` links we added in the [previous lesson](../lesson-4/) so that we can more easily manage them from [template data].
  To do that we'll need to modify the layout in `fragments/header.html` as follows:

  <code-snippet ht-block filename='fragments/header.html' highlight='4-6'>

  ```html
  <header ht-if='${ title }'>
      <nav>
          <menu>
              <a ht-each='link in ${ nav }' href='${ link.href, link.url }'>
                  ${ link.title, link.label, link.text, "" }
              </a>
          </menu>
      </nav>
      <h1 ht-apply>${ title, "Placeholder" }</h1>
  </header>
  ```

  </code-snippet>

  This `ht-each` directive tells HyperTemplates to clone the `<a>` element for each item in the `nav` property and treat is as a nested layout template.
  It assigns the value of each item in `nav` to a new variable called `link` and uses that as the template data for the nested template.

  Let's move on to the next step to see how the template data side of this equation works.

**EXERCISE 2: create repeated content**
: Add a list of links to our template data to see how HyperTemplates handles repeated content.

  Let's add some navigation links to `content/index.md`.

  <code-snippet ht-block filename="content/index.md" highlight="5-11">
  
  ```plaintext
  ---
  title: Introduction to HTML templating
  description: My first HyperTemplates page!
  copyright: 2025 Acme Inc
  nav:
    - label: Home
      href: /
    - title: About
      href: /about
    - label: Contact
      url: /contact
  ---
  
  ## Hello, world
  
  This is my first HyperTemplates content!
  ```
  
  </code-snippet>

  OK, let's render the page again, then refresh the browser or view the updated `index.html` file to see what changed.

  ```plaintext
  hyperctl dev render -d content/index.md -l layouts/default.html > index.html
  ```

  We restored the original "Home" and "About" links, and easily added a third "Contact" link right from our template data!
  Pretty cool, right? 😊 
  
  <doc-quote ht-block info>

  **Did you notice?** We introduced another feature in this step: the [template variables](/docs/reference/core/variables/) in the `<a>` element are referencing multiple properties: 

  ```html
  <a ht-each='link in ${ nav }' href='${ link.href, link.url }'>
      ${ link.title, link.label, link.text, "" }
  </a>
  ```

  It's a good thing because our `nav:` array had a mix of `label` and `title` properties, and `href` and `url` properties. 
  Oops! 
  This is a silly example that shows how HyperTemplates components can be used with a variety of data structures.

  </doc-quote>


### Discussion
--------------

Congratulations, you've just completed the "Learn HyperTemplates" tutorial! 🏁

In this lesson we replaced some repetitive layout with a template iterator using the `ht-each` directive. 
We also added a third navigation link!

<doc-quote ht-block info>

**Core Concepts**

Learn more about the concepts in this lesson:

* [Attributes reference](/docs/reference/core/directives/)
* [`ht-each` directive](/docs/reference/core/directives/ht-each/)

</doc-quote>

Do you have any questions and/or feedback about `ht-each` or this "Learn HyperTemplates" tutorial? 
Join the @hypertexting.community and visit [the "Getting Started" category]. :speech_balloon:

When you're ready, let's go ahead and move on to the review. :point_right:

<tutorial-nav ht-block 
    prev-href='../lesson-4/' 
    prev-label='Lesson 4: Introducing <code>ht-include</code>' 
    next-href='../review/'
    next-label='Tutorial Review'>
</tutorial-nav>


<!-- Links -->
[`ht-each`]: /docs/reference/core/directives/ht-each/
[template data]: /docs/reference/core/data/
[template data property]: /docs/reference/core/data/#template-data-property
[template data object]: /docs/reference/core/data/#template-data-object
[the "Getting Started" category]: https://hypertexting.community/c/hypertemplates/getting-started/
[conditional templating]: ../lesson-3/
[`for...in`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
[`for...of`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
[DRY]: https://en.wikipedia.org/wiki/Don%27t_repeat_yourself
[Hugo `range` documentation]: https://gohugo.io/functions/go-template/range/#slice-of-maps

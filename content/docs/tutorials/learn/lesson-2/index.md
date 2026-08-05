---
created_at: 2025-05-25T08:00:00-07:00
title: "Introducing: ht-apply (part 2)"
description: Learn how attribute templating works in HyperTemplates
summary: |
    Learn how attribute templating works in HyperTemplates
breadcrumb: ht-apply (part 2)
---

## Attribute Templating Tutorial

<auto-toc selectors='h3,h4,h5,h6,dl:not(:has(learn-more)) dt'></auto-toc>

### Goal
--------

In this lesson we will template HTML element attributes using HyperTemplates.

### What is attribute templating?
---------------------------------

[HTML attributes] adjust the behavior or display of an [HTML element].
One of the most well known attributes is the `href`.
It is used to configure the destination for a hyperlink, like this example: 

```html
<a href='https://example.com'>click here</a>
```

Have you noticed that links on some websites open in a new tab?
That's accomplished using the `target` attribute!

```html
<a href='https://example.com' target='_blank'>click here</a>
```

HyperTemplates makes it easy to template HTML element attributes using the `ht-apply` directive and `${ ... }` formatted [template variables].
Let's see it in action in the following exercises. 🏋️‍♂️

### Exercises
-------------

**EXERCISE 1: Create attribute templates**
: Create attribute templates.

  Let's add a description metadata element to our layout template.

  <code-snippet ht-block filename="layouts/default.html" highlight='5'>
  
  ```html
  <html lang='en-US'>
      <head>
          <meta charset='utf-8'>
          <title ht-apply>${ title, "Learn HyperTemplates" }</title>
          <meta ht-apply name='description' content='${ description }'>
      </head>
      <body>
          <main>
              <article ht-apply>${ markdown(content) }</article>
          </main>
      </body>
  </html>
  ```
  
  </code-snippet>

  [Frontmatter](/docs/reference/core/markdown/#frontmatter) properties in a [Markdown] document are accessible to HyperTemplates as [template data properties](/docs/reference/core/data/#template-data-properties).
  In this example we have templated the `<meta>` description element using the [`ht-apply` directive](/docs/reference/core/directives/ht-apply/) and a [template variable].
  The `content='${ description }` value tells HyperTemplates to set the `<meta>` element's `content` attribute to the value of `${ description }` property from our template data (`index.md`).

  <doc-quote ht-block>

  **Small but mighty!** 💪

  The [`ht-apply`] directive can be used to add multiple attributes to a single HTML element.
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
  hyperctl dev render -d content/index.md -l layouts/default.html > index.html
  ```
  
  To view the description in a browser, hover over the browser tab, or use "view source" to inspect the rendered HTML.
  Otherwise, just open `index.html` in your text editor.

### Discussion
--------------

In this lesson, we learned how to template HTML element attributes using the small but mighty `ht-apply` directive.
We can already build some pretty interesting templates using only `ht-apply`!

As you start imaging the more complex layout templates you might build with HyperTemplates, you might start to have questions about how to show or hide some content based on the template data.
And that is exactly what we'll cover in the next lesson!

<doc-quote ht-block info>

**Core Concepts**

Learn more about the concepts in this lesson:

* [Directives reference](/docs/reference/core/directives/)
* [`ht-apply` directive](/docs/reference/core/directives/ht-apply/)
* [Template variables](/docs/reference/core/variables/)
* [Data reference](/docs/reference/core/data/)
* [Markdown reference](/docs/reference/core/markdown/)
* [CLI reference](/docs/reference/cli/)

</doc-quote>

Do you have any questions and/or feedback about `ht-apply` or this "Learn HyperTemplates" tutorial? 
Join the @hypertexting.community and visit [the "Getting Started" category]. :speech_balloon:

When you're ready, let's go ahead and move on to lesson 3. :point_right:

<tutorial-nav ht-block 
    prev-href='../lesson-1/' 
    prev-label='Lesson 1: Introducing <code>ht-apply</code> (part 1)' 
    next-href='../lesson-3/' 
    next-label='Lesson 3: Introducing <code>ht-if</code>'>
</tutorial-nav>


<!-- Links -->
[`ht-apply`]: /docs/reference/core/directives/ht-apply/
[element attributes]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes
[HTML attributes]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes
[HTML element]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements
[Markdown]: /docs/reference/core/markdown/
[template variable]: /docs/reference/core/variables/
[template variables]: /docs/reference/core/variables/
[the "Getting Started" category]: https://hypertexting.community/c/hypertemplates/getting-started/

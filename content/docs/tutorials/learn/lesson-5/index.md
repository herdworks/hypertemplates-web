---
created_at: 2025-05-25T08:00:00-07:00
title: Template Iterators
description: Learn how template iterators work in HyperTemplates
summary: |
    Learn how template iterators work in HyperTemplates
breadcrumb: Template Iterators
---

## Template Iterators Tutorial

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Goal
--------

🚧 Coming soon... 🚧

### Introduction
----------------

### Exercises
-------------

**EXERCISE 1: Create a template iterator**
: Use the [`ht-template`] attribute to repeat some layout content once per occurrence of some [template data].

  You might have noticed that we hard-coded some navigation links [in the previous lesson](../lesson-5/), and you might already be thinking that you'd like to change those links. 
  Let's use HyperTemplates' namesake[^1] attribute for this: the `ht-template`.

  The ht-template attribute is a template iterator – it renders the target element tree once per matching template data value. If the template data is an array, the element tree is rendered once per item in the array. If the data is a single value (e.g. a string), the element tree is rendered once.

  Let's improve our `<nav>` template in partials/header.html.

  <code-snippet ht-block filename='partials/header.html' highlight='4-6'>

  ```html
  <header ht-if='title'>
      <nav>
          <menu>
              <a ht-template='link:nav' ht-attrs='href:link.href'>
                <span ht-content='link.title,link.label,link.name,link.text'></span>
              </a>
          </menu>
      </nav>
      <h1 ht-content='title'></h1>
  </header>
  ```

  </code-snippet>

  The `ht-template` attribute tells HyperTemplates to clone the `<a>` element "for each" item in the `nav` property.
  Let's move on to the next step to see how the template data side of this equation works.

**EXERCISE 2: create repeated content**
: Add a list of links to our template data to see how HyperTemplates handles repeated content.

  Let's add some navigation links to `content/index.md`.

  <code-snippet ht-block filename="content/index.md" highlight="5-11">
  
  ```plaintext
  ---
  title: Introduction to HTML templating
  description: My first HyperTemplates page!
  coyright: 2025 Acme Inc
  nav:
    - label: Home
      href: /
    - label: About
      href: /about
    - title: Contact
      href: /contact
  ---
  
  ## Hello, world
  
  This is my first HyperTemplates content!
  ```
  
  </code-snippet>

  OK, let's render the page again, then refresh the browser or view the updated `index.html` file to see what changed.

  ```plaintext
  hyperctl render -d content/index.md -l layouts/default.html > index.html
  ```

  Pretty cool, right? 😊 
  The `ht-template` attribute creates a new [template data object] from the parent template data. For each item in the `nav` list, HyperTemplates assigns the value to a variable named `link`, then clones the `<a>` element and runs it through the entire rendering pipeline.

  We also introduced another feature in this step: the `ht-content` attributes in the `<a>` element are referencing multiple properties (e.g. `ht-content='link.title,link.label,link.name,link.text'`)!
  It's a good thing because our nav array had a mix of label and title properties, and href and url properties. 
  Oops! 
  This is a silly example that shows how HyperTemplates components can be used with a variety of data structures.

  OK, this is already a pretty useful starting point for a real template. 
  But there's one more thing...


### Discussion
--------------

### Learn more
--------------

<tutorial-nav ht-block 
         prev-href='../lesson-4/' 
         prev-label='Lesson 4: Template Includes' 
         next-href='../lesson-6/'
         next-label='Lesson 6: Short Codes'></tutorial-nav>


<!-- Footnotes -->
[^1]: In the earliest prototypes of HyperTemplates, all of the template attributes were prefixed with `hyper-`, so this attribute was originally called `hyper-template`.
      Proving that [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) and [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) iterator support was possible in a pure-HTML templating system was one of the first major milestones in the HyperTemplates roadmap, so we continue to share the ~~story~~legend of the `hyper-template` for future generations.

      In the end we changed the attribute prefix to `ht-` for brevity, but long live the `hyper-template`! 

<!-- Links -->
[`ht-template`]: /docs/reference/core/attributes/ht-template/
[template data]: /docs/reference/core/data/
[template data object]: /docs/reference/core/data/#template-data-object

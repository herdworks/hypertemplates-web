---
created_at: 2026-05-06T12:00:00-08:00
title: Builtins
summary: The HyperTexting CMS "builtins" reference
---

# Builtins reference

<auto-toc selectors='h3,h4,h5,h6,dl:not(:has(learn-more)) dt'></auto-toc>

### Overview
------------

The HyperTexting CMS provides some automatic templating features that are powered by builtin layout [fragments].
Built-in layout fragments can be disabled or overriden by adding empty fragment files to your theme.

<doc-quote ht-block new>
**NEW:** HyperTexting builtins are available in `hyperctl` version 0.20.0 and newer.
</doc-quote>

### Example
-----------

HyperTexting automatically provides several built-in features via HTML `<head>` elements, including: 

* HTTP redirects (i.e. [`<meta http-equiv='refresh'>`] elements)
* CMS discovery (i.e. [`<meta name='generator'>`] elements)
* Feed discovery (e.g. [`<link rel='alternate' type='application/rss+xml'>`] elements)
* Canonical URL references (i.e. [`<link rel='canonical'>`] elements)

All four of these built-in features are provided by a single template [fragment] called [`fragments/builtin/head_start.html`](#builtin-head-fragment). 
To disable these features, create an empty `fragments/builtin/head_start.html` fragment in your theme. 

### Specification
-----------------

#### Builtin includes

HyperTemplates builtins are implicitly included at specific positions in a layout.
These implicit includes take place _after_ [`ht-include` directives] have been processed to ensure they are correctly positioned in the layout (see [Builtin positioning] for more information).

#### Builtin positioning

All HyperTemplates builtins are inserted using a position mode, and a CSS selector.
The four position modes are `prepend`, `append`, `before`, and `after`.

**`prepend`** 
: The builtin fragment is inserted as the first child of the selected element.

  **Example**

  A builtin with `prepend main` positioning includes fragments as the _first child_ of the `<main>` element:

  <code-snippet ht-block filename='layouts/default.html'>

  ```html
  <html>
      <head>
          <title ht-apply>${ page.title }</title>
          <meta ht-apply name='description' content='${ page.description }'>
      </head>
      <body>
          <header></header>
          <main>
              <!-- prepend main builtin fragments go here -->
              <h1 ht-apply>${ page.title }</h1>
          </main>
          <footer></footer>
      </body>
  </html>
  ```

**`append`**
: The builtin fragment is inserted as the last child of the selected element.

  **Example**

  A builtin with `append main` positionining includes fragments as the last child of the `<main>` element:

  <code-snippet ht-block filename='layouts/default.html'>

  ```html
  <html>
      <head>
          <title ht-apply>${ page.title }</title>
          <meta ht-apply name='description' content='${ page.description }'>
      </head>
      <body>
          <header></header>
          <main>
              <h1 ht-apply>${ page.title }</h1>
              <!-- append main builtin fragments go here -->
          </main>
          <footer></footer>
      </body>
  </html>
  ```


**`before`**
: The builtin fragment is inserted _before_ the selected element, as a sibling.

  **Example**

  A builtin with `before main` positionining includes fragments immediately before the `<main>` element:

  <code-snippet ht-block filename='layouts/default.html'>

  ```html
  <html>
      <head>
          <title ht-apply>${ page.title }</title>
          <meta ht-apply name='description' content='${ page.description }'>
      </head>
      <body>
          <header></header>
          <!-- before main builtin fragments go here -->
          <main>
              <h1 ht-apply>${ page.title }</h1>
          </main>
          <footer></footer>
      </body>
  </html>
  ```

**`after`**
: The builtin fragment is inserted _after_ the selected element, as a sibling.

  **Example**

  A builtin with `after main` positionining includes fragments immediately after the `<main>` element:

  <code-snippet ht-block filename='layouts/default.html'>

  ```html
  <html>
      <head>
          <title ht-apply>${ page.title }</title>
          <meta ht-apply name='description' content='${ page.description }'>
      </head>
      <body>
          <header></header>
          <main>
              <h1 ht-apply>${ page.title }</h1>
          </main>
          <!-- after main builtin fragments go here -->
          <footer></footer>
      </body>
  </html>
  ```

<doc-quote ht-block info>
**NOTE:** If a builtin targets a selector that doesn't match any elements in the layout, it is ignored.
</doc-quote>

### Builtin fragments

HyperTexting currently includes a single builtin:

**`head_start`**
: The `head_start.html` builtin uses [`prepend head` positioning](#prepend).

  **Source**

  <code-snippet ht-block filename='fragments/builtin/head_start.html'>

  ```html
  <!-- fragments/builtin/head_start.html begin -->
  <meta ht-apply ht-if='${ page.redirect }' http-equiv="refresh" content='0; url=${page.refresh}' />
  <link ht-apply rel='canonical' href='${ page.canonical_url }'>
  <link ht-apply rel='icon' type='image/jpeg' href='${ site.favicon.href, "/favicon.ico" }' sizes='${ site.favicon.size, "32x32"}'>
  <link ht-each='link in ${ site.links }' ht-attrs='${ link }' ht-if='${ link.rel }' ht-if='${ link.href }'>
  <link ht-each='link in ${ page.links }' ht-attrs='${ link }' ht-if='${ link.rel }' ht-if='${ link.href }'>
  <meta ht-apply name='generator' content='${ site.generator, "hypertexting" }'>
  <meta ht-each='property in ${ site.metadata }' ht-attrs='${ property }' ht-if='${ property.name,property.property }' ht-if='${ property.content }'>
  <meta ht-each='property in ${ page.metadata }' ht-attrs='${ property }' ht-if='${ property.name,property.property }' ht-if='${ property.content }'>
  <!-- fragments/builtin/head_start.html end -->
  ```
  
  </code-snippet>

  This fragment will appear at the beginning of the `<head>` element of every page generated by HyperTexting.
  
  To disable or override the `head_start.html` builtin, add a `fragments/builtin/head_start.html` fragment to your theme.

<!-- Links -->
[fragments]: /docs/reference/core/fragments/
[fragment]: /docs/reference/core/fragments/
[`<meta http-equiv='refresh'>`]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/http-equiv#refresh 
[`<meta name='generator'>`]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name#generator
[`<link rel='alternate' type='application/rss+xml'>`]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel#alternate
[`<link rel='canonical'>`]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel#canonical
[`ht-include` directives]: /docs/reference/core/directives/ht-include/
[Builting positioning]: #builtin-positioning

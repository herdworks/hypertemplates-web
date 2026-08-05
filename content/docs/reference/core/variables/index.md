---
created_at: 2024-11-12T10:00:00-07:00
updated_at: 2026-02-26T10:00:00-08:00
title: Template Variables
description: Learn more about the HyperTemplates variable substitution system.
breadcrumb: Variables
---

## Template Variables

<auto-toc selectors='h3,h4,h5,h6,dl:not(:has(learn-more)) dt'></auto-toc>

### Overview
------------

Template variables are placeholders that are replaced by [template data]. 
Template variables can be used to populate HTML [element attributes], and HTML [element contents]. 

### Example
-----------

This example shows how variable substitution works in HyperTemplates.

```html
<head>
    <title ht-apply>${ site.title } | ${ page.title }</title>
    <meta ht-apply name='description' content='${ page.description }'>
    <!-- ...other <head> elements... -->
</head>
```

If `site.title` is `HyperTemplates`, `page.title` is `Template Variables`, and `page.description` is `Learn more about the HyperTemplates variable substitution system.`, the rendered HTML for this fragment would be as follows:

```html
<head>
    <title>HyperTemplates | Template Variables</title>
    <meta name='description' content='Learn more about the HyperTemplates variable substitution system.'>
    <!-- other <head> elements -->
</head>
```

### Specification
-----------------

#### Supported elements
-----------------------

Template variables can be used with any HTML element.

See [template variable syntax] for more information on the template variable CSS syntax, which is required when applying variables to a [`<style>` element] or [`style` attribute]. 

#### Template variable syntax
-----------------------------

Template variables are defined using delimiters.
The default syntax for a template variable is a string that begins with `${` and ends with `}`.

**Example**

```html
<a href='${ page.path }' ht-apply>${ page.title }</a>
```

An alternate syntax is required for `<style>` elements and `style` attributes where the default variable syntax is invalid CSS.
Template variables in a `<style>` elements or `style` attributes begin with `--ht-var(` and end with `)`.
The `--ht-var()` syntax also supports CSS-style fallback values as an optional second argument. 
Fallback values can be any valid [CSS value].

**Example**

```html
<head>
    <!-- other <head> elements -->

    <style id='layout'>
        :root {
            --color-1: --ht-var("site.colors.default", rgba(236, 120, 184, 1.0))
        }
    </style>
</head>
```

In this example the `--ht-var( ... )` variable will be replaced with the template data property `site.colors.default` if it is defined, or else it will use a fallback value of `rgba(236, 120, 184, 1.0)`.

> ##### Template variables are not Javascript (or CSS)
>
> The default template variable syntax is inspired by [Javascript template literals], but they are not Javascript. 
> However, the syntax for performing "string interpolation" with HyperTemplates variables should look & feel very similar to a Javascript template literal that is _only doing variable substitution_.
> 
> Here's an example of how to perform string interpolation using a Javascript template literal: 
>
> ```javascript
> `${ site.title } | ${ page.title }`
> ```
> 
> Note the Javascript-required <code>`</code> backtick characters.
> 
> This same string interpolation is possible using HyperTemplates variables, sans backticks:
> 
> ```html
> <title ht-apply>${ site.title } | ${ page.title }</title>
> ```
> 
> Similarly, the template variable CSS `--ht-var()` syntax is inspired by [CSS custom functions], but they are not CSS.
> By adopting the custom function syntax, template variables in `<style>` elements are valid CSS. 
> If/when a CSS template variable cannot be processed by HyperTemplates (e.g. due to missing template data), they will be present in the generated HTML files and all major browsers will simply ignore them.

#### String interpolation
-------------------------

String interpolation is the practice of using variables directly inside of a string of text.
If you're new to the concept of string interpolation you can think of it almost like a tool for filling in the blanks in a sentence.

Template variables are useful for string interpolation in HTML element attributes and text contents.

**Example:**

```html
<link ht-apply rel='stylesheet' href='/css/style.css?version=${ site.version, 1 }'>
```

In this example we're using a template variable to interpolating, or _inserting_, a version number in an `href` URL `?version=` query string.
This is a very simple example demonstrating how to configure using URL query parameters for [cache busting] with HyperTemplates.

#### Template variable functions
--------------------------------

Template variables support functions, and there are three built-in functions: `get`, `text`, and `markdown`. 

Functions are invoked from template variables using a function identifier and a list of positional arguments.
The function invocation syntax is `identifier(arg1, arg2, arg3)`. 

**`get` function**
: The `get` function gets template data values.

  The `get` function supports a comma-separated list of [template data keys], and one string literal as arguments.
  String literal values must be quoted, and they must be the last argument passed to the `get` function.
  This string literal argument acts as a fallback or default value in case none of the provided template data keys can be resolved.

  **Example**

  ```html
  <title>${ get(page.title, site.title, "Default Title") }</title>
  ``` 

  This example shows the following arguments:

  * A comma-separated list of [template data keys] (i.e. `page.title, site.title`)
  * A string literal default value (i.e. `"Default Title"`)

**`text` function**
: The `text` function escapes HTML.

  **Example**

  If a template data property contains HTML markup that should _not_ be rendered as HTML elements, you will need to use the `text` function to escape the HTML. 

  For example, if you have a page with the following front matter: 

  <code-snippet ht-block filename='content/index.md'>

  ```plaintext
  ---
  created_at: 2026-05-11T11:00:00-07:00
  title: Hyper<Templates>
  ---
  ```

  </code-snippet>

  When the resulting `${ page.title }` template variable is parsed as HTML it may yield unexpected results:

  ```html
  <!-- fragment -->
  <h1 ht-apply>
      ${ page.title }
  </h1>

  <!-- output -->
  <h1>
      Hyper<Templates> <!-- browsers will display "Hyper" and ignore the <Templates> tag element -->
  </h1>
  ```

  Use the `text` function to escape HTML strings:

  ```html
  <!-- fragment -->
  <h1 ht-apply>
      ${ text(page.title) }
  </h1>

  <!-- output -->
  <h1 ht-apply>
      Hyper&lt;Templates&gt; <!-- browsers will display "Hyper<Templates>" -->
  </h1>
  ```

**`markdown` function**
: The `markdown` function converts [Markdown] strings to HTML elements.

  **Example**

  If a template data property contains Markdown strings, you may see the markup as plain text.

  ```html
  <!-- fragment -->
  <div ht-apply>
      ${ page.overview }
  </div>

  <!-- output -->
  <div>
      ## Hello world
      
      Lorem ipsum, hipsters get some.
  </div>
  ```

  Use the `markdown` function to convert Markdown strings to elements:

  ```html
  <!-- fragment -->
  <div ht-apply>
      ${ markdown(page.overview) }
  </div>

  <!-- output -->
  <div>
      <h2>Hello world</h2>
      <p>Lorem ipsum, hipsters get some.</p>
  </div>
  ```

  <doc-quote ht-block caution>

  **NOTE:** the `markdown` function is available in HTML content template variables, but it is not allowed in HTML attribute variables. 

  </doc-quote>

**Plugin functions**
: Additional functions are added using [template variable plugins](#template-variable-functions). 

  

#### Template variable plugins
------------------------------

HyperTemplates supports custom template variable functions via [plugins](/docs/reference/core/plugins/).
A template variable plugin is created by adding a Javascript file that exports a default function to the [`site.config.plugins_dir`] or [`theme.config.plugins_dir`] directory.

**Examples**

The following example creates a plugin called `uppercase` (created via the `plugins/uppercase.js` file). 

<code-snippet ht-block filename='plugins/uppercase.js'>

```javascript
// uppercase transforms strings to uppercase
//
// usage: ${ uppercase(page.title) }
export default function uppercase(input="") {
    return input.toUpperCase();
};
```

</code-snippet>

The next example creates a plugin called `capitalize` (created via the `plugins/capitalize.js` file). 

<code-snippet ht-block filename='plugins/capitalize.js'>

```javascript
// capitalize transforms strings to capitalize
//
// usage: ${ capitalize(page.title) }
export default function capitalize(input="") {
    return input.charAt(0).toUpperCase() + input.slice(1);
};
```

</code-snippet>

<doc-quote ht-block protip>

**PROTIP:** in case you're wondering why we showed two very similar examples here (`capitalize` and `uppercase`), it's because we wanted to illustrates two important truths about HyperTemplates plugins: they are incredibly _simple_ to create, and in many cases completely _unnecessary_! 

You may already be thinking that the `capitalize` example is not very helpful since CSS [`text-transform: uppercase;`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-transform#uppercase) already exists. 
But did you know that CSS can also perform capitalization using the lesser-known [`::first-letter` pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::first-letter) (available since 2015)?

```css
[capitalized]::first-letter {
  text-transform: uppercase; /* only uppercase the first letter */
}
```

We love Javascript, but not as much as we love it when we don't need Javascript. :boom: 

</doc-quote>

#### Implicit gets
------------------

A template variable that doesn't begin with a registered [function](#template-variable-functions) name (including [plugins](#template-variable-plugins)) is treated as an "implicit get". 

```html
<!-- this is an implicit get -->
<h1>${ page.title, "Default Title" }</h1>

<!-- this is a explicit get -->
<h2>${ get(page.title, "Default Title") }</h2>
```

**Example:**

```html
<a href='${ link.href }' ht-apply>${ link.label, link.title, "Placeholder" }</a>
```




<!-- Links -->
[template data]: /docs/reference/core/data
[element attributes]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes
[element contents]: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
[template variable syntax]: #template-variable-syntax
[`<style>` element]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/style
[`<style>` elements]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/style
[`style` attribute]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/style
[`style` attributes]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/style
[CSS value]: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Values_and_units
[Javascript template literals]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
[CSS custom functions]: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions
[Markdown]: /docs/reference/core/markdown/
[`site.config.plugins_dir`]: /docs/reference/cms/website/#site-config-plugins_dir
[`theme.config.plugins_dir`]: /docs/reference/core/themes/#theme-config-plugins_dir
[binding]: https://developer.mozilla.org/en-US/docs/Glossary/Binding
[plugin entrypoint]: /docs/reference/core/plugins/
[cache busting]: https://www.keycdn.com/support/what-is-cache-busting#3-query-strings
[plugin identifier]: /docs/reference/core/plugins/#plugin-identifiers


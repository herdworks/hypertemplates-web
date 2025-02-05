---
created_at: 2024-12-10T16:00:00-08:00
updated_at: 2024-12-10T16:00:00-08:00
title: Documentation
summary: |
    Home of the HyperTemplates tutorial, guide, and reference documentation.
---

## HyperTemplates

<auto-toc ht-element scope='main'></auto-toc>

* [Introduction to templating](#introduction-to-templating)
* [HyperTemplates in a nutshell](#hypertemplates-in-a-nutshell)
* [Data-driven templates](#data-driven-templates)
* [Reference documentation](#reference-documentation)

## Introduction to templating

HyperTemplates is a templating system for composing HTML documents.
Web "pages" as we experience them today are HTML documents.
Web "sites" are collections of HTML documents.

To understand what a document _template_ is, consider the example of a company letterhead document: 

<embed type='application/pdf' src='example-letterhead.pdf' />

A letterhead is stationery that typically includes the company name, address, title, phone number, email address, logo, and some branding (e.g. a logo). 
Very similar to the information we find on most web pages. 
To add this information to every company document without a template (the letterhead) would result in a very inconsistent experience for the company's customers.
_It would also be incredibly inefficient!_
Templates solve these problems and many others by making it easy to create consistent looking documents.

Document templates are useful because they allow us to <mark>focus on the **contents**</mark> of the document rather than futzing with how the content should be presented. 
In practical terms, templates also serve as a guide - they prompt us to provide the necessary information to accomplish a given task.

## HyperTemplates in a nutshell

To understand HyperTemplates, let's use a simple HTML5 document as an example.

```html
<!DOCTYPE html>
<html lang='en-US'>
    <head>
        <meta charset='utf-8'>
        <title>ACME Inc</title>
        <meta name='description' content='ACME Inc, makers of fine anvil products.'>
    </head>
    <body>
        <header>
            <nav>
                <img src='/img/logo.png' alt='ACME Inc company logo (an anvil)' />
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/contact'>Contact</a>
            </nav>
            <h1>Welcome to ACME, Inc.</h1>
        </header>
        <main>
            <p>Welcome to ACME, home of the anvil.</p>
        </main>
    </body>
</html>
```

To convert this example document into a reusable template using HyperTemplates, all we need to do is annotate the document using [HyperTemplates HTML attributes].

<code-snippet ht-element filename='template.html' highlight='5-6,10-15,17' with-line-numbers>

```html
<!DOCTYPE html>
<html lang='en-US'>
    <head>
        <meta charset='utf-8'>
        <title ht-content='page.title,site.title'>ACME Inc</title>
        <meta name='description' ht-attrs='content:page.description,site.description'>
    </head>
    <body>
        <header>
            <nav ht-if='site.nav'>
                <img src='/img/logo.png' alt='ACME Inc company logo (an anvil)' />
                <a href ht-template='link:site.nav' ht-attrs='href:link.href'>
                    <span ht-content='link.label,link.title'></span>
                </a>
            </nav>
            <h1 ht-content='page.title,site.title'>Welcome to ACME, Inc.</h1>
        </header>
        <main ht-content='html:page.content'></main>
    </body>
</html>
```

</code-snippet>

This template tells HyperTemplates to make the following changes:

1. Replace the contents of the `<title>` and `<h1>` elements with the contents of the template data `page.title` or `site.title` property.
1. Replace the page description `<meta>` element `content` attribute with the contents of the template data `page.description` or `site.description` property.
1. Remove the `<nav>` element if the template data does not contain a `site.nav` property.
1. Clone the `<a>` element once [**for each** entry **in**] the template data `site.nav` property, then process the cloned element as a nested template with a variable named `link`.
1. Parse the contents of the template data `page.content` property as HTML and insert the parsed HTML into the `<main>` element.

To learn more about HyperTemplates attributes, please visit the [attributes reference].

## Data-driven templates

HyperTemplates populates HTML templates with template data containing key-value pairs.
Template data is generally managed as content files in Markdown, YAML, or JSON format.

```javascript
{
    site: {
        title: "HyperTemplates",
        description: "HyperTemplates is a pure-HTML templating system for the modern web.",
        favicon:
            href: "/img/apple-touch-icon.png",
            rel: "apple-touch-icon"
        nav: [
            { label: "Home", href: "/" },
            { label: "Features", href: "/features/" },
            { label: "Docs", href: "/docs/" },
            { label: "Blog", href: "/blog/" },
        ]
    },
    page: {
        title: "HyperTemplates Documentation",
        description: "HyperTemplates Documentation",
        content: "<p>HyperTemplates is a templating system for composing HTML documents...</p>"
    }
}
```

Template attributes reference template data properties using "dot notation" [property accessors].
For example, the `site.favicon.href` property has a value of `/img/apple-touch-icon.png`.

<learn-more ht-element href='/docs/reference/data/'></learn-more>

## Reference Documentation

Learn more about the HyperTemplates [template attributes], [template data], and [static site generator].

<learn-more ht-element href='/docs/reference/'></learn-more>


<!-- Links -->
[HyperTemplates HTML attributes]: /docs/reference/attributes/
[**for each** entry **in**]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
[property accessors]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors

[attributes reference]: /docs/reference/attributes/
[template attributes]: /docs/reference/attributes/
[template data]: /docs/reference/data/
[static site generator]: /docs/reference/cli/

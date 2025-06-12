---
created_at: 2025-05-19T14:00:00-08:00
layout: default
title: Link Verification
summary: |
    How to configure link verification.
---

## Link Verification

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Goal

In this guide we'll learn how to add `rel='me'` link verification to an entire website, or individual web pages.

### What are `rel="me"` links?

The HTML `rel` attribute defines the relationship between a linked resource and the current document.
The [`rel='me'` keyword] is used to indicate that the current resource is represented by the linked party.

In other words, `rel='me'` can be used as a way to verify that two or more resources (e.g. websites, social media accounts, etc) are from the same source.
Social media platforms and other services that allow you to add profile links often offer support for displaying a badge next to verified links.

In most cases, these services will scan links for a `<link>` or `<a>` element with a `rel` attribute.

**Example**

```html
<link rel='me' href='https://example.com/me' />
```

Let's see how to add `rel='me'` link to an entire website or an individual page using HyperTemplates.

### Guide

**STEP 1: Verify a website**
: To configure `rel="me"` links for an entire website, modify the [`site.links` property] of your website configuration file.

  **Example `site.yaml`**
  
  <code-snippet ht-block filename='site.yaml' highlights='6-11'>
  
  ```yaml
  title: Herd Works
  description: Pocket-worthy productivity tools for the human herd.
  links:
    - rel: icon
      href: /favicon.ico
    - rel: me
      href: https://github.com/herdworks
    - rel: me
      href: https://mastodon.social/@herdworks
    - rel: me
      href: https://www.threads.net/@herdworks
  ```

  </code-snippet>
  
  Now let's update our layouts to use the `site.links` property.

  <code-snippet ht-block filename="layouts/default.html" highlight='7-8'>
  
  ```html
  <html lang='en-US'>
      <head>
          <meta charset='utf-8'>
          <title ht-content='title'>My Website</title>
          <meta name='description' ht-attrs='content:description'>

          <!-- Global Links -->
          <link ht-template='link:site.links' ht-attrs='rel:link.rel; href:link.href'>
      </head>
      <body>
          <header ht-include='partials/header' id='header'></header>
          <main>
              <article ht-include='partials/article'></article>
          </main>
          <footer ht-include='partials/footer' id='footer'></footer>
      </body>
  </html>
  ```
  
  </code-snippet>

  That's it!
  Now run `hyperctl build` or `hyperctl server` to see your `rel='me'` links.

  
**STEP 2: Verify a single page**
: To configure a `rel="me"` link on a single page, modify the [`page.links` property] of a page.
  
  **Example `index.md`**
  
  <code-snippet ht-block filename='content/about/caleb-hailey/index.md' highlight='6-11'>
  
  ```plaintext
  ---
  created_at: 2025-05-19T14:00:00-07:00
  path: /about/caleb-hailey
  title: About Caleb
  links:
    - rel: me
      href: https://github.com/calebhailey
    - rel: me
      href: https://mastodon.social/@calebhailey
    - rel: me
      href: https://www.threads.net/@calebhailey
  ---
  
  Hello, world. :wave:
  ```
  
  </code-snippet>

  Now let's update our layout to use the `page.links` property.

  <code-snippet ht-block filename="layouts/default.html" highlight='10-11'>
  
  ```html
  <html lang='en-US'>
      <head>
          <meta charset='utf-8'>
          <title ht-content='title'>My Website</title>
          <meta name='description' ht-attrs='content:description'>

          <!-- Global Links -->
          <link ht-template='link:site.links' ht-attrs='rel:link.rel; href:link.href'>

          <!-- Page Links -->
          <link ht-template='link:page.links' ht-attrs='rel:link.rel; href:link.href'>
      </head>
      <body>
          <header ht-include='partials/header' id='header'></header>
          <main>
              <article ht-include='partials/article'></article>
          </main>
          <footer ht-include='partials/footer' id='footer'></footer>
      </body>
  </html>
  ```
  
  </code-snippet>

  That's it.
  Now run `hyperctl build` or `hyperctl server` to see your `rel='me'` links.

### Discussion

Do you have any questions and/or feedback about this guide?
Join the @hypertexting.community and visit [the "Guides" category](https://hypertexting.community/c/hypertemplates/guides) :speech_balloon:

<!-- Links -->
[`site.links` property]: /docs/reference/cms/website#site-links
[`page.links` property]: /docs/reference/cms/page#page-links

[`rel='me'`]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/me
[`rel='me'` keyword]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/me
[XHTML Friends Network]: https://gmpg.org/xfn/
[XFN]: https://gmpg.org/xfn/
[rel="me" microformat]: https://microformats.org/wiki/rel-me
[Verification on Mastodon]: https://joinmastodon.org/verification
[Mastodon profile link verification]: https://docs.joinmastodon.org/user/profile/#verification
[Verifying your GitHub Profile on Mastodon]: https://til.simonwillison.net/mastodon/verifying-github-on-mastodon 

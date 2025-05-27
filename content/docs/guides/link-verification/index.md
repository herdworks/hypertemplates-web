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

Coming soon...

### Introduction

Coming soon...

#### What are `rel="me"` links?

Coming soon...

### Guide

**EXERCISE 1: Verify a website**
: To configure `rel="me"` links for an entire website, modify the [`site.links` property] of your website configuration file.

  **Example `site.yaml`**
  
  <code-snippet ht-block filename='site.yaml' highlights='6-9'>
  
  ```yaml
  title: Example Website
  description: This is an example website
  links:
    - rel: icon
      href: /favicon.ico
    - rel: me
      href: https://github.com/calebhailey
    - rel: me
      href: https://mastodon.social/@calebhailey
  ```
  
  </code-snippet>
  
  **Example `site.json`**
  
  <code-snippet ht-block filename='site.json' highlight='6-7'>
  
  ```json
  {
      "title": "Example website",
      "description": "This is an example website",
      "links": [
          { "rel": "icon", "href": "/favicon.ico" },
          { "rel": "me", "href": "https://github.com/calebhailey" },
          { "rel": "me", "href": "https://mastodon.social/@calebhailey" }
      ]
  }
  ```
  
  </code-snippet>
  
**EXERCISE 2: verify a single page**
: To configure a `rel="me"` link on a single page, modify the [`page.links` property] of a page.
  
  **Example `index.md`**
  
  <code-snippet ht-block filename='content/about/caleb-hailey/index.md' highlight='6-9'>
  
  ```plaintext
  ---
  created_at: 2025-05-19T14:00:00-07:00
  path: /about/caleb-hailey
  title: About Caleb
  links:
    - rel: me
      href: https://github.com/calebhailey
    - rel: me
      href: https://mastodon.social/
  ---
  
  Hello, world. :wave:
  ```
  
  </code-snippet>

### Discussion

Coming soon...

### Next steps

Coming soon...


<!-- Links -->
[`site.links` property]: /docs/reference/cms/website#site-links
[`page.links` property]: /docs/reference/cms/page#page-links

[rel="me"]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/me
[XHTML Friends Network]: https://gmpg.org/xfn/
[XFN]: https://gmpg.org/xfn/
[rel="me" microformat]: https://microformats.org/wiki/rel-me
[Verification on Mastodon]: https://joinmastodon.org/verification
[Mastodon profile link verification]: https://docs.joinmastodon.org/user/profile/#verification
[Verifying your GitHub Profile on Mastodon]: https://til.simonwillison.net/mastodon/verifying-github-on-mastodon 

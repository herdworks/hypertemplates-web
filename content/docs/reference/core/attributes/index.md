---
created_at: 2025-01-30T12:00:00-08:00
title: Template Attributes
summary: |
    HyperTemplates HTML attributes reference documentation.
breadcrumb: Attributes
---

## HyperTemplates Attributes Reference

The core of HyperTemplates is a small but mighty set of [HTML attributes] that allow you to compose complex HTML documents from simple HTML templates.

`ht-content`
: **Inserts** text or HTML content to the target HTML element.
  
  <learn-more ht-element href='./ht-content'></learn-more>

`ht-attrs`
: **Annotates** the target HTML element with one or more HTML attributes.

  <learn-more ht-element href='./ht-attrs'></learn-more>

`ht-if`
: **Retains** the target HTML element if a condition is `true`.

  <learn-more ht-element href='./ht-if'></learn-more>

`ht-not`
: **Removes** the target HTML element if a condition is `true`.

  <learn-more ht-element href='./ht-not'></learn-more>

`ht-param`
: **Replaces** the target HTML element with Text or Element nodes.
  
  <learn-more ht-element href='./ht-param'></learn-more>

`ht-include`
: **Replaces** the target HTML element with elements from an external source.

  <learn-more ht-element href='./ht-include'></learn-more>

`ht-template`
: **Repeats** the target HTML element once per occurrence of some content.

  <learn-more ht-element href='./ht-template'></learn-more>

`ht-element`
: **Progressively enhances** the target HTML element.

  <learn-more ht-element href='./ht-element'></learn-more>

<mark>This is the complete set of template attributes used by HyperTemplates.</mark>
They were designed to be [easy to learn] and remember.

<doc-quote ht-element notice>

**NOTE:** HyperTemplates supports the [`data-` prefix] for all template attributes (e.g. `ht-content` is the same as `data-ht-content`).

</doc-quote>

<!-- Links -->
[HTML attributes]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[easy to learn]: /docs/tutorials/getting-started/
[`data-` prefix]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes

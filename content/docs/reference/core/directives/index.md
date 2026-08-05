---
created_at: 2025-01-30T12:00:00-08:00
title: Template Directives
summary: |
    HyperTemplates HTML directives reference documentation.
breadcrumb: Directives
---

## HyperTemplates Directives Reference
--------------------------------------

The core of HyperTemplates is a small but mighty set of `ht-*` prefixed [HTML attributes] called _templating directives_ that allow you to compose complex HTML documents from simple HTML templates.

`ht-include`
: **Includes** the HTML fragments from external sources in place of target elements.

  <learn-more ht-block href='./ht-include/'></learn-more>

`ht-if`
: **Removes** target HTML elements if one or more conditional are not met.

  <learn-more ht-block href='./ht-if/'></learn-more>

`ht-each`
: **Iterates** over a data collection and templates the target HTML element once per item.

  <learn-more ht-block href='./ht-each/'></learn-more>

`ht-apply`
: **Replaces** template variables with strings, or Text and Element nodes.

  <learn-more ht-block href='./ht-apply/'></learn-more>

`ht-block`
: **Progressively enhances** the target HTML element.

  <learn-more ht-block href='./ht-block/'></learn-more>

`ht-attrs`
: **Annotates** the target HTML element with one or more HTML attributes.

  <learn-more ht-block href='./ht-attrs/'></learn-more>

`ht-base`
: **Resolves** relative URLs by providing a base URL to be used within some portion of a template.

  <learn-more ht-block href='./ht-base/'></learn-more>

`ht-pipe`
: **Moves** the target HTML element or its contents to a destination element.

  <learn-more ht-block href='./ht-pipe/'></learn-more>

<mark>This is the complete set of template directives used by HyperTemplates.</mark>
They were designed to be [easy to learn] and remember.

<doc-quote ht-block notice>

**NOTE:** HyperTemplates supports the [`data-` prefix] for all template directives (e.g. `ht-include` is the same as `data-ht-include`).

</doc-quote>

<!-- Links -->
[HTML attributes]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[easy to learn]: /docs/tutorials/getting-started/
[`data-` prefix]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes

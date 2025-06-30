---
created_at: 2025-05-21T12:00:00-08:00
created_at: 2025-05-21T12:00:00-08:00
title: Content Types
summary: |
    The HyperTexting CMS "content-type" reference.
---

## Pages reference

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview
------------

A content-type is a template for generating new content.
The content-type configuration file provides a system for generating content files with the necessary [template data properties] for a given [layout].

### Introduction
----------------

Websites are collections of web pages.
Most websites have many different _types_ of pages.
Different types of pages will generally also have different [layouts] and URL paths (e.g. `/posts/:slug` vs `/features/:slug`).
And not every page needs a title, description, or [attachments] (images, videos, audio, or files). 
Keeping track of these differences is where content types really shine.

### Example
-----------

In the HyperTexting CMS, content types are like templates for generating specific types of pages.
For example, if someone wanted to build a personal website using HyperTemplates, they could use content types to replicate the various types of pages they might otherwise use social media for:

* A video post needs a video attachment (e.g. @youtube.com or @tiktok.com videos)
* A photo/gallery post needs photo attachments (e.g. @instagram.com posts)
* A long-form blog post needs a title and description (e.g. @medium.com posts)
* An untitled post only needs content (e.g. ~~tweets~~ @bsky.app, @threads.com, or @x.com posts)

Here's an example content type for publishing blog posts:

<code-snippet ht-block filename='types/quickpost.yaml'>

```yaml
---
metadata:
    name: Blog Post
    description: Long-form editorial content.
    icon: append.page
    action: Publish Blog Post
spec:
    layout: post.html
    format: markdown
    path: /blog/
    auto_slug: title-kabob
    requires:
        title: true
        content: true
    template:
        content-type: page
        foo: bar
prompts:
  - name: page
    required: true
    inputs:
        title: {}
        description: {}
patches: [] # coming soon
```

</code-snippet>

This content type requires a title and some content.
A new page created with this content type and the title "Hello World" would result in a new page data file created at `content/blog/hello-world/index.md`.

### Properties
--------------

Content types are configured using four top-level properties: 

* [`metadata`](#metadata)
* [`spec`](#spec)
* [`prompts`](#prompts)
* [`patches`](#patches)

#### Metadata
-------------

**`metadata.name`**
: The content type name (required).

  The value presented to users when selecting a content type in HyperTexting CMS applications.

  **Example**

  ```yaml
  metadata:
      title: Quick Post
  ```

**`metadata.description`**
: The content type description (required).

  A short summary of the content type's intended purpose or characteristics.

  **Example**

  ```yaml
  metadata:
      description: Like a tweet, but without the arbitrary character limit.
  ```

**`metadata.icon`**
: The content type icon (optional).

  Supported values are any [SF Symbols] icon name (string), or a single emoji character.

  **Default**

  ```yaml
  metadata:
      icon: 👻
  ```

  <doc-quote ht-block info>

  The :ghost: emoji is highly recommended for content types that generate disappearing pages. 🤌🏽

  </doc-quote>

#### Spec
---------

**`spec.layout`**
: The layout for pages generated using this content type (optional).

  If `contenttype.spec.layout` is provided, it will be used to set the [`page.layout`] property of pages created using this content type.

  **Example**

  ```yaml
  spec:
      layout: post.html
  ```

**`spec.format`**
: The file format that should be used to create page index files.

  The supported formats are: 
  
  * **`markdown`:** create `index.md` files (default)
  * **`yaml` or `yml`:** create `index.yaml` files
  * **`json`:** create `index.json` files

**`spec.path`**
: The path prefix for pages created using this content type.

  **Example**

  ```yaml
  spec:
      path: /blog/
  ```

**`spec.auto_slug`**
: The path slug format for pages created using this content type.

  **Example**

  ```yaml
  spec:
      auto_slug: title-kabob
  ```

  The supported slug `spec.auto_slug` formats are:

  * `timestamp`: the current time in milliseconds since epoch (see [`Date.now()`])
  * `title-kabob`: the `page.title` in [Kabob case]
  * `title_camel`: the `page.title` in [Snake case]
  * `manual`: a slug should be provided by the user
  * `uuid`: a UUIDv4 (e.g. `2ad660a0-1df1-42c3-bf56-bf97539837d8`)
  * `none`: no slug (uses `spec.path` as the page path)

  In all cases except `auto_slug: none`, the computed slug is appended to the `path`.

  <doc-quote ht-block info>

  **What is a slug?** 🐌

  In the HyperTexting CMS, a page "slug" is the last path component of a page URL.
  To illustrate, consider the following example URL:
  
  <code-snippet ht-block filename='' highlight='3' line-numbers='on'>

  ```bash
  https://apple.com/hotnews/thoughts-on-flash # the url
                   /hotnews/thoughts-on-flash # the path
                            thoughts-on-flash # the slug
  ``` 

  </code-snippet>

  In this example we're dissecting a URL.
  Line 1 shows the complete URL.
  Line 2 shows the URL [path](https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Path).
  Line 3 shows the URL slug – the portion of the URL after the last `/` slash.

  </doc-quote>

**`spec.requires`**
: Required page elements.

  **Example**

  ```yaml
  spec:
      title: true
      content: true
      attachment: link
      redirect: false
  ```

  There are four configurable requirements available at this time:

  * **`spec.requires.title` (boolean):** `page.title` must be provided
  * **`spec.requires.content` (boolean):** `page.content` must be provided
  * **`spec.requires.attachment` (string):** an attachment of this [kind](/docs/reference/cms/attachments/#attachment-kind) is required
  * **`spec.requires.redirect` (bool):** `page.redirect` must be provided

**`spec.template`**
: Default [template data] for new pages created with this content type.

  **Example**

  ```yaml
  spec:
      template:
          tags: [blog]
          foo: bar
  ```

  Use the `spec.template` property to provide default [template data properties] for pages created from this content type.

### Prompts

🚧 Coming soon... 🚧

### Patches

🚧 Coming soon... 🚧


<!-- Links -->
[attachments]: /docs/reference/cms/attachments/
[Markdown]: /docs/reference/core/markdown/
[template data]: /docs/reference/core/data/
[template data properties]: /docs/reference/core/data/#template-data-properties
[layout]: /docs/reference/core
[layouts]: /docs/reference/core

[SF Symbols]: https://developer.apple.com/sf-symbols/

[`page.layout`]: /docs/reference/cms/page/#page-layout

[`Date.now()`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
[Kabob case]: https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case
[Snake case]: https://developer.mozilla.org/en-US/docs/Glossary/Snake_case
[HyperTexting]: https://hypertexting.com

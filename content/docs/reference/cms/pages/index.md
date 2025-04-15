---
created_at: 2025-02-10T12:00:00-08:00
title: Pages
summary: |
    The HyperText Management System "page" reference.
---

## Pages reference

* [Overview](#overview)
* [Example](#overview)
* [Properties](#properties)
  * [`created_at`](#created_at)
  * [`updated_at`](#updated_at)
  * [`title`](#title)
  * [`description`](#description)
  * [`author`](#author)
  * [`contributors`](#contributors)
  * [`tags`](#tags)
  * [`content`](#content)
  * [`summary`](#summary)
  * [`more`](#more)
  * [`attachments`](#attachments)

### Overview

A page is a directory containing an index file in Markdown (`index.md`), YAML (`index.yaml`), or JSON (`index.json`) format.

### Example

An example page content file in [Markdown] format.

<code-snippet ht-element filename='content/posts/introducing-hypertemplates/index.md'>

```plaintext
---
created_at: 2025-02-04T12:00:00-08:00
updated_at: 2025-02-04T12:00:00-08:00
layout: post
title: Introducing HyperTemplates
description: The pure-HTML templating system for the modern web.
tags:
    - blog
---

## Introducing HyperTemplates

Two things happen very early on in a persons journey to learn HTML – they create their first web page (!), and eventually they create a second.
The moment that second page exists, the seemingly simple journey becomes a _lifelong quest_ to find the best templating system to keep some portion of two or more web pages in sync.

If you have discovered templating solutions you actually enjoy using, this post might not interest you, and that is OK!
For everyone else, welcome.
```

</code-snippet>

The page content file provides a standardized set of core [properties](#properties) for layout and theme developers.

<doc-quote ht-element notice>

**NOTE:** the contents of a page content file are available as [template data properties] with the `page.` prefix.

</doc-quote>

### Properties

#### `created_at`

#### `updated_at`

#### `title`

#### `description`

#### `author`

#### `contributors`

#### `tags`

#### `content`

#### `summary`

<doc-quote ht-element success>

#### Content summaries

The HyperTemplate markdown processor will automatically generate a content summary for Markdown files that contain a `<!--more-->` HTML comment.

</doc-quote>

#### `more`

#### `attachments`


#### Custom properties

<!-- Links -->
[Markdown]: /docs/reference/core/markdown/
[template data properties]: /docs/reference/core/data/#template-data-properties

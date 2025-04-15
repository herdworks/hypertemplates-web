---
created_at: 2025-02-10T12:00:00-08:00
title: Content Types
summary: |
    The HyperText Management System "content-type" reference.
---

## Pages reference

* [Overview](#overview)
* [Example](#overview)
* [Properties](#properties)
  * [`metadata`](#metadata)
  * [`metadata.name`](#metadataname)
  * [`metadata.description`](#metadatadescription)
  * [`metadata.labels`](#metadatalabels)
  * [`spec`](#spec)
  * [`spec.layout`](#speclayout)
  * [`spec.format`](#specformat)
  * [`spec.path`](#specpath)
  * [`spec.template`](#spectemplate)
  * [`spec.prompts`](#specprompts)
  * [`spec.patches`](#specpatches)

### Overview

A content-type is a template for generating new content.
The content-type configuration file provides a system for generating content files with the necessary [template data properties] for a given [layout].

### Example

An example page content-type configuration file in YAML format.

<code-snippet ht-element filename='types/post.yaml'>

```yaml
---
metadata:
    name: Post
    description: New post
spec:
    layout: post.html
    format: markdown
    path: /blog/
    template:
        title: Default title
        tags:
          - blog
prompts: [] # coming soon
patches: [] # coming soon
```

</code-snippet>

### Properties

#### `metadata`

#### `metadata.name`

#### `metadata.description`

#### `metadata.labels`

#### `spec`

#### `spec.layout`

#### `spec.format`

#### `spec.path`

#### `spec.template`

#### `spec.prompts`

#### `spec.patches`


<!-- Links -->
[Markdown]: /docs/reference/core/markdown/
[template data properties]: /docs/reference/core/data/#template-data-properties
[layout]: /docs/reference/core

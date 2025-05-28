---
created_at: 2025-05-21T12:00:00-08:00
created_at: 2025-05-21T12:00:00-08:00
title: Content Types
summary: |
    The HyperText Management System "content-type" reference.
---

## Pages reference

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview
------------

A content-type is a template for generating new content.
The content-type configuration file provides a system for generating content files with the necessary [template data properties] for a given [layout].

### Example
-----------


An example "Quick Post" content-type configuration file in YAML format.

<code-snippet ht-block filename='types/post.yaml'>

```yaml
---
metadata:
    name: Quick Post
    description: Like a tweet, but without the arbitrary character limit.
spec:
    layout: post.html
    format: markdown
    path: /posts/
    auto_slug: timestamp
    requires:
        content: true
    template:
        tags: ["quickpost"]
        content-type: quickpost
prompts: [] # coming soon
```

</code-snippet>

### Properties
--------------

**`contenttype.metadata`**
: Something something content-type something...

**`contenttype.metadata.name`**
: Something something content-type something...

**`contenttype.metadata.description`**
: Something something content-type something...

**`contenttype.spec`**
: Something something content-type something...

**`contenttype.spec.layout`**
: Something something content-type something...

**`contenttype.spec.format`**
: Something something content-type something...

**`contenttype.spec.path`**
: Something something content-type something...

**`contenttype.spec.auto_slug`**
: Something something content-type something...

**`contenttype.spec.requires`**
: Something something content-type something...

**`contenttype.spec.template`**
: Something something content-type something...

### Prompts

**`spec.prompts`**
: Something something content-type something...

### Patches

**`spec.patches`**
: Something something content-type something...


<!-- Links -->
[Markdown]: /docs/reference/core/markdown/
[template data properties]: /docs/reference/core/data/#template-data-properties
[layout]: /docs/reference/core

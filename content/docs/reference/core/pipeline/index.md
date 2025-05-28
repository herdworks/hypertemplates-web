---
created_at: 2025-02-05T12:00:00-08:00
title: Pipeline
summary: |
    HTML templating pipeline reference.
---

## HyperTemplates Pipeline Reference

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview
------------

🚧 Coming soon... 🚧

### Specification
-----------------

#### Order of operations
------------------------

1. Includes (`ht-include`)

   <doc-quote ht-block notice>

   **NOTE:** `ht-include` attributes are processed recursively, allowing components to be composed of other components.

   </doc-quote>

1. Conditionals (`ht-if` and `ht-not`)
1. Templates (`ht-template`)

   <doc-quote ht-block success>

   **NOTE:** `ht-template` attributes are processed recursively, prompting HyperTemplates to process target elements through the complete HyperTemplates pipeline (includes, conditionals, templates, attributes, content, and elements), passing in the template data defined by the `ht-template` attribute.

   </doc-quote>

1. Attributes (`ht-attrs`)
1. Content (`ht-content`)
1. Elements (`ht-block`)


#### Template recursion
-----------------------


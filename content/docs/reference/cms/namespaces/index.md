---
created_at: "2025-02-10T12:00:00-08:00"
title: Namespaces
---

## Namespaces reference

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview
------------

A namespace is a globally accessible [template data object].

Namespaces are created by adding data files to the website `data` directory (see [`site.config.data_dir`]).
Custom data namespaces are accessible to layouts via their namespace identifier (i.e. `data.<identifier>`).

### Examples
------------

Namespaces are a useful tool for content that we might need to access across multiple pages.
Instead of overloading our website configuration file with [custom properties](/docs/reference/cms/website/#custom-properties), we can split global website content out into discrete namespaces data files.

<code-snippet ht-block filename='data/newsletter.yaml'>

```yaml
---
namespace: newsletter
title: 💬 Join the community
description: |
    Stay up-to-date with the lastest releases and other news from Team HyperTemplates. 
    Ask the developers questions, get help from the community, and share your creations! 🎨
form:
    action: https://hypertexting.community/signup
```

</code-snippet>

In this example we have created a `newsletter` namespace that is accessible from layouts as the `data.newsletter` property.

### Properties
--------------

**Namespace identifier**
: The identifier or key used to access namespace data via the global `data` object.

  Namespaces are identified as follows: 
  
  1. using the top-level "namespace" property (if set), or...
  2. using the name of the top-level property (if only one top-level property is set), or...
  3. as "default"
  
  In the following example, a single top-level property (`newsletter`) is used as an identifier:
  
  ```yaml
  ---
  newsletter:
      title: 💬 Join the community
      description: |
          Stay up-to-date with the lastest releases and other news from Team HyperTemplates. 
          Ask the developers questions, get help from the community, and share your creations! 🎨
      form:
          action: https://hypertexting.community/signup
  ```
  
  This example is effectively identical to the first example on this page.
  Both namespaces are accessible to layouts as `data.newsletter`, and they both contain the same `data.newsletter.title`, `data.newsletter.description`, and `data.newsletter.form.action` properties.
  
  <doc-quote ht-block warning>

  **NOTE:** duplicate namespace identifiers will result in unexpected behavior.
  As a best practice, we recommend using namespace data filenames as namespace identifiers.
  For example the `data/newsletter.yaml` namespace data file should use the `newsletter` namespace identifier.

  </doc-quote>
  
<!-- Links -->
[template data object]: /docs/reference/core/data/#template-data-object
[`site.config.data_dir`]: /docs/reference/cms/website/#site-config

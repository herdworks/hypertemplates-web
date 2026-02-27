---
created_at: 2025-01-26T11:00:00-08:00
updated_at: 2026-02-26T10:00:00-08:00
title: Themes
summary: |
    Themes
---

## Themes

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview
------------

A HyperTemplates theme is a collection of [layouts] and related files.

### Directory structure
-----------------------

A theme is a directory containing at least two files:

* `theme.json`
* `layouts/default.html`

<mark>These are the only requirements for a HyperTemplates theme</mark>.
However, themes typically contain additional resources organized into subdirectories such as `layouts/`, `fragments/`, and `static/`.

**Example**

```shell
layouts/
    default.html
    home.html
    blog.html
    post.html
fragments/
    head.html
    header.html
    footer.html
static/
    css/
        reset.css
        styles.css
    fonts/
    img/
        logo.svg
        favicon.png
    js/
        main.js
theme.json
```

### Configuration

Themes are configured using the `theme.json` file.

<code-snippet ht-block filename='theme.json'>

```json
{
    "name": "Example Theme",
    "description": "A super basic example theme",
    "version": "0.1.0",
    "config": {
        "blocks_dir": "blocks",
        "layouts_dir": "layouts",
        "fragments_dir": "fragments",
        "static_dir": "static"
    }
}
```

</code-snippet>

### Specification
-----------------

**`theme.name`**
: The theme name.

  **Example**

  ```json
  {
    "name": "Example Theme"
  }
  ```

**`theme.description`**
: The theme description.

  **Example**

  ```json
  {
    "description": "An example theme."
  }
  ```

**`theme.version`**
: The theme version.

  **Example**

  ```json
  {
    "version": "0.1.0"
  }
  ```

**`theme.config`**
: Theme configuration settings (optional).

  **Example**

  ```json
  {
    "name": "Example Theme",
    "config": {}
  }
  ```

**`theme.config.layouts_dir`**
: The theme layouts directory (optional).
  The default value is `layouts`.
  See the [layouts reference] for more information.

  **Example**

  ```json
  { 
    "name": "Example Theme",
    "config": {
        "layouts_dir": "layouts"
    }
  }
  ```

**`theme.config.fragments_dir`**
: The theme fragments directory (optional).
  The default value is `fragments`.
  See the [fragments reference] for more information.

  **Example**

  ```json
  { 
    "name": "Example Theme",
    "config": {
        "fragments_dir": "fragments"
    }
  }
  ```


**`theme.config.static_dir`**
: The theme static directory (optional).
  The default value is `static`.
  See the [assets reference] and [asset hierarchy] for more information.

  **Example**

  ```json
  { 
    "name": "Example Theme",
    "config": {
        "static_dir": "assets"
    }
  }
  ```

**`theme.config.data_dir`**
: The theme template data directory (optional).
  The default value is `data`.
  
  **Example**

  ```json
  { 
    "name": "Example Theme",
    "config": {
        "data_dir": "data"
    }
  }
  ```

**`theme.config.blocks_dir`**
: The theme blocks directory (optional).
  The default value is `blocks`.
  
  **Example**

  ```json
  { 
    "name": "Example Theme",
    "config": {
        "blocks_dir": "components"
    }
  }
  ```

**`theme.config.contenttypes_dir`**
: The content types directory.
  The default value is `types`.
  See the [content types reference] for more information.

  **Example**

  ```json
  { 
    "name": "Example Theme",
    "config": {
        "contenttypes_dir": "types"
    }
  }
  ```


<!-- Links -->
[layouts]: /docs/reference/core/layouts/
[template attribute]: /docs/reference/core/attributes/
[layouts reference]: /docs/reference/core/layouts/
[fragments reference]: /docs/reference/core/fragments/
[data reference]: /docs/reference/core/data/
[assets reference]: /docs/reference/cms/assets/
[asset hierarchy]: /docs/reference/cms/assets/#asset-hierarchy
[content types reference]: /docs/reference/cms/content-types/

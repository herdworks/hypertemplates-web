---
created_at: 2025-01-26T11:00:00-08:00
title: Themes
summary: |
    Themes
---

## Themes

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview
------------

A HyperTemplates theme is a collection of [layouts] and related files.
HyperTemplates themes must have a layouts directory and a default layout file named `default.html`.
<mark>This is the only requirement for a HyperTemplates theme</mark>.

### Example
-----------


An example HyperTemplates theme typically contains additional resources organized into subdirectories such as `partials/`, and `static/` but the actual directory structure beyond the `layouts` folder is up to theme developers.

```shell
layouts/
    default.html
    home.html
    post.html
partials/
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
```

### Specification
-----------------

#### Configuration
------------------

🚧 Coming soon... 🚧

<code-snippet ht-block filename='site.yaml'>

```yaml
---
base_url: https://preview.hypertemplates.net
title: HyperTemplates
description: The pure-HTML templating system for the modern web.
...: ...
theme:
    blocks_dir: "blocks"
    contenttypes_dir: "types"
    layouts_dir: "layouts"
    static_dir: "static"
```

</code-snippet>

<doc-quote ht-block warning>

**NOTE:** Additional configuration parameters may be added in future releases.

</doc-quote>

<!-- Links -->
[layouts]: /docs/reference/core/layouts/
[template attribute]: /docs/reference/core/attributes/
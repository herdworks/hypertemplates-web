---
created_at: "2024-11-12T10:00:00-07:00"
title: Themes
summary: |
    HyperTemplates theme reference documentation.
---

## HyperTemplates Themes

* [Overview](#overview)
* [Example](#example)
* [Specification](#specification)
  * [Configuration](#configuration)

### Overview

A HyperTemplates theme is a collection of layouts and associated resource files.
HyperTemplates themes must have a subdirectory named `layouts/` and a default layout file named `layouts/default.html`.

```shell
layouts/default.html
```

<mark>This is the only requirement</mark>.

### Example

An example HyperTemplates theme typically contains additional resources organized into subdirectories such as `partials/`, and `static/` but the actual directory structure beyond the `layouts` folder is up to theme developers.

```shell
elements/
layouts/
    home.html
    default.html
    feed.html
    post.html
partials/
    head.html
    nav.html
    hero.html
    footer.html
    tail.html
static/
    css/
        styles.css
    fonts/
    img/
        logo.svg
        favicon.png
    js/
        main.js
```

### Specification

#### Configuration

Work in progress...

```json
{
    "name": "HyperTexting",
    "version": "0.1.0"
}
```

<doc-quote ht-element warning>

**NOTE:** Additional configuration parameters may be added in future releases.

</doc-quote>

<!-- Links -->


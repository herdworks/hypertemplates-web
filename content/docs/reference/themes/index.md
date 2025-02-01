---
created_at: "2024-11-12T10:00:00-0700"
title: HyperThemes
description: Learn more about the HyperTemplates theme engine.
layout: docs
overview: |
    ## HyperThemes
    
    Learn more about the HyperTemplates theme engine.
sections: []
---

## HyperTemplates Themes

A HyperTemplates theme is a collection of [Layouts] and associated resource files.
HyperTemplates themes must have a subdirectory named `layouts/` and a default layout file named `layouts/default.html`.
This is the only requirement.

<!-- Example template -->
```shell
layouts/default.html
```

An example HyperTemplates theme typically contains additional resources organized into subdirectories such as `partials/`, and `static/` but the actual directory structure is up to theme developers.

```shell
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
    js/
        main.js
```

#### Theme Configuration

A theme configuration file may optionally be provided to configure which theme assets should be included in website builds.
By default HyperTemplates themes will include files matching `css/*.css` and `js/*.js`, but this can be configured via the `published` configuration parameter.

```json
{
    "name": "HyperTexting",
    "published": [
        "css/*",
        "js/*"
    ]
}
```

_NOTE: Additional configuration parameters may be added in future releases._

<!-- Links -->
[Layouts]: /docs/reference/layouts/
---
created_at: 2025-02-10T12:00:00-08:00
title: Assets
summary: The HyperTexting CMS "assets" reference
---

# Assets reference

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview
------------

An asset is any static file included in a HyperTexting website.
There are three different types of assets in a HyperTexting website: page assets, website assets, and theme assets.

### Example
-----------

```shell
my-website/       #
  content/        #
    about/        #
      index.md    #
      favicon.ico # a page asset with path /about/favicon.ico
    index.md      #
    favicon.ico   # a page asset with path /favicon.ico
  static/         #
    favicon.ico   # a website asset with path /favicon.ico
  theme/          #
    static/       #
      favicon.ico # a theme asset with path /favicon.ico
```

In this example there are four assets with the filename `favicon.ico`:

* `my-website/content/about/favicon.ico` (path: `/about/favicon.ico`)
* `my-website/content/favicon.ico` (path: `/favicon.ico`)
* `my-website/static/favicon.ico` (path: `/favicon.ico`)
* `my-website/theme/static/favicon.ico` (path: `/favicon.ico`)

Three of them have the same path, but the source file for `/favicon.ico` is `my-website/content/favicon.ico`.


### Asset hierarchy
-------------------

The HyperTexting CMS has a tiered hierarchy for static assets:

1. page assets
1. website assets
1. theme assets

During a website build, theme assets are copied first, followed by website assets, then finally page assets.
In this way, theme developers can provide default assets which can be overwritten by website assets and/or page assets.


<!-- Links -->

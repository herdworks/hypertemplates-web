---
created_at: 2025-02-10T12:00:00-08:00
title: Attachments
summary: The HyperTexting CMS "attachments" reference
---

## Attachments reference

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview
------------

HyperTexting attachments are links and other media that may be featured on a given page.
See the `page.attachments` property for more information.

### Example
-----------

The `page.attachments` property is meant to be populated by applications that implement the HyperTexting CMS.
Such applications may provide support for "attaching" links and other media to a page.

```plaintext
---
created_at: "2025-01-03T14:40:25-08:00"
layout: post.html
attachments:
    - kind: image
      href: IMG_0792.PNG
      data:
          src: IMG_0792.PNG
          width: 1152
          height: 2048
    - kind: image
      href: IMG_0795.PNG
      data:
          src: IMG_0795.PNG
          width: 2048
          height: 1152
    - kind: image
      href: IMG_0788.PNG
      data:
          src: IMG_0788.PNG
          width: 2048
          height: 1152
    - kind: image
      href: IMG_0789.PNG
      data:
          src: IMG_0789.PNG
          width: 1152
          height: 2048
---

Checkout these promotional images for the new @vw.com ID Buzz!
```

This example shows a page with multiple image attachments.
These could be used to populate an image gallery!

```plaintext
---
created_at: 2024-11-21T12:00:00-07:00
title: Two years of thinking & tinkering
description: Herd Works has been in stealth mode for two years now. What have we been up to?
draft: true
attachments:
  - kind: link
    href: https://herd.works/blog/starting-up/
    data:
        author:
            favicon: https://herd.works/apple-touch-icon-57x57.png?v=1
            href: https://herd.works/
            name: Herd Works
            username: '@herd.works'
        opengraph:
            description: Introducing Herd Works, Inc. A Portland, Oregon-based startup building pocket-worthy productivity tools for people-people. Coming soon to an iPhone near you.
            image: https://herd.works/blog/starting-up/billion.png
            title: Starting Up, Part Deux
            type: article
            url: https://herd.works/blog/starting-up/
            video: https://herd.works/blog/starting-up/billion.mp4
        twitter:
            card: summary_large_image
            creator: '@herdworks'
            description: Introducing Herd Works, Inc. A Portland, Oregon-based startup building pocket-worthy productivity tools for people-people. Coming soon to an iPhone near you.
            image: https://herd.works/blog/starting-up/billion.png
            site: '@herdworks'
            title: Starting Up, Part Deux
---

Hello, friends! :wave:
```

This example (a blog post that never saw the light of day) shows a link attachment with some page metadata.
The [HyperTexting] app provides built-in support for fetching link metadata which can be used to show link previews in a similar fashion as [Twitter Cards].


### Properties
--------------

**`attachment.kind`**
: The attachment kind.

  The suggested attachment kinds are:

  * `link`
  * `image`
  * `video`
  * `audio`
  * `file`

**`attachment.href`**
: The attachment URL.

  Every attachment should describe a resource with a unique URL.

**`attachment.data`**
: The attachment [template data].

  Attachments may provide metadata and other content that will be accessible as template data to layouts.

  <doc-quote ht-block warning>

  **NOTE:** there is no specification for the `attachment.data` property.

  The examples shown on this page are intended to demonstrate the flexibility of HyperTexting attachments.
  HyperTemplates applications such as the official [HyperTexting] app will produce consistent attachment template data, but layout and theme developers should consult the application reference documentation for more information.

  </doc-quote>

<!-- Links -->
[template data]: /docs/reference/core/data/
[HyperTexting]: https://hypertexting.com
[Twitter Cards]: https://developer.x.com/en/docs/x-for-websites/cards/overview/abouts-cards

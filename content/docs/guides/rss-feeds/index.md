---
created_at: 2025-05-22T13:00:00-07:00
title: RSS Feeds Guide
description: How to create RSS feeds with HyperTemplates
breadcrumb: RSS Feeds
---

## RSS Feeds Guide

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Goal

In this guide, we'll learn how to add an RSS feed to a HyperTemplates website and control which pages appear in a feed.
Then we will add a page to our feed and explore different ways to add/remove individual feed pages.

### Introduction

Coming soon...

#### What are RSS feeds?

Coming soon...

### Guide

**EXERCISE 1: Add a feed**
: If you don't already have a `/blog/` page, let's create one by adding a `content/blog/index.md` file.

  <code-snippet ht-element filename='content/blog/index.md'>
  
  ```plaintext
  ---
  created_at: 2025-05-22T15:00:00-07:00
  title: My first blog
  description: Blog posts should appear on this page
  ---
  ```

  </code-snippet>

  Now let's add a [`page.feed`] property to `content/blog/index.md` and give it a title.

  <code-snippet ht-element filename='content/blog/index.md' highlight='5-6'>
  
  ```plaintext
  ---
  created_at: 2025-05-22T15:00:00-07:00
  title: My first blog
  description: Blog posts should appear on this page
  feed:
      title: My first blog
  ---
  ```

  </code-snippet>

  That's it!
  You've just created your first feed. 👏
  Now just run `hyperctl build` or `hyperctl server` and you should see a feed at `/blog/atom.xml`.

**EXERCISE 2: Add feed filters**
: You may have noticed in the first exercise that there are already pages in your shiny new feed.
  That's because we have created a feed with no filters, so it automatically includes every[^1] page in the website.

  To control which pages appear in our feed, we need to add a filter.
  HyperTemplates feeds support tag-based and path-based filtering.
  Tag-based filters are useful for pulling in specific pages from multiple sections of a website (see [`page.feed.tags`]).
  Path-based filters are great for pulling in all pages with paths matching a specific pattern (e.g. `/blog/*`).
  For most blogs, a simple path-based filter is the right tool.

  Let's add a path-based filter to our blog feed.

  <code-snippet ht-element filename='content/blog/index.md' highlight='7-8'>
  
  ```plaintext
  ---
  created_at: 2025-05-22T15:00:00-07:00
  title: My first blog
  description: Blog posts should appear on this page
  feed:
      title: My first blog
      paths:
        - ^/blog/*
  ---
  ```

  </code-snippet>

  That's it!
  Now just run `hyperctl build` or `hyperctl server` and you should only see blog posts in `/blog/atom.xml`.

  If you don't see any pages, lets create one by adding a `content/blog/hello-world/index.md` file.

  <code-snippet ht-element filename='content/blog/hello-world/index.md'>
  
  ```plaintext
  ---
  created_at: 2025-05-22T15:00:00-07:00
  title: Hello, world!
  description: My first blog post
  ---

  Hello, my name is __________. :wave:
  ```

  </code-snippet>

  Now just run `hyperctl build` or `hyperctl server` and you should see the new "Hello, world!" blog post in the `/blog/atom.xml` feed.

**EXERCISE 3: Add/remove feed pages**
: So far we've covered how to [create a feed](#exercise-1-add-a-feed), and how to control what pages are included in feeds with [feed filters](#exercise-2-add-feed-filters).
  Now let's see how we can add/remove individual pages to and from feeds.

  To remove a page from all feeds, configure the [`page.unlisted`] property.

  <code-snippet ht-element filename='content/blog/hello-world/index.md' highlight='5'>
  
  ```plaintext
  ---
  created_at: 2025-05-22T15:00:00-07:00
  title: Hello, world!
  description: My first blog post
  unlisted: true
  ---

  Hello, my name is __________. :wave:
  ```

  </code-snippet>

  To add a page to a tag-based feed, configure the [`page.tags`] property.

  <code-snippet ht-element filename='content/blog/hello-world/index.md' highlight='5-6'>
  
  ```plaintext
  ---
  created_at: 2025-05-22T15:00:00-07:00
  title: Hello, world!
  description: My first blog post
  tags:
    - blog
  ---

  Hello, my name is __________. :wave:
  ```

  </code-snippet>


### Discussion

Coming soon...

### Next steps

Coming soon...

<!-- Footnotes -->
[^1]: Technically speaking, a feed with no filters will include all pages except the feed page itself, and unlisted pages (see [`page.unlisted`](/docs/reference/cms/page/#page-unlisted)).

<!-- Links -->
[`page.feed`]: /docs/reference/cms/page/#page-feed
[`page.feed.tags`]: /docs/reference/cms/page/#page-feed
[`page.tags`]: /docs/reference/cms/page/#page-tags
[`page.unlisted`]: /docs/reference/cms/page/#page-unlisted

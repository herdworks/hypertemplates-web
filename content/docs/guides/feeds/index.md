---
created_at: 2025-05-20T15:00:00-07:00
title: Feeds & Feed Pages
description: How to create feeds and feed pages with HyperTemplates.
breadcrumb: Feeds
---

## How to create feed pages

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Goal

In this guide we will learn how to configure a feed, how to add/remove pages for specific feeds, and how to add feed contents to a layout template.

### What is a web feed?

A feed is a data format for frequently updated content.
The list of stories on your Facebook home page is called [the Feed].
When you scroll Instagram or TikTok, you are interacting with a feed.

Although feeds have been popularized by social media, the origin of the feed predates all social media platforms.
The rise of "blogging" and the growing number of interesting websites to keep up with in the mid-to-late 1990's led to the invention of a feed format that was eventually called ["RSS"].
The availability of RSS feeds led to the creation of apps like [NetNewsWire] that let users subscribe to feeds from multiple websites and display them in a manner very similar to the social media experiences we have today.
While RSS feeds are still widely used for blogs and other text-based content, the most popular use case born out of this original notion of a feed is [podcasting], which was made possible by linking to MP3 files from an RSS feed.

Fast forward to today and there are a few popular feed formats in use – [RSS], [Atom], and [JSON Feed] – each with their own distinct advantages.

### How do feeds work?

There are effectively two primary components to a web feed: feed files, and feed pages.

In theory, a web feed is a single data file containing a list of links to new content, along with some metadata including a title, description, and summary.
However, feed files are typically formatted for applications, not people (e.g. [the feed for this website](/blog/atom.xml)).
In practice, most websites also present the content of web feeds via feed pages, like a [blog] (e.g. [the blog for this website](/blog/)).

Let's see how these two components work together in the following guide.


### Guide

**STEP 1: Add a feed**
: If you don't already have a `/blog/` page, let's create one by adding a `content/blog/index.md` file.

  <code-snippet ht-block filename='content/blog/index.md'>
  
  ```plaintext
  ---
  created_at: 2025-05-22T15:00:00-07:00
  title: My first blog
  description: Blog posts should appear on this page
  ---
  ```

  </code-snippet>

  Now let's add a [`page.feed`] property to `content/blog/index.md` and give it a title.

  <code-snippet ht-block filename='content/blog/index.md' highlight='5-6'>
  
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
  Now run `hyperctl build` or `hyperctl server` and you should see a feed file at `/blog/atom.xml`.

**STEP 2: Add feed filters**
: You may have noticed in the first exercise that there are already pages in your shiny new feed.
  That's because we have created a feed with no filters, so it automatically includes _every page_[^1] in the website.

  To control which pages appear in our feed, we need to add a filter.
  HyperTemplates feeds support tag-based and path-based filtering.
  Tag-based filters are useful for pulling in specific pages from multiple sections of a website (see [`page.feed.tags`]).
  Path-based filters are great for pulling in all pages with paths matching a specific pattern (e.g. `/blog/*`).
  For most blogs, a simple path-based filter is the right tool.

  Let's add a path-based filter to our blog feed.

  <code-snippet ht-block filename='content/blog/index.md' highlight='7-8'>
  
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

  <code-snippet ht-block filename='content/blog/hello-world/index.md'>
  
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

**STEP 3: Add/remove pages**
: So far we've covered how to [create a feed](#step-1-add-a-feed), and how to control what pages are included in feeds with [feed filters](#step-2-add-feed-filters).
  Now let's see how we can add/remove individual pages to and from feeds.

  To remove a page from all feeds, configure the [`page.unlisted`] property.

  <code-snippet ht-block filename='content/blog/hello-world/index.md' highlight='5'>
  
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

  <code-snippet ht-block filename='content/blog/hello-world/index.md' highlight='5-6'>
  
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

  Alternatively, for path-based feeds such as the feed we configured in [STEP 2](#step-2-add-feed-filters), simply add a new page at a path that matches the path-based filter.
  For example, to add a page to a feed with a filter like `^/blog/*`, create a new page data file at `content/blog/hello-again/index.md`.

  That's all there is to it!
  Use path-based and tag-based filters to configure feeds.
  And use the `page.tags` & `page.unlisted` properties to configure pages.

**STEP 4: Add a feed layout**
: To add a feed page, let's create a new layout.

  Create a `layouts/blog.html` file and add the following contents:

  <code-snippet ht-block filename='layouts/blog.html' highlights='18-30' line-numbers='on'>
  
  ```html
  <!DOCTYPE html>
  <html lang='en-US'>
      <head>
          <meta ht-include='partials/head' />
  
          <!-- Layout Properties -->
          <meta name='layout:name' content='blog'/>
  
          <!-- Layout Components -->
          <script src='/js/components/relative-time.js' defer></script>
  
          <!-- Layout Styles -->
          <style id='layout'></style>
      </head>
      <body>
          <header ht-include='partials/hero'></header>
          <main>
              <feed-entry ht-template='entry:page.feed.pages;site:site'>
                  <post-meta>
                      <h2><param ht-param='entry.title' /></h2>
                      <p ht-if='entry.author,site.author'>
                          By <param ht-param='entry.author.name' default='Team HyperTemplates'>,
                          <time ht-attrs='datetime:entry.updated_at,entry.created_at'></time>
                      </p>
                  </post-meta>
                  <post-content>
                      <param ht-param='markdown:entry.summary,entry.content' />
                  </post-content>
                  <a ht-attrs='href:entry.path' ht-if='entry.path'>Continue reading...</a>
              </feed-entry>
          </main>
          <footer ht-include='partials/footer'></footer>
      </body>
  </html>
  ```
  
  </code-snippet>

  The `page.feed.pages` [template data property] is a collection of pages matching page feed filters.
  Each page in `page.feed.pages` will contain all [page properties].

  The highlighted portion of this layout uses an `ht-template` attribute to create a nested template for each page as an `entry` variable:

  ```plaintext
  ht-template='entry:page.feed.pages;site:site'
  ```

  This example also passes in `site` [template data] to the nested template so that `site.author.name` can be used as a fallback when no `entry.author.name` is available (see line 22).

**STEP 5: Add a feed page**
: Let's use our new feed layout to display the contents of our feed, making a feed page.

  Add a `page.layout` property to our feed page:

  <code-snippet ht-block filename='content/blog/index.md' highlight='3'>
  
  ```plaintext
  ---
  created_at: 2025-05-22T15:00:00-07:00
  layout: blog
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
  Now just run `hyperctl build` or `hyperctl server` and you should see feed contents at `/blog/`.

### Discussion

In this guide, we learned how feeds work in HyperTemplates.
We created a feed and learned how to customize feeds using feed filters, and how to add/remove individual pages.
We created a simple feed page layout and used it to create a feed page.

Do you have any questions and/or feedback about this guide?
Join the @hypertexting.community and visit [the "Guides" category](https://hypertexting.community/c/hypertemplates/guides) to let us know.

<!-- Footnotes -->
[^1]: Technically speaking, a feed with no filters will include all pages except the feed page itself, and unlisted pages (see [`page.unlisted`](/docs/reference/cms/page/#page-unlisted), or continue to [STEP 3](#step-3-add-remove-pages) for more information).

<!-- Links -->
[template data]: /docs/reference/core/data/
[template data property]: /docs/reference/core/data/#template-data-properties
[template data object]: /docs/reference/core/data/#template-data-object
[the Feed]: https://www.facebook.com/help/1155510281178725/
[rich history]: https://www.rssboard.org/rss-history

["RSS"]: https://en.wikipedia.org/wiki/RSS
[NetNewsWire]: https://netnewswire.com
[podcasting]: https://en.wikipedia.org/wiki/Podcast
[RSS]: https://www.rssboard.org/rss-specification
[Atom]: https://www.ietf.org/rfc/rfc4287.txt
[JSON Feed]: https://www.jsonfeed.org
[blog]: https://en.wikipedia.org/wiki/Blog

[`page.feed`]: /docs/reference/cms/page/#page-feed
[`page.feed.tags`]: /docs/reference/cms/page/#page-feed
[`page.tags`]: /docs/reference/cms/page/#page-tags
[`page.unlisted`]: /docs/reference/cms/page/#page-unlisted

[page properties]: /docs/reference/cms/page/#properties
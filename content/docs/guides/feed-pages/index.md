---
created_at: 2025-05-20T15:00:00-07:00
title: Feed Pages
description: How to create feed pages with HyperTemplates.
---

## How to create feed pages

<auto-toc selectors='h3,h4,h5,h6'></auto-toc>

### Goal

Coming soon...

### Introduction


### Guide

**EXERCISE 1: Add a feed layout**
: Something something add your first feed layout something...

  <code-snippet ht-block filename='layouts/blog.html' highlights='18-30'>
  
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
          <section id='feed'>
              <feed-entry ht-template='entry:page.feed.pages;page:page;site:site'>
                  <post-meta>
                      <h2><param ht-param='entry.title' /></h2>
                      <p ht-if='entry.author,site.author'>
                          By <param ht-param='entry.author.name' default='Team HyperTemplates'>,
                          <time ht-attrs='datetime:page.updated_at,page.created_at'></time>
                      </p>
                  </post-meta>
                  <post-content>
                      <param ht-param='markdown:entry.summary,entry.content' />
                  </post-content>
                  <a ht-attrs='href:entry.path' ht-if='entry.path'>Continue reading...</a>
              </feed-entry>
          </section>
          <section ht-include='partials/cta'></section>
          <footer ht-include='partials/footer'></footer>
      </body>
  </html>
  ```
  
  </code-snippet>
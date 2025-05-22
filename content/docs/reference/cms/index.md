---
created_at: 2025-02-06T12:00:00-08:00
title: Content Management
summary: |
    Content management reference
---

## Content management reference

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview

At a high level, HyperTemplates attempts to be unopinionated about the structure of HTML content and layouts.
The [core specification] is primarily concerned with HTML templates (layouts) and template data (content) as inputs, which are used to generate individual **web _pages_** (HTML documents) as outputs.
When it comes to building **web _sites_** (collections of HTML documents), a more opinionated approach to content management is required.

### The HyperText Management System

The content management system used by `hyperctl` is called the HyperText Management System (HTMS). 
This reference documents the HTMS building blocks, including: websites, authors, pages, assets, attachments, tags, feeds, and namespaces.
For more information on `hyperctl` itself, please visit the [CLI reference documentation]. 

**Websites**
: The HyperText Management system organizes content into websites.
  
  <learn-more ht-element href='./website/'></learn-more>

**Pages**
: A website is a collection of pages.

  <learn-more ht-element href='./page/'></learn-more>

**Assets**
: A page may contain one or more assets (e.g. images and other files).

  <learn-more ht-element href='./assets/'></learn-more>

**Attachments**
: A page may feature one or more attachments (files or links).

  <learn-more ht-element href='./attachments/'></learn-more>

**Tags**
: Websites may organize smaller collections of pages using tags.

  <learn-more ht-element href='./tags/'></learn-more>

**Feeds**
: Website updates are organized into feeds.

  <learn-more ht-element href='./feeds/'></learn-more>

**Namespaces**
: Non-page content can be managed in custom data namespaces.

  <learn-more ht-element href='./namespaces/'></learn-more>

**Content Types**
: Content templates for generating new pages.

  <learn-more ht-element href='./content-types/'></learn-more>

**Builds**
: Websites generate output in the form of builds.

  <learn-more ht-element href='./builds/'></learn-more>

<!-- Links -->
[core specification]: /docs/reference/core/
[`hyperctl`]: /docs/reference/cli/
[CLI reference documentation]: /docs/reference/cli/

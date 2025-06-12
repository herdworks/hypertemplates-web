---
created_at: 2025-02-10T12:00:00-08:00
title: Builds
summary: The HyperTexting CMS "builds" reference
---

# Builds reference

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview
------------

A build is a set of rendered HTML files and their associated stylesheets, scripts, images, and other files.

### Example
-----------

```plaintext
$ hyperctl build -c site.yaml
build "74df6813-ca02-4794-9942-06f5e247ec15" starting
website "site.yaml" load
theme "theme.json" warning: open theme.json: no such file or directory
asset "static/styles.css" discovered
data "data/nav.yaml" loading
page "content/index.md" loading
page "content/blog/hello-again/index.md" loading
page "content/about/index.md" loading
page "content/blog/hello-world/index.md" loading
page "content/blog/index.md" loading
tag "blog" loading
copying "static/styles.css" to "builds/74df6813-ca02-4794-9942-06f5e247ec15/styles.css"
writing 1615 bytes to builds/74df6813-ca02-4794-9942-06f5e247ec15/tags/blog/atom.xml
writing 3323 bytes to builds/74df6813-ca02-4794-9942-06f5e247ec15/blog/atom.xml
writing 2590 bytes to builds/74df6813-ca02-4794-9942-06f5e247ec15/about/index.html
writing 2421 bytes to builds/74df6813-ca02-4794-9942-06f5e247ec15/tags/blog/index.html
writing 2420 bytes to builds/74df6813-ca02-4794-9942-06f5e247ec15/blog/hello-world/index.html
writing 2392 bytes to builds/74df6813-ca02-4794-9942-06f5e247ec15/index.html
writing 3587 bytes to builds/74df6813-ca02-4794-9942-06f5e247ec15/blog/index.html
writing 2483 bytes to builds/74df6813-ca02-4794-9942-06f5e247ec15/blog/hello-again/index.html

Pages:         6 (15.5 KB)
Assets:        1 (649 B)
Feeds:         2 (4.8 KB)
Tags:          1
----------------
TOTAL        5ms
```

### Build inputs
----------------

Builds have three primary inputs:

1. A website configuration file path
1. A build output path
1. A list of page file paths to include in the build
1. A boolean flag indicating if an incremental build should be performed

### Build pipeline
------------------

1. Loads [website template data] and [configuration settings] from `site.yaml` or `site.json`
1. Loads [namespaced template data] from the configured `site.config.data_dir` (default: `./data`)
1. Discovers website [pages] from the configured `site.config.content_dir` (default: `./content`)
1. Discovers website draft pages from the configured `site.config.drafts_dir` (default: `./drafts`)
1. Loads build pages
1. Loads discovered website pages (this is a no-op for full-site builds)
1. Loads build page feeds
1. Loads build page tag feeds (auto-generates tag pages as needed)
1. Validates the build
1. Writes build assets to disk
1. Writes build feeds to disk (`atom.xml` files)
1. Writes pages to disk (`index.html` files)
1. Calculates build statistics

### Full-site builds
--------------------

By default, HyperTemplates performs full-site builds like a traditional static site generator.
Full site builds scan the configured `site.config.content_dir` (default: `./content`) for page index files (`index.md`, `index.markdown`, `index.yaml`, `index.yml`, or `index.json`) and provides a list of all discovered paths with the build [input parameters].

### Incremental builds
----------------------

HyperTemplates provides support for performing partial builds of a website.
A typical incremental build provides a single page path with its build [input parameters].
Incremental builds are executed within the context of the complete website, enabling HyperTemplates to determine if the page being built matches any feed filters, and if so, the corresponding feed(s) (`atom.xml` files) and feed page(s) (`index.html` files) are included in the build.
Incremental builds may also trigger new tag pages to be generated if `page.content` contains a [hashtag] (for `index.md` files only), or if `page.tags` are provided.

### Reproducible builds
-----------------------

HyperTemplates builds are [deterministic].
Given identical inputs, builds will always produce identical outputs.

<doc-quote ht-block success>

**NOTE:** Reproducible builds means that two full-site builds performed with identical inputs will be identical.
But HyperTemplates reproducible builds guarantees even extend to [incremental builds], if layered on top of a full-site build.
In other words, if a third incremental build were to be performed with no changes to the inputs, and the incremental build output is layered on top of one of the first two builds, both builds will still be identical.

</doc-quote>

**Example**

In the following example, two builds are performed and then compared using the macOS `diff` command.

```plaintext

$ ls -al builds/
total 0
drwxr-xr-x@ 2 calebhailey  wheel   64 Jun 11 16:53 .
drwxr-xr-x@ 9 calebhailey  wheel  288 Jun 11 09:55 ..

macbook $ hyperctl build -c site.yaml -i alpha
build "alpha" starting
website "site.yaml" load
theme "theme.json" warning: open theme.json: no such file or directory
asset "static/styles.css" discovered
data "data/nav.yaml" loading
page "content/index.md" loading
page "content/blog/hello-again/index.md" loading
page "content/blog/hello-world/index.md" loading
page "content/about/index.md" loading
page "content/blog/index.md" loading
tag "blog" loading
copying "static/styles.css" to "builds/alpha/styles.css"
writing 3323 bytes to builds/alpha/blog/atom.xml
writing 1615 bytes to builds/alpha/tags/blog/atom.xml
writing 2392 bytes to builds/alpha/index.html
writing 2483 bytes to builds/alpha/blog/hello-again/index.html
writing 2420 bytes to builds/alpha/blog/hello-world/index.html
writing 2421 bytes to builds/alpha/tags/blog/index.html
writing 3587 bytes to builds/alpha/blog/index.html
writing 2590 bytes to builds/alpha/about/index.html

Pages:         6 (15.5 KB)
Assets:        1 (649 B)
Feeds:         2 (4.8 KB)
Tags:          1
----------------
TOTAL        7ms

macbook $ hyperctl build -c site.yaml -i beta
build "beta" starting
website "site.yaml" load
theme "theme.json" warning: open theme.json: no such file or directory
asset "static/styles.css" discovered
data "data/nav.yaml" loading
page "content/index.md" loading
page "content/blog/hello-again/index.md" loading
page "content/blog/hello-world/index.md" loading
page "content/about/index.md" loading
page "content/blog/index.md" loading
tag "blog" loading
copying "static/styles.css" to "builds/beta/styles.css"
writing 1615 bytes to builds/beta/tags/blog/atom.xml
writing 3323 bytes to builds/beta/blog/atom.xml
writing 2420 bytes to builds/beta/blog/hello-world/index.html
writing 2421 bytes to builds/beta/tags/blog/index.html
writing 2590 bytes to builds/beta/about/index.html
writing 2392 bytes to builds/beta/index.html
writing 3587 bytes to builds/beta/blog/index.html
writing 2483 bytes to builds/beta/blog/hello-again/index.html

Pages:         6 (15.5 KB)
Assets:        1 (649 B)
Feeds:         2 (4.8 KB)
Tags:          1
----------------
TOTAL        4ms

macbook $ diff -r builds/alpha builds/beta
macbook $
```

<doc-quote ht-block info>

**NOTE:** the lack of output from the `diff -r builds/alpha builds/beta` command indicates that the builds are identical, as documented in the following excerpt from the macOS `diff` manpage: 

> The **diff** utility compares the contents of file1 and file2 and writes to the standard output the list of changes necessary to convert one file into the other.
> <mark>No output is produced if the files are identical.</mark>

</doc-quote>



<!-- Links -->
[website template data]: /docs/reference/cms/website/
[configuration settings]: /docs/reference/cms/website/#configuration
[namespaced template data]: /docs/reference/cms/namespaces/
[pages]: /docs/reference/cms/pages/
[input parameters]: #build-inputs
[full-site builds]: #full-site-builds
[hashtag]: /docs/reference/core/markdown/#hashtags
[deterministic]: https://en.wikipedia.org/wiki/Deterministic_system
[incremental builds]: #incremental-builds

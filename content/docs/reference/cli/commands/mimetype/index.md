---
created_at: 2025-05-21T13:00:00-07:00
updated_at: 2025-05-21T13:00:00-07:00
title: hyperctl mimetype
summary: |
    `hyperctl mimetype` command reference documentation.
breadcrumb: mimetype
---

## `hyperctl mimetype` command

<auto-toc selectors="h3,h4,h5,h6,dl dt"></auto-toc>

### Overview 

The `hyperctl mimetype` is used to collect [MIME type] information about files on disk.
It is provided for development and debugging purposes to inspect HyperTemplates' internal MIME type detection.

Internally, the `hyperctl mimetype` command uses the [Web Hypertext Application Technology Working Group (WHATWG)] [^1] [MIME Sniffing algorithm] to determine the content-type of the given data.

### Usage

```plaintext
$ hyperctl mimetype -h
Get file mimetype information.

Usage:
        hyperctl mimetype [options] <path>

Options:
        -h, --help  Display help information.
```

#### Example

```plaintext
$ hyperctl mimetype theme/static/favicon.png
file "theme/static/favicon.png" has "image/png" mimetype
```

### Options

**`<path>`**
: The path to the file to scan for MIME type information.

<!-- Footnotes -->
[^1]: The Web Hypertext Application Technology Working Group (WHATWG) is a web standards steering group made up of individuals from Microsft, Apple, and Google.

<!-- Links -->
[MIME type]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types
[MIME types]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types
[Web Hypertext Application Technology Working Group (WHATWG)]: https://whatwg.org/
[MIME Sniffing algorithm]: https://mimesniff.spec.whatwg.org/


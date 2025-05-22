---
created_at: 2025-03-04T14:00:00-08:00
updated_at: 2025-03-04T14:00:00-08:00
title: graph
summary: |
    `hyperctl graph` reference documentation.
---

## `hyperctl graph` command

<auto-toc selectors="h3,h4,h5,h6,dl dt"></auto-toc>

### Overview

The `hyperctl graph` command is used to scrape website metadata.
The HyperTemplates web scraper fetches [Facebook Open Graph protocol], [Twitter Card], and [OEmbed] metadata.

### Usage

```plaintext
$ hyperctl graph -h
Fetch entity and page metadata from the HyperGraph™️.

Usage:
        hyperctl graph <resource> [options] <href>

Options:
        -f, --format   Output format for HyperGraph metadata. (default: json)
            --verbose  Enable verbose mode. (default: false)
        -h, --help     Display help information.
```

#### Examples

The `hyperctl graph document` command works with YouTube, TikTok, ~~Twitter (RIP)~~ X, and wherever you get your websites.

```plaintext
$ hyperctl graph document https://www.youtube.com/watch?v=dQw4w9WgXcQ
{
        "author": {
                "favicon": "https://www.youtube.com/s/desktop/fc303b88/img/logos/favicon_144x144.png",
                "href": "https://www.youtube.com/",
                "name": "YouTube",
                "username": "@youtube.com"
        },
        "hypergraph": {
                "author": "YouTube",
                "cover": "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
                "description": "The official video for “Never Gonna Give You Up” by Rick Astley. Never: The Autobiography 📚 OUT NOW! Follow this link to get your copy and listen to Rick’s ...",
                "favicon": "https://www.youtube.com/s/desktop/fc303b88/img/logos/favicon_144x144.png",
                "href": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "title": "Rick Astley - Never Gonna Give You Up (Official Music Video) - YouTube"
        },
        "oembed": {
                "author_name": "Rick Astley",
                "author_url": "https://www.youtube.com/@RickAstleyYT",
                "height": 113,
                "href": "https://www.youtube.com/oembed?format=json\u0026url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ",
                "html": "\u003ciframe width=\"200\" height=\"113\" src=\"https://www.youtube.com/embed/dQw4w9WgXcQ?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen title=\"Rick Astley - Never Gonna Give You Up (Official Music Video)\"\u003e\u003c/iframe\u003e",
                "provider_name": "YouTube",
                "provider_url": "https://www.youtube.com/",
                "thumbnail_height": 360,
                "thumbnail_url": "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
                "thumbnail_width": 480,
                "title": "Rick Astley - Never Gonna Give You Up (Official Music Video)",
                "type": "video",
                "version": "1.0",
                "width": 200
        },
        "opengraph": {
                "description": "The official video for “Never Gonna Give You Up” by Rick Astley. Never: The Autobiography 📚 OUT NOW! Follow this link to get your copy and listen to Rick’s ...",
                "image": "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
                "image:height": "720",
                "image:width": "1280",
                "site_name": "YouTube",
                "title": "Rick Astley - Never Gonna Give You Up (Official Music Video)",
                "type": "video.other",
                "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "video:height": "720",
                "video:secure_url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                "video:tag": "never gonna give you up karaoke",
                "video:type": "text/html",
                "video:url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                "video:width": "1280"
        },
        "twitter": {
                "app:id:googleplay": "com.google.android.youtube",
                "app:id:ipad": "544007664",
                "app:id:iphone": "544007664",
                "app:name:googleplay": "YouTube",
                "app:name:ipad": "YouTube",
                "app:name:iphone": "YouTube",
                "app:url:googleplay": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "app:url:ipad": "vnd.youtube://www.youtube.com/watch?v=dQw4w9WgXcQ\u0026feature=applinks",
                "app:url:iphone": "vnd.youtube://www.youtube.com/watch?v=dQw4w9WgXcQ\u0026feature=applinks",
                "card": "player",
                "description": "The official video for “Never Gonna Give You Up” by Rick Astley. Never: The Autobiography 📚 OUT NOW! Follow this link to get your copy and listen to Rick’s ...",
                "image": "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
                "player": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                "player:height": "720",
                "player:width": "1280",
                "site": "@youtube",
                "title": "Rick Astley - Never Gonna Give You Up (Official Music Video)",
                "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
}
```

### Options

**`<resource>`**
: The first argument to `hyperctl graph` is the "type" of resource to scrape.

  The supported resources types are: `entity`, or `document`.

**`<href>`**
: The second argument to `hyperctl graph` is the URL of the resource to scrape.

**`-f`, `--format`**
: Scraper metadata format.

  The supported formats are `json` or `yaml`.

**`--verbose`**
: Standard output verbosity.

  Provide the `--verbose` flag to toggle debug output.

<!-- Links -->
[Facebook Open Graph protocol]: https://ogp.me
[Twitter Card]: https://developer.x.com/en/docs/x-for-websites/cards/overview/markup
[OEmbed]: https://oembed.com

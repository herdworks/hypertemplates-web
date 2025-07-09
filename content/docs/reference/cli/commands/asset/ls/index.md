---
created_at: 2025-06-27T11:00:00-07:00
title: hyperctl asset ls
summary: |
    `hyperctl asset ls` command reference.
breadcrumb: ls
---

## `hyperctl asset ls` command

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview
------------

List all static assets for a given website.
The `hyperctl asset ls` command reads website configuration and lists all assets in the configured theme, website, and content subdirectories.

<doc-quote ht-block new>
**NEW!** Available in `hyperctl` version 0.15.0 and later.
</doc-quote>

### Usage
---------

```plaintext
List all static assets.

Usage:
        hyperctl asset ls [options]

Options:
        -c, --config  Path to the website configuration file. (required) (env: HYPER_CONFIG)
        -h, --help    Display help information.
```

### Example
-----------

The `hyperctl asset ls` command is a helpful utility for listing assets.

It works well to troubleshoot surprising `hyperctl build` results.
For example, the current build report for the @hypertemplates.net website looks like the following: 

```plaintext
Pages:        79 (3.4 MB)
Assets:       69 (77.3 MB)
Feeds:         2 (27.9 KB)
Tags:          1
----------------
TOTAL      132ms
```

132ms is pretty fast for writing 150 files (79 index.html files + 69 assets + and 2 atom.xml files)! 
But we have observed build times for @hypertemplates.net consistently under 100ms, so let's use `hyperctl asset ls` to determine what all these 69 assets files are.

```plaintext
$ hyperctl asset ls
No  Source                                                    Size      Path
--  ------                                                    ----      ----
1   theme/static/favicon.png                                  8339      /favicon.png
2   theme/static/css/chroma-base16-snazzy.css                 4518      /css/chroma-base16-snazzy.css
3   theme/static/css/colors.css                               9651      /css/colors.css
4   theme/static/css/grid.css                                 3416      /css/grid.css
5   theme/static/css/pygments.css                             3767      /css/pygments.css
6   theme/static/css/reset.css                                1199      /css/reset.css
7   theme/static/css/styles.css                               1241      /css/styles.css
8   theme/static/css/typography.css                           5136      /css/typography.css
9   theme/static/css/variables.css                            1035      /css/variables.css
10  theme/static/css/components/code-snippet.css              1649      /css/components/code-snippet.css
11  theme/static/css/components/example-component.css         250       /css/components/example-component.css
12  theme/static/fonts/Jersey/Jersey10-Regular.ttf            76636     /fonts/Jersey/Jersey10-Regular.ttf
13  theme/static/fonts/Jersey/Jersey15-Regular.ttf            103368    /fonts/Jersey/Jersey15-Regular.ttf
14  theme/static/fonts/Jersey/Jersey20-Regular.ttf            127616    /fonts/Jersey/Jersey20-Regular.ttf
15  theme/static/fonts/Jersey/Jersey25-Regular.ttf            141388    /fonts/Jersey/Jersey25-Regular.ttf
16  theme/static/fonts/Jersey/OFL.txt                         4488      /fonts/Jersey/OFL.txt
17  theme/static/fonts/Silkscreen/OFL.txt                     4487      /fonts/Silkscreen/OFL.txt
18  theme/static/fonts/Silkscreen/Silkscreen-Bold.ttf         30384     /fonts/Silkscreen/Silkscreen-Bold.ttf
19  theme/static/fonts/Silkscreen/Silkscreen-Regular.ttf      31960     /fonts/Silkscreen/Silkscreen-Regular.ttf
20  theme/static/icons/arrow-right-sharp-solid.svg            406       /icons/arrow-right-sharp-solid.svg
21  theme/static/icons/bars.svg                               522       /icons/bars.svg
22  theme/static/icons/chevron-right-thin.svg                 398       /icons/chevron-right-thin.svg
23  theme/static/icons/cloud-arrow-down-solid.svg             684       /icons/cloud-arrow-down-solid.svg
24  theme/static/icons/github-brands.svg                      1545      /icons/github-brands.svg
25  theme/static/icons/square-up-right-solid.svg              589       /icons/square-up-right-solid.svg
26  theme/static/img/apple-touch-icon.jpg                     4467      /img/apple-touch-icon.jpg
27  theme/static/img/apple-touch-icon.png                     4467      /img/apple-touch-icon.png
28  theme/static/img/favicon-1024x1024.png                    14981     /img/favicon-1024x1024.png
29  theme/static/img/favicon-128x128.png                      3986      /img/favicon-128x128.png
30  theme/static/img/favicon-192x192.png                      4602      /img/favicon-192x192.png
31  theme/static/img/favicon-256x256.png                      5272      /img/favicon-256x256.png
32  theme/static/img/favicon-512x512.png                      8194      /img/favicon-512x512.png
33  theme/static/img/favicon-64x64.png                        3257      /img/favicon-64x64.png
34  theme/static/img/ht-logo-duo.svg                          4556      /img/ht-logo-duo.svg
35  theme/static/img/ht-logo-mono.svg                         4693      /img/ht-logo-mono.svg
36  theme/static/img/hypertemplates-logo-duo.svg              20514     /img/hypertemplates-logo-duo.svg
37  theme/static/img/hypertemplates-logo-mono.svg             20360     /img/hypertemplates-logo-mono.svg
38  theme/static/img/logo-horizontal.svg                      22401     /img/logo-horizontal.svg
39  theme/static/img/logo.svg                                 22086     /img/logo.svg
40  theme/static/js/components/auto-anchor.js                 2232      /js/components/auto-anchor.js
41  theme/static/js/components/auto-toc.js                    3893      /js/components/auto-toc.js
42  theme/static/js/components/code-highlights.js             2808      /js/components/code-highlights.js
43  theme/static/js/components/code-snippet.js                3529      /js/components/code-snippet.js
44  theme/static/js/components/contact-form.js                1509      /js/components/contact-form.js
45  theme/static/js/components/dismiss-button.js              2788      /js/components/dismiss-button.js
46  theme/static/js/components/doc-breadcrumbs.js             2531      /js/components/doc-breadcrumbs.js
47  theme/static/js/components/edit-this-page.js              4199      /js/components/edit-this-page.js
48  theme/static/js/components/example-component.js           1700      /js/components/example-component.js
49  theme/static/js/components/footer-menu.js                 1848      /js/components/footer-menu.js
50  theme/static/js/components/hyper-feed.js                  6977      /js/components/hyper-feed.js
51  theme/static/js/components/hyper-finder.js                5722      /js/components/hyper-finder.js
52  theme/static/js/components/relative-time.js               4606      /js/components/relative-time.js
53  static/favicon.ico                                        0         /favicon.ico
54  static/downloads/.DS_Store                                6148      /downloads/.DS_Store
55  static/downloads/hyperctl_0.14.2_darwin_amd64.tar.gz      10333680  /downloads/hyperctl_0.14.2_darwin_amd64.tar.gz
56  static/downloads/hyperctl_0.14.2_darwin_arm64.tar.gz      9737254   /downloads/hyperctl_0.14.2_darwin_arm64.tar.gz
57  static/downloads/hyperctl_0.14.2_darwin_universal.tar.gz  20070564  /downloads/hyperctl_0.14.2_darwin_universal.tar.gz
58  static/downloads/hyperctl_0.14.2_linux_amd64.tar.gz       10312044  /downloads/hyperctl_0.14.2_linux_amd64.tar.gz
59  static/downloads/hyperctl_0.14.2_linux_arm64.tar.gz       9547889   /downloads/hyperctl_0.14.2_linux_arm64.tar.gz
60  static/downloads/hyperctl_0.14.2_windows_amd64.tar.gz     10421709  /downloads/hyperctl_0.14.2_windows_amd64.tar.gz
61  static/downloads/hyperctl_0.14.2_windows_arm64.tar.gz     9576095   /downloads/hyperctl_0.14.2_windows_arm64.tar.gz
62  static/js/main.js                                         0         /js/main.js
63  content/blog/page.js                                      32        /blog/page.js
64  content/blog/introducing-hypertemplates/cover-dark.png    54995     /blog/introducing-hypertemplates/cover-dark.png
65  content/blog/introducing-hypertemplates/cover.png         55430     /blog/introducing-hypertemplates/cover.png
66  content/docs/example-letterhead.pdf                       29001     /docs/example-letterhead.pdf
67  content/cover-dark.png                                    54995     /cover-dark.png
68  content/cover.png                                         55430     /cover.png
69  content/page.js                                           0         /page.js
```

Aha!
Right away we can see that the downloads are significantly larger (ranging from 9547889 bytes or 9.1MB to 20070564 bytes or 19MB) than all of my other assets.
If we wanted to get a sense for build times sans these large assets, we could delete them and run the build again.

```plaintext
Pages:        79 (3.4 MB)
Assets:       62 (985.2 KB)
Feeds:         2 (27.9 KB)
Tags:          1
----------------
TOTAL       98ms
```

That's more like it. 
A 98ms build is less than 1ms per file written to disk!
We can also see that all other assets for the entire @hypertemplates.net website are less than 1MB.
We should restore the large download assets so that our builds are complete again, but this little exercise illustrates how `hyperctl asset ls` is a help utility for asset troubleshooting.

### Options
-----------

**`-c`, `--config`**
: Path to the website configuration file (`site.yaml` or `site.json`).

  Defaults to the `HYPER_CONFIG` environment variable, if set.

  To configure a default, use the `export` command.

  ```plaintext
  export HYPER_CONFIG="site.yaml"
  ```

<!-- Links -->
[`site.config.static_dir`]: /docs/reference/cms/website/#site-config
[asset hierarchy]: /docs/reference/cms/assets/#asset-hierarchy
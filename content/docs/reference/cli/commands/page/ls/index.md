---
created_at: 2025-03-04T14:00:00-08:00
updated_at: 2025-03-04T14:00:00-08:00
title: hyperctl page ls
summary: |
    `hyperctl page ls` command reference.
breadcrumb: ls
---

## `hyperctl page ls` command

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview

The `hyperctl page ls` command lists website pages.

### Usage

```plaintext
$ hyperctl page ls -h
List website pages.

Usage:
        hyperctl page ls [options] [<filter>]

Options:
        -c, --config  path to the website configuration file. (required) (env: HYPER_CONFIG) (default: site.yaml)
        -h, --help    Display help information.
```

#### Example

The `hyperctl page ls` command is a helpful utility for listing pages.

```plaintext
$ hyperctl page ls
Last Modified              Title                       Draft  Path
-------------              -----                       -----  ----
2024-11-12T10:00:00-07:00  HyperTemplates              false  /
2024-11-12T10:00:00-07:00  Template Data               false  /docs/reference/core/data/
2024-11-12T10:00:00-07:00  Documentation Search        false  /docs/search/
2024-12-10T16:00:00-08:00  Documentation               false  /docs/
2024-12-13T22:00:00-07:00  Downloads                   false  /downloads/
2024-12-16T14:00:00-07:00  Getting Started             false  /docs/tutorials/getting-started/
2025-01-24T16:00:00-08:00  Tutorials                   false  /docs/tutorials/
2025-01-26T11:00:00-08:00  Configuration               false  /docs/reference/cli/config/
2025-01-26T11:00:00-08:00  Themes                      false  /docs/reference/core/themes/
2025-01-26T11:00:00-08:00  Markdown                    false  /docs/reference/core/markdown/
2025-01-26T11:00:00-08:00  Layouts                     false  /docs/reference/core/layouts/
2025-01-30T12:00:00-08:00  Guides                      false  /docs/guides/
2025-01-30T12:00:00-08:00  Reference                   false  /docs/reference/
2025-01-30T12:00:00-08:00  Features                    false  /features/
2025-01-30T12:00:00-08:00  Attributes                  false  /docs/reference/core/attributes/
2025-01-30T12:00:00-08:00  CLI                         false  /docs/reference/cli/
2025-02-03T12:00:00-08:00  ht-include                  false  /docs/reference/core/attributes/ht-include/
2025-02-03T12:00:00-08:00  ht-element                  false  /docs/reference/core/attributes/ht-element/
2025-02-03T12:00:00-08:00  ht-attrs                    false  /docs/reference/core/attributes/ht-attrs/
2025-02-03T12:00:00-08:00  ht-content                  false  /docs/reference/core/attributes/ht-content/
2025-02-03T12:00:00-08:00  ht-template                 false  /docs/reference/core/attributes/ht-template/
2025-02-03T12:00:00-08:00  ht-not                      false  /docs/reference/core/attributes/ht-not/
2025-02-03T12:00:00-08:00  ht-if                       false  /docs/reference/core/attributes/ht-if/
2025-02-04T12:00:00-08:00  The HyperTemplates Blog     false  /blog/
2025-02-05T12:00:00-08:00  Pipeline                    false  /docs/reference/core/pipeline/
2025-02-06T12:00:00-08:00  Core                        false  /docs/reference/core/
2025-02-06T12:00:00-08:00  Libraries                   false  /docs/reference/lib/
2025-02-06T12:00:00-08:00  Content Management          false  /docs/reference/cms/
2025-02-10T12:00:00-08:00  Feeds                       false  /docs/reference/cms/feeds/
2025-02-10T12:00:00-08:00  Website                     false  /docs/reference/cms/website/
2025-02-10T12:00:00-08:00  Tags                        false  /docs/reference/cms/tags/
2025-02-10T12:00:00-08:00  Provider                    false  /docs/reference/cms/providers/
2025-02-10T12:00:00-08:00  Pages                       false  /docs/reference/cms/page/
2025-02-10T12:00:00-08:00  Namespaces                  false  /docs/reference/cms/namespaces/
2025-02-10T12:00:00-08:00  Assets                      false  /docs/reference/cms/assets/
2025-02-10T12:00:00-08:00  Attachments                 false  /docs/reference/cms/attachments/
2025-02-10T12:00:00-08:00  Authors                     false  /docs/reference/cms/authors/
2025-02-10T12:00:00-08:00  Builds                      false  /docs/reference/cms/builds/
2025-03-04T14:00:00-08:00  publish                     false  /docs/reference/cli/commands/publish/
2025-03-04T14:00:00-08:00  ls                          false  /docs/reference/cli/commands/content-type/ls/
2025-03-04T14:00:00-08:00  transform                   false  /docs/reference/cli/commands/data/transform/
2025-03-04T14:00:00-08:00  inspect                     false  /docs/reference/cli/commands/data/inspect/
2025-03-04T14:00:00-08:00  server                      false  /docs/reference/cli/commands/server/
2025-03-04T14:00:00-08:00  render                      false  /docs/reference/cli/commands/render/
2025-03-04T14:00:00-08:00  ls                          false  /docs/reference/cli/commands/data/ls/
2025-03-04T14:00:00-08:00  ls                          false  /docs/reference/cli/commands/page/ls/
2025-03-04T14:00:00-08:00  inspect                     false  /docs/reference/cli/commands/page/inspect/
2025-03-04T14:00:00-08:00  deploy                      false  /docs/reference/cli/commands/deploy/
2025-03-04T14:00:00-08:00  add                         false  /docs/reference/cli/commands/asset/add/
2025-03-04T14:00:00-08:00  generate                    false  /docs/reference/cli/commands/generate/
2025-03-04T14:00:00-08:00  asset                       false  /docs/reference/cli/commands/asset/
2025-03-04T14:00:00-08:00  new                         false  /docs/reference/cli/commands/new/
2025-03-04T14:00:00-08:00  lookup                      false  /docs/reference/cli/commands/asset/lookup/
2025-03-04T14:00:00-08:00  graph                       false  /docs/reference/cli/commands/graph/
2025-03-04T14:00:00-08:00  inspect                     false  /docs/reference/cli/commands/content-type/inspect/
2025-03-04T14:00:00-08:00  Commands                    false  /docs/reference/cli/commands/
2025-03-04T14:00:00-08:00  content-type                false  /docs/reference/cli/commands/content-type/
2025-03-04T14:00:00-08:00  build                       false  /docs/reference/cli/commands/build/
2025-04-14T12:00:00-08:00  Introducing HyperTemplates  false  /blog/introducing-hypertemplates/
2025-04-15T10:57:14-07:00  The need for speed          false  /blog/the-need-for-speed/
2025-05-19T14:00:00-08:00  Link Verification           false  /docs/guides/link-verification/
2025-05-20T15:00:00-07:00  About Herd Works            false  /about/
2025-05-20T15:00:00-07:00  Feed Pages                  false  /docs/guides/feed-pages/
2025-05-21T12:00:00-08:00  Content Types               false  /docs/reference/cms/content-types/
2025-05-21T13:00:00-07:00  mimetype                    false  /docs/reference/cli/commands/mimetype/
2025-05-21T13:00:00-07:00  page                        false  /docs/reference/cli/commands/page/
2025-05-21T13:00:00-07:00  data                        false  /docs/reference/cli/commands/data/
2025-05-21T14:00:00-08:00  page                        false  /docs/reference/cli/commands/new/page/
2025-05-21T14:00:00-08:00  website                     false  /docs/reference/cli/commands/new/website/
```

### Options

**`-c`, `--config`**
: Path to the website configuration file (`site.yaml` or `site.json`).

  Defaults to the `HYPER_CONFIG` environment variable, if set.

  To configure a default, use the `export` command.

  ```plaintext
  export HYPER_CONFIG="site.yaml"
  ```

<!-- Links -->

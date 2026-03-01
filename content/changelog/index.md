---
created_at: 2025-05-24T15:00:00-07:00
title: HyperTemplates Changelog
description: The HyperTemplates Changelog
summary: |
    Stay up-to-date with the latest HyperTemplates releases, including the `hyperctl` CLI.
---

# Changelog

## `hyperctl` v0.18.1 (2026-03-01)

* Fixed [`hyperctl theme package`](/docs/reference/cli/commands/theme/package/) now includes the `theme.json` configuration file in the generated theme archive.

## `hyperctl` v0.18.0 (2026-02-26)

* Added [`ht.*` template data namespace](/docs/reference/core/data/#template-data-sources), and `ht.version` & `ht.release_date` properties
* Added [`env.*` template data namespace](/docs/reference/core/data/#template-data-sources) (for `HT_*` environment variables)
* Added [`theme.*`](/docs/reference/core/data/#template-data-sources) template data namespace – themes can now provide default template data
* Added [`block.*`](/docs/reference/core/data/#template-data-sources) template data namespace for `ht-block` elements
* Added [`page.canonical_url`](/docs/reference/cms/page/#page-canonical_url) computed property (equivalent to `site.base_url` + `page.path`)
* Added [`ht-offset` and `ht-limit`](/docs/reference/core/attributes/ht-template/#limit-and-offset) parameters for configuring `ht-template` iterators
* Added [`hyperctl theme ls`](/docs/reference/cli/commands/theme/ls/), [`hyperctl theme install`](/docs/reference/cli/commands/theme/ls/), and [`hyperctl theme package`](/docs/reference/cli/commands/theme/ls/) commands
* Added [`theme.config.fragments_dir`](/docs/reference/core/themes/#theme-config-fragments_dir) and [`theme.config.data_dir`](/docs/reference/core/themes/#theme-config-data_dir) configuration settings
* Added HyperMark word count extension, computes a [`page.wordcount` property](/docs/reference/cms/page/#page-wordcount) for parsed Markdown documents
* Added support for `page.md`, `page.yaml`, and `page.json` [page files](/docs/reference/cms/page/#page-files)
* Added support for ["static" pages](/docs/reference/cms/page/#static-pages), created via `index.html` or `page.html` files (e.g. `content/**/index.html`)
* Added support for [`ht-attrs` _maps_](/docs/reference/core/attributes/ht-attrs/#attribute-maps), mapping template data keys to element attribute names
* Changed `site.author` → [`site.byline`](/docs/reference/cms/website/#site-byline)
* Changed `page.author` → [`page.byline`](/docs/reference/cms/page/#page-byline)
* Changed `hyperctl new` → [`hyperctl cms new`](/docs/reference/cli/commands/cms/new/)
* Changed `hyperctl asset` → [`hyperctl cms asset`](/docs/reference/cli/commands/cms/asset/)
* Changed `hyperctl content-type` → [`hyperctl cms content-type`](/docs/reference/cli/commands/cms/content-type/)
* Changed `hyperctl data` → [`hyperctl cms data`](/docs/reference/cli/commands/cms/data/)
* Changed `hyperctl page` → [`hyperctl cms page`](/docs/reference/cli/commands/cms/page/)
* Changed `hyperctl build` → [`hyperctl build complete`](/docs/reference/cli/commands/build/complete/)
* Changed `hyperctl generate` → [`hyperctl build incremental`](/docs/reference/cli/commands/build/incremental/)
* Changed `hyperctl deploy` → [`hyperctl deploy complete`](/docs/reference/cli/commands/deploy/complete/)
* Changed `hyperctl publish` → [`hyperctl deploy incremental`](/docs/reference/cli/commands/deploy/incremental/)
* Changed `hyperctl graph` → [`hyperctl dev graph`](/docs/reference/cli/commands/dev/graph/)
* Changed `hyperctl mimetype` → [`hyperctl dev mimetype`](/docs/reference/cli/commands/dev/mimetype/)
* Changed `hyperctl render` → [`hyperctl dev render`](/docs/reference/cli/commands/dev/render/)
* Changed `hyperctl server` → [`hyperctl dev server`](/docs/reference/cli/commands/dev/server/)
* Removed `data.env.*` template data in favor of [new `env.*` namespace](/docs/reference/core/data/#template-data-sources)
* Removed `data.ht.*` template data in favor of [new `ht.*` namespace](/docs/reference/core/data/#template-data-sources)
* Removed `page.author.username` (what would have become `page.byline.username`)
* Removed `page.contributors[*].username` (contributors have the same properties as a [`page.byline`](/docs/reference/cms/page/#page-byline))

---
created_at: 2025-05-24T15:00:00-07:00
title: HyperTemplates Changelog
description: The HyperTemplates Changelog
summary: |
    Stay up-to-date with the latest HyperTemplates releases, including the `hyperctl` CLI.
---

# Changelog

## `hyperctl` v0.23.0 (2026-08-04)

**NEW:** `hyperctl` version 0.23.0 with simplified set of [templating directives](/docs/reference/core/directives/), and a `hyperctl theme migrate` command to help with migrating legacy directives.

In `hyperctl` version 0.23.0 we managed to add several new features while _reducing_ the total number of template directives by 38.5% (from 13 to 8). The five (!) removed directives are all obviated by the expressivenes of the new `${ ... }` [template variables](/docs/reference/core/variables/) system introduced in v0.20.0. It's now possible to develop most websites use only five templating directives: [`ht-include`](/docs/reference/core/directives/ht-include/), [`ht-if`](/docs/reference/core/directives/ht-if), [`ht-each`](/docs/reference/core/directives/ht-each/), [`ht-apply`](/docs/reference/core/directives/ht-apply/), and [`ht-block`](/docs/reference/core/directives/ht-block/).

### CHANGES
-----------

* Added new `ht-each` directive with new and improved `ht-each='item in ${ variable }'` syntax.

  <learn-more ht-block href='/docs/reference/core/directives/ht-each/#directive-syntax'></learn-more>

* Added new `hyperctl theme migrate` command with idempotent migration of legacy directives. 

  <learn-more ht-block href='/docs/reference/cli/commands/theme/migrate/'></learn-more>

* **BREAKING:** changed the template variable function invocation syntax to use parenthetical argument lists.

  <learn-more ht-block href='/docs/reference/core/variables/#template-variable-functions'></learn-more>

* **BREAKING:** changed the CSS template variable syntax from `--ht-value(...)` to `--ht-var(...)`.

  <learn-more ht-block href='/docs/reference/core/variables/#template-variable-syntax'></learn-more>

* **BREAKING:** changed `ht-pipe` directive to pull-based `ht-pipe='from "selector"'` expressions.  

  _BONUS: `ht-pipe` directives now deduplicate piped contents!_

  <learn-more ht-block href='/docs/reference/core/directives/ht-pipe/'></learn-more>

* **BREAKING:** removed the `ht-template` in favor of the `ht-each` directive. 

  <learn-more ht-block href='/docs/reference/core/directives/ht-each/'></learn-more>

* **BREAKING:** removed the `ht-not` directive in favor of a more expressive `ht-if` directive.

  You could already express `ht-not='${ page.foo }==bar'` as `ht-if='${ page.foo } != "bar"'`, but as of v0.23.0 you can now also replace `ht-not='${ page.foo }'` with `ht-if='!${ page.foo }'` thanks to the new `!` [unary operator](/docs/reference/core/directives/ht-if/#unary-expressions).

  <learn-more ht-block href='/docs/reference/core/directives/ht-if/#directive-syntax'></learn-more>

* **BREAKING:** removed the `ht-content` directive in favor of using `ht-apply` for content templating.

  <learn-more ht-block href='/docs/reference/core/directives/ht-apply/'></learn-more>

* **BREAKING:** removed the `ht-attr` directive in favor of using `ht-apply` for attribute templating;  

  _NOTE: `ht-attrs` (plural) is still supported, but only for [attribute maps](/docs/reference/core/directives/ht-attrs/#attribute-maps)._

  <learn-more ht-block href='/docs/reference/core/directives/ht-apply/'></learn-more>

* **BREAKING:** removed the `ht-query` directive in favor of using [`ht-apply`] for URL attribute [string interpolation](/docs/reference/core/variables/#string-interpolation).

  <learn-more ht-block href='/docs/reference/core/directives/ht-apply/'></learn-more>

* **BREAKING:** removed the `ht-param` directive in favor of using [`ht-apply`] with template variables for [string interpolation](/docs/reference/core/variables/#string-interpolation).

  <learn-more ht-block href='/docs/reference/core/directives/ht-apply/'></learn-more>


## `hyperctl` v0.22.0 (2026-06-03)

**NEW:** `hyperctl` version 0.22.0 streamlines the `hyperctl build` and `hyperctl deploy` commands, adds support for build logs, and improves handling of page attachments in generated Atom feeds.

### CHANGES
-----------

* Added support for converting `hypertexting.Page` attachments to Atom entry links.
  
  Link attachments become `rel="related"` links, and image-, audio-, video-, document-, and file- attachments become `rel="enclosure"` links (see [RFC 4287](https://www.ietf.org/rfc/rfc4287.txt) section `4.2.7.2. The "rel" Attribute`).

  <learn-more ht-block href='https://www.ietf.org/rfc/rfc4287.txt'></learn-more>

* Added support for `.deploymentignore` files. 

  Builds can now include additional files in build outputs (e.g. `build.log` and `build.json`).

  <learn-more ht-block href='/docs/reference/cms/providers/#deploymentignore-files'></learn-more>

* Added new [`--data-file`](/docs/reference/cli/commands/build/#data-file) flag to `hyperctl build`, `hyperctl deploy`, and `hyperctl dev server`.
  
  Use `hyperctl build --log-file=build.json` to capture build results in build outputs.

  <learn-more ht-block href='/docs/reference/cli/commands/build/'></learn-more>

* Added new [`--log-file`](/docs/reference/cli/commands/build/#log-file) flag to `hyperctl build`, `hyperctl deploy`, and `hyperctl dev server`.
  
  Use `hyperctl build --log-file=build.log` to capture build logs in build outputs.

  <learn-more ht-block href='/docs/reference/cli/commands/build/'></learn-more>

* Combined `hyperctl build complete` and `hyperctl build incremental` into a single `hyperctl build` command. 

  <learn-more ht-block href='/docs/reference/cli/commands/build/'></learn-more>

* Combined `hyperctl deploy complete` and `hyperctl deploy incremental` into a single `hyperctl deploy` command.

  <learn-more ht-block href='/docs/reference/cli/commands/deploy/'></learn-more>

## `hyperctl` v0.21.0 (2026-05-27)

**NEW:** `hyperctl` v0.21.0 adds support for file-based secrets and drops the `git` provider `ssh_key_path` secret.

### CHANGES
-----------

* Added support for reading secrets from a new files [secret provider](/docs/reference/cms/providers/#secrets-providers).  

## `hyperctl` v0.20.0 (2026-05-12)

**NEW:** `hyperctl` v0.20.0 is a substantial release that adds support for a new [`ht-apply` directive](/docs/reference/core/directives/ht-apply/), [template variables](/docs/reference/core/variables/), [templating plugins](/docs/reference/core/plugins/) (!), [computed template data](/docs/reference/cms/namespaces/#computed-namespaces), git-based hosting [providers](/docs/reference/cms/providers/), multi-provider hosting [environments](/docs/reference/cms/website/#site-environments), and more. 

<doc-quote ht-block warning>
**BREAKING**: hyperctl v0.20.0 drops support for the `site.config.drafts_dir` – drafts are now defined by setting `draft:true` in page data files. 
This release also changes template data namespace names which are now derived from their file path.
</doc-quote>

### CHANGES
-----------

* Added a new [`ht-apply` directive](/docs/reference/core/directives/ht-apply/) to perform [variable substitution](/docs/reference/core/variables/).
  HyperTemplates now supports `${ ... }` variables, which can be used in element attributes and element text nodes.

  ```html
  <head>
    <title ht-apply>${ site.title, "Default Title" } – ${ page.title, "✱" }</title>
    <meta ht-apply name='description' content='${ page.description, "Placeholder Description" }'>
  </head>
  ```

  <learn-more ht-block href='/docs/reference/core/directives/ht-apply/'></learn-more>

* Added support for a `--ht-value( ... )` variable substitution in layout `<style>` elements.

  ```html
  <head>
    <style id='components' ht-pipe='from "style.component" as css'></style>
    <style id='layout' ht-apply>
      :root {
        --color-1: --ht-value("page.colors.primary,site.colors.primary", rgba(236, 120, 184, 1.0));
      }
    </style>
  </head>
  ```

  <learn-more ht-block href='/docs/reference/core/variables/#template-variable-syntax'></learn-more>

* Added support for extending HyperTemplates with [plugins](/docs/reference/core/plugins/), including [template variable plugins](/docs/reference/core/variables/#template-variable-plugins), and [computed namespace plugins](/docs/reference/cms/namespaces/#computed-namespace-plugins).
  A plugin is a Javascript file that exports a default function, accepts positional arguments, and has access to predefined local bindings.

  <code-snippet ht-block filename='data/tags.js'>

  ```javascript
  // tags.js generates a data.tags object of unique website tags w/ tag counts
  // example output: {"html":{"count":3,"label":"HTML"},"css":{"count":1,"label":"CSS"},"rss":{"count":4,"label":"RSS"}}
  export default function tagcloud() {
      var result = {}
      for (let page of site.pages) {
          let tags = page.tags || []
          console.log(`${ page.path } has ${ tags.length } tags`)
          for (let tag of tags) {
              let id = tag.toLowerCase();
              result[id] = (result[id] || { label: tag, count: 0 })
              result[id].count += 1
          }
      }
      return result
  };
  ```

  </code-snippet>

  <learn-more ht-block href='/docs/reference/core/plugins/'></learn-more>

* Added [builtins](/docs/reference/cms/builtins/) for providing automated templating features powered by layout [fragments](/docs/reference/core/fragments/).
  Builtins can be disabled and/or overriden by adding layout fragments to your theme.

  <learn-more ht-block href='/docs/reference/cms/builtins/'></learn-more>

* Added new [`site.providers`](/docs/reference/cms/website#site-providers) (plural) setting for configuring named providers, and HyperTemplates now supports git-based hosting services using the new `git` provider.

  ```yaml
  providers:
    cloudflare_r2:
      kind: s3
      endpoint: https://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.r2.cloudflarestorage.com
      config:
        bucket: my-website
      secrets:
        - name: access_key_id
          key: AWS_ACCESS_KEY_ID
        - name: secret_access_key
          key: AWS_SECRET_ACCESS_KEY
    github:
      kind: git
      endpoint: git@github.com:herdworks/hypertemplates-web.git
      config:
        branch: gh-pages
        publish_dir: public
      exclude:
        paths:
          - '\.tar\.gz$'
      secrets:
        - name: ssh_private_key
          key: GH_DEPLOY_KEY
  ```

  <learn-more ht-block href='/docs/reference/cms/website#site-providers'></learn-more>

* Added a new [`site.environments`](/docs/reference/cms/website#site-environments) setting for configuring named hosting environments, consisting of one or more providers:

  ```yaml
  environments:
    production: [cloudflare_r2]
    staging: [github]
  ```

  <learn-more ht-block href='/docs/reference/cms/website#site-environments'></learn-more>

* Added [`page.ugly_url`](/docs/reference/cms/page/#page-ugly_url) so pages can generate `<path>.html` pages instead of `<path>/index.html` pages.

  <learn-more ht-block href='/docs/reference/cms/page/#page-ugly_url'></learn-more>

* Added support for [CSV template data files](/docs/reference/core/data/#csv). 
  Delimited data must contain a header row, and header rows must have unique non-empty column names. 

  <learn-more ht-block href='/docs/reference/core/data/#csv'></learn-more>

* Changed `hyperctl cms data ls` to enumerate the full [build context](/docs/reference/cms/builds/#build-context) instead of just website data. 

* Changed `hyperctl cms data inspect <namespace>` to `hyperctl cms data inspect <keypath>`. 
  Accepts template data keypaths (e.g. `site.pages`, `data.social.twitter`) instead of only top-level namespaces – extremely useful for developing [computed namespaces](/docs/reference/cms/namespaces/#computed-namespaces)!

* Changed `hyperctl cms data` commands to support `--verbose` and `-v` flags.
  Computed namespace `console` output is silenced by default in `hyperctl cms data` commands. 
  Use `--verbose` to route `console` output to stderr.

* Changed all `--config` / `-c` arguments to use a default value of `site.yaml`. 

* Fixed build, deploy, and dev server commands to honor `site.config.builds_dir` when constructing build output paths.

* Fixed an infinite loop that could during builds with multiple feeds. 

* Removed `site.config.drafts_dir` setting and loading of pages from a drafts directory. 


<!-- Links -->
[Javascript template literals]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
[CSS custom function]: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions#function_basics

## `hyperctl` v0.19.0 (2026-04-21)

**NEW:** [`hyperctl`](/docs/reference/cli/) version v0.19.0 adds support for `site.pages`, `site.drafts`, and `site.assets` [template data](/docs/reference/core/data/#template-data-sources), 
and brings several improvements to [`ht-block` elements](/docs/reference/core/directives/ht-block/), including access to `page.*` template data from `ht-block` templates.

* Added `site.pages`, `site.drafts`, and `site.assets` to template data
* Added `page.*` template data to `ht-block`
* Added support for [template data array accessors](/docs/reference/core/data/#template-data-keys) (e.g. `page.attachments.1.kind`)
* Added support for `ht-block` user data
* Improved markdown detection of inline vs block-level `ht-block` elements  
  _NOTE: block-level `ht-block` elements should no longer be wrapped in `<p>` tags._
* Improved markdown detection of `<!--more-->` comments (now allows whitespace variants, e.g. `<!-- more -->`)



## `hyperctl` v0.18.2 (2026-04-12)

* Added `byline.username` field for backwards compatibility with very early versions of `hyperctl`
* Fixed a race condition in `hyperctl dev server` that would cause the server to crash intermittently
* Fixed a bug that generated broken URLs in Atom feed `<link rel='self'>` elements;
  we're not properly _joining_ "atom.xml" instead of _concatenating_ "atom.xml" to page paths

## `hyperctl` v0.18.1 (2026-03-01)

* Fixed [`hyperctl theme package`](/docs/reference/cli/commands/theme/package/) now includes the `theme.json` configuration file in the generated theme archive.

## `hyperctl` v0.18.0 (2026-02-26)

* Added [`ht.*` template data namespace](/docs/reference/core/data/#template-data-sources), and `ht.version` & `ht.release_date` properties
* Added [`env.*` template data namespace](/docs/reference/core/data/#template-data-sources) (for `HT_*` environment variables)
* Added [`theme.*`](/docs/reference/core/data/#template-data-sources) template data namespace – themes can now provide default template data
* Added [`block.*`](/docs/reference/core/data/#template-data-sources) template data namespace for `ht-block` elements
* Added [`page.canonical_url`](/docs/reference/cms/page/#page-canonical_url) computed property (equivalent to `site.base_url` + `page.path`)
* Added [`ht-offset` and `ht-limit`](/docs/reference/core/directives/ht-template/#limit-and-offset) parameters for configuring `ht-template` iterators
* Added [`hyperctl theme ls`](/docs/reference/cli/commands/theme/ls/), [`hyperctl theme install`](/docs/reference/cli/commands/theme/ls/), and [`hyperctl theme package`](/docs/reference/cli/commands/theme/ls/) commands
* Added [`theme.config.fragments_dir`](/docs/reference/core/themes/#theme-config-fragments_dir) and [`theme.config.data_dir`](/docs/reference/core/themes/#theme-config-data_dir) configuration settings
* Added HyperMark word count extension, computes a [`page.wordcount` property](/docs/reference/cms/page/#page-wordcount) for parsed Markdown documents
* Added support for `page.md`, `page.yaml`, and `page.json` [page files](/docs/reference/cms/page/#page-files)
* Added support for ["static" pages](/docs/reference/cms/page/#static-pages), created via `index.html` or `page.html` files (e.g. `content/**/index.html`)
* Added support for [`ht-attrs` _maps_](/docs/reference/core/directives/ht-attrs/#attribute-maps), mapping template data keys to element attribute names
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

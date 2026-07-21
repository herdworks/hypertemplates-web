---
created_at: 2025-03-04T14:00:00-08:00
updated_at: 2026-02-26T10:00:00-08:00
title: hyperctl deploy
summary: |
    `hyperctl deploy` reference documentation.
breadcrumb: build
---

## `hyperctl deploy` command

<auto-toc selectors="h3,h4,h5,h6,dl dt"></auto-toc>

### Overview
------------

The `hyperctl deploy` command performs a [build] and deploys the resulting build output to a [provider].

<doc-quote ht-block caution>
**NOTE:** files are only written to the provider on successful build.
</doc-quote>

### Usage
---------

```plaintext
$ hyperctl deploy -h
Deployment management tools

Usage:
	hyperctl deploy [options]

Options:
	-c, --config       Path to the website configuration file. (required) (env: HYPER_CONFIG) (default: site.yaml)
	-e, --environment  Deployment environment to use from site.environments. (env: HYPER_ENVIRONMENT)
	    --providers    Comma-separated provider names to deploy from site.providers. (env: HYPER_PROVIDERS)
	    --incremental  Switch from full-site deployment mode to incremental deployment mode. Requires --page.
	-p, --page         Path to the page index file for incremental deployments.
	    --content-dir  Relative path to the content directory to use for the build (overwrites site.config.content_dir). (env: HYPER_CONTENT_DIR)
	    --data-dir     Relative path to the data directory to use for the build (overwrites site.config.data_dir). (env: HYPER_DATA_DIR)
	    --static-dir   Relative path to the static directory to use for the build (overwrites site.config.static_dir). (env: HYPER_STATIC_DIR)
	    --theme        Relative path to theme config to use for the build (overwrites site.config.theme). (env: HYPER_THEME)
	    --data-file    Relative path to write an optional build data JSON file (e.g. build.json).
	    --log-file     Relative path to write an optional build log file (e.g. build.log).
	-h, --help         Display help information.
```

<!-- TODO: add #### Example header with example build output. -->

### Options
-----------

**`-c`, `--config`**
: Path to the website configuration file (`site.yaml` or `site.json`).

  Defaults to the `HYPER_CONFIG` environment variable, if set.

  To configure a default, use the `export` command.

  ```plaintext
  export HYPER_CONFIG="site.yaml"
  ```

**`--providers`**
: Comma-separated provider names to deploy from site.providers.

  ```plaintext
  hyperctl deploy --providers "r2, github-pages"
  ```

**`--environment`**
: Named environment to deploy to.

  ```plaintext
  hyperctl deploy --environment production
  ```

**`--incremental`**
: Perform an [incremental build].
  
  <doc-quote ht-block notice>
  **NOTE:** the `--page` argument is required for `--incremental` builds.
  </doc-quote>

  <doc-quote ht-block new>
  **NEW!** the `--log-file` flag is available in `hyperctl` version 0.22.0 and later.
  </doc-quote>  

**`-p`, `--page`**
: The path to the page data file to use for the build.

  <doc-quote ht-block notice>
  The `--page` argument is required to perform an incremental build.
  </doc-quote>

  <doc-quote ht-block new>
  **NEW!** the `--log-file` flag is available in `hyperctl` version 0.22.0 and later.
  </doc-quote>  

**`--content-dir`**
: Relative path to the content directory to use for the build (overwrites [`site.config.content_dir`]).
  Uses the `HYPER_CONTENT_DIR` environment variable as a default value, if set.

  <doc-quote ht-block new>
  **NEW!** the `--content-dir` flag is available in `hyperctl` version 0.17.0 and later.
  </doc-quote>


**`--data-dir`**
: Relative path to the data directory to use for the build (overwrites [`site.config.data_dir`]).
  Uses the `HYPER_DATA_DIR` environment variable as a default value, if set.

  <doc-quote ht-block new>
  **NEW!** the `--data-dir` flag is available in `hyperctl` version 0.17.0 and later.
  </doc-quote>

**`--static-dir`**
: Relative path to the static directory to use for the build (overwrites [`site.config.static_dir`]).
  Uses the `HYPER_STATIC_DIR` environment variable as a default value, if set.

  <doc-quote ht-block new>
  **NEW!** the `--static-dir` flag is available in `hyperctl` version 0.17.0 and later.
  </doc-quote>

**`--theme`**
: Relative path to theme config to use for the build (overwrites [`site.config.theme`]).
  Uses the `HYPER_THEME` environment variable as a default value, if set.

  <doc-quote ht-block new>
  **NEW!** the `--theme` flag is available in `hyperctl` version 0.17.0 and later.
  </doc-quote>

**`--data-file`**
: Relative path to write an optional build data JSON file (e.g. `build.json`).

  <doc-quote ht-block notice>
  **NOTE:** if `--data-file` is set, a [`.deploymentignore` file] will be generated with the data file name.
  </doc-quote>

  <doc-quote ht-block new>
  **NEW!** the `--data-file` flag is available in `hyperctl` version 0.22.0 and later.
  </doc-quote>  

**`--log-file`**
: Relative path to write an optional build log file (e.g. `build.log`).

  <doc-quote ht-block notice>
  **NOTE:** if `--log-file` is set, a [`.deploymentignore` file] will be generated with the log file name.
  </doc-quote>

  <doc-quote ht-block new>
  **NEW!** the `--log-file` flag is available in `hyperctl` version 0.22.0 and later.
  </doc-quote>  

<!-- Links -->
[build]: /docs/reference/cms/builds/
[provider]: /docs/reference/cms/providers/
[`site.config.content_dir`]: /docs/reference/cms/website/#site-config
[`site.config.data_dir`]: /docs/reference/cms/website/#site-config
[`site.config.static_dir`]: /docs/reference/cms/website/#site-config
[`site.config.theme`]: /docs/reference/cms/website/#site-config
[incremental build]: /docs/reference/cms/builds/#incremental-builds
[`.deploymentignore` file]: /docs/reference/cms/providers/#deploymentignore-file

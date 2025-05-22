---
created_at: 2025-03-04T14:00:00-08:00
updated_at: 2025-03-04T14:00:00-08:00
title: inspect
summary: |
    `hyperctl data inspect` command reference documentation
---

## `hyperctl data inspect` command

<auto-toc selectors="h3,h4,h5,h6,dl dt"></auto-toc>

### Overview

The `hyperctl data inspect` command is used to inspect website global [data namespaces].

### Usage

```plaintext
 $ hyperctl data inspect -h
Inspect global data namespace.

Usage:
        hyperctl data inspect <namespace> [options]

Options:
        -c, --config  path to the website configuration file. (required) (env: HYPER_CONFIG) (default: site.yaml)
        -h, --help    Display help information.
```

#### Example

Use the `hyperctl data ls` command to list available namespaces.

```plaintext
$ hyperctl data ls
Namespace   Size
---------   ----
newsletter  163
twitter     44
customers   925
downloads   18
nav         1455
```

Then use `hyperctl data inspect <namespace>` to see a JSON representation of the namespace [template data].

```plaintext
$ hyperctl data inspect newsletter
{"description":"Stay up to date with the lastest releases and other news from the HyperTemplates community.","namespace":"newsletter","title":"Join the community"}
```

Combine `hyperctl data inspect <namespace>` with [`jq`] for best results.

```plaintext
$ hyperctl data inspect newsletter | jq .
{
  "description": "Stay up to date with the lastest releases and other news from the HyperTemplates community.",
  "namespace": "newsletter",
  "title": "Join the community"
}
```

Using `jq` also lets you quickly inspect the contents of a template data property with a very similar dot-notation style accessor pattern.

```plaintext
$ hyperctl data inspect nav | jq .sidebar
[
  {
    "href": "/",
    "label": "Home"
  },
  {
    "href": "/features",
    "label": "Features"
  },
  {
    "href": "/blog/",
    "label": "Blog"
  },
  {
    "href": "/docs/",
    "label": "Docs"
  },
  {
    "href": "/docs/reference/cli/",
    "label": "CLI"
  }
]
```

In this example, the `hyperctl data inspect nav | jq .sidebar` command is effectively equivalent to the `data.nav.sidebar` [template data key] that is available in your layouts. 🤌🏽


### Options

**`-c`, `--config`**
: Path to the website configuration file (`site.yaml` or `site.json`).

  Defaults to the `HYPER_CONFIG` environment variable, if set.

  To configure a default, use the `export` command.

  ```plaintext
  export HYPER_CONFIG="site.yaml"
  ```

<!-- Links -->
[data namespaces]: /docs/reference/cms/namespaces/
[template data]: /docs/reference/core/data/
[template data key]: /docs/reference/core/data/#template-data-keys
[`jq`]: https://jqlang.org

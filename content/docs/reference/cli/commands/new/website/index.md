---
created_at: 2025-05-21T14:00:00-08:00
updated_at: 2025-05-21T14:00:00-08:00
title: website
summary: |
    `hyperctl new website` command reference document.
---

## `hyperctl new website` command

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview

Start a new HyperTemplates website project.

### Usage

```plaintext
$ hyperctl new website -h
Create a new website.

Usage:
        hyperctl new website [options] <path>

Options:
        -b, --baseurl      Base URL for the website. (required)
        -t, --title        Website title. (required)
        -d, --description  Website description. (required)
        -f, --favicon      Website favicon. (required) (default: /favicon.png)
        -e, --email        Contact email address.
            --format       Output format for the website configuration. (default: yaml)
        -h, --help         Display help information.
```

#### Example

```plaintext
$ hyperctl new website -b https://hypertemplates.net -t "HyperTemplates" -d "The pure-HTML templating system for the modern web." -f favicon.png hypertemplates.net.website/
website "hypertemplates.net.website/site.yaml" created
```

### Options

**`<path>`**
: The first ordered argument for the `hyperctl new website` command should be a path where the new website project will be created.

**`-b`, `--baseurl`**
: Base URL to use for the new website.

  **Example**

  ```plaintext
  --baseurl https://hypertemplates.net
  ```

**`-t`, `--title`**
: The title to use for the new website.

  See the [website `site.title` reference] for more information.

  **Example**

  ```plaintext
  --title "HyperTemplates"
  ```

**`-d`, `--description`**
: The description to use for the new website.

  See the [website `site.description` reference] for more information.

  **Example**

  ```plaintext
  --description "The pure-HTML templating system for the modern web."
  ```

**`-f`, `--favicon`**
: The path to the favicon to use for the new website.

  See the [website `site.favicon` reference] for more information.

  **Example**

  ```plaintext
  --favicon "~/Downloads/favicon.png"
  ```

**`-e`, `--email`**
: The contact email address to use for the new website.

  See the [website `site.author` reference] for more information.

  **Example**

  ```plaintext
  --email "sponsors@hypertemplates.net"
  ```

**`--format`**
: The output format to use for the website configuration file (`site.yaml` or `site.json`).

  The supported formats are: `yaml` or `json`.

  <doc-quote ht-element>

  **NOTE:** the output format also dictates the website configuration file name.
  
  Setting `--format=yaml` generates a `site.yaml` file in YAML format.
  
  Setting `--format=json` generates a `site.json` file in JSON format.

<!-- Links -->
[`site.config.static_dir`]: /docs/reference/cms/website/#site-config
[website `site.title` reference]: /docs/reference/cms/website/#site-title
[website `site.description` reference]: /docs/reference/cms/website/#site-description
[website `site.favicon` reference]: /docs/reference/cms/website/#site-favicon
[website `site.author` reference]: /docs/reference/cms/website/#site-author

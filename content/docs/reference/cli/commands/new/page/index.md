---
created_at: 2025-05-21T14:00:00-08:00
updated_at: 2025-05-21T14:00:00-08:00
title: page
summary: |
    `hyperctl new page` command reference document.
---

## `hyperctl new page` command

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview

The `hyperctl new page` command creates a new page index file in an existing website.

### Usage

```plaintext
$ hyperctl new page -h
Create a new page.

Usage:
        hyperctl new page [options]

Options:
        -c, --config        path to the website configuration file. (required) (env: HYPER_CONFIG)
        -l, --layout        New page layout.
        -s, --slug          New page slug.
        -t, --title         New page title.
        -d, --description   New page description.
            --content-type  New page content type.
            --content       New page content.
            --draft         Create a draft page. (default: false)
        -h, --help          Display help information.
```

#### Example

```plaintext
```

### Options

**`-c`, `--config`**
: Path to the website configuration file (`site.yaml` or `site.json`).

  Defaults to the `HYPER_CONFIG` environment variable, if set.

  To configure a default, use the `export` command.

  ```plaintext
  export HYPER_CONFIG="site.yaml"
  ```

**`-l`, `--layout`**
: The new page layout.

  See [`page.layout`] reference.

  **Example**

  ```plaintext
  --layout=post.html
  ```

**`-s`, `--slug`**
: The new page slug.

  Most content-types will auto-generate a page slug (see [`contenttype.slug`]), but `--slug` may be used in cases where a custom slug is preferred.

  **Example**

  ```plaintext
  --slug "hello-world"
  ```

**`-t`, `--title`**
: The new page title.

  See [`page.title`] reference.

  **Example**

  ```plaintext
  --title "Hello, world"
  ```

**`-d`, `--description`**
: The new page description.

  See [`page.description`] reference.

  **Example**

  ```plaintext
  --description "hyperctl new page command reference"
  ```

**`--content-type`**
: Name of the [content type] to use for generating the new page.

  Use the [`hyperctl content-type ls`] command to get a list of available content types for the configured website theme.

  **Example**

  ```plaintext
  --content-type "Blog Post"
  ```

**`--content`**
: The new page content.

  See [`page.content`] reference.

  **Example**

  ```plaintext
  --content "Lorem ipsum, hipsters get some."
  ```

**`--draft`**
: Create new page as a draft.

  See [`page.draft`] reference.


<!-- Links -->
[content type]: /docs/reference/cms/content-types/
[`hyperctl content-type ls`]: /docs/reference/cli/commands/content-type/ls/
[`page.layout`]: /docs/reference/cms/page/#page-layout
[`page.title`]: /docs/reference/cms/page/#page-title
[`page.description`]: /docs/reference/cms/page/#page-description
[`page.content`]: /docs/reference/cms/page/#page-content
[`page.draft`]: /docs/reference/cms/page/#page-draft

[`contenttype.slug`]: /docs/reference/cms/content-types/#contenttype-slug


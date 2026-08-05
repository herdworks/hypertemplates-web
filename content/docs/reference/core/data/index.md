---
created_at: 2024-11-12T10:00:00-07:00
updated_at: 2026-02-26T10:00:00-08:00
title: Template Data
description: Learn more about the HyperTemplates data model.
breadcrumb: Data
---

## Template Data

<auto-toc selectors='h3,h4,h5,h6,dl:not(:has(learn-more)) dt'></auto-toc>

### Overview
------------

Template data is content in key-value pairs used to hydrate a layout template.
Template data is generally managed as content files in Markdown, YAML, or JSON format.

### Example
-----------

This example shows an approximation of a [template data object](#template-data-object).

```javascript
{
    created_at: "2025-01-27T17:00:00-08:00",
    updated_at: "2025-01-27T17:00:00-08:00",
    title: "Template Data",
    description: "HyperTemplates generates template data from content files",
    author: {
        name: "Jane Doe",
        href: "https://janedoe.com",
    },
    content: "## Overview\n\nLorem ipsum, hipsters get some."
}
```

[Template directives] reference template data using "dot notation" [property accessors]. The name of the property being accessed is the [template data key](#template-data-keys), and the value of the property being accessed is the [template data value](#template-data-values).

In this sample, `title` and `author.name` are valid template data keys (property names), and their corresponding template data values (property values) are `Template Data` and `Jane Doe`.

<details><summary><strong>Example template data source files</strong></summary>

The example template data provided above could be managed via any one of the following source files in Markdown, YAML, or JSON format.
The following example content files will generate identical template data.

<code-snippet ht-block filename='index.md'>

```markdown
---
created_at: 2025-01-27T17:00:00-08:00
updated_at: 2025-01-27T17:00:00-08:00
title: Template Data
description: HyperTemplates generates template data from content files
author:
    name: Jane Doe
    href: https://janedoe.com
---

## Overview
-----------

Lorem ipsum, hipsters get some.
```

</code-snippet>

<code-snippet ht-block filename='index.yaml'>

```yaml
created_at: "2025-01-27T17:00:00-08:00"
updated_at: "2025-01-27T17:00:00-08:00"
title: Template Data
description: HyperTemplates generates template data from content files
author:
    name: Jane Doe
    href: https://janedoe.com
content: |
    ## Overview

    Lorem ipsum, hipsters get some.
```

</code-snippet>

<code-snippet ht-block filename='index.json'>

```json
{
    "created_at": "2025-01-27T17:00:00-08:00",
    "updated_at": "2025-01-27T17:00:00-08:00",
    "title": "Template Data",
    "description": "HyperTemplates generates template data from content files",
    "author": {
        "name": "Jane Doe",
        "href": "https://janedoe.com"
    },
    "content": "## Overview\n\nLorem ipsum, hipsters get some."
}
```

</code-snippet>

</details>

### Specification
-----------------

#### Template data object
-------------------------

The HyperTemplates rendering system always expects key-value data as an input to hydrate a layout with.
This key-value data input is referred to as the "template data object".
Template data objects **do not** have required fields.
The only structural requirement for template data is that template data keys must be strings.

```javascript
{
    site: {
        title: "ACME Inc.",
        favicon: "favicon.png",
    },
    page: {
        created_at: "2025-01-27T17:00:00-08:00",
        layout: "default.html",
        title: "Hello, world",
        content: "Lorem ipsum, hipsters get some.",
    },
}
```

This is an approximation of a template data object.

<doc-quote ht-block notice>

**NOTE:** Applications may combine template data from multiple sources into a single template data object before processing.
For example, the `hyperctl build` command combines data from a website configuration file with individual page content into a single template data object.
The resulting template data object maps the website configuration template data to the `site` key, and page template data to the `page` key, similar to the sample shown above.

To learn more, please visit the [HyperTemplates content management system] and/or [`hyperctl`] reference documentation.

</doc-quote>

#### Template data properties
-----------------------------

HyperTemplates [template data objects](#template-data-objects) contain key-value pairs known as "properties".
A template data property has a [key](#template-data-keys) and a [value](#template-data-values).

<code-snippet ht-block filename='' highlight='9' line-numbers='on'>

```javascript
{
    site: {
        title: "ACME Inc.",
        favicon: "favicon.png",
    },
    page: {
        created_at: "2025-01-27T17:00:00-08:00",
        layout: "default.html",
        title: "Hello, world",
        content: "Lorem ipsum, hipsters get some.",
    },
}
```

</code-snippet>

In this example, line 9 contains a template data property with the key `page.title` and the value `Hello, world`.

#### Template data keys
-----------------------

Template data keys are "dot notation" [property accessors] to properties in a [template data object](#template-data-object). The name of the property being accessed is the template data key.

```javascript
{
    site: {
        title: "ACME Inc.",
        favicon: {
            href: "favicon.png",
            sizes: "128x128",
        },
    },
    page: {
        created_at: "2025-01-27T17:00:00-08:00",
        layout: "default.html",
        title: "Hello, world",
        content: "Lorem ipsum, hipsters get some.",
    },
}
```

In this example, there are 8 template data keys: `site`, `site.title`, `site.favicon`, `site.favicon.href`, `site.favicon.sizes`, `page`, `page.created_at`, `page.layout`, `page.title`, and `page.content`.


<doc-quote ht-block notice>

**NOTE:** template data objects are _not_ vanilla [Javascript objects], so template data keys may reference properties that do not exist (what would be considered "undefined" objects in Javascript parlance) without penalty.
For example, in the sample above, the template data key `site.foo.bar` would simply result in a null value rather than an error due to `site.foo` being "undefined".

</doc-quote>

<doc-quote ht-block new>

**NEW:** `hyperctl` version 0.19.0 adds support for template data array accessors. 

_**NOTE:** array items are 1-indexed, so there is no "zero" element._

```javascript
{
    page: {
        created_at: "2025-01-27T17:00:00-08:00",
        layout: "default.html",
        title: "Introducing, HyperTexting",
        content: "Your news feed minus the ads, algorithms, and AI-generated slop.",
        attachments: [
            { 
                type: "link",
                href: "https://makehypertext.com",
            },
            { 
                type: "link",
                href: "https://hypertemplates.net",
            },
            {
                type: "link",
                href: "https://hypertexting.com",
            }
        ]
    },
}
```

Given this example template data object, the `page.attachments` objects can now be access directly:

* `page.attachments[1].href` = https://makehypertext.com
* `page.attachments[2].href` = https://hypertemplates.net
* `page.attachments[3].href` = https://hypertexting.com

</doc-quote>

#### Template data values
-------------------------

Template data values are values of properties being accessed in a [template data object](#template-data-object).

```javascript
{
    site: {
        title: "ACME Inc.",
        favicon: "favicon.png",
    },
    page: {
        created_at: "2025-01-27T17:00:00-08:00",
        layout: "default.html",
        title: "Hello, world",
        content: "Lorem ipsum, hipsters get some.",
    },
}
```

In this example, the template data value for the key `page.title` is `Hello, world`.

#### Template data formats
--------------------------

**Markdown**
: HyperTemplates supports [Markdown] template data files with [YAML frontmatter].
  The rendered Markdown contents (sans frontmatter) are parsed as the `content` property.

  **Example**

  <code-snippet ht-block filename='content/about/index.md'>

  ```plaintext
  ---
  title: HyperTemplates
  description: The pure-HTML templating system for the modern web
  ---

  Rediscover the simple joy of [making websites](https://makehypertext.com). 
  
  No Javascript frameworks required.
  ```

  </code-snippet>

  The resulting template data object will contain the following properties: 

  ```javascript
  {
    title: "HyperTemplates",
    description: "The pure-HTML templating system for the modern web",
    content: "<p>Rediscover the simple joy of <a href='https://makehypertext.com'>making websites</a>.</p>\n<p>No Javascript frameworks required.</p>"
  }
  ```

  <doc-quote ht-block warning>
  **NOTE:** markdown content in markdown is automatically converted to HTML.
  </doc-quote>

**YAML**
: HyperTemplates supports [YAML] template data files.

  **Example**

  <code-snippet ht-block filename='content/about/index.yaml'>

  ```yaml
  title: HyperTemplates
  description: The pure-HTML templating system for the modern web
  content: |
    Rediscover the simple joy of [making websites](https://makehypertext.com). 
  
    No Javascript frameworks required.
  ```

  </code-snippet>

  The resulting template data object will contain the following properties: 

  ```javascript
  {
    title: "HyperTemplates",
    description: "The pure-HTML templating system for the modern web",
    content: "Rediscover the simple joy of [making websites](https://makehypertext.com).\n\nNo Javascript frameworks required."
  }
  ```

  <doc-quote ht-block warning>
  **NOTE:** [Markdown] content in YAML files is _not_ automatically converted to HTML, but raw Markdown can be converted to HTML using the [template variable `markdown` function](/docs/reference/core/variables/#markdown-function).
  </doc-quote>

**JSON**
: HyperTemplates supports [JSON] template data files.

  **Example**

  <code-snippet ht-block filename='content/about/index.yaml'>

  ```json
  {
    "title": "HyperTemplates",
    "description": "The pure-HTML templating system for the modern web",
    "content": "Rediscover the simple joy of [making websites](https://makehypertext.com).\n\nNo Javascript frameworks required."
  }
  ```

  </code-snippet>

  The resulting template data object will contain the following properties: 

  ```javascript
  {
    title: "HyperTemplates",
    description: "The pure-HTML templating system for the modern web",
    content: "Rediscover the simple joy of [making websites](https://makehypertext.com).\n\nNo Javascript frameworks required."
  }
  ```

  <doc-quote ht-block warning>
  **NOTE:** [Markdown](/docs/reference/core/markdown/) content in JSON files is _not_ automatically converted to HTML, but raw Markdown can be converted to HTML using the [template variable `markdown` function](/docs/reference/core/variables/#markdown-function).
  </doc-quote>

**CSV**
: HyperTemplates support [CSV] template data files.

  **Example**

  <code-snippet ht-block filename='data/example.csv'>

  ```csv
  name,email,phone
  Jane Doe,jane@example.com,1-800-555-1234
  John Doe,john@example.com,1-800-555-5678
  ```

  </code-snippet>

  The resulting template data file will contain the following properties: 

  ```javascript
  {
    "rows": [
        { name: "Jane Doe", email: "jane@example.com", phone: "1-800-555-1234" },
        { name: "John Doe", email: "john@example.com", phone: "1-800-555-5678" }
    ]
  }
  ```

**OPML**
: HyperTemplates supports [OPML] template data files.

  **Example**

  <code-snippet ht-block filename='data/following.opml'>

  ```opml
  <?xml version="1.0" encoding="UTF-8"?>
  <opml version="1.0">
      <head>
          <title>Following</title>
      </head>
      <body>
          <outline text="HyperTemplates" title="HyperTemplates" htmlUrl="https://hypertemplates.net/" xmlUrl="https://hypertemplates.net/blog/atom.xml"></outline>
          <outline text="HyperTexting" title="HyperTexting" htmlUrl="https://hypertexting.com/" xmlUrl="https://hypertexting.com/atom.xml"></outline>
      </body>
  </opml>
  ```

  </code-snippet>

  The resulting template data will will contain the following properties: 

  ```javascript
  {
    head: {
        title: "Following"
    },
    body: {
        outlines: [
            {
                "text": "HyperTemplates",
                "title": "HyperTemplates",
                "htmlUrl": "https://hypertemplates.net/",
                "xmlUrl": "https://hypertemplates.net/blog/atom.xml"
            },
            {
                "text": "HyperTexting",
                "title": "HyperTexting",
                "htmlUrl": "https://hypertexting.com/",
                "xmlUrl": "https://hypertexting.com/atom.xml"
            }
        ]
    }
  }
  ```

  <doc-quote ht-block protip>
  **PROTIP:** OPML template data is a great way to add a `/following` page to your personal website!
  Just export OPML subscription lists from your RSS feed reader and/or podcast app, drop them in your [`site.config.data_dir`](/docs/reference/cms/website/#site-config-data_dir), and share your follows!
  </doc-quote>


#### Template data sources
--------------------------

At a high level, the HyperTemplates core specification is primarily concerned with HTML templates (layouts) and template data (content) as inputs, which are used to generate individual web pages (HTML documents) as outputs.
However, the HyperTemplates core templating engine doesn't actually have any built-in concept of data sources (i.e. where the template data comes from).
The closest thing to a completely unopinionated implementation of the HyperTemplates core templating engine is the [`hyperctl dev render`] command, which accepts a single data file as an input.

In most implementations multiple data sources are combined into a single template data object.
The [HyperTemplates CMS] is one such implementation, which incorporates several data sources in its [build context]: 

**ht (builtins)**
: `ht.*` prefixed template data properties provided by HyperTemplates, including `ht.version`, `ht.release_date`, and template iterator properties (see [`ht-each` template data]).

**build**
: `build.*` prefixed template data properties generated by the [`hyperctl build`] command, including `build.id` (see [builds]). 

**env**
: `env.*` prefixed template data properties sourced from `HT_` environment variables (see [environment data]). 

**site**
: `site.*` prefixed template data properties sourced from `site.yaml` or `site.json` (including [custom website properties])

**data**
: `data.*` prefixed template data properties sourced from data files in `site.data_dir` (supports YAML, JSON, and OPML formats; see [namespaces])

**theme**
: `theme.*` prefixed template data properties sourced from data files in `theme.data_dir` (supports YAML, JSON, and OPML formats; see [namespaces])

**layout**
: `layout.*` prefixed template data sourced from `<meta>` elements with `layout:` prefixed `name` attributes (see [layout data](#layout-data))

**each**
: `each.*` prefixed template data is available during template iteration (see [`ht-each` template data])

**page**
: `page.*` prefixed template data sourced from page data files (supports Markdown, YAML, and JSON formats; includes [custom page properties])

The site, page, and namespace data sources are technically outside of the scope of the core specification (i.e. this document), but we are enumerating them here for reference.

<doc-quote ht-block notice>

**NOTE:** The HyperTemplates CLI (`hyperctl`) and libraries (coming soon) have built-in support for parsing template data from files in Markdown, YAML, and JSON formats. These files may still be considered valid template data if they are "empty", however _completely_ empty JSON files (containing zero bytes) may cause JSON parsing errors in some implementations, so a JSON format template data source would be considered empty (and still valid) as long as they contain opening and closing curly braces (i.e. `{}`).

</doc-quote>

##### Environment data
----------------------

Template data properties can be provided at build time using the `HT_` prefix.
Environment template data can be nested using underscores.

```plaintext
export HT_lang="en"
export HT_version="v1"
export HT_example_foo="bar"
export HT_example_bar="baz"
```

```javascript
{
    env: {
        lang: "en",
        version: "v1",
        example: {
            foo: "bar",
            bar: "baz",
        },
    },
}
```

##### Layout data
-----------------

Additional layout-scoped data can be added to any layout or other layout fragment as `<meta>` elements with `layout:` prefixed name attributes.

<doc-quote ht-block notice>

**NOTE:** layout data `<meta>` elements are queried with an [`[attr^=value]` prefix selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors#attrvalue_4), equivalent to:

```javascript
document.querySelectorAll("meta[name^='layout:']")
```

</doc-quote>

<!-- Layout data is useful for providing fallback values for template slots in strict mode. -->

**Example:**

<code-snippet ht-block filename='' line-numbers='on'>

```html
<meta name='layout:name' content='default'>
<meta name='layout:copyright' content='Herd Works Inc'>
<meta name='layout:copyyear' content='2024'>
```

</code-snippet>

In this example three layout data properties are defined:

* A `layout.name` property, with the value of `default` (line 1)
* A `layout.copyright` property, with the value of `Herd Works Inc` (line 2)
* A `layout.copyyear` property, with the value of `2024` (line 3)


<!-- Links -->
[Javascript object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[Javascript objects]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[HyperTemplates content management system]: /docs/reference/cms/
[`hyperctl`]: /docs/reference/cli/
[Template directives]: /docs/reference/core/directives/
[property accessors]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
[`hyperctl dev render`]: /docs/reference/cli/commands/render/
[`hyperctl build`]: /docs/reference/cli/commands/build/
[HyperTemplates CMS]: /docs/reference/cms/
[build context]: /docs/reference/cms/builds/#build-context
[`ht-each` template data]: /docs/reference/core/directives/ht-each/#template-data
[custom website properties]: /docs/reference/cms/website/#custom-properties
[custom page properties]: /docs/reference/cms/page/#custom-properties
[namespaces]: /docs/reference/cms/namespaces/
[builds]: /docs/reference/cms/builds/
[build]: /docs/reference/cms/builds/
[environment data]: #environment-data
[Markdown]: /docs/reference/core/markdown/
[YAML frontmatter]: /docs/reference/core/markdown/#frontmatter
[YAML]: https://yaml.org
[JSON]: https://www.json.org/json-en.html
[CSV]: https://flatfile.com/blog/what-is-a-csv-file-guide-to-uses-and-benefits/
[OPML]: https://opml.org


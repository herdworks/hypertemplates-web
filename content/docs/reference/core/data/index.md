---
created_at: 2024-11-12T10:00:00-0700
title: Template Data
description: Learn more about the HyperTemplates data model.
---

## Template Data

* [Overview](#overview)
* [Example](#example)
* [Specification](#specification)
  * [Template data object](#template-data-object)
  * [Template data properties](#template-data-properties)
  * [Template data keys](#template-data-keys)
  * [Template data values](#template-data-values)
  * [Template data sources](#template-data-sources)
    * [Markdown](#markdown)
    * [YAML](#yaml)
    * [JSON](#json)
    * [Layout data](#layout-data)

### Overview

Template data is content in key-value pairs used to hydrate a layout template.
Template data is generally managed as content files in Markdown, YAML, or JSON format.

### Example

This example shows the an approximation of a [template data object](#template-data-object).

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

[Template attributes] reference template data using "dot notation" [property accessors]. The name of the property being accessed is the [template data key](#template-data-keys), and the value of the property being accessed is the [template data value](#template-data-values).

In this sample, `title` and `author.name` are valid template data keys (property names), and their corresponding template data values (property values) are `Template Data` and `Jane Doe`.

<details><summary><strong>Example template data source files</strong></summary>

The example template data provided above could be managed via any one of the following source files in Markdown, YAML, or JSON format.
The following example content files will generate identical template data.

<code-snippet ht-element filename='index.md'>

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

Lorem ipsum, hipsters get some.
```

</code-snippet>

<code-snippet ht-element filename='index.yaml'>

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

<code-snippet ht-element filename='index.json'>

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

#### Template data object

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

<doc-quote ht-element notice>

**NOTE:** Applications may combine template data from multiple sources into a single template data object before processing.
For example, the `hyperctl build` command combines data from a website configuration file with individual page content into a single template data object.
The resulting template data object maps the website configuration template data to the `site` key, and page template data to the `page` key, similar to the sample shown above.

To learn more, please visit the [HyperTemplates content management system] and/or [`hyperctl`] reference documentation.

</doc-quote>

#### Template data properties

HyperTemplates [template data objects](#template-data-objects) contain key-value pairs known as "properties".
A template data property has a [key](#template-data-keys) and a [value](#template-data-values).

<code-snippet ht-element filename='' highlight='9' with-line-numbers>

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

<doc-quote ht-element notice>

**NOTE:** template data objects are _not_ vanilla [Javascript objects], so template data keys may reference properties that do not exist (what would be considered "undefined" objects in Javascript parlance) without penalty.
For example, in the sample above, the template data key `site.foo.bar` would simply result in a null value rather than an error due to `site.foo` being "undefined".

</doc-quote>

#### Template data values

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

#### Template data sources

The HyperTemplates CLI and libraries have built-in support for parsing template data from files in Markdown, YAML, and JSON formats.
In some cases, multiple data sources are combined into a single template data object. 
Template data sources may still be considered valid if "empty".

##### Markdown

Coming soon...

##### YAML

Coming soon...

##### JSON

Coming soon...

##### Layout data

Additional layout-scoped data can be added to any layout or other layout fragment as `<meta>` elements.

<!-- Layout data is useful for providing fallback values for template slots in strict mode. -->

```html
<meta name='layout:name' content='default'>
<meta name='layout:copyright' content='Herd Works Inc'>
<meta name='layout:copyyear' content='2024'>
```

<doc-quote ht-element notice>

**NOTE:** _completely_ empty JSON files (containing zero bytes) may cause JSON parsing errors in some implementations, so a JSON format template data source would be considered empty (and still valid) as long as they contain opening and closing curly braces (i.e. `{}`).

</doc-quote>


<!-- Links -->
[Javascript object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[Javascript objects]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[HyperTemplates content management system]: /docs/reference/cms/
[`hyperctl`]: /docs/reference/cli/
[Template attributes]: /docs/reference/core/attributes/
[property accessors]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
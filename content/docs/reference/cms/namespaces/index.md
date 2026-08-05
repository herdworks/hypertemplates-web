---
created_at: "2025-02-10T12:00:00-08:00"
title: Namespaces
---

## Namespaces reference

<auto-toc selectors='h3,h4,h5,h6,dl:not(:has(learn-more)) dt'></auto-toc>

### Overview
------------

A namespace is a globally accessible [template data object].

Namespaces are created by adding data files to the website `data` directory (see [`site.config.data_dir`]).
Custom data namespaces are accessible to layouts via their [namespace identifier] (i.e. `data.<identifier>`).

### Examples
------------

Namespaces are a useful tool for content that we might need to access across multiple pages.
Instead of overloading our website configuration file with [custom properties](/docs/reference/cms/website/#custom-properties), we can split global website content out into discrete namespaces data files.

<code-snippet ht-block filename='data/newsletter.yaml'>

```yaml
---
title: 💬 Join the community
description: |
    Stay up-to-date with the latest releases and other news from Team HyperTemplates. 
    Ask the developers questions, get help from the community, and share your creations! 🎨
form:
    action: https://hypertexting.community/signup
```

</code-snippet>

In this example we have created a `newsletter` namespace that is accessible from layouts as the `data.newsletter` property, with `data.newsletter.title`, `data.newsletter.description`, and `data.newsletter.form.action` properties.

### Specification
-----------------

#### Namespace data files
-------------------------

A namespace is created by adding data files to the [`site.config.data_dir`] directory.

The supported data file formats and extensions are: 

* YAML (`.yaml`, `.yml`)
* JSON (`.json`)
* OPML (`.opml`) 
* CSV (`.csv`)
* Javascript (`.js`)

Files with unsupported file extensions are ignored.

<doc-quote ht-block new>
**NEW:** support for Javascript namespace data files is available in `hyperctl` version 0.20.0 and newer.
See [computed namespaces](#computed-namespaces) for more information.
</doc-quote>


#### Namespace identifiers
--------------------------

The namespace identifier is the [template data key] used to access namespace data.

A data file's namespace identifier is derived from its pathname under the [`site.config.data_dir`], sans file extension. 
Each path segment becomes a keypath segment, so subdirectories can be used to nest namespaces.
Namespace data file path segments can use letters, digits, and underscores (`^[A-Za-z0-9_]+$`).
Segments with whitespace or any other illegal character will result in build errors.

**Examples**

* `<data_dir>/newsletter.yaml` (accessible via `data.newsletter`)
* `<data_dir>/social/twitter.yaml` (accessible via `data.social.twitter`)


<doc-quote ht-block caution>

**Namespace identifier collisions**

Namespace identifier collisions will result in build errors. 

```plaintext
data: namespace "newsletter" claimed by both "newsletter.json" and "newsletter.yaml"
```

There are two ways to create namespace collisions:

**Data file extension collision**
: Sibling files with matching identifiers and different extensions.

  **Example**
  
  ```plaintext
  <data_dir>/newsletter.yaml
  <data_dir>/newsletter.json
  ```

**Data file directory collision** 
: A sibling file and directory with matching identifiers.
  
  **Example**
  
  ```plaintext
  <data_dir>/social.yaml
  <data_dir>/social/
  ```

</doc-quote>

<doc-quote ht-block danger>
**WARNING:** path-based namespace identifiers are required in `hyperctl` version 0.20.0 and newer. 
Earlier versions of `hyperctl` derived namespace identifiers from data file _contents_ (e.g. a `namespace:` property), regardless of namespace data file paths. 
Users who upgrade to `hyperctl` v0.20.0 from earlier versions may need to reorganize namespace data files and/or update layout templates to work with path-based namespace identifiers.
</doc-quote>

#### Nested Namespaces
----------------------

Namespaces can be nested by organizing [namespace data files](#namespace-data-files) into subdirectories of the `site.config.data_dir` directory.
See [namespace identifiers](#namespace-identifiers) for more information.

<doc-quote ht-block new>
**NEW:** nested namespaces are supported in `hyperctl` version 0.20.0 and newer.
</doc-quote>

#### Computed Namespaces
------------------------

Computed namespaces provide support for _generated template data_ using [plugins](#computed-namespace-plugins).
Computed namespaces are processed _after_ static namespace data files are loaded, so they have access to the full [build context], including: `ht.*`, `build.*`, `env.*`, `data.*`, `theme.*`, and `site.*` template data (including the full `site.pages` sitemap).


##### Computed Namespace Plugins
--------------------------------

Computed namespaces are created using HyperTemplates [plugins]. 
To create a computed namespace plugin, add a Javascript file to your `site.config.data_dir` or `theme.config.data_dir` directory.

**Example**

Let's say we want to add a tag cloud to a website. 
We can use a computed namespace to generate template data at `data.tags` that we can then render with layout templates.

<code-snippet ht-block filename='data/tags.js'>

```javascript
const logger = console.logger("tags.js");
export default function tagcloud() {
    var result = {}
    for (let page of site.pages) {
        let tags = page.tags || []
        logger.log(`${ page.path } has ${ tags.length } tags`)
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

Use the `hyperctl cms data inspect` command to view the generated template data: 

```plaintext
$ hyperctl cms data inspect data.tags | jq .
{
  "html": {
    "count": 3,
    "label": "HTML"
  },
  "htmx": {
    "count": 1,
    "label": "htmx"
  },
  "hypermedia": {
    "count": 1,
    "label": "HyperMedia"
  },
  "javascript": {
    "count": 1,
    "label": "javascript"
  },
  "markdown": {
    "count": 1,
    "label": "markdown"
  },
  "nowreading": {
    "count": 1,
    "label": "NowReading"
  },
  "rss": {
    "count": 4,
    "label": "RSS"
  },
  "wwdc": {
    "count": 1,
    "label": "WWDC"
  }
}
```

<doc-quote ht-block new>
**NEW:** computed namespaces are supported in `hyperctl` version 0.20.0 and newer.
</doc-quote>
  
<!-- Links -->
[`site.config.data_dir`]: /docs/reference/cms/website/#site-config-data_dir
[build context]: /docs/reference/cms/builds/#build-context
[data files]: /docs/reference/core/data/#template-data-file
[namespace data file]: #namespace-data-files
[namespace data files]: #namespace-data-files
[namespace identifier]: #namespace-identifier
[namespace identifiers]: #namespace-identifier
[plugins]: /docs/reference/core/plugins/
[template data key]: /docs/reference/core/data/#template-data-keys
[template data object]: /docs/reference/core/data/#template-data-object

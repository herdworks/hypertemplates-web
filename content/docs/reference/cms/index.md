---
created_at: 2025-02-06T12:00:00-08:00
title: Content Management
summary: |
    Content management reference
---

## Content management reference

* [Overview](#overview)
* [Example](#example)
* [Specification](#specification)
  * [Website](#website)
  * [Pages](#pages)
  * [Tags](#tags)
  * [Feeds](#feeds)
  * [Namespace data](#namespace-data)
  * [Builds](#builds)

### Overview

At its core, the HyperTemplates rendering engine attempts to be as unopinionated as possible in terms of both template data and layouts.
The underlying HyperTemplates engine (`libhypertemplates`) has no concept of required fields, but the [static site generator] does.

### Example

### Specification

#### Website

#### Pages

#### Tags

#### Feeds

#### Namespaced data

Additional globally-accessible data namespaces can be added as files in the `/data` directory.
Custom data namespaces are accessible via their namespace identifier (i.e. `data.<identifier>`).
Namespaces are identified as follows: using the top-level "namespace" property (if set), using the name of the top-level property (if only one top-level property is set), or as "default".
Duplicate namespace identifiers will result in data loss (overwritten data).

<!-- Example data snippet -->
```json
{
    "subscribe": {
        "...": "..."
    }
}
```

```json
{
    "namespace": "cta",
    "...": "..."
}
```
---
created_at: "2025-02-10T12:00:00-08:00"
title: Namespaces
---

## Namespaces reference



### Overview

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
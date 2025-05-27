---
created_at: 2025-02-10T12:00:00-08:00
title: Provider
summary: The HyperText Management System "provider" reference
---

# Provider reference

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview

A provider is a local or remote website hosting destination.

### Example

Providers are configured on a per-website basis in the website configuration file (`site.yaml` or `site.json`).

<code-snippet ht-block filename='site.yaml' highlight='6-16'>

```yaml
---
base_url: https://hypertemplates.net
title: HyperTemplates
description: the pure-HTML templating system for the modern web.
...: ... # other website settings
provider:
    kind: s3
    endpoint: https://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.r2.cloudflarestorage.com
    store: hypertemplates-production
    secrets:
        - name: access_key_id
          provider: env
          key: AWS_ACCESS_KEY_ID
        - name: secret_access_key
          provider: env
          key: AWS_SECRET_ACCESS_KEY
```

</code-snippet>

### Reference

**`provider.kind`**
: The provider type.

  See [supported providers](#supported-providers) for more information.

**`provider.endpoint`**
: The provider endpoint.

  Some providers offer default values for `provider.endpoint`.

  See [supported providers](#supported-providers) for more information.

**`provider.store`**
: The provider store.

  The concept of a "store" varies by provider:

  * **`s3`**: uses `provider.store` as the bucket name.
  * **`git`**: uses `provider.store` as the branch name.
  * **`ssh`**: uses `provider.store` as the path name.

  Some providers offer default values for `provider.store`.

  See [supported providers](#supported-providers) for more information.

**`provider.secrets`**
: The provider secret(s).

  The concept of a provider "secret" varies by provider:

  * **`s3`**: uses `provider.secrets` as API credentials.
  * **`git`**: uses `provider.secrets` as ssh key paths or API credentials.
  * **`ssh`**: uses `provider.secrets` as ssh key paths.

### Supported providers

#### `s3` provider

The `s3` provider supports website deployment to AWS S3 and S3-compatible providers.

**Compatible hosting services**

* [Cloudflare R2] (recommended)
* [Amazon Web Services S3]
* [Microsoft Azure Blob Storage]
* [Google Cloud Storage]
* [Fastly Object Storage]
* [Digital Ocean Spaces]
* [Minio]
* [Akamai Object Storage]
* [Oracle Object Storage]

#### `git` provider

Coming soon...

#### `ssh` provider

Coming soon...

<!-- Links -->
[Cloudflare R2]: https://www.cloudflare.com/developer-platform/products/r2/
[Amazon Web Services S3]: https://aws.amazon.com/s3/
[Microsoft Azure Blob Storage]: https://azure.microsoft.com/en-us/products/storage/blobs
[Google Cloud Storage]: https://cloud.google.com/storage
[Fastly Object Storage]: https://www.fastly.com/products/storage
[Digital Ocean Spaces]: https://www.digitalocean.com/products/spaces
[Minio]: https://min.io
[Akamai Object Storage]: https://www.linode.com/products/object-storage/
[Oracle Object Storage]: https://www.oracle.com/cloud/storage/object-storage/

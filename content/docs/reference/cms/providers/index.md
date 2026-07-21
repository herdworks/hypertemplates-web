---
created_at: 2025-02-10T12:00:00-08:00
title: Hosting Providers
summary: The HyperTexting CMS "provider" reference
---

# Provider reference

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview
------------

A provider is a local or remote website hosting service.
HyperTemplates currently provides a built-in [`git` provider] and [`s3` provider] for deploying HyperTemplates websites to dozens of hosting services.

### Example
-----------

Providers are configured on a per-website basis in the [website configuration] file (`site.yaml` or `site.json`).

<code-snippet ht-block filename='site.yaml' highlight='6-16'>

```yaml
---
base_url: https://hypertemplates.net
title: HyperTemplates
description: the pure-HTML templating system for the modern web.
...: ... # other website settings
providers:
  cloudflare-r2:
    kind: s3
    endpoint: https://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.r2.cloudflarestorage.com
    config:
      bucket: hypertemplates-production
    secrets:
      - name: access_key_id
        key: AWS_ACCESS_KEY_ID
      - name: secret_access_key
        key: AWS_SECRET_ACCESS_KEY
```

</code-snippet>

### Reference

**`provider.kind`**
: The provider type.

  See [hosting providers](#hosting-providers) for more information.

**`provider.endpoint`**
: The provider endpoint.

  See [hosting providers](#hosting-providers) for more information.

**`provider.include`**
: Provider inclusive filtering based on path and/or MIME type. Supports regular expressions.

  **Fields:**

  * `provider.include.paths`: an array of strings (supports regular expressions)
  * `provider.include.types`: an array of strings (supports regular expressions)

  **Example:**

  ```yaml
  providers:
    github-pages:
      kind: git
      config: {}
      secrets: []
    example-cdn:
      kind: s3
      config: {}
      include:
        paths: []
        types:
          - ^image/
          - ^video/
          - ^audio/
      secrets: []
  ```

  

**`provider.exclude`**
: Provider inclusive filtering based on path and/or MIME type. Supports regular expressions.

  **Fields:**

  * `provider.exclude.paths`: an array of strings (supports regular expressions)
  * `provider.exclude.types`: an array of strings (supports regular expressions)

  **Example:**

  ```yaml
  providers:
    github-pages:
      kind: git
      config: {}
      exclude:
        paths: []
        types: ["^image/", "^video/", "^audio/"]
      secrets: []
    example-cdn:
      kind: s3
      config: {}
      secrets: []
  ```

**`provider.config`**
: Provider-specific configuration settings.

  See [hosting providers](#hosting-providers) for supported `config` settings: 

  * [git `config`](#git-config)
  * [s3 `config`](#s3-config)

**`provider.secrets`**
: The provider secret(s).

  See [secrets providers](#secrets-providers) for more information on how HyperTexting clients read secrets.

  See [hosting providers](#hosting-providers) for supported `secrets` names: 

  * [git `secrets`](#git-secrets)
  * [s3 `secrets`](#s3-secrets)

### Hosting providers

#### `git` provider

**git `config`**
: The git provider supports the following configuration parameters:

  * `branch`: the branch name to use (required)
  * `publish_dir`: the subdirectory (if any) to write to (default: `.`)
  * `known_hosts`: SSH `known_hosts` entries used to verify the Git remote host identity.
  * `author_name`: optional author name (default: `hyperproviders`)
  * `author_email`: optional author email (default: `hyperproviders@localhost`)
  * `tag_enabled`: if enabled, tags deployed commit as `<tag_prefix><build_id>` (default: `false`)
  * `tag_prefix`: optional tag prefix (default: `"build-"`)
  * `tag_retain_last`: keep only the N most recent matching tags; older ones are pruned locally and on the remote (default: `0`, no pruning)

  **Example:**

  ```yaml
  providers:
    github_pages:
      kind: git
      endpoint: git@github.com:OWNER/REPO.git
      config:
        branch: gh-pages
        known_hosts: |
          github.com ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOMqqnkVzrm0SdG6UOoqKLsabgH5C9okWi0dh2l9GKJl
          github.com ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBEmKSENjQEezOmxkZMy7opKgwFB9nkt5YRrYMjNuG5N87uRgg6CLrbo5wAdT/y6v0mKV0U2w0WZ2YB/++Tpockg=
          github.com ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCj7ndNxQowgcQnjshcLrqPEiiphnt+VTTvDP6mHBL9j1aNUkY4Ue1gvGC7uEnztnZyaVWQ7B381AK4Qdrwt51ZqExKbQpTUNn+EjqoTwvqNj4kqx5QUCI0ThS/YkOxJCXmPUWZbhjpCg56i+2aB6CmK2JGhn57K5mj0MNdBXA4/WnwH6XoPWJzK5Nyu2zB3nAZp+S5hpQs+p1vN1/wsjk=
      secrets:
        - name: ssh_private_key
          key: ${HOME}/.ssh/id_ed25519
  ```

  <doc-quote ht-block caution>
  **NOTE:** `publish_dir` must be a relative path and cannot escape the repository root or target `.git`.
  </doc-quote>

  <doc-quote ht-block danger>
  **NOTE:** if `known_hosts` is not configured, SSH connections are made with host key verification disabled.
  </doc-quote>

**git `secrets`**
: The git provider supports the following secrets for authentication:

  * `token`: the authorization token for HTTP/HTTPS endpoints
  * `ssh_private_key`: the SSH key
  * `ssh_passphrase`: SSH key passphrase

  **Example**

  ```yaml
  providers:
    default:
      kind: git
      endpoint: git@github.com/herdworks/hypertemplates-web.git
      config:
        branch: gh-pages

      secrets:
        - name: ssh_private_key
          key: ${HOME}/.ssh/gh_pages
  ```

  <doc-quote ht-block caution>
  HTTP/HTTPS git endpoints must provide a `token` secret (e.g. GitHub Personal Access Token or Deploy Token), and SSH git endpoints must provide an `ssh_private_key` secret.
  </doc-quote>

**git hosting services**
: The `git` provider works with the following hosting services:

  * [Cloudflare Pages] (recommended)
  * [Netlify]
  * [Vercel]
  * [Render]
  * [Fly.io]
  * [Railway]
  * [GitHub Pages]
  * [GitLab Pages]
  * [Codeberg Pages]
  * [DigitalOcean App Platform]
  * [AWS Amplify Hosting]
  * [Azure Static Web Apps]
  * Self-hosted with _any_ physical or virtual server that builds and serves a site from a git branch. 
  * ...and more!

  <doc-quote ht-block new>
  The HyperTexting git provider works with any service that builds and serves a site from a git branch — including a plain SSH server with `git` installed and a [`post-receive` hook](https://git-scm.com/docs/githooks#post-receive) deploying to a web server like [nginx](https://nginx.org), [Caddy](https://caddyserver.com), or [Apache](https://httpd.apache.org).
  </doc-quote>

#### `s3` provider

**s3 `config`**
: The s3 provider supports the following configuration parameters:

  - `addressing_style`: `path` or `virtual` (default: `path`)
  - `bucket`: the target bucket name (required)
  - `region`: the bucket region (default: `auto`)
  - `cache_control`: optional `Cache-Control` header value applied to every uploaded object
  - `conditional_mode`: if set to `etag`, objects whose remote ETag matches the local MD5 are skipped (default: not set / always upload)
  - `workers`: maximum concurrent uploads (default: `10`, must be ≥ 1)

**s3 `secrets`**
: The s3 provider requires the following secrets for authentication:

  - `access_key_id`: the access key ID (required)
  - `secret_access_key`: the secret access key (required)

  <doc-quote ht-block caution>
  **NOTE:** `region: auto` only works for endpoints that don't care (e.g. Cloudflare R2); set `region` explicitly for hosting providers that require a region (e.g. Amazon S3).
  </doc-quote>

**s3 hosting services**
: The s3 provider works with the following hosting services: 


  * [Cloudflare R2] (recommended)
  * [Amazon S3]
  * [Google Cloud Storage] (via S3 Interoperability mode)
  * [Fastly Object Storage]
  * [DigitalOcean Spaces]
  * [Linode Object Storage]
  * [Hetzner Object Storage]
  * [Backblaze B2]
  * Self-hosted S3 buckets with [MinIO], [Ceph], [SeaweedFS], [Garage]
  * ...and more!

  <doc-quote ht-block new>
  The HyperTexting s3 provider is built on the ([AWS SDK for Go v2](https://github.com/aws/aws-sdk-go-v2/tree/main/service/s3)) and should work with _any_ S3-compatible object store.
  </doc-quote>

#### `ssh` provider

A dedicated `ssh` provider is coming soon, but in the interim the [`git` provider] already supports deploying to ssh-based git endpoints, complete with SSH key authentication.

#### `.deploymentignore` files

All hosting provider implementations support `.deploymentignore` files for excluding files from deployments.

`.deploymentignore` uses `.gitignore`-style patterns, with one pattern per line. 
Blank lines and lines starting with `#` are ignored. 

**Example**

<code-snippet ht-block filename='.deploymentignore'>

```plaintext
build.log
build.json
```

</code-snippet>

<doc-quote ht-block notice>
**NOTE:** the `hyperctl build` and `hyperctl deploy` commands auto-generate `.deploymentignore` files whenever the `--log-file` and/or `--date-file` flags are set.
</doc-quote>

### Secrets providers

HyperTexting secrets providers are key-value stores that return sensitive values needed for access to one or more [hosting providers](#hosting-providers).
The HyperTexting secrets manager currently supports the following key-value stores:

* Environment variables (e.g. `$AWS_ACCESS_KEY_ID`)
* Files (e.g. `path/to/local/key` or `${HOME}/.ssh/example`)
* Runtime secrets

<doc-quote ht-block protip>

**NOTE:** the "runtime" secrets provider enables client applications to handle secret retrieval directly instead of relying on the underlying HyperTexting libraries, while ensuring sensitive values are never persisted to disk or printed in HyperTexting log outputs. 
Clients such as the official [HyperTexting] iOS app use the runtime provider to take advantage of platform-native secrets APIs such as [iCloud Keychain].

</doc-quote>

#### Secret key variable expansion

Secret keys support variable expansion of `~/`, `$HOME/`, and `${HOME}/`, which are replaced with the absolute path to the current user's home directory. 

#### Resolving secrets

HyperTexting clients such as the official CLI ([`hyperctl`]) and [HyperTexting] app resolve secrets by looking up the provided `secret.key` value using one or more secrets providers.
For example, because the `hyperctl` CLI supports the environment variable _and_ files providers, it will first check for an environment variable matching the provided secret `key`, and if no match is found, it will attempt to read a file at the provided secret key.

**Example:**

In the following example, `hyperctl` will skip checking if an environment variable named `${HOME}/.ssh/example` exists (because `/` is an illegal character for environment variable names), and proceed to check if a file exists at that path.

<code-snippet ht-block filename='site.yaml' highlight='10'>

```yaml
providers:
  default:
    kind: git
    endpoint: git@github.com:herdworks/hypertemplates-web.git
    config:
      branch: gh-pages
      publish_dir: public/
    secrets:
      - name: ssh_private_key
        key: ${HOME}/.ssh/example
```

</code-snippet>

while the official [HyperTexting] app supports the runtime provider (i.e. the iOS app provides secrets at runtime)

<!-- Links -->
[`git` provider]: #git-provider
[`hyperctl`]: /docs/reference/cli/
[`s3` provider]: #s3-provider
[Amazon S3]: https://aws.amazon.com/s3/
[AWS Amplify Hosting]: https://aws.amazon.com/amplify/hosting/
[Azure Static Web Apps]: https://azure.microsoft.com/en-us/products/app-service/static
[Backblaze B2]: https://www.backblaze.com/cloud-storage-v2
[Ceph]: https://ubuntu.com/ceph/
[Cloudflare Pages]: https://pages.cloudflare.com
[Cloudflare R2]: https://www.cloudflare.com/developer-platform/products/r2/
[Codeberg Pages]: https://codeberg.page
[DigitalOcean App Platform]: https://www.digitalocean.com/products/app-platform
[DigitalOcean Spaces]: https://www.digitalocean.com/products/spaces
[Fastly Object Storage]: https://www.fastly.com/products/storage
[Fly.io]: https://fly.io
[Forgejo]: https://forgejo.org
[Garage]: https://garagehq.deuxfleurs.fr
[Gitea]: https://about.gitea.com
[GitHub Pages]: https://pages.github.com
[GitLab CE]: https://about.gitlab.com/install/
[GitLab Pages]: https://docs.gitlab.com/user/project/pages/
[Google Cloud Storage]: https://cloud.google.com/storage
[Hetzner Object Storage]: https://www.hetzner.com/storage/object-storage/
[HyperTexting]: https://hypertexting.com
[iCloud Keychain]: https://support.apple.com/guide/iphone/passwords-devices-iph82d6721b2/ios
[Linode Object Storage]: https://www.linode.com/products/object-storage/
[Microsoft Azure Blob Storage]: https://azure.microsoft.com/en-us/products/storage/blobs
[Minio]: https://min.io
[Netlify]: https://www.netlify.com
[Oracle Object Storage]: https://www.oracle.com/cloud/storage/object-storage/
[Railway]: https://railway.app
[Render]: https://render.com
[SeaweedFS]: https://seaweedfs.com
[Vercel]: https://vercel.com
[website configuration]: /docs/reference/cms/website/
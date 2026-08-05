---
created_at: 2026-08-04T12:00:00-07:00
updated_at: 2026-08-04T12:00:00-07:00
title: hyperctl theme migrate
summary: |
    `hyperctl theme migrate` command reference documentation.
breadcrumb: migrate
---

## `hyperctl theme migrate` command

<auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>

### Overview
------------

The `hyperctl theme migrate` command updates a theme from legacy HyperTemplates
directive syntax to the current directive syntax. It applies safe, idempotent
conversions and reports declarations that need manual review.

Pass the path to a theme's `theme.json` file. The command discovers the theme's
configured template resources from that file.

### Usage
---------

```plaintext
$ hyperctl theme migrate -h
Migrate a theme to current directive syntax.

Usage:
        hyperctl theme migrate --theme theme.json [options]

Options:
        -t, --theme        Path to the theme configuration file. (required)
            --output       Write a complete migrated theme to an empty output directory.
            --interactive  Review each migration decision interactively.
        -h, --help         Display help information.
```

### Examples
------------

#### Review a theme interactively

Use `--interactive` to review each migration decision before it is applied:

```plaintext
$ hyperctl theme migrate --theme themes/custom/theme.json --interactive
```

#### Write a migrated copy

Use `--output` to preserve the source theme and write a complete migrated copy.
The output directory must not already contain files.

```plaintext
$ hyperctl theme migrate --theme themes/custom/theme.json --output migrated-theme/
```

### What the command migrates
-----------------------------

The command automatically migrates supported uses of legacy `ht-not`,
`ht-template`, `ht-attr`, `ht-param`, `ht-content`, and `ht-query` directives.
For example, supported `ht-content` and `ht-param` declarations become
`ht-apply` template-variable output, while `ht-template` declarations become
`ht-each` declarations.

Some declarations cannot be converted safely. The command leaves these source
files unchanged and reports their locations for manual migration. In particular,
legacy source-side `ht-pipe` declarations must be converted by choosing a
destination and source selector explicitly:

```html
<style id='components' ht-pipe='from "style.component" as css'></style>
```

Legacy `ht-attrs` forms must likewise be converted manually to a map-valued
`${ ... }` expression. Use `ht-apply` and ordinary template variables for known
attributes and text.

### Options
-----------

**`-t`, `--theme`**
: Required path to the theme configuration file (`theme.json`).

**`--output`**
: Optional empty directory where the command writes a complete migrated copy of
  the theme. Without this option, safe migrations apply to the selected theme.

**`--interactive`**
: Review migration decisions interactively. Use this mode when migrating a
  theme in place or when a report identifies a declaration that needs judgment.

### Results
-----------

The command prints a migration status report. It exits unsuccessfully when the
migration is incomplete, so resolve or intentionally retain each reported
declaration before relying on the migrated theme.

<!-- Links -->
[themes]: /docs/reference/core/themes/
[current directive syntax]: /docs/reference/core/directives/
[ht-apply]: /docs/reference/core/directives/ht-apply/
[ht-each]: /docs/reference/core/directives/ht-each/
[ht-pipe]: /docs/reference/core/directives/ht-pipe/

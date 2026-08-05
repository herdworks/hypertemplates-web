---
created_at: 2024-11-12T10:00:00-07:00
updated_at: 2026-02-26T10:00:00-08:00
title: Template Plugins
description: Learn more about the HyperTemplates plugin system.
breadcrumb: Plugins
---

## Template Plugins

<auto-toc selectors='h3,h4,h5,h6,dl:not(:has(learn-more)) dt'></auto-toc>

### Overview
------------

Plugins extend the capabilities of HyperTemplates with support for Javascript functions. 
A plugin is a Javascript file that exports a default function.
The exported function can accept positional arguments supplied at run time. 
Some plugins get predefined [local bindings](#local-variables) injected into the [runtime environment](#plugin-runtime-environment) (e.g. local `const` declarations).
All plugins are executed in an [Immediately Invoked Function Expression (IIFE)] for scope isolation. 

<doc-quote ht-block new>
**NEW:** Template plugins are available in `hyperctl` version 0.20.0 and newer.
</doc-quote>

### Examples
------------

This is an example [template variable plugin], which can accept one or more positional arguments.
This plugin converts string or int values into ISO8601 duration strings. value `PT1H1M1S`.

<code-snippet ht-block filename='plugins/duration_iso.js'>

```javascript
// plugins/duration_iso.js
//
// duration_iso converts a duration in seconds into an ISO 8601 duration string.
// 
// usage:
//   duration_iso(3661)   # PT1H1M1S
//   duration_iso("3661") # PT1H1M1S
//   duration_iso(0)      # PT0S
export default function durationISO(input) {
  const seconds = Math.max(0, Math.round(Number(input) || 0))
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainder = seconds % 60
  const parts = []

  if (hours) parts.push(`${hours}H`)
  if (minutes) parts.push(`${minutes}M`)
  if (remainder || parts.length === 0) {
    parts.push(`${remainder}S`)
  }

  return `PT${parts.join("")}`
}
```

</code-snippet>

This is an example [computed namespace] plugin, which does not accept arguments but does have access local data bindings, including: `ht.*`, `build.*`, `env.*`, `data.*`, `theme.*`, and `site.*` template data (including the full `site.pages` sitemap):

<code-snippet ht-block filename='data/tags.js'>

```javascript
// tags.js generates a data.tags object of unique website tags w/ tag counts
// example output: {"html":{"count":3,"label":"HTML"},"css":{"count":1,"label":"CSS"},"rss":{"count":4,"label":"RSS"}}
export default function tagcloud() {
    var result = {}
    for (let page of site.pages) {
        let tags = page.tags || []
        console.log(`${ page.path } has ${ tags.length } tags`)
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


### Specification
-----------------

#### Plugins kinds
------------------

HyperTemplates currently supports two kinds of plugins: 

**Template variable plugins**
: Add custom [template variable functions] with template variable plugins. 

  <learn-more ht-block 
              href='/docs/reference/core/variables/#template-variable-plugins' 
              data-toc='h5' 
              title='Template variable plugins'>
  </learn-more>

**Computed namespace plugins**
: Add generated [template data] with [computed namespace plugins].

  <learn-more ht-block 
              href='/docs/reference/cms/namespaces/#computed-namespace-plugins'
              data-toc='h5'
              title='Computed namespace plugins'>
  </learn-more>

#### Plugin identifiers
-----------------------

HyperTemplates plugin identifiers are derived via file name. 
Plugin identifiers are then bound to the default function exported by the plugin file.

**Example**

In the following example, the plugin file at `plugins/duration_iso.js` binds the identifier `duration_iso` to the function returned by `export default function` (i.e. `durationISO`).

<code-snippet ht-block filename='plugins/duration_iso.js'>

```javascript
// plugins/duration_iso.js
//
// duration_iso converts a duration in seconds into an ISO 8601 duration string.
// 
// usage:
//   duration_iso(3661)   # PT1H1M1S
//   duration_iso("3661") # PT1H1M1S
//   duration_iso(0)      # PT0S
export default function durationISO(input) {
  const seconds = Math.max(0, Math.round(Number(input) || 0))
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainder = seconds % 60
  return isoString(hours, minutes, remainder)
}

function isoString(hours, minutes, remainder) {
  const parts = []
  if (hours) parts.push(`${hours}H`)
  if (minutes) parts.push(`${minutes}M`)
  if (remainder || parts.length === 0) {
    parts.push(`${remainder}S`)
  }
  return `PT${parts.join("")}`
}
```

</code-snippet>

<doc-quote ht-block success>

**NOTE:** plugins may define multiple functions, including internal helper functions (see `isoString` above), but only one `export default function`.

</doc-quote>

#### Plugin arguments
---------------------

Plugins can accept zero or more arguments.

**Example**

For example, this [template variable plugin] accepts two positional arguments, `date` and `format`:

<code-snippet ht-block filename='plugins/datefmt.js'>

```javascript
// datefmt formats RFC3339 date strings using the Unicode LDML microsyntax for dates.
// 
// Date Field Symbol Table: https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
//
// Format tokens:
//
//   yyyy   4-digit year         (2026)
//   yy     2-digit year         (26)
//   MMMM   Full month name      (April)
//   MMM    Abbreviated month    (Apr)
//   MM     2-digit month        (04)
//   M      Numeric month        (4)
//   dd     2-digit day          (12)
//   d      Numeric day          (12)
//   EEEE   Full weekday         (Sunday)
//   EEE    Abbreviated weekday  (Sun)
//   HH     24-hour, padded      (14)
//   hh     12-hour, padded      (02)
//   mm     Minute, padded       (30)
//   ss     Second, padded       (05)
//   a      AM/PM marker         (PM)
//   ZZZZZ  ISO 8601 w/ colon    (-07:00)
//   Z      ISO 8601 w/o colon   (-0700)
//
// Usage: ${ datefmt(page.created_at, "EEEE, MMMM d, yyyy") }
export default function datefmt(date="", format="") {
    const datetime = new Date(date);
    var out = ""
    // apply formatting
    return out
}
```

</code-snippet>

If used in a [template variable] like `${ datefmt(page.created_at, "EEEE, MMMM d, yyyy") }`, HyperTemplates will lookup the value of `page.created_at` (an RFC3339 string), and call `datefmt(...["2026-05-08T11:00:00-07:00", "EEEE, MMMM d, yyyy"])`.

When used in a [template variable] like `${ datefmt(page.created_at, "EEEE, MMMM d, yyyy") }`, HyperTemplates resolves `page.created_at` from template data and invokes the plugin with the resulting value (an RFC3339 string), in the same order: `datefmt("2026-05-08T11:00:00-07:00", "EEEE, MMMM d, yyyy")`.

#### Local variables
--------------------

HyperTemplates plugins are executed inside [Immediately Invoked Function Expressions (IIFEs)] with optional predefined [local] `const` bindings.
For example, [computed namespace plugins] have access to `ht`, `env`, `build`, `theme`, `site`, and `data` as local variables. 


#### Plugin logging
-------------------

HyperTemplates plugins have access to a `console` object, including `console.log`, `console.info`, `console.warn`, `console.error`, and `console.debug`. 
All `console.*` methods write to standard output with a `[scripting] ` prefix.
A `console.logger(name)` function returns a console-shaped object that prefixes its output with the provided name (i.e. `[name] `) which is useful for debugging output from a specific plugin.

**Examples**

In the following example we use `console.log()` directly. 

The highlighted line will generate output like `[scripting] /about/ has 4 tags`.

<code-snippet ht-block filename='data/tags.js' highlight='7'>

```javascript
// tags.js generates a data.tags object of unique website tags w/ tag counts
// example output: {"html":{"count":3,"label":"HTML"},"css":{"count":1,"label":"CSS"},"rss":{"count":4,"label":"RSS"}}
export default function tagcloud() {
    var result = {}
    for (let page of site.pages) {
        let tags = page.tags || []
        console.log(`${ page.path } has ${ tags.length } tags`)
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

In this example we use `console.logger("tags.js")` to customize the log output. 

The resulting call to `logger.log()` will generate output like `[tags.js] /about/ has 4 tags`.

<code-snippet ht-block filename='data/tags.js' highlight='3,8'>

```javascript
// tags.js generates a data.tags object of unique website tags w/ tag counts
// example output: {"html":{"count":3,"label":"HTML"},"css":{"count":1,"label":"CSS"},"rss":{"count":4,"label":"RSS"}}
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

#### Plugin runtime environment
-------------------------------

HyperTemplates plugins run in sandboxed JavaScript environments that support modern JavaScript: let, const, arrow functions, template literals, destructuring, classes, Promise, and async/await, on top of an ECMAScript 5.1+ baseline.

Think of it as "JavaScript the programming language" without "JavaScript the browser" or Node.js — there is no DOM (window, document, fetch) and none of the Node.js globals (require, process, Buffer, setTimeout).

Plugins can leverage plain functions, core JavaScript types like objects and arrays, plus standard built-ins including [Object], [Array], [String], [Number], [Boolean], [BigInt], [Symbol], [Date], [RegExp], [Map], [Set], [Promise], [JSON], [Math], [Proxy], [Reflect], [undefined], [Error], [TypeError], [RangeError], [SyntaxError], [ReferenceError], [parseInt], [parseFloat], [NaN], [isNaN], [Infinity], [isFinite], [encodeURI], [decodeURI], [encodeURIComponent], [decodeURIComponent], and more.

Plugins are executed inside [Immediately Invoked Function Expressions (IIFEs)], so each invocation runs in an isolated scope with no shared state.

[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[Bigint]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
[Symbol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
[Date]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[Regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
[Map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[Set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[Promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[Error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
[TypeError]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError
[RangEerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError
[SyntaxError]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError
[ReferenceError]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
[JSON]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
[Math]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
[Reflect]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
[Proxy]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
[parseInt]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
[parseFloat]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
[isNaN]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
[isFinite]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite
[encodeURIComponent]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
[DecodeURIComponent]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent
[undefined]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
[NaN]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
[Infinity]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity
[encodeURI]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
[decodeURI]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI


<!-- Links -->
[`<style>` element]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/style
[`<style>` elements]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/style
[`const` declaration]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
[`const` declarations]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
[`function` declaration]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
[`ht-each` template data]: /docs/reference/core/directives/ht-each/#template-data
[`hyperctl build`]: /docs/reference/cli/commands/build/
[`hyperctl dev render`]: /docs/reference/cli/commands/render/
[`hyperctl`]: /docs/reference/cli/
[`style` attribute]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/style
[`style` attributes]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/style
[binding]: https://developer.mozilla.org/en-US/docs/Glossary/Binding
[build]: /docs/reference/cms/builds/
[builds]: /docs/reference/cms/builds/
[computed namespace plugin]: /docs/reference/cms/namespaces/#computed-namespace-plugins
[computed namespace plugins]: /docs/reference/cms/namespaces/#computed-namespace-plugins
[computed namespace]: /docs/reference/cms/namespaces/#computed-namespaces
[CSS custom functions]: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions
[CSS value]: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Values_and_units
[custom page properties]: /docs/reference/cms/page/#custom-properties
[custom website properties]: /docs/reference/cms/website/#custom-properties
[element attributes]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes
[element contents]: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
[environment data]: #environment-data
[HyperTemplates CMS]: /docs/reference/cms/
[HyperTemplates content management system]: /docs/reference/cms/
[Immediately Invoked Function Expression (IIFE)]: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
[Immediately Invoked Function Expressions (IIFEs)]: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
[Javascript object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[Javascript objects]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[Javascript template literals]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
[local]: https://developer.mozilla.org/en-US/docs/Glossary/Local_variable
[namespaces]: /docs/reference/cms/namespaces/
[property accessors]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
[Template attributes]: /docs/reference/core/directives/
[template data]: /docs/reference/core/data
[template data objects]: /docs/reference/core/data#template-data-object
[template variable]: /docs/reference/core/variables/
[template variable functions]: /docs/reference/core/variables/#template-variable-functions
[template variable plugin]: /docs/reference/core/variables/#template-variable-plugins
[template variable plugins]: /docs/reference/core/variables/#template-variable-plugins
[template variable syntax]: #template-variable-syntax
[spread syntax]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

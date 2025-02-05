# HyperTemplates

HyperTemplates are a pure-html templating system for the modern web.

This repository contains the source code for hypertemplates.net

## Content

### Documentation IA

* /docs/*
  * /docs/overview
  * /docs/building-blocks
* /docs/reference/*
* /docs/how-to/*
  * /docs/how-to/get-started
* /docs/tutorials/*

## Design

* Design inspiration:
  * Tailwind (Components + Showcase)
  * Templates:
    * <https://salient.tailwindui.com>
    * <https://radiant.tailwindui.com>
    * <https://pocket.tailwindui.com>
  * Astro Themes <https://astro.build/themes/>
  * Astro Showcase <https://astro.build/showcase/>
* Bento box inspiration & references:
  * <https://tailwindui.com/components/marketing/sections/bento-grids>
  * <https://bentogrids.com/>
  * <https://iamsteve.me/blog/bento-layout-css-grid>
* Landing page inspiration:
  * <https://gohugo.io>
  * <https://www.11ty.dev>
  * <https://astro.build> ("content driven websites")
  * <https://read.cv/sites/templates>
  * <https://linear.app/>
  * <https://chroniclehq.com/>
  * <https://deno.com/>
  * <https://bun.sh/>
  * <https://vercel.com/>
  * <https://www.bolt.com/>
  * <https://nevflynn.com/>
  * [StackOverflow Survey – Web frameworks and technologies](https://survey.stackoverflow.co/2024/technology#2-web-frameworks-and-technologies)
* Documentation Inspiration:
  * <https://docuapi.netlify.app>
  * <https://protocol.tailwindui.com>
  * <https://www.postman.com/templates/e9c28f47-1253-44af-a2f3-20dce4da1f18/API-documentation/>

## Website Plan

### Landing Page

* Nav
* Hero
  * <https://htmlforpeople.com/intro/>
* Build a blog in 5 minutes
  * Like 11ty's build a blog in 6m: <https://www.youtube.com/watch?v=kzf9A9tkkl4>
  * Inspired by 7 minute abs: <https://www.youtube.com/watch?v=JB2di69FmhE>
* How it works
* Why HyperTemplates?
  * Web standards have caught up!
  * HyperTemplates vs Astro
  * HyperTemplates vs Hugo
    * Shortcodes vs HTTP WebComonents
  * HyperTemplates vs Mustache
  * HyperTemplates vs 11ty/Next.js/React
* Features
  * Pure-HTML templating! Turn any HTML document (even AI-generated HTML) into a layout template using only a few easy-to-learn HTML building blocks!
  * WYSIWYG development! No more translating HTML into another programming language just so it can generate HTML.
  * Native web authoring experience!
  * Ease of use! No need to learn complex JavaScript frameworks and build systems – just simple & powerful HTML, CSS, and Javascript!
  * Composability! Decompose templates into reusable components
  * The Best of HyperMedia! HyperTemplates focus on HTML promotes progressive enhancement best practices (HTML5 + CSS3 + WebComponents)
  * Supports incremental builds & reproducible builds!
  * Sharable! Because HyperTemplates don't rely on third-party dependencies, components, page layouts, and even whole themes can be easily shared.
  * Compatibility. Use your favorite web technologies with HyperTemplates, including HTMX, Tailwind, Bootstrap, FontAwesome, and basically ANYTHING else.
* Made possible by these wonderful sponsors!
  * Herd Works
  * Your Company → /sponsor

### Try HyperTemplates

### Getting Started

1. Init a new HyperTemplates website

   ```shell
   mkdir -p content data static layouts
   touch site.json
   ```

### Local Development

```shell
export HYPER_BUILD=./builds/preview
podman run -d --rm --name httpd -p "9001:80" -v "${HYPER_BUILD}:/usr/share/nginx/html" nginx:latest
```

---
created_at: 2025-04-14T12:00:00-08:00
updated_at: 2025-04-14T12:00:00-08:00
layout: post
title: Introducing HyperTemplates
slug: introducing-hypertemplates
description: |
    The pure-HTML templating system for the modern web.
---

## Introducing HyperTemplates

> **TL;DR:** HyperTemplates is a pure-HTML templating system and static site generator. 
> It was designed with the goal of making it easier to build websites as nature intended: using HTML, CSS, and a sprinkling of vanilla JavaScript. 
> The HyperTemplates CLI (`hyperctl`) is available to download for MacOS starting today.
> Please visit the developer preview to learn more.

Two things happen very early on in a persons journey to learn HTML – they create their first web page (!), and eventually they create a second.
The moment that second page exists, the seemingly simple journey becomes a lifelong _quest_ to find the best templating system to keep some portion of two or more web pages in sync.

If you have discovered templating solutions you actually enjoy using, this post might not interest you, and that is OK!
For everyone else, welcome.

<!--more-->

### The second page problem&trade;

It starts with a link from page one to page two.
Then page two needs a link back to the "home" page.
Then every page needs a set of links to navigate between the growing number of pages that make up this up-and-coming new website.
For a brief moment at this nascent stage in our journey we allow ourselves to think that that this is _precisely_ what "copy and paste" was invented for!
But then about ten seconds after we finish copying our snazzy new navigation to a handful of pages, we notice a typo.
We instinctively fix the typo and start the copy and paste ceremony all over again.
But then we decide that the "About Me" link should just be called "About" (or visa versa).
And then it hits us.
This is unsustainable.

<pull-quote ht-element>

The moment that second page exists, the seemingly simple journey becomes a lifelong quest to find the best templating system to keep some portion of two or more web pages in sync.

</pull-quote>

I would wager that what comes next is a sad tale where a _significant number_ of <mark>people who actually want to learn HTML abandon the quest</mark>.
This is a bad thing!
Even if we are on the verge of equipping every human on earth with an AI agent who can write code for us, we will be worse off as fewer and fewer humans are interacting with [the blank canvas] that is HTML.
The <del>impending</del> ongoing [AI slop](https://en.wikipedia.org/wiki/AI_slop)-ification of the internet means we need **more** human creativity on the web, not less.

### Why HTML?

HTML is the _second most popular programming language in the world_ according to the [Stack Overflow Developer Survey].
The #1 language is JavaScript, which is ostensibly a scripting language for HTML.
HTML has held the #2 position for as long as it has appeared on the survey, beginning in 2018.
Although it's popularity has declined from 68% to 53% of all developers, _the rumors of HTML's death have been greatly exaggerated_.
In 2022 the survey added a "learning to code" category which revealed HTML as the #1 programming language[^1] in the segment at over 60% of new developers.

The internet is one of the most ubiquitous technologies of our modern era, so it's no wonder that so many people want to learn how to write HTML.
The problem is that even after someone learns the basics of HTML, CSS, _and_ JavaScript – three languages! – the skills they have acquired are completely unrelated to how most websites are built in the real world.

<mark>This problem was the motivation for creating HyperTemplates.</mark>

### The state of the art

The sheer number of tools that are available to build websites today is simply breathtaking.
They range from static site generators like [Hugo] and [11ty], to JavaScript frameworks like [NextJS] and [Astro], to fully featured content managements systems like [Ghost] and [Wordpress].
We've used almost every single one of these tools in one capacity or another, and they are incredibly powerful.
But [every](https://gohugo.io/templates/introduction/) [single](https://www.11ty.dev/docs/languages/liquid/#supported-features) [one](https://nextjs.org/docs/app/getting-started/layouts-and-pages) of [them](https://docs.astro.build/en/reference/astro-syntax/) [uses](https://handlebarsjs.com/guide/expressions.html#basic-usage) a [different templating system](https://developer.wordpress.org/themes/templates/introduction-to-templates/), and none of them are HTML! 🤦🏽‍♂️

<pull-quote ht-element>

Even after someone learns the basics of HTML, CSS, _and_ JavaScript – three languages! – the skills they have acquired are completely unrelated to how most websites are built in the real world.

</pull-quote>

No wonder so many people who learn basic HTML+CSS+JavaScript never end up making a single website.
<mark>The barrier to entry is too high.</mark>

### Pure-HTML templating

What if we could template HTML using HTML?
What if we just wrote HTML instead of generating HTML? 
How much would our websites improve if we spent more time using the [built-in elements] and [HTML attributes] instead of reinventing them with `<div>`s and classes?

These were the questions I pondered as I built the first HyperTemplates prototype in an afternoon.
The whole thing was less than 150 lines of vanilla Javascript [DOM scripting].
The next day I tried building a simple landing page using [`hypertemplates.js`], and I was blown away at how productive I was.
Within a few more days I had a working prototype of `libhypertemplates`, a templating library for native applications with C bindings, and the rest is history.

Here's what it looks like to write HTML templates with HyperTemplates:

<code-snippet ht-element filename='example.html' caption='An example HyperTemplates layout.'>

```html
<!DOCTYPE html>
<html lang='en-US'>
    <head>
        <meta charset='utf-8'>
        <title ht-content='page.title'></title>
        <meta name='description' ht-attrs='content:page.description,site.description'>
    </head>
    <body>
        <header ht-include='partials/sections/header.html'></header>
        <section>
            <main>
                <article id='article' ht-content='markdown:page.content'></article>
            </main>
        </section>
        <footer ht-include='partials/sections/footer.html' data-color-scheme='dark'></footer>
    </body>
</html>
```

</code-snippet>

...to be continued...


<!-- Links -->
[the blank canvas]: /blog/html-is-a-blank-canvas
[Stack Overflow Developer Survey]: https://survey.stackoverflow.co

[Hugo]: https://gohugo.io
[11ty]: https://www.11ty.dev
[Astro]: https://astro.build
[NextJS]: https://nextjs.org
[Ghost]: https://ghost.org
[Wordpress]: https://wordpress.org
[one billion dollars]: https://linktr.ee/blog/linktree-raise-alex-zaccaria-unicorn/
[built-in elements]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element
[HTML attributes]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[DOM scripting]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting
[`hypertemplates.js`]: https://github.com/herdworks/hypertemplates-js

<!-- Footnotes -->
[^1]: the "learning to code" results for HTML/CSS were 62.59% in 2022 (#1), 60.73% in 2023 (#1), and 60.4% in 2024 (#2). 
      Even though HTML was surpassed by Python as the #1 programming language for new developers in 2024 (an AI trend side effect, no doubt), HTML didn't see a noteworthy decline.
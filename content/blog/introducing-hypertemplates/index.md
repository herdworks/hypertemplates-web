---
created_at: 2025-06-12T08:00:00-07:00
updated_at: 2025-06-12T08:00:00-07:00
layout: post
title: Introducing HyperTemplates
description: |
    The pure-HTML templating system for the modern web.
video: https://customer-w9ndoyuzirardbjc.cloudflarestream.com/2eb2a40cfc8562635a0f14894c6c3987/downloads/default.mp4
tags:
  - announcements
---

## Introducing HyperTemplates

> **TL;DR:** HyperTemplates is a pure-HTML templating system and static site generator. 
> It was designed with the goal of making it easier make websites. 
> The HyperTemplates CLI (`hyperctl`) is available to download for MacOS and Linux starting today, and [Windows releases are available in early access](https://hypertexting.community/t/help-us-test-hyperctl-for-windows/52).

Two things happen very early on in a persons journey to learn HTML – they create their first web page (!), and eventually they create a second.
The moment that second page exists, the seemingly simple journey becomes a lifelong _quest_ to find the best templating system to keep some portion of two or more web pages in sync.

If you have discovered templating solutions you actually enjoy using, this post might not interest you, and that is OK!
For everyone else, welcome. :wave:

<!--more-->

### The second page problem

It starts with a link from page one to page two.
Then page two needs a link back to the "home" page.
Then every page needs a set of links to navigate between the growing number of pages that make up this up-and-coming new website.
For a brief moment at this nascent stage in our journey we allow ourselves to think that that this is _precisely_ what "copy and paste" was invented for!
But then about ten seconds after we finish copying our snazzy new navigation to a handful of pages, we notice a typo.
We instinctively fix the typo and start the copy and paste ceremony all over again.
But then we decide that the "About Me" link should just be called "About" (or visa versa).
And then it hits us.
This is unsustainable.

<pull-quote ht-block>

The moment that second page exists, the seemingly simple journey becomes a lifelong quest to find the best templating system to keep some portion of two or more web pages in sync.

</pull-quote>

I would wager that what comes next is a sad tale where <mark>a _significant number_ of people who actually want to learn how to make websites abandon the quest</mark>.
This is a bad thing!
Even if we are on the verge of equipping every human on earth with an AI agent who can write code for us, we will be worse off as fewer and fewer humans are interacting with the blank canvas that is HTML.
The <del>impending</del> ongoing [AI slop](https://en.wikipedia.org/wiki/AI_slop)-ification of the internet means we need **more** human creativity on the web, not less.

### Why HTML?

HTML is the _second most popular programming language in the world_ according to the [Stack Overflow Developer Survey].
The #1 language is JavaScript, which is ostensibly a scripting language for HTML[^1].
HTML has held the #2 position for as long as it has appeared on the survey, beginning in 2018.
Although its popularity has declined from 68% to 53% of all developers, _the rumors of HTML's death have been greatly exaggerated_.
In 2022 the survey added a "learning to code" category which revealed HTML as the #1 programming language[^2] in the segment at over 60% of new developers.

The internet is one of the most ubiquitous technologies of our modern era, so it's no wonder that so many people want to learn how to write HTML.
The problem is that even after someone learns the basics of HTML, CSS, _and_ JavaScript – three programming languages! – the skills they have acquired are completely unrelated to how most websites are built in the real world.

<mark>This problem was the motivation for creating HyperTemplates.</mark>

### The state of the art

The sheer number of tools that are available to build websites today is simply breathtaking.
They range from static site generators like [Hugo] and [11ty], to JavaScript frameworks like [NextJS] and [Astro], to fully featured content managements systems like [Ghost] and [Wordpress].
We've used most of these tools in one capacity or another – as well as a handful of others that fit into these same categories – and they are all incredibly powerful.
But [every](https://gohugo.io/templates/introduction/) [single](https://www.11ty.dev/docs/languages/liquid/#supported-features) [one](https://nextjs.org/docs/app/getting-started/layouts-and-pages) of [them](https://docs.astro.build/en/reference/astro-syntax/) [uses](https://handlebarsjs.com/guide/expressions.html#basic-usage) a [different templating system](https://developer.wordpress.org/themes/templates/introduction-to-templates/), and none of them are HTML! 🤦🏽‍♂️

<pull-quote ht-block>

Even after someone learns the basics of HTML, CSS, _and_ JavaScript – three programming languages! – the skills they have acquired are completely unrelated to how most websites are built in the real world.

</pull-quote>

No wonder so many people who learn basic HTML+CSS+JavaScript never end up making a single website.
<mark>The barrier to entry is too high.</mark>
This isn't just a problem for beginners either.
It adds unnecessary complexity for more experienced developers as well because it involves a degree of "conceptual difficulty mapping between the two logic models" ([impedence mismatch]) of a markup language (HTML) and a more traditional programming language.

### Pure-HTML templating

What if we could template HTML using HTML?
What if we just _wrote_ HTML instead of _generating_ HTML?
How many brain cells would we save if we didn't have to think in HTML, then translate our ideas into a wholly different programming or templating language, just to generate HTML? 😵‍💫
How much would our websites improve if we spent more time learning and using [built-in elements] and [HTML attributes] instead of reinventing them with [`<div>` soup]?

These were the questions I pondered as I built the first HyperTemplates prototype in an afternoon.
The whole thing was less than 150 lines of vanilla Javascript [DOM scripting].
The next day I tried building a simple landing page using `hypertemplates.js`, and I was blown away at how productive I was.
Within a few more days I had a working prototype of `libhypertemplates`, a templating library written in [Golang] for native applications with C bindings, and the rest is history.

Here's what it looks like to write HTML templates with HyperTemplates:

<video-player ht-block
              video='https://customer-w9ndoyuzirardbjc.cloudflarestream.com/2eb2a40cfc8562635a0f14894c6c3987/downloads/default.mp4'
              poster='/cover.png'></video-player>

Here's what it looks like to build [an entire website] using HyperTemplates.

If you're still reading this, we hope you'll [give HyperTemplates a try].
Better yet, we hope you join the @hypertexting.community and accompany us on [our mission to make it easier to to make websites].




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
[impedence mismatch]: https://en.wikipedia.org/wiki/Object–relational_impedance_mismatch
[built-in elements]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element
[HTML attributes]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[`<div>` soup]: https://hypermedia.systems/hypermedia-a-reintroduction/#html-note-title
[DOM scripting]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting
[Golang]: https://go.dev
[an entire website]: https://github.com/herdworks/hypertemplates-web/
[give HyperTemplates a try]: /docs/tutorials/getting-started/
[our mission to make it easier to to make websites]: https://makehypertext.com

<!-- Footnotes -->
[^1]: yes we know that NodeJS and TypeScript exist, and that these are actually _wonderful_ languages to write all kinds of software with.
      But we posit that these were born out of the desire to use Javascript as a single language for frontend _and_ backend development, thus downstream of [Javascript's origin](https://en.wikipedia.org/wiki/JavaScript#History) as an HTML scripting language.

[^2]: the "learning to code" results for HTML/CSS were 62.59% in 2022 (#1), 60.73% in 2023 (#1), and 60.4% in 2024 (#2). 
      Even though HTML was surpassed by Python as the #1 programming language for new developers in 2024 (an AI trend side effect, no doubt), HTML didn't see a noteworthy decline.
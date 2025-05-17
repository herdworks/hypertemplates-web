---
created_at: "2025-04-15T10:57:14-07:00"
updated_at: "2025-04-15T10:57:14-07:00"
layout: post.html
slug: the-need-for-speed
title: The need for speed
---

## The need for speed

The HyperTemplates journey began as a question: why aren't there any static site generator apps on the iPhone?
From there began a long series of questions that ultimately [motivated us to build HyperTemplates][motivation].
Along the way there were two requirements that influenced almost every design decision to date: HTML templating should be **easy** and **fast**.

<!--more-->

<pull-quote ht-element>

HTML templating should be **easy** and **fast**.

</pull-quote>

### How we got here

The ease of use requirement was mostly influential in the decision to design a system around HTML.
But speed as a core requirement has further reaching implications than we initially suspected.
For example, pretty early on we identified the need for [incremental builds] as a way to improve the overall speed of the system.
Why build & deploy an entire website when the user just wants to add a single page with one or two attachments (e.g. a blog post with a cover image)?
If we could figure out a way to reduce the amount of work needed to deploy a new page, we could greatly improve the overall speed of the system.

<pull-quote ht-element>
[speed] has further reaching implications than we initially suspected
</pull-quote>

But the very idea of incremental builds felt like a big risk in the context of a static site generator (SSG).
The very nature of an SSG is to produce such consistent output that users can confidently _replace their entire website every time they make a change_.
So the desire for incremental builds drove us to add support for [reproducible builds] – a guarantee that two builds generated from the same content will be cryptographically identical.
Once we had reproducible builds we were able to test incremental builds by layering them on top of full site builds and verifying they don't change the hash computation.


<!-- Links -->
[motivation]: /blog/introducing-hypertemplates/
[incremental builds]: #incremental-builds
[reproducible builds]: #reproducible-builds
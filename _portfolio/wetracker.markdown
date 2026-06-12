---
title: WeTracker
categories:
- Digital Audio
- Web Applications
- Creative Technology
- Software Engineering
layout: page
image: "/images/portfolio/wetracker2.png"
description: A full-featured browser music workstation built on the Web Audio API.
discipline: Web Audio
featured: true
order: 40
---

<figure>
    <img src="/images/portfolio/wetracker2.png" width="100%" alt="WeTracker">
    <figcaption>The WeTracker Interface</figcaption>
</figure>
<br/>

## The Product

WeTracker is a browser-based music workstation inspired by the tracker tools
used in the 1990s demo scene. It began as an experiment and grew into a
full-featured authoring environment with an open-source community around it.

## The Engineering

Rather than simply playing recorded audio, WeTracker implements the playback
and mixing model used by FastTracker II modules. Multiple channels, instruments
and runtime effects are rendered through the modern
[Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API).

The application can load classic XM files and extends the tracker model with
modern features, including per-track filter chains. Building it required
low-level audio knowledge, careful timing and state management, and the
interaction design needed to make a dense creative tool usable in a browser.

## Explore

Try [WeTracker online](https://www.indigobeetle.co.uk/static/wetracker/) or
view the [source code on GitHub](https://github.com/pgregory/wetracker).

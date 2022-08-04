---
layout: page
title: "Aqsis"
categories: [Graphics]
thumb: aqsis-thumb.png
description: An open source clone of Pixar's RenderMan renderer
---

<figure>
    <img src="/images/portfolio/tugboat.jpeg" width="100%" alt="Aqsis">
    <figcaption>Image copyright (c) 2006 Vikram K. Mulligan.</figcaption>
</figure>
<br/>

Aqsis started many years ago as a means to itch a scratch I had. I was
fascinated by the concept of programmable shaders in CGI, in particular Pixar's
[RSL](https://en.wikipedia.org/wiki/RenderMan_Shading_Language). As a
programmer, and frustrated artist, I always lean towards procedural content
creation in art, as I can code and understand code far better than I can work a
pencil or paintbrush (or indeed a mouse). Alongside the programmable shading,
the idea of generating and modifying actual surface details through code was,
to me, very exciting. Pixar's RenderMan, based on the REYES rendering system,
allowed small programs written in RSL to be assigned to various elements of the
scene, including to actually change the underlying geometry with real
displacement, a capability no other renderer had at the time. The image above,
contributed by Vikram Mulligan, is an example of this power, the underlying
geometry is deceptively simple, just geometric primitives, the surface detail
and colour all provided by shaders.

However, at the time, 1990-ish, RenderMan was not available to the common man,
so I decided to have a go at creating my own so that I could experiment with
this exciting concept. From these humble roots grew the biggest personal
project I've ever worked on, involving people from around the globe and
achieving recognition I hadn't ever envisioned. The Aqsis project was accepted
into the Google Summer of Code multiple times, and has been used as an
educational tool as well as a production rendering solution through its
lifetime. It also let me to Ian Stephenson, who approached me to contribute to
the book ["Production Rendering: Design and
Implementation"](https://link.springer.com/chapter/10.1007/1-84628-085-0_3).

Now, sadly, largely overtaken by more modern rendering techniques enabled by
advancing hardware capabilities, Aqsis still stands as a great codebase for
learning about core graphics principles and software architecture practices.

The home of the project is [here](http://www.aqsis.org)

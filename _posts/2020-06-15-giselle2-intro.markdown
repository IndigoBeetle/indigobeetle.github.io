---
title: Giselle2 - The Revival
date: 2020-06-15 10:58:00 Z
categories:
- Giselle2
tags:
- Programming
- Procedural
- Project
- Giselle2
layout: post
description: Reviving an old project during quarantine.
tagline: ''
image: "/images/blog/giselle2.png"
excerpt: |
  I have been looking for a project to work on during lockdown, and in general,
  to keep my skills up, and to offer me a challenge alongside my day job. Decided
  rather than starting something new, why not revive an old mothballed project
  and see if I can make something of it. That project is Giselle.
---

Firstly, a bit of background. For as long as I can remember, I've been
interested in the idea of procedural content generation, creating large amounts
of detail from small seeds of information. This fascination was originally
driven by my other passion, computer graphics and animation. My first
introduction to procedural content generation was through the AL system from
Stephen F. May, which I found out was influenced by the menv system developed at
Pixar for their animations, a curious link back to my other big project, Aqsis.
AL was intriguing to me because it allowed a programmer to achieve the artistic
creations I couldn't achieve with traditional tools. Being able to "describe"
what the scene and animation should be like, rather than trying to draw it, was a
fascinating concept to me, I can "do" programming. I built the first iteration of
[Giselle][5] on a similar concept to AL, very heavily focused on traditional text
programming using Lua.

My research led me to many fascinating findings, one or two stand out, in
particular the work of Eric Bruneton. I was particularly interested in the work
he was doing on simulating the [Rama][1] spacecraft from A.C. Clarke's
"Rendezvous with Rama". This resonated with me having just read both Larry
Niven's [Ringworld][2], and Greg Bear's [Eon][3]. Eric's work led directly to
[Proland][4], an open source planetary simulation library. One of the things I
specifically noticed about Eric's work in contrast to much of the procedural
generation research at the time, was the conscious decision to include artistic
input into the equation, rather than trying to make the whole simulation based
on rules and randomness. I learned early on, when working with creative
individuals on games and visual effects projects, that creative direction is
paramount in anything with an artistic focus. Trying to tweak numbers to make
the final result look exactly as required is just untenable for any sizeable
project beyond pure research. I recall early on in my work with Renderman,
understanding that the reason early versions of Pixar's venerable rendering
system eschewed physically accurate lighting wasn't only because of the lack of
compute power, but also because artists and creative directors so often require
the sort of control a totally realistic simulation would at best make
challenging. Make that one single object a little brighter, or increase the
specular highlights over there, without affecting anything else. 

Eventually, partly as a result of researching procedural generation, and partly
because I was at the time working in a VFX studio, I landed on Houdini from
SideFX.  This to me was the epitome of procedural generation. Supremely
powerful and flexible, while still accessible by artists and non-programmers.
The method used in Houdini for building up unbelievably complex modeling,
animation and simulation is incredibly powerful. The more I looked into this
approach, the more it fascinated me, and the more confused I became that there
weren't more examples of this approach available, it seems that Houdini has
cornered this market. I dug out the original Giselle, and had a look back at
the code to see if I could adapt it. The more I thought about the node based,
dependency graph approach of Houdini, the more I realised that Giselle wasn't
really a good fit, so started working on a different prototype. This never made
the light of day (or Github), but I did release an early [video][6].

And that brings me to now. Looking for a side project to focus on, hone my C++
skills that have been left dormant for a while, and Giselle2 is that project.
The original Giselle2 in the video was built on top of Qt, which has fallen out
of favour with me in recent times, so that had to go, a number of other decisions
taken during the prototyping have been reviewed, and I'll go into those in future
posts on this project, but it's underway. I'm currently hosting on a private
Github project while I get the foundations in place, if there is enough interest
I might open the project so others can follow progress, which, by the way, will
be slow, I have a very demanding day job, but will endeavour to eek out as much
free time to work on this as I can.

I'll be posting semi-regularly to the Gislle2 category as I work on this.


[1]: http://ebruneton.free.fr/rama/index.html
[2]: https://en.wikipedia.org/wiki/Ringworld
[3]: https://en.wikipedia.org/wiki/Eon_(novel)
[4]: http://proland.inrialpes.fr/
[5]: https://github.com/pgregory/giselle
[6]: https://youtu.be/uFsrPEV9M5Q

---
layout: post
title: "RetroRemakes Challenge : Month 2 Day 23"
description: Day 23 of the second remake, Jumping Jack by Imagine Software.
tagline: "Jumping Jack"
date: 2022-06-23 13:53
categories: [RetroRemakes]
tags: [Programming, Software, Retro]
image: /images/blog/jumping_jack_hazards1.png
excerpt: |
    How I create graphics assets for the game, given my limited artistic
    ability.
---

Most of the remaining work for this, relatively simple game, will be creation
of assets, namely the hazards. In the original game, the hazards were pretty
arbitrary, or at least that's how it looks to me, happy to be corrected if
anyone has any information about the original designers. I've decided to sort
of stick with that, while adding a little bit of "reason" on the top. I'm 
going to make all the hazards toys, that fit in with the "living room" style of
the wallpaper and main screen. The original hazard, that anyone who's had a
chance to play the current test version will know, is a toy wooden train, there
was a train in the original. I'll be continuing in this vein for the rest, 
picking simple child's toys that can be easily brought to life with simple
animation, and retain a little bit of "fun".

As I said at the start, I'm not really an artist, I'm not great with a pencil
or brush, but I can kinda hold my own with 3D modeling and animation software.
So I've taken the approach of modeling and animating the graphics in 
[Blender](https://www.blender.org), an open source 3D animation suite that I'm
very familiar with. An example is shown in the main image of this post, the 
dino toy. As you can see, it's a very simple model, a couple of simple
subdivision surfaces, I've avoided organic modeling, preferring to stick to 
more simple mechanical toys, no plushies. Each has some hand-painted texture, 
again, shown in the image, in which I used my cheap graphics tablet to hand
paint some details, which are intentionally a bit scrappy and messy, to give
the impression of wooden toys, hand painted to look childlike and fun. I then
apply the simplest of animations, export a 30-40 frame sequence of PNG's for
the movement cycle, and use ImageMagick's "montage" tool to turn them into 
a single sprite sheet, that I can then easily import into Godot and turn into
a cycled animation.

One exception (so far) to the "simplest of animations" comment, was the duck,
shown below.

<figure>
    <img src="/images/blog/jumping_jack_hazards2.png" width="800" alt="Duck Hazard">
    <figcaption>The Duck Hazard</figcaption>
</figure>
<br/>

Animating the "flappy feet" of the duck was a fun challenge, I ended up 
creating some bones and assigning them to the foot mesh using an armature. This,
for anyone unfamiliar, is a common animation technique in 3D, you can see in the
image a row of little triangles running the length of the foot, these are bones.
They are basically a string of connected objects, much like a skeleton, that 
aren't visible in the final render. They are then "assigned" to the foot in 
such a way that moving and rotating the individual bones causes the foot mesh
to bend and twist accordingly, much like our skin does when our skeleton moves.
This means I can animate the relatively simple bone chain, and the far more
complex foot mesh will follow. You can see the final effect in the video 
below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/55Rv9XBav5k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

So, as of this writing, I now have three hazards, a toy train, a toy duck, and
a toy dinosaur, all shown below. I'll probably tinker for a bit longer, add
maybe 2 or three more if I have time, add some basic game-play sounds, and call
this one done.

<iframe width="560" height="315" src="https://www.youtube.com/embed/iSNr8Ay6ARg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


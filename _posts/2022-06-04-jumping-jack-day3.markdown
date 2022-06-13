---
layout: post
title: "RetroRemake Challenge : Month 2 Day 3"
description: Day 3 of the second remake, Jumping Jack by Imagine Software.
tagline: "Jumping Jack"
date: 2022-06-02 12:08
categories: [RetroRemakes]
tags: [Programming, Software, Retro]
image: jumping_jack_collision.png
excerpt: |
    Implementation of the collision handling system, allowing the player to
    jump/fall through the gaps, while keeping the collision shapes simple.
---

As mentioned in the [previous]({% post_url 2022-06-02-jumping-jack-day1 %}) post 
on this remake, once the rendering of the platforms and gaps were dealt with,
the remaining part of the basic mechanic was the collision detection and
response. 

Having created code to draw individual rectangles for the parts of the platform
not influenced by one of the moving gaps, it seems logical to use the same
code to dynamically create collision shapes in the same way. That indeed would
have been one way to do it, however, I felt a simple solution might work, so
decided to try it.

While processing the platforms and gaps for the rendering part, it's easy to
calculate if any of the gaps on a particular platform are above or below the 
player. You can see this in action in the screen capture above, during the
rendering I turn any platform that has a gap in line with the player green. To
implement this simple approach, all I do is add the player to the list of 
collision exclusions for the given platform when a gap is in line with the
player. This might seem redundant in many cases, as the higher green platform
in the screen capture shows that platforms nowhere near the player are being
updated to ignore collisions with the player. However, as the player is not 
close to that platform, it has no effect whatsoever, so is perfectly reasonable.

Upon testing, this extremely simple cheat seems to work perfectly well. At the
moment, the test for whether the player is in line doesn't even take into 
account the size of the player, it simply tests whether the centre-line of the
player is in-line, and this seems to be adequate, simplifying even further.

It needs more testing, but initial play seems to imply that this will work well.

You'll also notice that I've done some work on the graphics, adding simple 
platform artwork, some background artwork (I decided to go with a "home" like
visual, so will have a variety of patterned wallpapers on different levels),
and imported an initial test of a Mixamo character and animation, exported
from Blender as a sequence of images, to use as the sprite animation for running
and idle. Finally, to add a bit of depth, I created a custom shader for the
player to add a simple drop shadow, to just make the player pop from the
background a bit and make it more interesting.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Lz00EvfDU8c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
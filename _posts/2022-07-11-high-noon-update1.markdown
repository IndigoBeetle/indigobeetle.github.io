---
layout: post
title: "RetroRemakes Challenge : Month 3 Update 1"
description: First update of the third remake, High Noon by Work Force.
tagline: "High Noon"
date: 2022-07-11 22:53 +0100
categories: [RetroRemakes]
tags: [Programming, Software, Retro]
image: /images/blog/high-noon-1.png
excerpt: |
    Taking an incredibly simple arcade classic into 3D just to make it
    more interesting, while retaining the original feel.
---

First update of the third remake, month 3, July, brings 
[High Noon](https://spectrumcomputing.co.uk/entry/2315/ZX-Spectrum/High_Noon)
from Work Force (UK). A relatively simple,  game based on the classic 
"Boot Hill" arcade game. 

For this game, I've decided to explore a bit of 3D in Godot. While the Speccy
original High Noon is pure 2D, the arcade game on which it is roughly based had
some semi-3D elements. It had a Space Invaders style screen reflector, with the
monitor in the base of the cab facing up, and a mirror reflector to allow the
single color graphics to overlay onto a painted background. The background
had a depth effect, and the character graphics utilized a very rudimentary
3D effect, changing in size through a discreet number of steps as they moved
up the screen. I'll be employing something similar, with a 3D camera looking
down on the play area, tilted slightly to give a slight perspective. The 
gameplay itself will remain faithful to the Speccy original, fully 2D, with
only up and down movement and simple shooting, while the Boot Hill original had
directional shooting too. 

Going 3D allows me to experiment with some of the Godot 3D features that I
haven't had cause to use for some time, which'll be good preparation for some
upcoming titles that will be proper 3D.

I've got a lot going on this month, so progress might be a bit more sporadic 
and slow than the previous ones, but I'm confident I can get this done in the
time limit again. I have some 3D assets already chosen for various aspects,
tested and proven as animated exports from Blender.

This is the first game I've done in this series that has a computer controlled
opponent that requires a modicum of intelligent behavior. For this I'll be 
using a 
["Behavior Tree"](https://en.wikipedia.org/wiki/Behavior_tree_(artificial_intelligence,_robotics_and_control)
implementation. There are a few available as addons for Godot, one of which
I've already used, so I will probably take advantage of that, rather than code
one up from scratch. This will probably be the subject of the next blog post,
I'll try to get the computer controlled opponent working and describe the 
behavior tree that controls it. Once that's done, the core game is more or less
done, so I'll do the same as last time, release a beta to itch.io and share
the access code on Facebook for anyone wanting to do some testing.

In the very early video below you can see that the main elements of gameplay
are already in place, both players can be moved and fire, bullets kill, and 
collide with the wagon. Apologies for the naff gameplay in the video, I was
playing both players, and I don't multi-task well. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/XjW8LTt3jMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

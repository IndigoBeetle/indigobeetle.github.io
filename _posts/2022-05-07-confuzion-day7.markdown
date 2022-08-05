---
layout: post
title: "RetroRemake Challenge : Month 1 Day 7"
description: Day 7 of the first remake, Confuzion by Incentive Software.
tagline: "Confuzion"
date: 2022-05-07 14:59
categories: [RetroRemakes]
tags: [Programming, Software, Retro]
image: /images/blog/confuzion-d7.png
excerpt: |
    Adding some polish and preparing behind the scenes changes to support 
    multiple levels and proper game flow.
---


Day7: a lot of work behind the scenes cleaning up some of the rushed code that
is inevitable when building something this fast and loose. 

1. Create custom Godot Resource classes to hold information about individual
  tiles. This allows me to create tile types as on-disk resources with exposed
  variables that can be edited in the Godot UI for convenience. Then a startup
  routine at initialisation time scans a specific resources folder and loads
  all the tile types from disk and registeres them.
2. Similarly, a new Resource class to store level details, as an array of 
  array of tile type enums, a starting cell and starting direction.

These two underlying changes will make it much easier to do the inevitable but
mind-numbing task of transcribing all the 
[levels](https://maps.speccy.cz/map.php?id=Confuzion) from the original game 
into this new system.

Managed to spend some time on the fun parts, added particle effects for both
the bomb explosion and the spark itself, each multi-layered to get better
effects. The sparks are interesting, a combindation of three layers, two of
which work in global space, so leave a trail of particles, and one that is in 
local space, the "twinkles" that move with the spark on the traces.

Started tying some of the parts together to make a more coherent "game". Up to
now it's been a disparate set of parts, just thrown together to test out the
basics. I've started adding signals to the custom global Event Bus 
implementation that is part of my template. These allow events to be triggered
from anywhere in the game, and moreover, listened for anywhere, without the 
listener requiring implicit knowlege of the game object that emits the signals.
For example, the spark has an energy level which runs down over time. Each time
the spark energy is reduced, it fires a "spark_energy_changed" signal, along
with the previous, current and maximum values through the event bus. The
progress bar on the GUI has a script that listens for that signal on the event
bus and updates the display. It doesn't know anything about the spark itself,
it doesn't know where it is and doesn't need a reference to it, it just knows
that when the spark changes it's energy, it will know about it.

Finally, enebled the scene switcher/fader that is also part of my template, and
added a simple main menu and boot scene to load in the right order and use the
scene switcher to manage fading between.

Lots of smaller changes, it's almost playable now, just need to get it to switch
to another level when a level is successfully completed.

<iframe width="560" height="315" src="https://www.youtube.com/embed/WuCDCMlL1t4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

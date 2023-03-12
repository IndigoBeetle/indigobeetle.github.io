---
layout: post
title: "RetroRemakes Challenge : Month 11 Update 2"
date: 2023-03-12T14:45:11.413Z
image: /images/blog/screenshot-2023-03-12-at-14.45.27.png
excerpt: Small steps, progressing the content creation pipeline, and starting to
  put together the game structure.
tags:
  - Retro
  - Gaming
categories:
  - RetroRemakes
---
Found some time this weekend to progress Trashman a bit. Not going as fast as I'd like, but progress all the same.

As this is going to be a content-heavy build, I decided to dedicate some time to improving the workflow and pipeline for creating the 2D renders in Blender. I figured that once the game is in place and operational, I'd want to take advantage of the pre-rendered nature of the assets to make them look a bit better, add more detail etc. So any time-saving in the preparation of those assets would be welcome. I forced myself to learn a bit more about multiple scenes and view layers in Blender 3.x, which, although not quite perfect, suited my needs quite well. So the export of a particular house view is now as simple as...

1. Select the house variant scene (usually Left/Right, but maybe more variants).
2. Select the view layer for each of the three asset views in turn, house, path, and shadow.
3. Hit render, and save the resulting image.

All the work of switching assets on/off, changing to different render options, such as holdout or not, etc. is handled by the view layers.

Back in Godot, I cleaned up the structure of the "house" scenes. Added collision shapes and Area2D nodes to differentiate the type of ground the player is on. This is important in the game, as walking on the grass incurs a penalty. I can also determine when the player is on the pavement and the road, just in case that becomes useful in the game logic somewhere.

Added basic player controls, to test the collision detection and render order, seems to work flawlessly so far.

![Sample house scene in Godot.](/images/blog/screenshot-2023-03-12-at-14.53.45.png "A sample of a house scene in Godot, showing the different collision shapes in use.")



<iframe width="560" height="315" src="https://www.youtube.com/embed/cqc9yrX4SFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
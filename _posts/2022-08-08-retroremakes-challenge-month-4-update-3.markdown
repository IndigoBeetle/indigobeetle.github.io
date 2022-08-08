---
layout: post
title: "RetroRemakes Challenge : Month 4 Update 3"
date: 2022-08-08T19:56:54.868Z
image: /images/blog/splat-2-screengrab.png
excerpt: Added simple player sprite, collision detection and controls, and
  changed map movement to be automatic, based on a timers and a random direction
  change.
tags:
  - Retro
  - Gaming
categories:
  - RetroRemakes
---
Quick update this time round, thanks to the approach used so far, adding collision detection and movement to match the original, for now, was incredibly simple. 

Each non-space tile in the `TileSet` for the map was given a simple square collision shape, this makes everything except white space collidable, which means for now you can't walk through grass etc. to collect, but you'll see in a moment why it's easy change that behaviour. A simple `KinematicBody2D` node represents the player, with a square collision shape, shrunk slightly to avoid floating point inaccuracy causing collision when sliding along a wall. 

There are various ways to move kinematic bodies in Godot, as Splat! is tile based, and Zippy always moves a single tile at a time, I've chosen to make it really simple. The method `move_and_collide`, can be instructed to try the move only, without moving, and report back any collisions. This way I can check the reported collision if there is one, and when the time comes, determine the tile that has been collided with and act accordingly, so for walls and other impenetrable tiles, just don't move, for grass and other collectible tiles, collect and remove them, and for enemies, lose a life. If the check returns null, i.e. no collision, just move Zippy to the actual tile location. The reason for not using `move_and_collide` as normal, i.e. let it move, is that the artificially reduced Zippy collision volume would result in it moving a little out of place as it hits a wall, so losing the accurate tile placement. At the moment, Zippy movement is very simple, jump to the next tile in the direction moved, I'll smooth that out and add some animation when I get to that point.

During the last test, I hooked up the move keys to map movement for testing. In this iteration, I've removed that, and instead added two timers to the game, one that fires at the move speed of the map, initially 0.5 seconds, and moves the map in the current direction by one tile. The second has a random duration, reset after each fire, that randomly chooses a new direction. This simple logic gives a rough approximation of the movement in Splat!, I'll probably have to tweak the logic a bit to make it match, but it suffices for now.

<iframe width="560" height="315" src="https://www.youtube.com/embed/4o3zFUXgZ-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
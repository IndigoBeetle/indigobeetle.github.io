---
layout: post
title: "RetroRemake Challenge : Month 1 Day 20"
description: Day 20 of the first remake, Confuzion by Incentive Software.
tagline: "Confuzion"
date: 2022-05-20 14:58
categories: [RetroRemakes]
tags: [Programming, Software, Retro]
image: confuzion-d20.jpg
excerpt: |
    Lots of changes, mostly refactoring the spark and tile logic to better
    compartmentalise the code and make it reusable for the water droplets.
---


Day20: Been away from the project for a bit, busy with real life stuff. Finally
got some time today to return to it. Spent some time refactoring the code in
various places, mainly around the board, tile and spark. Generally following
good OO practices, reducing leakage, moving logic into the right classes, so
things need to know as little as possible about other elements in the scene,
and take care of what they are responsible for in a clean and disconnected way.

I moved the trace following code out of the tile, and into the spark, then
elevated it to a more generic class that represents the bevaviour of any object
that can follow the traces on a tile, so that it can be reused for the water
droplet. The tile is still responsible for managing the traces and the routes
but it now communicates the route details to the trace follower so that it can
take care of moving itself along the route and communicating back up when it
reaches the end of the route. The board is now only responsible for handling
the switchover bewtween tiles when a trace follower exits a tile, as it is the
only object that has information about the neighbourhood of the tiles, and can
therefore determine where the trace follower moves to next.

Game flow logic has been elevated out of the board, to a common game controller
class that manages things like level completed and failed, etc. 

Water droplets have been added, and are now included in the level definition. 
Any number of water droplets can be added to a level, with starting tile
coordinates and starting side. When a water droplet touches the spark, it 
extinguishes it, leaving behind a jet of steam, and taking away a life.

The game is now almost playable, I need to implement the bonus level logic, and
then I'll upload it and make it available for beta testing invites.

<iframe width="560" height="315" src="https://www.youtube.com/embed/GsWS_naMM4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
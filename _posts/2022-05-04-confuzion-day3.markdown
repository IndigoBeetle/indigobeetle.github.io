---
title: 'RetroRemakes Challenge : Month 1 Day 3'
date: 2022-05-04 10:41:00 Z
categories:
- RetroRemakes
tags:
- Programming
- Software
- Retro
layout: post
description: Day 3 of the first remake, Confuzion by Incentive Software.
tagline: Confuzion
image: "/images/blog/confuzion-spark.jpg"
excerpt: |
  Getting sparks to work and travel the board as tiles move, following
  the tracks on each tile independently.
---

Day2/3: managed to get the spark logic working, this will also be applied to
water droplets when I get to those. 

Not sure how it was handled in the original game, I noticed that the spark 
doesn't follow the curved line in the crossover tile perfectly, so I'm guessing
it's a grid, with special case for when a corner is reached. IIRC much of this
sort of thing was handled back in the day by looking at what is "underneath" the
sprite in video memory and making a decision based on that, so it might look
for an 8x8 that represents a corner and then change the direction of the spark
sprite accordingly. Looking closely at the movement of the tiles, it appears
they may move in three steps, also adding credence to the idea that they are
made up of 3x3 cells.

I've decided to handle it differently, with the resources available to me. 
Instead of the spark movement being the domain of the spark or the board, it's 
the domain of the tile that it happens to be on at the time. Each tile is an
object with embedded logic, data driven, that defines how a spark (or droplet)
entering on any of the four sides behaves. The "route" from each side is 
defined in terms of a bezier curve. 

<figure>
    <img src="/images/blog/tile_routes.jpg" width="400" alt="Tile Routes">
    <figcaption>Tile Routes as Bezier Curves</figcaption>
</figure>
<br/>


When the system hands control of the spark to a tile, it moves it along that
curve, in tile-local space so if the tile moves, the spark moves with it, until
it reaches the end, then tells the system that the spark has left the tile and
informing it which side it left by. The board itself is listening for these
events, as it has knowlege of which tile is in which cell position on the
board. When it receives a "spark has exited a tile" event, it works out which
tile, if any, it moves onto, and tells that one that it now has control over
the spark, and which side it entered from.

To my mind, this is a more object oriented approach to the problem, the tile
knows how a spark, or droplet, should behave when it's traveling on its tracks, 
so it should be up to the tile to control that, not the board, neatly isolating
the knowledge where it ought to be.

As you can see below, this works quite nicely so far, the spark moves with the 
tile, the board is aware when a spark exiting a tile would put it in the space
or at the edge of the board, something the tile itself doesn't know, nor need
to, so the board can take the appropriate action and bounce it back into the 
tile from whence it came.

Up next, bombs...


<iframe width="560" height="315" src="https://www.youtube.com/embed/UYOW8l0y25I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

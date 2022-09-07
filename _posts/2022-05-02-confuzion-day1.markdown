---
title: 'RetroRemakes Challenge : Month 1 Day 1'
date: 2022-05-02 18:54:00 Z
categories:
- RetroRemakes
tags:
- Programming
- Software
- Retro
layout: post
description: Day 1 of the first remake, Confuzion by Incentive Software.
tagline: Confuzion
image: "/images/blog/confuzion.png"
excerpt: |
  Building the foundation, basic components and experimenting with tile
  rendering options.
---

Ok, I've committed to [this](/retroremakes/2022/04/22/retroremakes.html) now,
no going back. I have chosen a game that both holds a lot of memories for me,
has a significant place in my personal career history, and is (I hope) doable
in the timeframe, which should help me to get some library code and assets in
place that will make some of the harder games to come a little more feasible.

Incentive Software were my first employer, back in 1986, straight out of 
college. I still remember spotting the card in the Basingstoke job centre, yes
we used the job centre back then, and immediately connecting the name to
Confuzion, a game I'd purchased and played for hours just a year earlier on
my rubber keyed Spectrum 48k (upgraded from 16k). Riding out to Tadley on my
Suzuki GS125 for the interview. There will be more stories related to that 
part of my career during this challenge year.

Confuzion is a fun puzzle game by Brendan Kelly, Paul Shirley and Ian Andrew.
A fun take on the classic sliding puzzle game, instead of sliding the pieces
to recreate a static image, a spark travels on the traces of the
board pieces, your job is to move the tiles into a configuration that takes
the spark to its goal of igniting a bomb or bombs surrounding the board. Set 
over 64 levels, with increasing difficulty.

I have started by defining a configurable tile, with multiple elements, a
base, the background and any number of layered images on top that represent 
the traces that the spark follows. This way I can make the variety of tiles 
required for the game from a small number of component parts, reducing the
time spent on graphics, while making it easier to update those graphics 
later in the cycle, the fewer images there are, the quicker it is to redraw
or improve them, especially with my limited artistic skill.

Each tile is defined by its trace layers and background image. As things
progress, the tile definition will also include data used to move the spark
along the traces as it enters each tile, but that's still to come.

The board itself is the only other thing implemented so far, it is configured
as a 2 dimensional array of integers, with each value representing a tile
configuration. As a test, I've recreated the first level of the original
game. Also implemented at this point, as you can see in the video below, is 
the simple tile animation. What you cannot see is that the board is 
configurable in width and height, data driven by the board configuration
array. The animation is simple at the moment, but does the job.

Next up...the spark.

<iframe width="560" height="315" src="https://www.youtube.com/embed/rSRCRhPCRI4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
layout: post
title: "RetroRemakes Challenge : Month 5 Update 5"
date: 2022-09-17T22:47:54.257Z
image: /images/blog/deathchase5.png
excerpt: Night and Day, Score and Lives, getting there.
tags:
  - Retro
  - Games
categories:
  - RetroRemakes
---
M﻿ore positive progress this month, things coming together quite nicely so far, hoping to be able to deliver well ahead of schedule this month, which'll be nice, after the last minute rush last month.

T﻿rue to the original game, I've now introduced day and night patrols, which toggle after each successful patrol, which basically consists of destroying the two enemy bikes. The night patrol has a different environment, with a moon and very dark sky, different lighting, and enables a headlight on the bike for atmosphere. It's actually quite a bit more challenging at night than day, not quite sure why, the speed and everything is the same, might be just in the mind, but feels more stressful flying through the trees at night.

A﻿dded scoring and lives, the score increments at a controlled rate, about the same as the original, might need some tweaking. As things are going so well, decided to spend a little time on some interesting little bits of polish, so I created a fun little scrolling number thing, that is used for both the score and the lives, reminiscent of a scrolling milometer on a bike. 

T﻿his latest version also has a much more optimised method for rendering the trees, reducing the tree count, and therefore the draw count, by about 4x, which is critical when deploying to WebGL, so it should feel a bit more snappy in the browser.

S﻿till need to do some more work on the scoring, add proper models for the enemy bikes, add helicopter and tank enemies, a crash SFX, sound and high score system, but looking promising to be able to deliver ahead of schedule, fingers crossed.

<iframe width="560" height="315" src="https://www.youtube.com/embed/dvdwElmqxBI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
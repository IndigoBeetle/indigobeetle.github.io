---
layout: post
title: "RetroRemakes Challenge : Month 11 Update 1"
date: 2023-03-06T11:40:11.182Z
image: /images/blog/screenshot-2023-03-06-at-11.40.45.png
excerpt: Just starting month 11, Trashman by New Generation Software, circa 1984.
tags:
  - Games
  - Retro
categories:
  - RetroRemakes
---
The game for the penultimate month is a fun little arcade game from [Malcolm Evans](https://spectrumcomputing.co.uk/list?label_id=8943), published by New Generation Software in 1984, "[Trashman](https://spectrumcomputing.co.uk/entry/5391/ZX-Spectrum/Trashman)". Malcolm has some great titles under his belt, including the fantastic "[Knot in 3D](https://spectrumcomputing.co.uk/entry/2729/ZX-Spectrum/Knot_in_3D)", a favourite from back in the day, in fact, surprised that one didn't occur to me for the shortlist, never mind, and "https://spectrumcomputing.co.uk/entry/2641/ZX-Spectrum/Jonah_Barringtons_Squash". However, he is probably most famous for the amazing "[3D Monster Maze](https://spectrumcomputing.co.uk/entry/28617/ZX81/3D_Monster_Maze)" on the 16k ZX81, 3D on a ZX81, outstanding!

I loved playing Trashman back in the day, however, I've played it a bit in the last couple of days, and find it quite annoying in many areas, so I'll be looking to hopefully improve on some of the controls and other elements while keeping true to the original where I can.

I've been thinking about how best to implement the core game, specifically 3D or 2D. The original is clearly meant to have a 3D feel, with the character moving in front of and behind the various parts of the scene, giving a pseudo-3D effect, and this would be very easy to do in actual 3D in Godot. But, in part prompted by a friend's challenge, I've been looking at possibly doing it in 2D with pre-rendered assets. I've done similar 2D/2.5D work before, and found it rife with problems, in particular ensuring all the sprites are consistently rendered in the correct order under all circumstances to maintain the illusion of 3D. While it's incredibly simple to do the easy case, just sorting by Y position, in fact, Godot has a node specifically for that, in reality, there are many edge cases where it doesn't work and often ends up requiring assets to be broken down into smaller and smaller parts to enable the control over ordering required, which is fine, except for the fact that I'm on a very tight schedule. However, I've committed to spending a little time up-front exploring the possibility, and believe at the moment that it will be possible with some tinkering to do it that way. The video below shows some of my current findings. I'll continue with this approach for now, but if it becomes onerous down the line with more complex houses and situations causing more trouble than it's worth, I'll switch to 3D, yes I'm lazy, yes I have only a handful of hours this month to work on this, it is what it is.

![Simple House from Trashman Spectrum](/images/blog/screenshot-2023-03-02-at-18.40.16.png "House from Trashman Spectrum")

<iframe width="560" height="315" src="https://www.youtube.com/embed/Lk--YgDIIho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
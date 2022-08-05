---
layout: post
title: "RetroRemakes Challenge : Month 1 Day 30"
description: Day 30 of the first remake, Confuzion by Incentive Software.
tagline: "Confuzion"
date: 2022-05-30 16:20
categories: [RetroRemakes]
tags: [Programming, Software, Retro]
image: /images/blog/confuzion_mix.png
excerpt: |
    Released, one day ahead of the deadline, and I haven't had as much
    fun as this in a long time.
---

After the last post on [day 26]({% post_url 2022-05-26-confuzion-day26 %}) I
was pretty much ready to release, feeling pretty good and 5 days ahead of the
deadline. Then, a curve ball. Two of the beta testers had commented how much
more fun it would be if there was a high score to chase. I hadn't considered 
this given the restricted timeframe, but thought, what the heck, I've got a 
couple of days, let's take a look.

I looked into off the shelf solutions, even tried implementing it in Firebase
but nothing felt quite right. It had to be simple, arcade-style, but with some
server based retention. What I ideally wanted was something that would just
keep a list of the top 10 scores, along with an arbitrary player name, like
the 3 digit names on arcade games of old. Couldn't find anything that would
fit the bill, especially not one that worked over HTTPS, as required by Itch.io.

So, I wrote one. A really simple NodeJS/express app that just takes scores as
simple GET requests, and can return a sorted list of the current leaderboard.
Made it possible to have different game ID's, so the same service can be used
for all the games of the challenge where appropriate, and hosted on a basic
DigitalOcean droplet, $5/m. About as simple as it gets, not at all secure, or
safe, but hey, it does the job for now.

Spent a couple of hours building up a nice name entry screen, influenced by the
original one in Confuzion, and all done in a day. 

Few more tweaks here and there, waiting for more than 15 seconds on the main
menu screen will now switch to the leaderboard view (music continues), and back
again after another 15 seconds, or a keypress. The name entry screen will
automatically appear after game over if you've scored enough to get onto the
leaderboard. 

A few bugs and missed features reported by the invaluable and diligent beta
testers, and all done, ready to release.

Here it is, have fun...

[https://indigobeetle.itch.io/confuzion](https://indigobeetle.itch.io/confuzion)

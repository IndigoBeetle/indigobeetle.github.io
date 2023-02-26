---
layout: post
title: "RetroRemakes Challenge : Month 10 Update 2"
date: 2023-02-26T12:29:24.768Z
image: /images/blog/screenshot-2023-02-25-at-19.07.50.png
excerpt: Month 10 Completed
tags:
  - Games
  - Retro
categories:
  - RetroRemakes
---
Only managed to find small bits of time this month to work on Chuckie Egg. It's been fun, but very little time to put together posts about the progress, so this is a second post just at the point of completing the project.

As I touched on in the last post, I found a good solution to identifying different elements in the game map, by creating different TileSet nodes that exist on different collision layers. This means that I can detect intersections with the different parts of the level in a more controlled way. For example, I can have a different collision shape on the player, that only checks for intersections with other collision shapes on the layer that has the ladders on. I've extended that system a little to include the following independent layers.

1. Platforms
2. Ladders
3. Barriers - invisible blockers at either side of the play area to prevent the player from leaving the screen.
4. Gaps - invisible tiles in the gaps formed in platforms where ladders go through them, these are used to prevent the player from falling down the gaps, as ladders are not part of the physics collision detection.
5. Platform Ends - single tiles that mark the end of platforms, these are differentiated to allow specific control over the player's behaviour when interacting with them, and to allow me to switch interaction on and off with these on demand, for example, when mid-jump.
6. Floor - invisible tiles at the bottom of the play area, below the last platform, if the player hits these, they lose a life.

Having this level of precise control has allowed me to replicate the control system from the original as closely as I wanted while adjusting it in other areas to my preference. Trying to replicate the control system with a pure 2D physics solution would have been almost impossible.

I introduced the enemy "hens", using a control system similar to that described in the previous post for the player. Each hen has a number of collision detection nodes for things like ladders, platforms, etc. plus a larger number of ray-cast nodes (nodes that check for the existence of other collision shapes, such as tiles and other sprites, within their range and direction) as seen below.

![Hen Character](/images/blog/screenshot-2023-02-26-at-12.45.19.png "Hen")

The two larger ray casts are for checking the top and bottom of a ladder, if they report no ladder when the hen is in the 'climb' state, it turns around and starts climbing in the opposite direction. The smaller ones pointing down are for checking if the hen is on the ground or at the edge of a platform. The hens can't jump, so there is no reason to have full 2D physics for them, instead, these ray-cast nodes are used to check for where the hen is, and make changes to the state and animation accordingly. For example, if the leftmost down arrow seen in the image detects nothing while the hen is walking to the left, it determines that the hen has reached the end of a platform, and should turn around and go back.

The other enemy, the duck, was a lot easier. Only active from level 9 onwards, it leaves the cage and flys towards the player constantly, it has controlled acceleration limits, so can't turn immediately, making it possible to evade with care. Otherwise, it has no interaction with any other screen element apart from the player, so that was much simpler to implement, just work out the direction vector from its current position to the player, and apply that, limited by the acceleration variable, to the current velocity, works a treat.

After that, it was just more of the usual stuff from previous games, adding a very simple GUI, intentionally mimicking the original to keep in the right style, wiring up event handlers and the even bus to make changes to, and detecting changes to things like score, bonus, timer etc. Sound effects were added, generated in [BFXR](https://www.bfxr.net/), for walking, climbing, collecting eggs and seeds, and jumping. Wire up the standard leaderboard from my kit of parts, and add a main menu and some music from Pixabay. 

If I had more time, I'd like to have added the 4-player option from the original, shouldn't be hard to add if I get a chance to return to this, but I don't think it detracts from the game much. I'd also like to have had time to add a more modern tileset and sprites and to have the option to switch between classic 'retro' and modern looks.

Anyhoo, it's playable now, at the usual place on itch.io, have a play, and let me know what you think.

<https://indigobeetle.itch.io/chuckie-egg>
---
layout: post
title: "RetroRemakes Challenge : Month 11 Update 3"
date: 2023-03-18T22:51:49.230Z
image: /images/blog/screenshot-2023-03-18-at-22.52.11.png
excerpt: More progress on the gameplay and core structure.
tags:
  - Retro
  - Games
categories:
  - RetroRemakes
---
Some progress this week on the gameplay. I decided on a Kenney.nl set of low-poly 3D assets for the vehicles, I like the look, and the collection has a garbage truck as well as all the other vehicles I needed for this project, so it seemed to make sense. As with all the assets in this project, they are pre-rendered in Blender, using the same techniques described in the previous posts. I have rendered the vehicle and shadow pass for each vehicle type, sedan, sports sedan, SUV, luxury SUV, truck, flat truck, taxi and van, in both up and down directions to allow for use on both sides of the road with proper lighting. In the game, I've created two variations of the scene that represent the vehicle, with the ability to randomly select a vehicle type from the 7 types, one that is static for parked cars, and one that is a kinematic body to allow it to be moved in code and collide with the player. I've not used rigid body physics for this, it's easier to just detect collisions and cause the player to lose a life when hit by a car. Crucially, this means that only if the player is hit by the car do they lose a life, not if the player bangs into the side of a moving car, which is the same behaviour as the original.

I also spent far too long tinkering with the pickup/drop bin mechanic. I'm still not happy with it, but it is pretty close to the original, which I actually think is one of the weaknesses of the original, so I still might change it again. The problem with the original, and with this implementation, is that there is no conscious choice to collect/drop, i.e. a fire button or similar, it just collects/drops when the player moves over the bin, or the area where the bin was, this means it's easy to keep picking up and dropping the bin as you move over the area, which is annoying to me, but again, consistent with the original, so I'll leave it for now.

I added some preliminary animation to show the dumping of the bin contents into the garbage truck, the player speeds up when the bin is empty and slows down when carrying a full bin, as normal.

Next up is the interaction with the residents, should be relatively simple, and implementing the scoring and timing, and animating the player. Then I have a couple more house variants to build in Blender, a pub and a cafe, and I can create the various levels, it should be mostly done then, apart from the usual stuff of connecting up a leaderboard.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Vf2vbuwWlho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
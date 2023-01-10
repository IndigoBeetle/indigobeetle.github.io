---
layout: post
title: "RetroRemakes Challenge : Month 9 Update 2"
date: 2023-01-10T20:29:58.568Z
image: /images/blog/thrust2.png
excerpt: Second progress update for month 9 of the RetroRemakes Challenge, Thrust.
tags:
  - Retro
  - Gaming
categories:
  - RetroRemakes
---
Lots of progress in the last couple of days, some of which is under the hood, in preparation for multiple planets.

The short video below highlights some of the new changes. The shield is functional, had a lot of fun writing the shader for that, it's basically a square polygon, with a custom shader creating the pulsing shield effect, might spend a little more time tweaking that, but it's more or less what I was aiming for.

Fuel cells are implemented, as with most of the sprite things, no graphics yet, just a green polygon, but fully operational. When you enable the shield while in proximity it refuels your ship until it is empty. I plan to have some indicators for proximity and fuel reserves which will animate as you refuel.

The power plant, that powers the limpet guns, is implemented, again placeholder polygon, but you can shoot it, and the system shows a "disabled" message for a short period, the more times you shoot it, the longer the guns are disabled. However, as with the original, if you shoot it too many times, it goes critical, and a countdown starts after which time the planet explodes and you lose. Limpet guns currently go red to indicate they are disabled, I plan to have some indicators in the final graphics for this.

The most fun visual part this update for me was the hyperspace effect which gets used when you escape the planet, whether you have the Klystron Pod or not. I tried lots of things to get the effect I was after, and in the end decided to make the starfield render into a separate viewport. Godot has a cool feature that allows you to have multiple viewports, each with their own camera, and possibly world, great for mini-maps etc. I used it here to create a completely separate layer that the starfield shader is rendered into, and then displayed as a ViewportContainer, which is a GUI element that can be placed to show the results of rendering into a custom viewport. It looks the same as it used to, when the starfield was rendered directly to the main viewport (the screen), but, I now have the ability to independently turn off background clear just for the starfield. So when the ship enters hyperspace, I turn off the background clear, turn off the user controls of the ship, and apply an rapidly increasing upward thrust to the ship. The result, as the camera still follows the ship, is that the starfield is rendered without clearing each frame, creating those cool streaks familiar with hyperspace effects. Simple(-ish) but effective.

Next I plan to make a spectacular planet explosion effect. If you grab the Klystron Pod, and then shoot the power plant on the way out, and enter hyperspace before the countdown runs out, the planet explodes, and you get an extra bonus score. This is likely to be very difficult to achieve, especially in later levels, so I feel it deserves a cool effect.

<iframe width="560" height="315" src="https://www.youtube.com/embed/UvS44T0dmeU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
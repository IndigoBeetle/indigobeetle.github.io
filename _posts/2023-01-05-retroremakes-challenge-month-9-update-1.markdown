---
layout: post
title: "RetroRemakes Challenge : Month 9 Update 1"
date: 2023-01-05T10:32:57.209Z
image: /images/blog/thrust.png
excerpt: First challenge of 2023, Thrust from Firebird, circa 1986
tags:
  - Retro
categories:
  - RetroRemakes
---
This month was between two games, I even actually started prototyping the other one before settling on [Thrust](https://spectrumcomputing.co.uk/entry/5245/ZX-Spectrum/Thrust) by Firebird, circa 1986, I'm not going to say what the other game was, as I may return to it in the coming months. 

Thrust was a budget title, originally selling at £1.99 on cassette, on their "Silver" range. Although the [Spectrum Computing](https://spectrumcomputing.co.uk/) listing shows Gravitar as an influence, I suspect it was more influenced by Atari's [Lunar Lander,](https://en.wikipedia.org/wiki/Lunar_Lander_(1979_video_game)) right down to the vector graphics style.

I've decided not to follow the vector style for this one, instead opting for pixel graphics. I've currently chosen a cave tileset from an artist on itch.io, not sure if I'll stick with it yet or not, we'll see, but it serves a purpose for now. As you can see from the video below, I've managed to get a basic ship mechanic working with turn and thrust controls, configurable gravity and thrust power, so I can tweak it all later to feel right for the gameplay. The camera follows the ship, with a little drag for effect, as opposed to the screen-to-screen, which was a common trick to overcome the limitations of the Spectrum's graphics.

I've employed the standard 2D physics simulation in Godot to implement the tractor beam, also shown in the video before, which attaches to the "Klystron Pod" when close enough and drags it off into space. The "Limpet Gun" is operational, it fires roughly in the direction of the ship when it is in range, copying the very poor marksmanship of the original, which is good, as it only takes one hit to destroy your ship when your shield isn't activated.

The background was fun, it's a custom shader, written in the Godot shading language, it has three layers, with different sized stars, using random star placement within a grid, to avoid clumping, and shifting each layer's UV at different speeds according to the camera movement, to give the parallax effect. Simple but effective.

I just need to implement the power plants that provide power to the Limpet Guns, and the fuel cells, and then I can transcribe the other 5 planets.

<iframe width="560" height="315" src="https://www.youtube.com/embed/AmJIZfjqPpY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
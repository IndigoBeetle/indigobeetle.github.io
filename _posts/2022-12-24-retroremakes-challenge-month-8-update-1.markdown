---
layout: post
title: "RetroRemakes Challenge : Month 8 Update 1"
date: 2022-12-24T17:00:44.847Z
image: /images/blog/screenshot-2022-12-24-at-17.04.50.png
excerpt: Change of plans, remaking a holiday themed Spectrum game.
tags:
  - Retro
  - Games
categories:
  - RetroRemakes
---
I originally had a different game planned for this month, but as the plans for the festivities began, it occurred to me that it might be a good idea to try to do something with a Christmas theme. I researched as much as I could, and engaged the help of a Spectrum focused Facebook group, to see what options where available. Not a great deal as it turns out. There are some interesting looking ones, including [The "Official" Father Christmas Game](https://spectrumcomputing.co.uk/entry/3493/ZX-Spectrum/The_Official_Father_Christmas_Game) (not sure who made it official, but hey), which didn't look like too much fun to play. A couple of Monty Mole games and a Horace game, which I wouldn't touch with a barge pole for fear of legal ramifications. So, after some to'ing and fro'ing, I settled on [Special Delivery](https://spectrumcomputing.co.uk/entry/4700/ZX-Spectrum/Special_Delivery), a relatively simple but fun game with three stages and some potential to make it interesting and fun to play.

Of course, delivery before the big day was key, as well as having lots of other things to do this month, so only the single blog post for this one, and after delivery as well, very poor show, but it is what it is. I just didn't have the time to do blog posts and get the game out in time.

Mostly the game went quite smoothly, the hardest part was finding good assets, and as such, this is the first of the remakes that I've ended up paying a small amount for some assets to get a leg up. I did try to do some basic modeling and animation of a santa and reindeer, but it quickly became apparent I was never going to manage to do anything that looked vaguely good in the time I had, so I went to cgtrader and found some ready rigged and animated, low poly models, https://www.cgtrader.com/raccoon456. I also pulled in some other assets including music from a Pixabay artist, some 2D art from opengameart, and some seasonal backgrounds, ready for parallax use, from Craftpix. All the credits are listed on the main menu, and duplicated below.

Unfortunately, this game also has the questionable accolade of being the first one that I found an issue with Godot during development. Nothing too serious, but frustrating. There is a built-in capability to do parallax scrolling in Godot in the 2D engine, which is meant to make it easy to create multi-layered scrolling backgrounds with different speeds per layer to give a depth effect. However, it turns out that it is a bit buggy, in particular, it didn't work well when using a 2D camera and zooming in or out, which I needed to do to get the scale right. No big deal, the tools in Godot make it relatively painless to code a custom one, so I did, for the sleigh stage. I also got to tinker with 2D skeleton animation for the first time. The sleigh is a single sprite, rendered out of Blender, and is applied to a simple multi-segment polygon with a skeleton applied. Deforming this skeleton allows me to bend the individual reindeer up and down, which I used to create the animation you see when going up and down, giving the impression that the lead reindeer climbs first, followed in turn by each subsequent reindeer and finally the sleigh, which is more pleasing than as simple fixed tilt.

I had a lot of fun with the flame particle system for the chimney stage, and in particular the animation where Santa gets caught by the flame, 🔥😜. Apart from that, the chimney stage was pretty simple. By using a repeating texture on a couple of sprites, I found I could easily control in code how long the chimney is and grow the size of the sprites accordingly at startup. As it turned out I didn't end up using that in the release, the depth is fixed, but it's there should I decide to return, perhaps to increase difficulty as you progress.

The house stage presented a few problems. I went back and forth on how to implement that for far too long, considering full 3D, 3D scene with 2D characters, 2D with multiple layers for sprites to allow Santa to walk in front of some wall parts and behind others. Eventually I settled on a simple 2D polygon approach, each part of the house consists of a number of hand drawn 2D polygons, textured with some simple generated gradient textures, and depth ordered to ensure each part draws in the right order to give the illusion of depth. As it turned out, this approach retained the look and feel of the original more as well, so I am happy with the decision, given the circumstances, with more time I'd probably have done things differently.

So there it is, 8 months done, 4 to go, but I'm going to have a few days break before starting the next one. 

Happy Holidays everyone, and a happy New Year! 🎉

<https://indigobeetle.itch.io/special-delivery>



### Credits

Original Game Design : Dalali Software Ltd. 1984
Remake : Paul Gregory

Artwork:
	Santa/Reindeer Models : [racoon456 (cgtrader)](https://www.cgtrader.com/raccoon456)
	Presents : [knik1985 (opengameart)](https://opengameart.org/content/sweets-and-gifts)
	Christmas Tree : [pechvogel (opengameart)](https://opengameart.org/content/x-mas-tree)
	Key : [Wolf_Sleuth (opengameart)](https://opengameart.org/content/key-sprite)
	Sleigh Game Backgrounds : [CraftPix.net](https://craftpix.net/freebies/free-horizontal-2d-game-backgrounds)
	Additional Artwork and Animations : Paul Gregory

Music:
	[Geoff Harvey (Pixabay)](https://pixabay.com/users/geoffharvey-9096471)

SFX:
	Lightning: [Simon Spiers (freesound.org)](https://freesound.org/people/Simon%20Spiers/)
	Additional SFX : Paul Gregory
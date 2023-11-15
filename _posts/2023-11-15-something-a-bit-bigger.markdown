---
layout: post
title: Something a bit Bigger
date: 2023-11-15T12:24:09.599Z
image: /images/blog/screenshot-2023-10-29-at-12.37.33.png
excerpt: Taking on a longer-term challenge after so many short-term projects.
tags:
  - Games
  - Gaming
  - Project
categories:
  - GameDev
---
While contemplating something new to start now that the RetroRemakes challenge is finished, it occurred to me that pretty much all of my personal projects of late have been very short-term challenges. From building a Spectrum game per month for 12 months, to taking part in time-limited game jams, they've all had the same underlying premise, do something fast and loose. It's time to do something that requires a bit more dedication and commitment and can keep me engaged for a longer period.

I'm a big fan of racing games, particularly arcade racing games over physically accurate ones. I used to enjoy Colin McCrae back in the day, the original Playstation (before it was called the PS1) version, but that was my limit in terms of realistic racing, the rest don't really hold my attention too long. Now, Mario Kart, that's a different matter, that's fun and engaging. The fact that the racing doesn't have to be realistic means it's more forgiving and entertaining, combined with the additional features like jumps, water, power-ups, etc. makes for a fun game, now that's something to keep me engaged.

And so it begins. A couple of key decisions up front, it won't be mobile-first, I'm going for PC/mac, possibly console at some point if that becomes feasible. It will be Godot because it's my favourite engine, I'm pretty adept at working in that engine now, and it is always fun to work in, not something that can be said for the "other contenders". As it's going to be long-term and non-mobile, I've decided to go with Godot 4. Godot 4 is not great for web or mobile development at the moment, but is the future and is good for desktop, so I'll stick with that and work with it as it develops, given this is likely to be a project that lasts in the order of years, it'll almost certainly be the case that by the time I'm ready to release anything, Godot 4 will be the defacto standard version.

I started out by trying some different arcade-style racing physics to see what felt best. I tried a few approaches, including the built-in vehicle physics option in Godot. One that seemed to show promise was to have a collider at each wheel and apply forces to them to maintain separation from the road independently while applying simple linear forces to the body both in a forward and sideways direction based on the velocity and the input. This resulted in a pretty controllable car that felt quite natural, but I wasn't happy with the ability to fake things like drifting and so on without lots of mucking about. The built-in vehicle physics is nice, but again felt too focused on realism, which meant I found it challenging to fake non-physical effects that are fun in-game but don't make sense in the real world. I did some more research and found a few YouTube videos that seemed to imply you could achieve a good result by just using a simple sphere, applying forces to that, using it as the collision volume, and then hiding it and placing the car model in place, along with some tweaks to adjust the orientation of the car accordingly. This didn't seem feasible to my mind, but I gave it a go anyway and was pleasantly surprised. It turns out that pushing a large ball along a track does work really well and feels easy to control and fun. So, this is the method I'm going with for now, it'll need a lot of tweaking to get it just right, for example, it can't currently do loop-de-loops, but it's simple enough at the core that it lends itself well to tweaking and faking.

<iframe width="560" height="315" src="https://www.youtube.com/embed/KO8mlMcO9YM?si=VO0ww9UP0oW-L_Vt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Next up, the track. My initial instinct was to make the track out of connectable parts, mainly from my work on Loco Logic, where I implemented a system for connecting track parts in the right orientation to form a valid track. 

![Track Parts](/images/blog/screenshot-2023-10-17-at-13.31.04.png "Track Parts in Blender")

I quickly found this to be frustratingly restrictive, especially when looking at that glorious variety of track designs in Super Mario Kart Deluxe. I had done some work before on procedural mesh generation, so thought it would be worth giving that a go. Starting with a Path3D (a built-in Godot node) I experimented with extruding a simple profile along that path to see how it worked and how flexible it might be. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/KLc8OCyO9c4?si=-A2jpNBXpAJwZpYi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Initial impressions were good, but for some restrictions and limitations. For example, it's difficult to get reliable banking using this method from the built-in curves. So I took it a step further and created some in-editor tooling that allowed me to move and orient points on the track that would influence the curve and size of the track. By rotating and scaling the points, and then interpolating between them when placing the profiles, I found I had much more control over the final shape of the track. Once this was in place, adding new features for placing things along the track and extruding other shapes fell into place quickly, resulting in a reasonably powerful track editor that will continue to grow with new ideas during the project.

<iframe width="560" height="315" src="https://www.youtube.com/embed/nEtcNFMClgQ?si=NSExvx77m87320cK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Combine this with some new changes to the car controller to implement animation states for things like turning, and it's starting to look a lot like a game.

<iframe width="560" height="315" src="https://www.youtube.com/embed/d_1kUN3prMk?si=cYKJ4TMd6pOPhQHm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

https://www.youtube.com/playlist?list=PLXeWQa8fW6oZKxyrlCzRQh9oSXfMkXtdm
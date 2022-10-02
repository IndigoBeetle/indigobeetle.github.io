---
layout: post
title: "RetroRemakes Challenge : Month 6 Update 2"
date: 2022-10-02T12:27:18.484Z
image: /images/blog/driller2.png
excerpt: Significant progress on importing the original Freescape data, feeling
  very positive about this month.
tags:
  - Retro
  - Games
categories:
  - RetroRemakes
---
H﻿ot on the heels of the last update, wanted to show just how quickly I'm progressing on this one, must be because it excites me so much.

I﻿'ve decided to take a slightly different approach to the updates and posts about this month's project, and try my hand at making more of the video aspect. The video below includes a lot more detail about how I'm building out this game, the tricks and techniques I'm using, and most importantly, commentary. I'm not a big fan of my voice, so if it grates too much, let me know and I'll switch back to more text and less talk 😂

A﻿s I mentioned in the last update, a couple of talented developers have already done some of the legwork of reverse engineering the Freescape format from the data held in the Spectrum game. I've used that as a kickstart to get me going, mainly the handy fact that they've found the exact address of the data on the Spectrum, which was invaluable. Using this information, I was able to dump a snapshot of the game running on the FUSE emulator and load the binary data into a Python script I'm writing to extract the data from the Freescape database into a more easily processed JSON format. This python script will output a single JSON file for each room in the game, and a partner GDScript script will load the JSON, process it, and generate the necessary objects and meshes in Godot. 

T﻿he python also extracts the FCL bytecodes for each object and associates them with the objects it creates. Alongside the room imported, I've created a simple FCL interpreter script in GDScript that will interpret the FCL bytecodes and execute them when an object is interacted with. These two elements form the basis of getting 80% of the game running very quickly. There are lots of aspects of Driller that aren't encoded into the database/FCL, such as placing drilling rigs, controlling the two different vehicles, etc. but having such a significant leg up by using the original database, I'll have more time to get those right, and add some "modern system polish".

I﻿t's quite amazing that Ian managed to create such an engaging puzzle game with such a limited FCL command set, I recall we extended this command set extensively through the life of Freescape, culminating in the most powerful incarnation for the 3D Construction Kit, here is a list of the commands he had to choose from, note in particular, very limited flow control, no else, the "if" commands were all or nothing, if the test was negative, the entire subroutine just exited, this must have required some dextrous juggling on Ian's part.

```
1	+SCORE  a b c		;Add value to the score
2	+ENERGY	n		;Add value to energy
3	TOGVIS	obj		;Toggle visibility of object here
4	VIS	obj		;Show object here
5	INVIS	obj		;Hide object here
6	RTOGVIS room obj	;Toggle visibility of object elsewhere
7	RVIS    room obj	;Show object elsewhere
8	RINVIS  room obj	;Hide object elsewhere
9	INCR	var		;Increment variable
10	DECR	var		;Decrement variable
11	IFEQ	var value	;Only continue if variable matches value
12	SETBIT	bit		;Set a bit flag
13	CLRBIT	bit		;Clear a bit flag
14	IFBIT	bit value	;Only continue if bit matches value
15	SOUND	n		;Play sound
16	DESTROY obj		;Destroy object here
17	RDESTR  obj		;Destroy object elsewhere
18	GOTO	room entrance
19	+SHIELD n		;Increase/decrease shield
20	SETV	var value	;Assign value to variable
21	SWAPJET			;Switch vehicle
22-24				;Unused?
25	SPFX	n		;Used to flash the border or change the
				;room colours. SPFX works like this:
				;	SPFX xyh: Set palette (x) to palette
				;		  (y). For example, 
				;	SPFX 31h sets room ink (palette 3) to
				;       border-under-fire (palette 1).
26	REDRAW			;Redraw window
27	DELAY	n		;Wait n/50 sec.
28	SYNCSND	n		;Play synchronised sound
29	TOGBIT	n		;Toggle bit flag
30	IFVIS   obj		;Only continue if object visible
31	IFINVIS	obj		;Only continue if object invisible
```

O﻿ne interesting problem that I've had to overcome, which is similar to some of the issues I faced with Splat, in that the games were clearly designed to work within the constraints of the systems of the time. With Splat it was the convenience of just placing graphics onto the screen by updating memory addresses, as opposed to drawing sprites on modern systems. With Driller, the problem is that the rendering system in Freescape couldn't possibly have a Z-buffer as memory was way too precious, and processing power would never have supported it anyway, so polygons were sorted into a suitable order and drawn back-to-front. This meant things like doorways, represented as simple black rectangles, could be placed directly on top of the cubes or pyramids they allowed entrance to, the cube would be drawn first, then the rectangle, all good. On modern systems, this is not the case, drawing order is entirely the domain of the Z-buffer, so two polygons sitting on a coincident plane cause all sorts of problems, the system cannot decide which to draw first, so you end up with a mess, known as "z fighting".

![Image showing z-fighting artifacts](/images/blog/zfighting.png "Z Fighting Artifacts")

O﻿ther than that, things have progressed incredibly quickly, as you can see from the video below, I have an almost complete room importer working, the basics of an FCL interpreter, a simple FPS controller for the ground based vehicle.

I﻿ plan to work on the remainder of the FCL interpreter next, and get navigation between rooms working, to allow me to have all the rooms in place at once and travel between them to experience the whole gameplay, and puzzle solving experience.

<iframe width="560" height="315" src="https://www.youtube.com/embed/C5wUx1ZMmYs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
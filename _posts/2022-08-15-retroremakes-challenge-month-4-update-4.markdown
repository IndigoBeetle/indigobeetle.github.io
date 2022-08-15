---
layout: post
title: "RetroRemakes Challenge : Month 4 Update 4"
date: 2022-08-15T15:17:18.988Z
image: /images/blog/scan2022-08-11_154327.jpeg
excerpt: Matching the map movement logic to the original, thanks to a printout
  of the original BASIC code.
tags:
  - Retro
  - Gaming
categories:
  - RetroRemakes
---
Last time I explained that I implemented a really simple map movement into the game, as a placeholder, roughly emulating the original random movement. Since then I've been in touch with [Ian Andrew](https://www.ianandrew.com/), the original designer and co-coder of [Splat!](https://www.ianandrew.com/copy-of-mined-out). Thankfully, Ian is incredibly diligent at storing and retaining assets from various prior projects and ventures, including Incentive Software and Splat!. He even has all the BASIC code for the game, printed out on tractor feed fanfold printer paper, printed in dot matrix. The image above is a snippet of that code that Ian identified and scanned for me to explain the logic behind the map movement. 

It is written in Sinclair BASIC, a variant of BASIC designed by Nine Tiles for Sinclair machines in 1979. The relevant code in that snippet is between lines 8001 and 8300. The first few lines initialise a bunch of variables used in tracking the map movement.

* TNM - total number of moves.
* NM - number of moves in the current direction.
* D - an array holding the number of moves available in each direction, UP, DOWN, LEFT and RIGHT.
* OLDDIR - the previous movement direction.
* DIR - the current movement direction.
* NDC - number of direction changes

The array D contains the number of available moves in each direction, which is balanced to ensure a reasonable amount of movement in each direction given the non-square aspect ratio of the window. Generally, the code picks a random new direction, 1-4, and ensures there are available moves in that direction. It checks if the previous direction was UP/DOWN and the new direction is also UP/DOWN or the previous was LEFT/RIGHT and the new is also LEFT/RIGHT, and if so, tries again to ensure each change is a change in axis. Then it chooses a number of moves in that direction, between 1 and the number of moves available in that direction, and proceeds to move the map in the chosen direction the selected number of moves.

There is another interesting special case in that code, at line 8045, that checks if the player is at level 1 and 5 direction changes in, which is typically about 60% I believe, and forces the direction then to ensure the lower left and right corners of the map have a good chance of being visited.

There is an interesting technique at play in the code, that took me a little while to remember from my Spectrum programming days. You'll see the use of variables C0, C1, C2 etc. These are constant variables for the low integers commonly used in the code. The reason for this technique is to save memory, remember these machines only had 48k available. In Sinclair BASIC an immediate numerical value in the code is encoded as follows:

* 1 Byte for the ASCII representation (more for numbers outside the integers 0..9)
* 1 byte `0x0E`
* 5 byte floating point representation

So, `1` would require 7 bytes, whereas the variable name `C1` would require only 2. If the constant value `1` is used frequently in the program, the saving of using a single fixed constant variable would be significant, so it's common practice to create constant variables for the single digit numbers at the start of a program and use them wherever possible, such as a comparison with zero, etc. 

With all this in hand, I have now recoded the map movement logic to exactly match the original intent.
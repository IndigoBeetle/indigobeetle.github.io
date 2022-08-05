---
layout: post
title: "RetroRemake Challenge : Month 2 Day 12"
description: Day 12 of the second remake, Jumping Jack by Imagine Software.
tagline: "Jumping Jack"
date: 2022-06-02 12:08
categories: [RetroRemakes]
tags: [Programming, Software, Retro]
image: /images/blog/jumping_jack_scroll.png
excerpt: |
    Implemented the poem/rhyme that gets revealed as you progress in the game,
    as well as level support and enemies.
---

Just a quick update this time, this game is progressing really fast due its
simplicity. 

This time round I implemented the very simple "hazards" or baddies. They are
really dumb, just appear at random based on the level, one new hazard per level
after level 0, and move right to left and go up the platforms as they go. I've
created only a single, static image for the enemy at this point, in Blender, of
a toy train. There are various mixed hazards in the original game, with no
obvious theme, so I've decided to apply one, toys. As far as I can tell all of
the hazards in the original game can readily be created as toys. Planes, trains,
dinosaurs, etc. I'll be adding animation to them as part of the polishing phase.
They don't need to interact with the gaps in the platforms at all, so movement
and logic is very simple, just using a Godot Area2D node to spot overlap with
the player.

As this is the majority of the parts in place for the actual game-play, the 
remaining part was to implement the reward that you get as a player as you 
progress through the levels. This takes the form of a four verse rhyme that is
revealed line-by-line as you progress through the levels, 
"The Ballad of Jumping Jack". I wanted to make this look nice, so spent some
time experimenting with different reveal animation methods. There are some nice
features in Godot, one of which is the ability to create custom "effects" that
you can apply to RichTextLabels. These are small pieces of code that can 
influence each individual character in part of the text in a rich text label,
identified using custom "bb-code" markup. However, it's a pretty new and
underused feature, and as such is missing some key functionality, in this case
the ability to determine the length of the text segment the effect is affecting.
I tinkered for a while, and found that I could code a nice "reveal" transition
by doing it in two phases. The handler method on your custom effect 
`_process_custom_fx`, gets called once per character per frame, with details of
the character, its location in the text, the elapsed time etc. I found I could
allow this to run through the entire text segment once, setting the alpha to 0.0
and thus making the entire message segment invisible, and checking if the 
character index ever became less than the last one, at which point it's 
reasonable to assume the frame has finished and the next frame started. Using 
this method I could up-front determine the length of the text segment, and 
using this I could calculate how to fade the characters in over time so that
the entire message segment is fully visible in the chosen time. So, armed with 
this, I coded up a simple fade-in and float down animation for each character
over time so that each line seems to magically appear on the page as it 
animates, as you can see from the short video below. The bb-code to do this
simply becomes...

```
[fade-in duration=5]This would be a line of the rhyme...[/fade-in]
```


...where `[fade-in]` is the custom bb-code tag registered with my custom effect.

The concept of elapsed time in a RichTextEffect is started as soon as the node
enters the tree. So to control the animation start time for each line, I 
broke the rhyme into one RichTextLabel per line and saved them as Scenes in 
Godot, and then in the code that manages the scroll itself, load each one in 
turn as a level is completed, add it to the children list for the scroll
container node, adjust the scroll to ensure it is visible, and everything else 
just works, the system sees that the line has just been added to the tree, so 
starts the timer and the effect processes the characters accordingly to fade
the new line into view.

<iframe width="560" height="315" src="https://www.youtube.com/embed/yz19z4R8Xdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

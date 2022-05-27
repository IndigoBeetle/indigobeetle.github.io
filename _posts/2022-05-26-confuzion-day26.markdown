---
layout: post
title: "RetroRemake Challenge : Month 1 Day 26"
description: Day 26 of the first remake, Confuzion by Incentive Software.
tagline: "Confuzion"
date: 2022-05-26 23:48
categories: [RetroRemakes]
tags: [Programming, Software, Retro]
image: confuzion-d26.png
excerpt: |
    On the final stretch now, music and sounds are mostly in, graphics
    are all but done, just on the last bit of trying to match the gameplay
    to the original as closely as is reasonable.
---

Day 26: I've spent a little time adding a couple of tile variations, just
to make it a little more interesting. Ideally I'd like to have at least 8
variations, one for each "level" of the building, but time won't allow that
so will be reusing the three I have, wire mesh, wood, and glass. Also added
a simple concrete background behind the movable part of the board, to give
something to see through the transparent tiles, and some fake shadows to give
the impression that the tiles are above the new concrete background. That's 
going to be pretty much it for the visuals now, need to put a pin in it, or
I could tweak indefinitely. Same for sound, created some simple sound effects
for the various parts of the game using a Godot plugin that mimics the SFXR
sound generator within the Godot engine, very useful.

For music, I went round the houses a bit, but eventually settled on a method
that I think kinda works. I didn't want to take the MP3 of the actual band
music, which was originally provided on the B side of the cassette, mainly 
to avoid copyright issues, but also because it doesn't fit in with a retro 
style game. Unfortunately, I have zero musical ability, so making the music
myself was out of the question. So instead, I dug around and found a C64 .sid
file of Rob Hubbard's music, which is based on the band music. Using 
[sidtool](https://github.com/olefriis/sidtool), I was able to convert that to 
a passable MIDI file, then I tried various ways to get that into the game, 
including an actual 
[midi/soundfont](https://godotengine.org/asset-library/asset/240) plugin for 
Godot that is quite cool, will definitely return to that later, and a similar
[.mod file player plugin](https://godotengine.org/asset-library/asset/841), 
again, which I will definitely return to, maybe I can bring WeTracker and
this project together somehow. Anyhoo, in the end I settled on bringing the
midi file into GarageBand and just switching up the instruments and making some
minor tweaks to get it to sound as right as I can with my wooden ears.

The final piece of the project is to get the game balance to match the original
as closely as possible. I was able to match the level designs exactly, thanks 
to both the [map file](https://maps.speccy.cz/map.php?id=Confuzion), and FUSE
with some POKEs to get to play each level, and some help from my daughter to 
go through all 64 levels and take setup notes. The problem came when trying to
work out the fuse length, which appears to be defined manually for each level. 
A quick check showed that there was no apparent pattern to the length, i.e. it
doesn't just get faster as you progress, it seems to be defined per level,
presumably based on the difficulty of the level and other factors. I couldn't
time each level, as if the spark hits a gap or a fixed tile, it gets damaged
and the fuse drops suddenly, and on later levels it's all but impossible to 
avoid this. So I took a more involved route. I used the debugger in the FUSE
Spectrum emulator, along with some information from the POKEs file to hone in
on where the fuse countdown is processed in the original Z80 code. Tracing
through this for a bit, I found the code that controls the speed. 

<figure>
    <img src="/images/blog/confuzion_debugger1.png" width="100%" alt="Debugger">
    <figcaption>The fuse code in Z80</figcaption>
</figure>
<br/>

The code highlighted in green is the subroutine that counts down the fuse. The
first line loads the A register with an immediate value, more on how this works
in a moment, decrements it, and if it's not zero, returns. If it is zero, it
resets the counter, decrements a value in memory at 0xCD17, which always starts
as 0xFF, and then goes on to do some other stuff about updating the fuse 
graphics. The clever bit, that was quite common back in the days on these 
limited machines, is the "self modifying code" between 0xD46A and 0xD477. If 
you look closely, you'll see that the lines of code at 0xD46D and 0xD474 both
write into a value at 0xD46B, which is in the code, the immediate value of the
LD A,n instruction at 0xD46A to be precise. So the number 05 that is pointed to
by the arrow in the image, is updated each time through the loop, and reset 
when the loop finishes. So if I'd stepped through this code, after executing the
instruction at 0xD46D, the line at 0xD46A would read "LD A,04". This was done
to both save on space, fewer instructions, the alternative would have been to
load from a separate memory location into A, which would require either an 
address in one of HL, BC or DE, another 3 byte instruction, or a load into A
from an external address, which is 3 bytes as opposed to the 2 bytes the
immediate load requires, and would need a byte of memory set aside as variable
storage. I know it doesn't sound like much, but in the world of 48KB memory, it
matters. Secondly, speed, loading A from an external address each time through
this loop would require more clock cycles than loading immediate, again seems
crazy, but it matters. 

Anyway, I digress. Looking at the instructions at
0xD471 and 0xD474, you can see the countdown value is reset from a memory 
location at 0xCD14, this defines the speed of the fuse, as the countdown will
be called from an interrupt, most likely the screen refresh interrupt that
fires every frame as the CRT beam hits the bottom of the screen and returns to
the top, the only real timing facility on the Spectrum IIRC. So, armed with
this, "all" I had to do was to run each level, using the level select POKE, 
pause the game at the start in the debugger, and inspect the value at 0xCD14 to
find the speed of each level. My first assumption was that this subroutine 
would be called every screen refresh interrupt, 50Hz, but the resulting fuse
duration didn't tie into what I was seeing in the game, in fact it was about
twice as fast. So I assume that the fuse subroutine is only getting called 
every second refresh, 25Hz. This gels with the numbers I extracted, the lowest
of which is 02, so running the subroutine every refresh would be wasteful. 
Plugging this assumption into my code resulted in fuse durations that seem to 
match exactly.

Just final touches to be added now. Thanks to some beta testers, the game seems
to be fairly stable and playable. So fingers crossed, should be able to finish
this today, Friday 27th, and get it out with a couple of days to spare. More
importantly, with some new weapons, tactics and techniques to take into Month2
to hopefully make the next one even smoother.
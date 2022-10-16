---
layout: post
title: "RetroRemakes Challenge : Month 6 Update 4"
date: 2022-10-16T17:56:04.079Z
image: /images/blog/driller4.png
excerpt: Probe/Jet, Controls, FCL and scene import control, lots happening.
tags:
  - Retro
  - Games
categories:
  - RetroRemakes
---
Another update from the Driller project. While working on the game this week, I've noticed one thing, I still have to import the original Freescape database quite regularly, be that due to a change in the Python script that interprets the original binary database from the Spectrum, or a change to the Godot script that then imports that JSON and builds the Godot scenes. As I want to, at some point, start making some customisations to the imported scenes, to change things like materials and perhaps some shapes here and there, I'm concerned about the timing. I can't wait for the import to be perfect before I start making the customisations, I've no idea when it is actually perfect, but I don't want to end up having to apply changes multiple times when they are wiped out by a re-import.

To overcome this, I've implemented a system that allows me to create a separate, hand written, JSON file that provides some hints to the import process to control what it does as it imports. Mainly, what gets wiped and recreated vs persisted and just updated. Sometimes it's important to do both, depending on the reason for the import, so I couldn't just go with the retention mode wholesale. I've only implemented a few hints so far, and will undoubtedly implement more as I progress, but for now it's quite simple, but already very useful. An example JSON file is below, for Amethyst.

```json
{
	"QUAD-17": {
		"noCollision": true,
		"hideMesh": true
	},
	"QUAD-18": {
		"noCollision": true,
		"hideMesh": true
	},
	"CUBE-5": {
		"keepMeshInstance": true
	},
	"PYRAMID-11": {
		"keepMeshInstance": true
	}
}
```

The normal process for importing a room and its objects is to create a container node for the object, which is either a Godot Spatial or StaticBody, depending on the type, and then add children nodes for things like meshes and collision shapes. Prior to this change, the import process would wipe out all objects and rebuild them from the data in the Freescape database. Now, if an entry exists in the JSON file for a given object, the container node is retained, along with any manually created children, and only the automatically created nodes from a previous import, such as mesh and collision shape, will be optionally wiped out and recreated. This allows me to do all sorts of things, like create custom meshes to represent a particular object, and have them persist across imports. As you can see from the example, it also allows finer control over the behaviour of the created objects. In this example, both "QUAD-17" and "QUAD-18" are marked as not collidable by the player, this overcomes some issues with unnecessary collisions and jumping around. It's also possible to hide the auto-generated mesh, if I want to create a custom one to replace it for example.

Another key advantage is the ability to request that the importer retain the "MeshInstance" node for a given object. A MeshInstance node in Godot is a node type that includes some general geometry type information, and typically "contains" an actual mesh. One feature of the MeshInstance node is the ability to override materials specified in the contained mesh itself. When importing a Freescape object, I currently apply the relevant materials to the mesh itself, so if I manually apply new materials to the MeshInstance they will override. Previously these changes would have been lost on re-import, but now, with the right flag in place, as seen above for object "CUBE-5" and "PYRAMID-11", the MeshInstance is retained, along with any new materials, but the mesh itself can still be replaced. Just these two features of the override system provide a lot of freedom to customise the resulting import without worrying that changes will be lost when re-importing. See the video below for a demonstration of this feature.

Additional smaller changes this time round:

* Implementation of the Probe and Jet vehicles, including matching controls to the original Spectrum key map.
* Implementation of the majority of the FCL opcodes, specifically those necessary to run most of the puzzles, things like TOGVIS, RTOGVIS, IFEQ, SETBIT, CLRBIT etc.
* Room level FCL subroutines. In Freescape you can add a number of subroutines to a room in FCL as well as to objects. It took me a while to remember how this worked. Basically, when an FCL subroutine is triggered on an object by colliding with or shooting it, the room subroutines are executed as well, in the same context (shoot or hit). I originally presumed they would run each frame, but no, to save on processing time, they only run after an object level subroutine has been triggered.

I've been following a couple of playthroughs on YouTube for the Spectrum version to see if I can complete all the puzzles, and fixing things as I go. Mostly there now, confident I can get a full playthrough of the puzzles in the next day or two, then I need to implement the drilling to get a fully playable game.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZTNad6AEju4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
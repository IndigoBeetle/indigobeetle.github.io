---
layout: post
title: "RetroRemake Challenge : Month 3 Update 2"
description: Implementing a simple NPC AI.
tagline: "High Noon"
date: 2022-07-13 15:30 +0100
categories: [RetroRemakes]
tags: [Programming, Software, Retro]
image: images/blog/high-noon-1.png
excerpt: |
    Using behavior trees to implement a very basic computer
    controller player AI.
---

In the last post, I mentioned that I would be implementing a simple computer
controlled player for the first time in this series for High Noon, which is
both a player vs player and player vs computer game. In reality, the AI for the
computer controlled player in this game is so simple it could be implemented 
as a relatively straightforward piece of GDScript code, and I did consider that,
but, never one to miss an opportunity to tinker with something new, I decided
instead to implement it using 
[behavior trees](https://en.wikipedia.org/wiki/Behavior_tree_(artificial_intelligence,_robotics_and_control)).

Behavior trees are a powerful tool to implement complex logic that are very
well suited to non-player characters, and have been used for this on many games.
They are an extension of the concept of state machines, but with some very 
clever processing logic to enable actions to depend on various conditions, and
to present that flow of logic in a way that is very easy to comprehend and
predict.

I decided, rather than coding up a behavior tree implementation myself,
especially given the tight time frames involved, to use an existing plugin from
the Godot asset store. There are a few options on the store, I settled on
[Godot Behavior Tree](https://github.com/kagenash1/godot-behavior-tree) by
Kagenashi. Mainly because it's a relatively simple and flexible implementation,
but also because instead of creating additional editing features, it simply
reuses the existing node structure and editor from Godot that is already
prevalent throughout the tool. This basically means you create the tree as a
set of nodes, some with existing predefined scripts, and others with custom
scripts for actions, the parent/child relationships in the node tree define
the flow of logic through the behavior tree.

The initial implementation of the NPC cowboy logic is shown in the image below.

<figure>
    <img src="/images/blog/HighNoon_AI.png" width="50%" alt="Behavior Tree">
    <figcaption>The computer controlled cowboy AI</figcaption>
</figure>
<br/>

As you can see, it's very simple, I've probably included more logic into the
two custom action nodes than ideal, it would probably have been better to 
have broken those actions into smaller chunks, and I may return to that in the
future.

The flow works as follows...

The `ComputerPlayer` node is the single root that all behavior trees must have,
the entrypoint of the logic flow. Below that, is a built-in `Parallel` node, 
this executes all of it's children in irrespective of the return value from 
any of the children, so in this case it will execute the move and shoot aspects
of the behavior each run through. The `MoveSequence` is a sequence node, it will
execute all of its children in turn as long as each returns a success. If any
return fail, it stops, and returns fail back up the tree. In this case, the 
sequence consists of two nodes, a custom action node `MoveRandom` which is
coded to randomly choose a direction, up or down, weighted by where the player
is on the screen, so the higher up they are, the less likely they are to try
to move up. This is followed by a standard `Wait` node, provided by the plugin,
which waits until a timer has elapsed before returning success, which acts as
a delay to avoid the player running around too fast. The other child of the
`Parallel` node is another sequence node, this one the `ShootSequence`, which 
does a very similar thing, the custom `AimAndFire` node is coded to check if
it makes sense for the player to fire, and fire if it is, with some randomness
introduced to make it less predictable, followed by another delay node, to
account for the time it takes to reload.

That's pretty much it, the system will run through this tree each cycle, and 
execute the move and shoot branches. As I mentioned, this could certainly have
been coded very quickly in normal GDScript, but the advantage of this is, I can
easily enhance and improve the player logic now, introducing other conditions
for movement and or shooting, to experiment with different levels of 
NPC intelligence. The behavior tree provides a rich set of composite nodes to
do things like sequence, selector, random versions of both, parallel, as well as
a set of 'decorators' to do things like always succeed/fail, and many more to
allow creation of a very rich set of behavior logic, I highly recommend looking 
into this means of creating enemy AI in games.

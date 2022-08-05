---
layout: post
title: "Giselle2 - Architecture - Part 1"
description: Settling on a low level design for Giselle2. 
tagline: ""
date: 2020-07-05 15:14
categories: [Giselle2]
tags: [Programming, Procedural, Project, Giselle2, Architecture]
image: images/blog/road-start-beginning-design.jpg
excerpt: |
  After some major cleanup work on the original Giselle2 source code to
  clean up external dependencies, I've been working on simplifying the underlying architecture to provide a generic but powerful core that can then be built up into a complete feature set.
---

There are three main aspects of the core architecture, the variant type used for data flow, the node types used for defining the operations applied on the data flowing through the system, and the rendering sub-system. It could be argued that the scripting language binding is also part of the architecture, as it's going to be a key part of the system that will allow far more power out of the system than otherwise possible, but for the purpose of this post, I'm considering just the core, and the binding to a scripting language as exposing that core to another system, and therefore the subject of another post.

At the heart of the architecture is the concept of a "variant" type. This allows the system to pass data between nodes in the system in a flexible way, either automatically or manually converting between supported base types. The variant in Giselle2 is based on the STL [`std::variant`][1] template class. The actual implementation of the `gs::Variant` class is slightly more complicated by the need to allow infinitely nested type specifications. For example, one of the possible types that the gs::Variant can store is a `std::vector<Variant>` which means it's possible to have nested arrays of arrays of any type, "variants all the way down". In addition to the storage of data and attributes in the custom Variant type, I have implemented various helpers in the codebase to make working with Variant types easier. There is a `variant_cast<T>` template method that uses a visitor pattern using the `std::visit` functionality built into the `std::variant` class to attempt to convert the given Variant value to the requested base type `T`, throwing an exception if it cannot be reliably coerced to the requested type. Alongside this a type checking method `variant_is<T>` to check if the contents of the supplied Variant can be coerced into the type `T`, without actually doing the conversion. This is useful where the coercion might be expensive. A great deal of work has gone into ensuring the Variant type can be exposed to the chosen scripting language, Lua, but this is work in progress and will be covered in another post.

The node system I'm currently working towards is in part influenced by the node system in Houdini, but also takes some cues from Blender, and other node systems I've worked with or created in the past. At the simplest level, a node is a black box that exposes a set of controls as "ports". A port is a container for a Variant type, that can be connected to other ports on other nodes. This is the only (currently) mechanism for data to flow through the node tree. There is no distinction in the system between ports that are intended to be input ports, and those that are intended to be output ports, any port can be connected to any other port. When a port is queried for its value, it first checks to see if it is connected to another port, and if so requests the value from there, at which point the system will ensure that the value on that provider port is up to date by asking the node it is associated with to perform any necessary data calculations. Nodes can be different base types, of which there are currently two, "object" and "geometry". An object node is a container node that represents a displayable object. As a container node, an object node itself contains a separate tree of nodes as children of itself. In the simple case implemented thus far, an object node typically contains a tree of geometry nodes. A geometry node represents some 3D geometry that can be rendered to the scene, primarily a mesh currently. A geometry node typically creates or modifies a set of attributes in a Variant that can then be turned into a set of geometry that the rendering sub-system recognises and can render.

The rendering sub-system is pretty immature at the moment, only understanding a small number of primitive types, and not rendering anything but a textual representation of the geometry. The renderer concept is a simple interface that implements a well defined API that the core can call upon to render the geometry that a node tree generates. Currently the only implementation of the interface is a debug output renderer that outputs some text representing the geometry for testing. An OpenGL, or similar, implementation will follow as soon as the core is proven and operable.

There will be many more posts on the subject of architecture as the foundations begin to take shape. I'm intentionally not setting out to define what Giselle2 will look like from the outset, but instead choosing to let it evolve organically, for two reasons. Firstly, I have no idea exactly how it is going to be most effective and performant, that will come with testing, and secondly, it's more fun that way.



[1]: https://en.cppreference.com/w/cpp/utility/variant

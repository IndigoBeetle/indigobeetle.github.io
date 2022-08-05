---
layout: post
title: "Is the Web Killing the Desktop?"
description: How developments in browser technology could make desktop development unnecessary.
tagline: "The Future of Software"
date: 2017-05-27 12:50
categories: [Development]
tags: [Programming, Software, Design, WebApps]
image: images/blog/browsers-1273344_1280.png
excerpt: |
  With more and more high power API's coming to the browser, and the increasing demand for rapidly accessible, specialised applications, are we seeing the death of native desktop based application installs?
---

There was a time, not so long ago, when the web was just that, the "World Wide Web". Times have changed, at an incredible pace, driven by improvements in the availability of high speed networks, and consequently, in the capabilities of web browsers and the breadth and depth of standardised web API's. 

This change was initially driven by the demand for higher quality web browsing experience, but developers soon realised they could do more with the browser and the API's than was originally thought possible. While client side scripting has been around since the very end of the 20th century, with [Netscape introducing Javascript in 1995](https://www.w3.org/community/webed/wiki/A_Short_History_of_JavaScript), it is only in the last 5-8 years, with the rapid acceleration of [HTML5](https://www.w3.org/TR/html5/) and partner technologies, that the real potential of purely web delivered applications, competing on level ground with desktop equivalents, has become an achievable goal. 

No longer is the web just the "World Wide Web", a collection of interconnected pages, with the primary purpose of delivering content for consumption towards a given end goal, product sales, driving political agendas, news reporting, knowledge sharing, etc. The "web" now serves (at least) two purposes, the original connected data network, and a very capable application delivery platform.

The Last Bastions of the Desktop Application
--------------------------------------------

There are some common assumptions about what requirements demand (as opposed to prefer) desktop based application development over web based. While some are still real considerations, many are being eliminated, fast.

* Performance

  This is one that still straddles the real/imaginary fence. Of course, there are definitely many examples where the sheer power of a native, compiled language will outperform Javascript, however, with more and more work being undertaken in this area, from many different directions, this is becomeing less and less of an issue.

  1. WebAssembly/ASM.js

     Improving browser support for both the [WebAssembly](http://webassembly.org/) standard and [ASM.js](http://asmjs.org/) allows extremely high performance code to be created targeting the browser platform. Many languages, including C/C++ can easily be compiled into [ASM.js](http://asmjs.org/) code that maxmises the performance in the browser. Because [ASM.js](http://asmjs.org/) is a highly optimisable subset of Javascript, the browser can make certain assumptions when compiling it, leading to higher performance. 

     In addition, by utilising powerful offline compiler frameworks, such as [LLVM](http://llvm.org/) used by [emscripten](http://kripken.github.io/emscripten-site/), the generated code can be highly optimised before ever reaching the Javascript runtime.

  2. Advanced API's

     The introduction of advanced browser API's such as [WebAudio](https://www.w3.org/TR/webaudio/) and [WebGL](https://www.khronos.org/webgl/) all significantly reduce the concern around specific high performance areas of typical desktop applications, namely graphics and audio. [WebGL](https://www.khronos.org/webgl/) brings hardware accelerated 3D and 3D graphics capability right into the browser, and [WebAudio](https://www.w3.org/TR/webaudio/) does the same for high performance, low latency audio. Some would argue that they are still driven by Javascript, which is true, but by moving the critical performance aspects into native capabilities built into the browser, the concerns are reduced significantly. One only has to look at some of the amazing things being developed with a combination of [ASM.js](http://asmjs.org/) and [WebGL](https://www.khronos.org/webgl/), such as the Unity game engine, which uses these technologies to enable a web based delivery target.

* Device Access

  Any application that relies on access to external devices, beyond the sandbox of the browser, will typically be created as a desktop application. There are some recent movements in this area, specifically around things like [Midi](https://www.midi.org/). The [WebMidi](https://www.w3.org/TR/webmidi/) API allows rich access to external [Midi](https://www.midi.org/) capable devices. For those unaware, [Midi](https://www.midi.org/) is a very powerful communication interface and protocol for connecting to electronic music devices. While this appears to be very specialised, what is interesting is the support of the "System Exclusive" messages. These are basically byte streams that can be sent to a device to trigger, typically device specific, actions, including things like recording audio and configuring the device, actions that fall outside the default audio based Midi messages. While it's a bit of a stretch, it would be entirely possible for someone to create an external electronic device that can be entirely controlled via SysEx Midi messages, meaning browser based control of external devices is feasible now. Enabling Midi and SysEx control of a device requires the user to authorise, much like when enabling support for the microphone or webcam on the host PC, but the important point is, this demonstrates a willingness to consider, under controlled conditions, an API that allows external device control. It's not a huge leap from this to a new API that is designed for generic control of USB connected devices.

What Does This All Mean?
------------------------

In real terms, the number of application areas that are exclusive to desktop applications is dwindling fast. Take for example, [WeTracker](https://app.wetracker.xyz), a music webapp that I recently hacked together as an experiment. This sort of high performance audio application, requiring sample accurate timing of events, would not have been possible a couple of years ago. Now, thanks to the introduction and support of WebAudio, this sort of application is eminently possile in the browser. Moreover, when implemented as a webapp, it's far easier to take advantage of many other benefits of web based application delivery, such as zero-install/instant update, inherent network connectivity, socialisation, cross platform support, etc.

Of course, there are downsides or limitations, even now. Cross browser support is a minefield, support of the various new API's is inconsistent across browsers, althought this is getting better, with better standards, and more willingness on the browser manufacturers to adopt standards. Javascript also still has it's limitations, timing accuracy is an issue, hence the WebAudio API, memory management can result in unpredictable performance, and it still suffers from some of the common problems of a typeless development environment. The latter is addressed to some degree by transpilers, that allow developers to work in languages more suitable for large scale application development, or indeed through emscripten and others, work in C/C++, and Javascript itself is progressing well, with some interesting developments in ES6 coming to browsers now.

Ultimately, there is still a decision to be made, but that decisions is becoming more and more fuzzy. I for one, always default to a web based application approach until it proves to be impossible. The delivery and maintenance benefits alone are a huge win.

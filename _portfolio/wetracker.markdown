---
title: WeTracker
categories:
- Digital Audio
- Web Applications
layout: page
image: "/images/portfolio/wetracker2.png"
description: A tracker style music tool for the browser.
---

<figure>
    <img src="/images/portfolio/wetracker2.png" width="100%" alt="WeTracker">
    <figcaption>The WeTracker Interface</figcaption>
</figure>
<br/>



Initially starting as a fun experiment, WeTracker has grown into a fully
featured music authoring tool based on the 'tracker' style tools of the early
90's, often featured in the demo scene of the time.

Rather than playing .wav or .mp3 files, WeTracker works with the highly
optimised FastTrackerII .mod files. Built into the software is a complete
implementation of the audio rendering technique used by the tracker software of
the time, which provides mixing of multiple tracks of audio, with various
effects that can be applied at runtime, all built on top of the modern 
[WebAudio](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
API available in modern browsers.

While able to load .XM files from the classic trackers from back in the day, 
WeTracker has evolved to include more functionality, including the ability to
apply filter chains to any track.

The software in its current form is available for you to play with and have fun
[here](https://www.indigobeetle.co.uk/static/wetracker/), try out the sample 
songs included in the "browser" window in the lower right of the interface, or 
try out one of the many .XM files available from [here](https://modarchive.org/index.php).

The code is on Github [here](https://github.com/pgregory/wetracker).

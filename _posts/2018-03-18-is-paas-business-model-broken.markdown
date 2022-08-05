---
layout: post
title: "Is the mBaaS Business Model Broken?"
description: Asking whether it's wise to invest heavily in a commercial mBaaS service provider.
tagline: ""
date: 2018-03-18 21:32
categories: [Infrastructure]
tags: [Programming, Games, DevOps]
image: images/blog/img-07.jpg
excerpt: |
  With the current trend towards acquisition of mBaaS companies, should you
  be putting the future of your development and apps in the hands of these
  providers?
---

Having spent a great deal of time integrating backend services into my recent
game, Fruit Spritzer, in this case only very rudimentary ones, authentication
and social leaderboard, I learned a number of things, but this one thing stood
out above all else. The landscape for mBaaS providers is incredibly fickle. Let
me explain my thinking.

A bit of background first, my game is built in PhaserJS for web, and (now
anyway, another story) Godot for mobile. This influences my choices for mBaaS
service provider. Most, probablay all in fact, offer Unity integration out of
the box, many offer Javascript, none that I'm aware of offer Godot integration.
So I was left with either integrating myself, or working with a RESTful
interface if offered. I need to be able to authenticate a user, both
anonymously and via Facebook, preferabley with the ability to transition an
anonymous account to Facebook at the right time. I need to be able to store and
retrieve leaderboard(s), and most importantly, get the social leaderboard for
the current player. That is, the list of players in their social circle, as the
point of the game is to play against your friends, not everyone in the world.

I started out with what looked like a good choice for mBaaS for a web and
mobile game, [PlayFab][1]. I had my doubts about the costs and pricing model,
but it is a very flexible and powerful system, and does have a free tier on
which I could experiment and determine if it really would meet my needs.
Javascript integration was good, and as I was on PhaserJS only at the time,
worked well. However, then it happened, on the 29th of January 2018, Microsoft
[announced they had acquired PlayFab][2]. This worried me intensely, so much
that I immediately started looking for alternatives. In this particular case,
I'm nervous about what Microsoft would do with PlayFab, having seen what
they've done to the likes of Skype, it didn't leave me full of confidence.
Also, this was the first point at which I had pangs of concern about these
commercial offerings "just disappearing", the big players, Microsoft, Google,
Facebook etc., all have a history of acquiring companies and products, only to
shut them down. I found [GameSparks][3], which actually has proven to be even
better in terms of capability than PlayFab, so I'm sort of happy again. They
have a very generous Indie tier, which again allows me to trial the solution
before monetising my games to see how it works out, all good. Right up until
the 5th of March 2018 when GameSparks [announced they were being acquired by
Amazon][4]. Not again! Now, I'm not familiar with Amazon's track record for
acquisitions, but I'm starting to get nervous again.  I did some more
investigation and found out about [Parse][5], another very popular mBaaS it
seems, not one that I'd experienced, but it seems very successful, until
Facebook acquired them and shut them down in January 2017.

Now I'm seeing a pattern, and it worries me intensely. Backend services are
becoming more and more important for any sort of gaming, including mobile.
Social is a key factor to engagement and retention, and requires some backend
services. Now exploring the cost and complexity of developing and hosting a
backend service, especially for a small indie or solo developer, the alure of
the mBaaS providers is very strong. But no matter how good the service is, it
will still take significant effort on our part to build support into our games,
and it increasingly feels like that investment is high risk. The value of mBaaS
is not lost on the big corporates, hence the desire to acquire, and this
volatility is very unsettling for the small independent studio. 

It seems that there isn't a perfect solution, hosting backend services is
complex, time consuming and costly, even if working with one of the few open
source BaaS projects, like the [Parse Platform][6] project, an open source
version of Parse released by Facebook before the shutdown, [Heroic Lab's
Nakama][7] or [xtralife][8]. However, building up a connection to a backend
service in your toolchain is not something you want to do more than once, so
getting into bed with one of the closed commercial offerings is risky too. So,
what's the right answer? I'm not sure there is one, right now I think the best
option is to find a commercial provider that builds on an open source solution,
such as [Heroic Labs][7] who offer hosting of their open source platform,
or [Back4App][9], which offers hosting of the open source Parse platform. At
least this way, if the commercial provider disappears or goes under, you've got
options, as the platform is open and available. Do be careful though, most of
these providers, including the two listed above, offer an "extended" version of
the open platform as part of their commercial hosting plan, so if you want to
be able to transition to the open version in the future, you need to be mindful
of the differences when developing the integration.

So, to the point of this blog post, is the model broken? It seems to me it is,
mBaaS claims to be a cost effective, scaleable, and accessible solution
to a developer's backend needs, but if we cannot rely on the stability of the
businesses offering these solutions, they offer no solution at all. Nobody
wants to swich providers, at great cost to themselves, each time one of these
companies gets swallowed up by the big boys. For my money, a better solution
would be to develop an open standard for mBaaS services, that all providers
could adhere to. They would then need to find ways to differentiate themselves,
be that price, availability, etc. but the onus would be on them to offer value,
as we, the customers, could readily switch to any other provider that follows
the same standard with minimal impact. 

Yeah, I know, that's never gonna fly, but I can dream, right? :)


[1]: https://playfab.com/
[2]: https://blogs.microsoft.com/blog/2018/01/29/microsoft-acquires-playfab-accelerating-game-development-innovation-cloud/
[3]: https://www.gamesparks.com/
[4]: https://www.gamesparks.com/blog/gamesparks-joins-amazon/
[5]: https://en.wikipedia.org/wiki/Parse_(platform)
[6]: http://parseplatform.org/
[7]: https://heroiclabs.com/
[8]: http://xtralife.cloud/
[9]: https://www.back4app.com/

---
title: RSS Over Algorithms
date: 2026-09-15
permalink: /posts/2026/09/15/rss_over_algorithms/
tags:
  - rss
  - health
toc: true
---

TL;DR having an existential crisis because of social media feeds (again) and
solving it by using [RSS](https://en.wikipedia.org/wiki/RSS) (not the Indian one).

I caught myself opening Instagram, closing it, and opening it again within the
same minute — not looking for anything, just reaching for it out of habit. That
was enough. Shorts, Reels, and the Instagram feed are overwhelming not because of
the content but because of the quantity and the fact that someone else is choosing
it for you. I decided to fix that. The goal is not to read everything. It is to
have a feed that respects your time and attention rather than competing for it.
This post is the things/tricks/tips I have figured out.


## Why RSS?
I have [written about RSS before](/posts/2022/04/rss-readers/) and I am still a
proponent of it. It is a piece of the old internet I cherish. In plain terms, it
is an application that queries websites you choose to see whether they have new
content. But the real reason to use it is control — no algorithm ranks your feed,
no engagement metric decides what you see first, no middleman between you and the
source. You subscribe to what is relevant to you, and that is it.

I use [Capy Reader](https://capy.lol) on mobile.
It's free, open source, and have no accounts or cloud sync -- your
feeds stay on your device. Capy Reader has a clean reading experience and handles
YouTube feeds well. 

## Some feeds worth subscribing to

A few from my list that I would recommend regardless of your interests:

- [Quanta Magazine](https://www.quantamagazine.org/feed/): long-form science
  journalism on math, physics, and biology. One of the few places that covers
  research accessibly without dumbing it down.
- [Finshots](https://finshots.in/archive/rss/): Indian finance and business
  news in plain language. One of the better daily reads if you want to follow
  markets without the noise.
- [Project Zero](https://projectzero.google/feed.xml): Google's security
  research team publishing vulnerability deep-dives. Technical but fascinating.

## Things I use RSS for.

- **YouTube:** Every channel and playlist has an RSS feed. I follow channels like
  Computerphile, ColdFusion, and Two Minute Papers without ever opening YouTube.
  YouTube podcasts are just playlists under the hood, so they work the same way —
  new episodes show up in your reader like any other post. No algorithm, no
  autoplay, no recommendations pulling you in.

- **GitHub:** Track releases and commits of projects you depend on. I follow
  SageMath commits directly — new releases land in my reader without me having to
  check GitHub manually.

- **Google Alerts:** I set up alerts for specific searches — institutions,
  researchers, job boards like TCS Jobs. Everything lands in one place alongside
  my other subscriptions, filed under its own folder.

- **News:** BBC World, The Hindu (Chennai, Kerala, Frontline), Mint, The Print,
  The Verge — different angles, all chosen by me. No algorithm deciding what is
  "relevant" today.

- **Blogs:** Hand-picked writers I trust. Schneier on Security, Krebs on Security,
  Quanta Magazine, and others. The signal-to-noise ratio here is the best of all
  my feeds.

- **Reddit & Hacker News:** Every subreddit has an RSS feed, and you can subscribe
  to just the weekly top posts (`/top/.rss?t=week`) instead of the live firehose.
  I follow r/MachineLearning, r/LocalLLaMA, r/Kerala, and a few others this way.
  For Hacker News, I use [hnrss.org/best](https://hnrss.org) instead of the
  default feed — it filters for only the highest-voted posts, which dramatically
  improves quality. The official Reddit app is deliberately addictive — RSS gives
  you the content without the dark patterns.


## How I categorize my feeds

Having a lot of feeds without structure is just recreating the problem. Here is
how I organize mine:

- **Essential:** The feeds I read every day without fail — high signal, low volume.
  Security blogs, math blogs, a few YouTube channels, long-form writing I genuinely
  look forward to. If I had to cut everything else, I would keep this folder.

- **Discovery:** Feeds I browse when I have time. arXiv papers, ePrint cryptography
  papers, a few Reddit communities. For finding new ideas and rabbit holes — not
  daily reading, but worth checking a few times a week.

- **News:** Global, local (Chennai, Kerala), and topic-specific sources. Kept in a
  separate folder so news does not bleed into everything else. I check this once a
  day, not constantly.

- **Alerts:** Google Alerts for specific searches and status pages. More reactive
  than intentional — I glance at them when something might have happened, not as
  regular reading.

## Other things that helped

RSS is the core, but a few smaller changes compounded it:

- **Podcasts over Shorts:** I switched passive video time (Reels, Shorts) to
  podcasts. Same dead time - commute, chores, walks - but you actually finish an
  idea instead of half-watching fifty of them. Wrote a blog on this too see 

- **YouTube default to Subscriptions:** In YouTube settings, set the homepage to
  your Subscriptions feed instead of Home. Home is algorithmically curated to keep
  you watching. Subscriptions shows only channels you chose. One setting, massive
  difference.

Kudos. Hope I saved you some time.

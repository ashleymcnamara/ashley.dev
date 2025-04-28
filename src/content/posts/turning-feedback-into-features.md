---
title: "Turning Feedback Into Features: Building My npx Business Card"
date: "2025-04-28"
tags: ["DeveloperExperience", "CLI", "NodeJS"]
blueskyPostURI: ""
---
While I was building [ashley.dev](https://ashley.dev), I wanted it to feel genuine, more like a reflection of me, and less like a standard portfolio. One of the sections I added to the About page said `npx connect` above a set of social icons. In my mind, it was just a playful callout, a nod to the idea of connecting through different platforms.

But when [Tierney Cyren](https://bsky.app/profile/bnb.im) reviewed the site (and I'm incredibly grateful they did), they pointed something out: from a developer’s perspective, seeing `npx connect` might imply that there’s a real `npx` command you could run. Not only would that be confusing, it actually wouldn’t work at all. And if there’s one thing developers are good at, it’s noticing when something feels broken.

That simple review didn’t just catch a small mistake, it sparked something bigger. Rather than just brushing it off, Tierney introduced me to something they had built a few years earlier: **[npm cards](https://github.com/bnb/bitandbang)**. It’s a clever way to publish a small, custom business card that someone _could_ run directly in the terminal using `npx`.

It was one of those moments where thoughtful feedback made everything better and reminded me why I love this community so much.

## Why a Terminal Business Card?

One of the things I've always loved about developer culture is how it blends creativity with craft. Little touches, like a CLI-based business card, turn something technical into something personal. It’s a small way of saying, _"Hey, behind this code, there’s a human."_

When Tierney showed me **npm cards**, it immediately inspired me. Not only could I make the About section on ashley.dev more intentional, but I could also give people a way to connect with me that felt a little more surprising and a little more _me_.

There’s something delightful about typing a command like `npx ashleywillis` into your terminal and having it greet you with a card. No installs. No websites. Just an instant connection, right in the place developers spend a good chunk of their time.

## How It Works: Behind the Scenes

At its heart, an npm card is a small Node.js project that outputs styled text when run with `npx`.

The basic flow looks like this:

- Publish a package to npm.
- Define a `bin` script in your `package.json` that tells `npx` what to execute.
- Use libraries like [chalk](https://www.npmjs.com/package/chalk) (for colors) and [boxen](https://www.npmjs.com/package/boxen) (for layout) to make the output clean, colorful, and readable.

Tierney’s [npm-card project](https://github.com/bnb/bitandbang) took care of the heavy lifting, so I didn’t have to start from scratch. I cloned the project, customized the content, swapping in my name, my role, my social links, and played around with the formatting until it felt right.

What I loved most was how lightweight it all was. The project itself is tiny, but it creates a meaningful little experience for anyone curious enough to run the command.

## Building and Customizing My Card

Once I had the basic structure in place, the fun part started: making it feel like mine.

I began by swapping out the default text for something that felt personal but still clear. I included my name, my role, and a few links where people could find me online, enough to be helpful without overwhelming the tiny space.

Since the terminal can feel a little stark on its own, I leaned into color. Using [chalk](https://www.npmjs.com/package/chalk), I could add just enough styling to make certain parts pop: my name in one color, links in another, subtle accents to make it easy to read without looking chaotic.

I also adjusted the box layout with [boxen](https://www.npmjs.com/package/boxen), giving the card a clear, clean frame that made the content feel deliberate. Tiny things, like choosing the padding, the border style, and the background color, added up to something that felt intentional.

Honestly, it was the kind of project that reminded me how much joy there is in the details.

Even deciding whether the text should wrap at 50 characters or 60 felt important, because in a space that small, every choice affects the experience.

## Publishing It to the World

After customizing the card, the final step was to publish it so that anyone could run it.

I made sure the `package.json` included all the right metadata, the name, the `bin` field pointing to my executable file, and a few keywords so people could find it (if they happened to stumble onto it on npm).

Then it was just a matter of pushing it to npm with:

```bash
npm publish
```

The first time I typed `npx ashleywillis` into my terminal and saw the finished card pop up, it genuinely made me smile.

It wasn't a massive app or a complicated build.

It was a small thing, made with care, and somehow that made it even better.

After that, I went back to my Astro site, updated the About section with something that actually *worked*: `npx ashleywillis` 

It felt good to close the loop and even better to know that if another developer ever got curious, they’d find a little easter egg waiting for them.

## Why These Tiny Projects Matter

It's easy to think of small projects like this as just "extra", little things you squeeze in between bigger milestones. But honestly, I think they're some of the most meaningful things we build.

Projects like this remind me that developer experience isn't just about frameworks and APIs, it's about moments of human connection, even in the most technical spaces.

It's about caring enough to make something thoughtful, even if nobody ever sees it but you and a handful of curious developers.

In a way, building my npx card was a perfect reflection of what I try to carry into all my work: Make it approachable. Make it human. Make it a little bit joyful.

And if someone smiles when they run `npx ashleywillis`, even just a little? That's a win.

Most of all, it's a reminder that the best parts of building things often come from building them _together_ , from asking for help, listening to feedback, and finding delight in the smallest details.

## Try It Yourself

If you want to see it in action, you can run:

```bash
npx ashleywillis
```

Or you can [check out the repo here](https://github.com/ashleymcnamara/ashley.dev-card) if you’re curious about how it’s built!

And if you end up making your own, send it my way. I’d love to see it.

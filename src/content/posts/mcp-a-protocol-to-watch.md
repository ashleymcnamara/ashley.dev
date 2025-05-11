---
title: "MCP: A Protocol to Watch (Even If You're Not Sure What to Do With It Yet)"
date: "2025-05-11"
tags: ["MCP", "AIProtocols", "AIStandards"]
blueskyPostURI: ""
---

### MCP: A Protocol to Watch (Even If You're Not Sure What to Do With It Yet)

Mother's Day. Brunch for some. Thoughts on AI infrastructure for others. I contain multitudes. I'm not a *regular* mom, I'm a *cool* mom. The kind who reads the [MCP spec](https://modelcontextprotocol.io/specification/2025-03-26) *and* the spa menu.

There’s always something new. Some protocol or platform or “agent infrastructure layer” that shows up with just enough momentum to make you pause and ask, *Is this going to be a thing?*

Right now, one of those things is MCP, the Model Context Protocol. I haven’t built with it. I haven’t really had a reason to, yet. But I’ve been watching from the edges, because I know how this goes. The things that actually change how we build? They don’t usually arrive with fireworks. They slip in, quietly, and slowly start showing up everywhere.

MCP is one of those things that might be doing that. So this post isn’t a guide. It’s not a tutorial. It’s not even a strong opinion. It’s just me, thinking out loud. With all the uncertainty that comes with that.

I write posts like this mostly for the skeptics. The folks who *aren’t* jumping to implement every new acronym, but who still want to understand what’s going on and maybe stay close enough to the conversation to not get blindsided. If that’s you, we’re in the same boat.

Because I don't think this technology is going away. It’s getting more embedded, into how we build, how we write, how we make decisions. So maybe the job isn’t to have all the answers. Maybe it’s just to help each other stay awake while the ground shifts.

## Standardizing the Sprawl

Let’s start with the basics.

**MCP is a protocol that helps AI models interact with external tools in a predictable way.** Things like APIs, databases, file systems, anything outside the model’s native context that it might need to interact with to be useful.

In the current state of AI tooling, these interactions are a mess. You end up with one off integrations, fragile glue code, and systems that fall apart the moment anything upstream changes.

MCP tries to give us structure. It defines how tools describe themselves, how authentication should work, and how models can interpret tool output. If you’re familiar with the [Language Server Protocol](https://microsoft.github.io/language-server-protocol/) (LSP), you’ll see echoes here. MCP is loosely inspired by LSP’s architecture, but designed to be “AI native.” It focuses less on language services and more on generalized tool use across potentially autonomous agents.

And the real power of protocols, boring, foundational ones, is that they create common ground. You don’t need to understand HTTP to use it. But because it exists, we get a web. MCP is trying to be that, for model-tool interaction.

## Other Approaches, Same Problem

Of course, MCP isn’t the only protocol trying to make agent development less of a duct-tape disaster. There’s a growing set of standards, some formal, some more framework-y, all circling the same underlying problem: how do we get models and agents to reliably interact with tools, data, and each other?

I hadn’t originally planned to dive into all of these. But my friend [Ralph](https://bsky.app/profile/squillace.bsky.social) aptly suggested that it might help to zoom out a bit, to show how MCP fits into a wider ecosystem of attempts to standardize this mess. He also reminded me that even when protocols are misunderstood (and they usually are, just ask HTTP), they still shape what becomes possible. Quietly. Infrastructure tends to work like that.

So I hope this does help. I haven’t built with any of these directly. But I know folks who have, and I trust their instincts. A lot of what I’m sharing here comes from listening closely to the people testing these protocols in real-world systems, and trying to make sense of the patterns that are starting to emerge.

MCP is the one I’m watching most closely. It’s not exciting, but that’s the point. It wants to be boring infrastructure, the HTTP of agent tooling. And honestly? That’s probably what we need. It gives you a predictable message shape that works across models and runtimes. If you care about portability, resilience, or long-term stability, this is the one to keep an eye on.

[A2A](https://google.github.io/A2A/), Google’s agent-to-agent protocol, is more speculative. It’s not about calling tools; it’s about building networks of agents that can talk to each other, delegate work, and share context. It’s ambitious. Maybe too ambitious for where most teams are today. But I’ve heard from folks exploring it that even in its early form, it opens up a different kind of systems thinking. It feels like it’s planning ahead for the world we *might* be heading toward, even if we’re not there yet.

IBM’s [ACP](https://agentcommunicationprotocol.dev/introduction/welcome) (Agent Communication Protocol) takes a different tack, focused on structured, local-first collaboration between agents, especially in hybrid UI or desktop environments. It feels enterprise in the way a lot of IBM things do: sturdy, formal, maybe a little heavy. But I know a few teams exploring it for secure, internal use cases where autonomy and coordination need to happen close to the user. It’s not an MCP replacement, it’s orthogonal, but it fits a different slice of the problem space.

[LangChain](https://python.langchain.com/docs/introduction/) isn’t really a protocol, but it gets mentioned in the same breath because it abstracts so much of the glue logic. I’ve talked to people who love it for getting prototypes out fast, and I get why, it does a lot. But almost everyone I know who’s used it at scale has hit some kind of wall. It’s great scaffolding, but you want to understand exactly what it’s doing before you trust it to run anything important.

And then there’s [OpenFunction](https://openfunction.dev/), which is more of a schema spec than a full protocol. It focuses on describing tools in a machine readable way so different models or agents can use them interchangeably. That’s useful. But it’s not enough on its own. It’s the kind of thing you pair with MCP or A2A, not something that can stand alone.

All of these efforts are trying to reduce complexity, just in different ways. Some want to abstract the plumbing. Some want to define it. Some want to replace it entirely. And depending on where you sit, deep in orchestration, building across systems, or just watching the space evolve, your preferences will probably shift.

But even if you’re not building with these directly (and I’m not), they still matter. Because the teams that *are* using them are shaping the defaults the rest of us will inherit. Whether we opt in or not.

## Where It's Showing Up

So far, MCP is being adopted by orgs building deep agent systems, GitHub, Replit, Sourcegraph, OpenAI, Anthropic. These are teams where agents aren’t hypothetical; they’re core to the roadmap.

And in that world, yeah, having a protocol like MCP helps tame the sprawl. When you need an LLM to call a tool, parse the result, call another tool, and maybe log the whole process? You want structure. You want predictability. You want to stop duct-taping together slightly different JSON payloads that break every time the API version bumps.

MCP gives you that. Not because it’s flashy, but because it’s stable. It’s a contract.

But if you’re still experimenting, still building tool-first, not agent-first, MCP might feel like overkill. Like signing a lease before you know where you want to live. It’s hard to justify a protocol when your use case doesn’t feel like infrastructure yet.

That’s not a knock. But it does mean MCP’s complexity won’t feel evenly distributed.

It’s easy to say “this makes development easier.” But unless you’re building both sides, the agent and the tools, you might not realize what “easy” actually looks like in practice.

## What I'm Still Cautious About

When abstraction works well, it speeds us up. When it doesn’t, it hides everything you’ll wish you could see when something breaks.

MCP promises a clean interface for tool use. But it also makes the tool use less visible, less inspectable, less intuitive. Right now, that might be fine. But we’ve seen how fast these things get layered into systems we come to rely on. You don’t always know when your agent is doing something risky. You don’t always see the trace. You don’t always know who approved the action.

MCP doesn’t solve those problems. It just makes them possible to solve with the right architecture around it. But that’s still on *you*. And we should be careful not to confuse structure with safety. A predictable function call protocol is great. But it doesn’t mean your agent is behaving responsibly. It just means it’s coloring inside the lines.

## What I'm Doing (or Not Doing) With It

No, I’m not using MCP right now.

I’ve looked at the spec. I’ve followed the repos. I’ve talked to folks testing it internally. I’m curious, but I haven’t seen a reason to pull it into my own work yet. Not because it’s bad, just because the timing isn’t right.

Still, I’m paying attention. Because I think MCP says something bigger than what’s written in the spec. It’s a signal. That we’re trying to move from prompt hacking to actual systems thinking. That we want more interoperability and less glue code. That we’re trying to structure something chaotic, maybe too early, maybe imperfectly, but with good intentions.

And I’m also writing this for the folks who feel like the pace of change has outstripped the pace of understanding. The ones who are cautious, skeptical, trying to stay in the loop without getting swept up in the noise.

Skepticism isn’t resistance. It’s responsibility. So no, I don’t have a hot take. I just have an honest one:

**MCP is worth watching.** Even if you’re not sure what to do with it yet. And just to be clear, I’m not saying MCP is inevitable, or even the best possible solution. I’m saying it’s trying to solve a problem that a lot of developers are tired of solving in bespoke, brittle ways. That usually means something, if not *this* protocol, then one like it, is going to take hold.

## The Quiet Impact of Protocol Decisions

Something I’ve been reflecting on is how protocols like MCP shape not just *how* we build, but *what* we build in the first place.

When XML-RPC and SOAP dominated, we got enterprise architectures that reflected their complexity. When REST simplified things, suddenly building APIs became accessible to more developers. GraphQL emerged when frontend needs outgrew what REST could elegantly solve.

These transitions weren’t just technical. They were inflection points that determined *who* could participate in building.

It makes me wonder, what kind of builder is MCP optimized for? It seems designed for teams building serious agent infrastructure. People with the time, resources, and motivation to invest in standardization before standards have even settled. That’s not necessarily wrong. Standards have to start somewhere. But it does raise a question about who gets to shape the future of AI integration.

The other reality is that we’ll likely live in a partial MCP world for a while. Some platforms will adopt it. Others won’t. Some will implement it cleanly. Others will offer “MCP compatible” endpoints that don’t quite behave as expected. This is the messy middle that protocols always create, the transition period where you have more complexity, not less, because you’re supporting multiple paradigms at once.

And no, MCP isn’t the first protocol to try and clean up tool integrations. It’s building on decades of lessons from API standards and plugin systems. But what’s different here is the ambition: trying to standardize tool use in the context of AI agents, where expectations around autonomy, state, and context are still evolving in real time.

For teams already deep in agents, that tradeoff might be worth it. For everyone else? Things are murkier.

### Learning from the Past

We’ve seen this movie before with OAuth. WebRTC. WebAssembly. Even HTTP itself. Protocols start niche. Then they generalize. They simplify only after real-world patterns emerge. They rarely arrive fully formed.

MCP will evolve too. And even if it never becomes the dominant standard, the fact that we’re talking about protocols at all, that we’re trying to make this predictable instead of magical, that’s worth paying attention to.

As I said, I haven’t built anything with MCP myself. My perspective is cautious and curious, coming from someone who’s skeptical of hype but doesn’t want to be caught off guard either. When I first read [Raz’s post](https://raz.sh/blog/2025-05-02_a_critical_look_at_mcp), I seriously considered scrapping this one altogether. His take is sharper, more technical, and grounded in real-world implementation. But I’m learning to push through that voice in my head. To remind myself that multiple perspectives are useful, and that learning out loud, even when I don’t feel like an expert, is still worth it.

Writing helps me think. Sharing helps it stick. And staying close to the conversation, even when I’m not deep in the weeds, still feels important. So that’s what this post is, me trying to stay in it. And if you want a hands-on critique from someone who’s actually used MCP, Raz’s piece is an excellent read.

Sometimes an imperfect protocol that exists is better than a perfect one that doesn’t. Sometimes a brunch-less Sunday spent reading specs is still time well spent.
Happy Mother's Day <3

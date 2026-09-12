---
title: "Agentic Coding Is Now the Default Workflow — What JetBrains' 2026 Data Means for Java Teams"
description: "The JetBrains Developer Ecosystem Survey 2026 is the inflection point: coding agents went from experiment to the default workflow. For Java teams, the shift isn't autocomplete — it's agents that orchestrate multi-file changes and open PRs from the IDE or CLI."
pubDate: 2026-09-11
author: "ModernAsh Team"
tags: ["agentic-coding", "coding-agents", "claude-code", "codex", "jetbrains", "java", "mcp", "workflow"]
---

# Agentic Coding Is Now the Default Workflow

The argument that "AI agents will change how developers write software" has been running for three years. It was always a forecast. With the JetBrains Developer Ecosystem Survey 2026, it stops being a forecast and becomes a measurement: between January and May–July 2026, agentic coding crossed from experiment to default workflow — and the survey data shows exactly how fast that happened, and what it is displacing.

For Java teams this matters more than the headline numbers. The shift is not autocomplete growing smarter. It is a different unit of work: agents that orchestrate multi-file changes and open pull requests from the IDE or the CLI, operating against your actual build, your actual repositories, and your actual dependency graph. This post walks through the primary data, the Java-specific evidence (including JetBrains' own decision to recommend Codex inside its IDEs), and what the workflow implications are for teams running JVM stacks in production.

## The survey wave that changed the picture

The [JetBrains Developer Ecosystem Survey 2026](https://blog.jetbrains.com/research/2026/08/ai-coding-agent-adoption-2026/) — the tenth edition of the company's global study, run with more than 15,000 professional developers and statistically reweighted to represent the global developer population — reports a May–July 2026 wave that looks nothing like what came before.

The top-line number is the clearest: **90% of professional developers now use AI coding agents at work at least weekly, and 68% use them daily.**[^1] A tool category that barely existed at the start of the year is now part of the weekly rhythm of nine out of ten developers. That is not an early-adopter signal. That is the default.

The same wave shows a genuine reshuffle, not a rising tide lifting every tool:

| Tool | Work usage Jan 2026 | Work usage May–Jul 2026 | Awareness Jan 2026 | Awareness May–Jul 2026 |
|---|---|---|---|---|
| Claude Code | 18% | **39%** (47% US) | — | — |
| GitHub Copilot | ~29% (2025) | 21% | — | ~79% |
| Codex | 3% | **16%** (~5x) | 27% | 65% |
| Cursor | 18% | 12% | 69% | 75% |
| OpenCode | — | 7% | — | 42% |
| Google Antigravity | ~6% | 6% | 29% | 47% |

Three patterns stand out.

**The category leader changed hands — fast.** Claude Code went from 18% in January to 39% in May–July, and to 47% in the United States. It is now used roughly twice as often as GitHub Copilot, the tool that defined AI-assisted coding since 2023. Perhaps more telling: Claude Code is the *single most used* AI tool for 31% of developers — an almost 80% conversion rate from "used at work" to "the main tool."[^1]

**The challenger climbed faster than its own awareness.** Codex grew about 5x in work usage (3% → 16%) while its awareness jumped from 27% to 65%. Growth of that shape signals real usage, not mind-share noise.[^1]

**The incumbent and the early darling both slipped.** GitHub Copilot declined from 29% a year ago to 21%, and Cursor dropped from 18% to 12% even as its awareness rose to 75% — its largest decline was in China (28% → 16%).[^1] Context matters here. Cursor's "Gartner MQ Leader" claim comes from Cursor's own landing page (vendor-sourced); ETR, which also documents budgets migrating from Cursor to Claude Code, is a commercial data provider. We treat both as directional signals, not primary evidence — the primary data is the survey itself.

Two smaller points matter for the Java conversation specifically. **OpenCode**, the open-source agent, reached 7% adoption with a 42% mindshare — remarkable for a project with no big vendor behind it. And **~9% of developers now use JetBrains AI in their IDEs and/or Junie at work**.[^1] Both say the same thing: agentic coding is spreading across the whole surface area of the toolchain, not settling into one CLI.

## What "default workflow" actually means

The reason these adoption numbers are an inflection point — and not just a market-share story — is the nature of the work they describe. In January, most teams treated agents as enhanced autocomplete: suggest a completion, fill in a method body, fix a compile error in place. A year ago the JetBrains data would have measured the same *tools* and told you far less, because almost nobody used them as the thing that *does the work*.

In the May–July 2026 wave, the dominant usage is agents that act on a task end-to-end: read the codebase, plan a multi-file change, edit several files, run the tests, and open a pull request for a human to review. The IDE and CLI become a *workspace for an agent*, not a cockpit for completions.

```
2023–2025:  "agent" ≈ autocomplete
  developer  — types —>  tool inserts a snippet —> developer continues

2026:       "agent" ≈ orchestrator that does the work
  developer — task --> agent plans -> multi-file edits -> runs tests
                            -> opens PR  -> human reviews & merges
```

This is the workflow-definition shift, and it is exactly the change JetBrains reports: agents are increasingly "the main" tool rather than an auxiliary one — hence the ~80% conversion rate from *used at work* to *single most used* tool.[^1] The practical consequence for a team is that the things you used to optimize — *how fast can a developer type this method?* — are no longer the bottleneck. The relevant problems become *how do we review PRs that an agent produced*, *how do we keep agent context correct*, and *how do we bound what an agent is allowed to change*.

## The Java angle: JetBrains put its own money on the market

Here is where the story gets specific for Java developers. The survey company behind this data did not just measure the trend — it made a product decision from it.

In June 2026, JetBrains [named Codex the recommended agent in JetBrains AI](https://blog.jetbrains.com/ai/2026/06/codex-is-now-the-recommended-agent-in-jetbrains-ai/), the assistive layer inside IntelliJ IDEA and the rest of its IDEs.[^2] The decision rested on a benchmark JetBrains built and published for exactly this purpose: the **Developer Productivity AI Arena (DPAI Arena)**, an open platform for evaluating AI coding agents that JetBrains intends to contribute to the Linux Foundation.[^3]

The part worth quoting in detail: **the Java dataset was JetBrains' primary evaluation set.** It is the largest of the three ecosystems they tested — 225 tasks drawn from 17 real-world repositories across five organizations, each requiring the agent to modify the codebase, compile, and pass the project's own tests. That is not a synthetic "generate this function" benchmark. It is agentic coding measured the way it actually happens in enterprise Java: change the code, make the build pass, keep the tests green.[^2]

On that Java set, Codex with GPT-5.4-mini at medium reasoning posted a **43.9% solve rate** with a median cost of ~$0.13 per task and ~124s median latency. The decision was not made on solve rate alone — JetBrains ranked candidates on three metrics (solve rate, cost, latency) and then ran an online A/B test with real users, where Codex won on activation, churn, and failure-rate signals. (An honest footnote: on Java specifically, Junie with Gemini 3 Flash actually scored slightly higher at 45.2%; JetBrains chose Codex for consistency across Java, C#, and Python plus the A/B result.)[^2]

Two implications for Java teams, in order of importance:

1. **Your own benchmark is now your best buying signal.** JetBrains built an open, reproducible evaluation precisely because vendor benchmarks (including their own past claims) weren't good enough. A 43.9% solve rate on 225 real Java tasks is a number your team can sanity-check against its own repositories. If you are qualifying an agent for your codebase, run a mini version of exactly this: take real PRs from your own history, have the agent reproduce a representative slice, and score pass/fail against your CI.

2. **The default-agent decision is now an engineering decision, and it's periodic.** JetBrains itself says the recommendation "isn't permanent": models evolve, and they re-run the evaluation as things change. Your team's "which agent is our default" question should be treated the same way — a recurring, reproducible measurement, not a once-a-year procurement.

## Mainstream Java tooling is embedding agents via MCP

The benchmark story tells you how to *choose*. The second Java-specific signal tells you the choice is already being wired into the tooling.

In June 2026, Spring Tools 5.2.0 added an **experimental Claude Code plugin** that embeds a strong Model Context Protocol (MCP) server: it exposes the resolved classpath, the Spring Boot version, the bean dependency graph, component stereotypes, and Spring-specific diagnostics with suggested fixes directly to the agent.[^4] The plugin shares a single JVM between the MCP server and the language server, so Claude Code operating from a terminal gets the same project context a developer would see in the IDE — no manual pasting of logs or pom.xml fragments. Spring Tools also automatically configures its embedded MCP server for GitHub Copilot in Eclipse-based environments, and adds Spring AI project support in the same release.[^4]

This is the pattern that matters, and it is bigger than one plugin: **mainstream Java tooling is treating the agent as a first-class consumer of IDE context over MCP.** JetBrains does the same thing from the other side — Claude Agent, Codex, GitHub Copilot, and OpenCode are integrated directly into the AI chat of JetBrains IDEs, and dozens of other agents (including Cursor) can be added through the Agent Client Protocol (ACP).[^1] The IDE is not being bypassed by CLI agents; it is becoming the shared workspace where both humans and agents do their work.

For a Java team, the practical read: **context is the integration surface now.** The gap between "an agent that tries to help" and "an agent that knows your project" is bridged by MCP servers that speak your build, your beans, and your conventions. When you adopt an agent (or standardize on one), the first integration question is not which model — it's which context servers it talks to.

## What to do on Monday

None of this requires an "AI conversion." It requires treating agentic coding as a workflow with real boundaries, and running one small evaluation first:

1. **Run your own DPAI-style eval before standardizing.** Pick 10–20 real PRs from your own history. Have the candidate agent reproduce them from the issue descriptions, score them against your existing tests, and record solve rate, cost, and latency. That gives you a buying number your vendor comparison page cannot give you.

2. **Standardize the context path, not just the agent.** Configure MCP servers per stack (Spring Tools 5.2-style for Spring, plus repository/docs indexes). An agent is only as good as the context it can pull; make that the platform decision.

3. **Change how you review, not how you type.** With agents producing multi-file PRs, review becomes the control point. Decide what an agent can open directly vs. what lands in a draft PR; define the merge gate (own tests must pass, no flaky exceptions, migration-aware diffs).

4. **Set the boundary of allowed reach.** Agents that can edit any module are how multi-file drags happen; agents that can *also* mutate shared configs or credentials are how incidents happen. Scope the repository surface first, expand by explicit approval.

5. **Re-evaluate quarterly.** JetBrains re-runs its eval as models ship. Budget a half-day per quarter to re-run your slice against the current default — the ranking you chose in June will not be the ranking in December.

## Conclusion

The JetBrains Developer Ecosystem Survey 2026 is the cleanest evidence yet that agentic coding has stopped being an experiment: 90% of professional developers use agents weekly, 68% daily, and the category leader changed twice within six months. The Java-specific signal is even more decisive — JetBrains validated the trend on its home turf, building an open benchmark that runs real Java repositories, and then set Codex as its recommended agent based on the numbers.

For teams on the JVM, the lesson is not a tool recommendation. It is a workflow recommendation: the unit of work has changed from typing to orchestration, the IDE is becoming the shared workspace of humans and agents over MCP, and the evaluation methodology — your own dataset, your own CI — is now the durable advantage. The tools will keep reshuffling. The workflow that treats agentic coding as the default is the one that compounds.

---

*Sources: [^1] JetBrains Developer Ecosystem Survey 2026 — "AI Coding Agents: Adoption Trends" (blog.jetbrains.com, Aug 2026). [^2] "Codex is now the recommended agent in JetBrains AI" (JetBrains blog, Jun 2026) and the DPAI Arena evaluation methodology. [^3] DPAI Arena announcements (JetBrains blog, Oct 2025). [^4] Spring Tools 5.2.0 release notes (spring.io / GitHub, Jun 15 2026). Attribution: vendor claims (e.g., "Gartner MQ Leader") and commercial data-provider reports (e.g., ETR) are cited as directional, not primary, evidence.*

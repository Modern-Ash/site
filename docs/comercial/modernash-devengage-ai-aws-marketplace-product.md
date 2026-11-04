<p align="center">
  <img src="/logo.png" alt="ModernAsh" width="220">
</p>

# Draft — ModernAsh DevEngage.AI: Governed AI Delivery Pilot

> Marketplace status: commercial draft. Confirm listing availability, pricing, contract terms, regions, and AWS Marketplace requirements before external use.

## Short description

Design and run a controlled software-delivery pilot in which humans and AI agents operate with explicit roles, permissions, lifecycle gates, evidence requirements, handoffs, and approval authority. DevEngage.AI is a ModernAsh professional service powered by the open-source Agora framework.

## Overview

Development teams are already using coding assistants and agents. The remaining challenge is not access to AI; it is establishing an operating model that can answer:

- Who or what performed an action?
- Which role and authority did that actor hold?
- What evidence was produced and reviewed?
- Which gate allowed the work to advance?
- Who had authority to accept the result?

ModernAsh DevEngage.AI helps an organization design, implement, and evaluate that model in a real repository. The engagement uses [Agora](https://github.com/Modern-Ash/agora), an open-source, Markdown-first, Git-native framework for governing software delivery across humans, AI agents, services, and swarms.

Agora is the product foundation. DevEngage.AI is the professional service that adapts it to the customer's workflow, tools, security posture, and approval model.

## Key outcomes

- A selected repository adopted for a controlled Agora pilot.
- Explicit human, AI, service, or swarm actors and role assignments.
- A lifecycle aligned with Spec-Driven Development, Scrum, Kanban, or a customer-specific method.
- Defined permissions, gates, evidence contracts, handoffs, and approval authority.
- Durable, inspectable work records in `.agora/` and Git.
- Hands-on enablement for engineering and relevant reviewers.
- A pilot evaluation and an evidence-based adoption roadmap.

## What Agora does — and does not do

Agora materializes the delivery contract selected by the team. It is provider-neutral and process-neutral. It does not embed an LLM client or replace the customer's agent runtime, source host, issue tracker, CI/CD platform, or security tooling.

Agora is currently Alpha `0.x` and suitable for evaluation and controlled pilots. CLI and Markdown contracts may evolve before `1.0`. Each organization must review permissions, Method Packs, adapters, execution isolation, data handling, and recovery policy.

## Typical use cases

- Engineering organizations introducing coding agents into production repositories.
- Teams that already use GitHub Copilot, coding assistants, or custom agents but lack a shared governance model.
- Regulated or risk-sensitive organizations that require explicit authority, evidence, and approval boundaries.
- Engineering leaders who want to test an AI delivery operating model on real work before a broader rollout.
- Teams working with Scrum, Kanban, Spec-Driven Development, or a custom lifecycle.

## Engagement scope and deliverables

### Phase 1 — Assess

ModernAsh reviews:

- current AI usage, tools, and agent environments;
- repository, issue-tracking, review, and CI/CD workflows;
- team roles and current approval boundaries;
- security, privacy, compliance, and source-code constraints;
- candidate pilot objectives and measurable success criteria.

**Deliverables:** maturity and risk assessment, prioritized opportunities, pilot recommendation, and success criteria.

### Phase 2 — Design

ModernAsh facilitates the design of:

- human, AI, service, and swarm actors;
- roles, capabilities, and authority boundaries;
- Method Pack and lifecycle;
- gates, evidence requirements, and acceptance authority;
- runtime adapters, isolation expectations, and recovery policy.

**Deliverables:** reviewed operating model, authority matrix, pilot configuration plan, and acceptance criteria.

### Phase 3 — Pilot

ModernAsh helps adopt the selected repository and execute a bounded real-world objective. Work sessions, handoffs, artifacts, evidence, gates, and approvals remain inspectable in the governed repository.

**Deliverables:** configured `.agora/` workspace, governed pilot work, representative records and evidence, coaching sessions, and implementation findings.

### Phase 4 — Adopt

ModernAsh evaluates the pilot and prepares the team to operate the model.

**Deliverables:** team playbook, enablement sessions, pilot report, prioritized improvements, and adoption or expansion roadmap.

## Metrics

Metrics are selected with the customer and reported as observed pilot results, not guaranteed improvements. Depending on the objective, they may include:

- cycle time and blocked time;
- rework and defect signals;
- evidence completeness and review quality;
- review and approval time;
- contribution traceability;
- effective team adoption.

## Customer responsibilities

The customer provides:

- an engineering sponsor and pilot team;
- access to the selected repository and relevant workflow documentation;
- customer-approved agent tools, models, accounts, and credentials;
- security, privacy, legal, and compliance requirements;
- role holders authorized to review and accept pilot outcomes;
- timely feedback and participation in working sessions.

ModernAsh does not select or approve AI models on behalf of the customer's risk functions, and Agora does not store provider credentials in its core.

## Typical timeline

The typical pilot lasts **4–8 weeks** for one team and one repository. Duration and scope depend on workflow complexity, security review, integration requirements, and pilot objective.

## Pricing and contracting

DevEngage.AI is structured as a fixed-scope professional services engagement, with optional follow-on work for additional teams, custom Method Packs, deeper integrations, or ongoing enablement.

Final scope, price, milestones, assumptions, and acceptance criteria must be documented in the applicable Statement of Work and, when available, an AWS Marketplace Private Offer.

## Data protection and confidentiality

ModernAsh works under applicable confidentiality and professional services agreements. The pilot can be adapted to customer requirements for source-code access, execution isolation, model usage, data handling, logging, and evidence retention.

## Related resources

- ModernAsh: <https://modern-ash.com/>
- DevEngage.AI: <https://modern-ash.com/devengage/>
- Agora product: <https://modern-ash.com/agora/>
- Agora Core: <https://github.com/Modern-Ash/agora>
- Agora Studio: <https://github.com/Modern-Ash/agora-studio>
- Truco Agora: <https://github.com/Modern-Ash/truco-agora>

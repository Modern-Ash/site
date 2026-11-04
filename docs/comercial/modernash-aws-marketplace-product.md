    <p align="center">
      <img src="/logo.png" alt="ModernAsh logo – símbolo minimalista de un ave/phoenix emergiendo de cenizas con degradado naranja/rojo y la palabra ModernAsh en tipografía sans moderna" width="220">
    </p>


# ModernAsh Legacy Modernization PoC – AI-Assisted Low-Cost Introductory Engagement on AWS

> Marketplace status: commercial draft. Confirm listing availability, pricing, contract terms, regions, and AWS Marketplace requirements before external use.

**Short description**

Validate the modernization of your COBOL and legacy applications to **Java, Python, or Node.js on AWS** with an **AI-assisted, low-cost, fixed-scope Proof of Concept (PoC)**. ModernAsh delivers a working prototype, a **full suite of unit and integration tests**, modern architecture and design, and a roadmap for your full migration.

---

## Overview

ModernAsh is a consulting and professional services company specialized in modernizing legacy applications (such as COBOL and mainframe workloads, as well as **outdated Java applications**) into cloud-native architectures on AWS.

We combine **deep legacy modernization experience** with **AI-assisted analysis and transformation** to accelerate migrations while maintaining strict quality and control. Our approach is always **human-in-the-loop**: AI speeds up analysis, refactoring, test generation, and documentation, and our senior engineers validate every critical change.

Where appropriate, the engagement may use [Renovatio](https://github.com/Modern-Ash/renovatio), ModernAsh's open-source MCP server for Java and COBOL analysis, migration, and refactoring. Renovatio is an accelerator, not a substitute for architecture decisions, functional validation, testing, or human approval.

For pilots that involve coding agents, the delivery workflow may also be governed with [Agora](https://github.com/Modern-Ash/agora), ModernAsh's open-source, Markdown-first and Git-native framework for explicit roles, permissions, gates, evidence, and durable approvals. Agora is Alpha `0.x`; its use must be explicitly scoped and reviewed with the customer.

In the target codebase, we apply **modern software engineering best practices**, including:

- Clean, modular design and separation of concerns  
- Modern architectural patterns (e.g., layered, hexagonal, microservices, event-driven, depending on the context)  
- Clear APIs and contracts between components  
- Readable, maintainable code with consistent conventions  

This **Legacy Modernization PoC – AI-Assisted Low-Cost Introductory Engagement** is designed as a **minimal-risk entry point**: we modernize a **small but representative subset of your codebase** to **Java, Python, or Node.js** on AWS, at **near cost-based pricing**, so you can:

- Validate technical feasibility with AI-assisted modernization  
- Get a **fully tested** modern module, with **unit and integration tests** included  
- Adopt **modern architecture and design practices** in a real, working example  
- See improvements in maintainability, reliability, and performance  
- Estimate effort, cost, and risk for a full modernization program  

Beyond migration from COBOL and other legacy platforms, ModernAsh also helps you **upgrade existing Java applications from older versions (e.g., Java 6/7/8) to modern LTS releases**, while refactoring towards contemporary architectures and AWS best practices.

The PoC is intentionally scoped and priced as an **introductory engagement** that paves the way for a **follow-on full modernization contract via AWS Marketplace Private Offer**.

---

## Key Benefits

- **Low-risk entry point**: fixed-scope, low-cost PoC rather than a big upfront commitment.  
- **AI-assisted acceleration**: faster analysis and migration without losing control or quality.  
- **Optional open-source accelerators**: Renovatio for modernization tooling and Agora for governed delivery, when appropriate to the agreed scope.
- **Production-style quality**: modern architecture, clean code, and automated tests included.  
- **Documentation-first**: code, architecture, and workflows are clearly documented in your repository.  
- **Clear roadmap**: from PoC to full modernization, with predictable effort and cost.  
- **Java version upgrades**: move from outdated Java versions to modern LTS releases with improved architecture and operations on AWS.

---

## Typical Use Cases

- Organizations running COBOL, mainframe, or other legacy workloads that need to move towards **Java, Python, or Node.js** and cloud-native architectures on AWS.  
- Teams that want to **see a small end-to-end modernization** before committing to a full program.  
- Enterprises with **existing Java applications stuck on outdated versions (e.g., Java 6/7/8)** that need to be upgraded to modern LTS versions and refactored for AWS.  
- Highly regulated industries (banking, insurance, government, healthcare) where **testing, traceability, and governance** are critical.

---

## What You Get (Deliverables)

By the end of the PoC, you receive:

### 1. AI-assisted modernized code sample with modern design

- Up to **X,000 lines of code** migrated or refactored to **Java, Python, or Node.js**, using **AI-assisted analysis and transformation pipelines** plus manual refinement by senior engineers.  
- Implementation aligned with **modern software design best practices**:
  - Clean structure and separation of concerns  
  - Clear boundaries between modules and services  
  - Modern architectural patterns (layered, hexagonal, microservices, event-driven, etc., as appropriate)  
- Support for both:
  - **Greenfield migrations** from legacy platforms (e.g., COBOL/mainframe), and  
  - **In-place modernization of existing Java applications**, upgrading to modern Java versions and refactoring architecture.

### 2. Full test coverage for the migrated scope

- **Unit tests** for core business logic in the modernized modules.  
- **Integration tests** for the migrated components, covering critical flows and interfaces (databases, APIs, messaging, etc.).  
- A **test automation setup** ready to plug into your CI/CD pipeline (e.g., Maven/Gradle/pytest/Jest with GitHub Actions, AWS CodeBuild, or your preferred tooling).

### 3. Architecture & design documentation in the target repository

All documentation is delivered **directly in your target source-code repository**, including:

- **UML diagrams** (e.g., component, sequence, and class diagrams) describing the new design.  
- **Architecture visuals** (e.g., system/context diagrams, deployment views, or C4-style diagrams) showing how the modernized components fit into AWS and your ecosystem.  
- **Repository-level documentation**, such as:
  - `README.md` with overview, purpose, and project structure  
  - **HOWTO guides** for local setup, running tests, and deployment steps  
  - Inline comments and/or docstrings explaining critical business logic and integration points  

### 4. Target architecture on AWS

- High-level architecture diagram and **reference implementation** using AWS services, for example:
  - Amazon ECS or Amazon EKS, or AWS Lambda for compute  
  - Amazon RDS, Amazon Aurora, or Amazon DynamoDB for data  
  - Amazon S3 for storage  
  - Amazon API Gateway, Amazon SQS/SNS, and other integration services  
  - Amazon CloudWatch and related services for logging and monitoring  

### 5. Automated & AI-assisted analysis report

- Legacy code inventory and complexity report (modules, dependencies, estimated migration effort).  
- Identification of **quick wins** where AI brings the most acceleration and value.  
- High-level risk and dependency map to inform your modernization roadmap.

### 6. Business value & TCO summary

- High-level estimate of:
  - Potential cost savings (infrastructure, maintenance, etc.)  
  - Risk reduction and resilience improvements  
  - A phased **roadmap for full modernization** (technical and organizational)

### 7. PoC demo and knowledge transfer

- 1–2 workshop sessions with your technical and business stakeholders to review:
  - Modernized code  
  - Architecture and design choices  
  - Test strategy and automation  
  - Roadmap and options for full modernization  

---

## Engagement Model & Typical Timeline

**Typical duration:** 3–6 weeks (depending on complexity and code volume).

### Phase 1 – Discovery & Scoping (remote, 2–3 sessions)

- Understand current legacy environment (COBOL/mainframe, outdated Java, or other), interfaces, SLAs, and constraints.  
- Select a representative module or business process for the PoC.  
- Define **success criteria**, including test coverage and quality goals.

### Phase 2 – Code Intake, AI-Assisted Assessment & Planning

- Secure transfer of code samples and configuration.  
- Static and **AI-assisted analysis**:
  - Complexity scoring  
  - Dependency mapping  
  - Identification of reusable patterns and high-risk areas  
- Plan the modernization approach, AWS architecture, and testing strategy for the PoC.

### Phase 3 – AI-Assisted Modernization PoC Implementation

- AI-assisted and semi-automated transformation to **Java, Python, or Node.js**, with human review and refinement.  
- Refactoring for cloud-native patterns (microservices, APIs, batch jobs, etc.).  
- Containerization or serverless implementation on AWS.

### Phase 4 – Test Creation, Execution & Hardening

- Design and implement **unit tests** for core business logic.  
- Design and implement **integration tests** for key flows and external dependencies.  
- Leverage AI to propose test cases and edge scenarios, validated by ModernAsh engineers.  
- Execute tests, fix defects, and stabilize the modernized component.

### Phase 5 – Demo, Wrap-Up & Roadmap

- Functional and non-functional validation of the modernized component.  
- Demonstrate automated tests and how they integrate into your toolchain.  
- Deliver all artifacts (code, documentation, diagrams, test suites).  
- Present the **full modernization roadmap** and a proposal for the next phase.

---

## How We Use AI (Safety & Governance)

We use AI to **accelerate** modernization, not to replace engineering judgment.

Our AI usage principles:

- AI is used for:
  - Code analysis and pattern detection  
  - Refactoring suggestions and initial transformations  
  - Test case generation and documentation drafts  
- All changes to **business-critical logic and architecture** are reviewed and approved by experienced ModernAsh engineers.  
- Tool or agent output does not count as acceptance by itself. Required tests, evidence, and human approval are defined in the engagement criteria.
- We can adapt to your **data protection and compliance requirements**, including:
  - Isolated environments (e.g., VPC-only connectivity)  
  - No training of external AI models on your proprietary code  
  - Additional security controls based on your industry and policies

---

## Customer Prerequisites

To ensure a successful PoC, we expect:

- Access to a **sample of your legacy codebase**, ideally a self-contained module or business process. This may include COBOL/mainframe systems or older Java applications.  
- Technical contact(s) to clarify functional behavior and dependencies.  
- Agreement on **success criteria** for the PoC (functional, technical, and quality metrics).  
- AWS account available for PoC deployment (or we can deploy in a ModernAsh-owned AWS account and later replicate).

---

## Pricing

This AI-assisted PoC is intentionally priced as a **low-cost, near at-cost introductory engagement** to reduce your upfront risk and accelerate your modernization decision.

- **Fixed-fee PoC** for up to **X,000 lines of code** and a **Y-week engagement**, including modernization **and** the test suite for the migrated scope.  
- Engagement is primarily remote; any travel, if required, is scoped and priced separately.  
- Additional scope or modules can be added via:
  - Change orders, or  
  - A separate **full modernization engagement**

Final pricing will be agreed with you and documented in an **AWS Marketplace Private Offer**.

---

## From PoC to Full Modernization

The goal of this PoC is not a one-off exercise; it is a **low-friction entry point** into a **full legacy modernization program**.

After the PoC, ModernAsh will provide:

- A detailed **Statement of Work (SoW)** for full or phased modernization.  
- **Custom pricing and terms** via AWS Marketplace **Private Offer**, aligned with your procurement and budgeting processes.  

This lets you benefit from:

- Consolidated billing through AWS  
- Standardized procurement  
- Flexible commercial terms and discounts negotiated privately

---

## Support

During the PoC, ModernAsh provides:

- Email and chat support during business hours (US time zones)  
- Scheduled weekly status calls  
- Access to project documentation and source code repositories  

Ongoing support and managed services for production workloads can be added as a **separate professional services engagement** or long-term managed service agreement via AWS Marketplace.

---

## Data Protection & Confidentiality

ModernAsh treats customer source code and data as highly confidential. We work under **Mutual NDAs** and **service agreements** that include:

- Confidentiality of source code and business logic  
- Data protection and access control measures  
- Optional code-handling requirements (e.g., no external AI model training on your proprietary code, isolated environments, restricted access)

Contract terms can be aligned with your standard templates or the AWS Marketplace **Standard Contract for Professional Services**, with modifications via **Private Offer** where necessary.

---

## About ModernAsh

ModernAsh is a specialized consulting and services company focused on:

- Legacy-to-modern application modernization  
- AI-assisted code and architecture transformation  
- Cloud-native design and implementation on AWS  

We bring **hands-on experience with complex legacy environments** (including mainframe and COBOL) and **outdated Java estates**, and deliver modern, well-tested, and well-documented systems in **Java, Python, and Node.js** that your teams can own and evolve with confidence.

## Related resources

- ModernAsh: <https://modern-ash.com/>
- Legacy modernization services: <https://modern-ash.com/servicios/>
- Renovatio: <https://github.com/Modern-Ash/renovatio>
- Agora: <https://modern-ash.com/agora/>
- Contact: <https://modern-ash.com/contacto/>

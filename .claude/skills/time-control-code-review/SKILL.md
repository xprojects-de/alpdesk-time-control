---
name: time-control-code-review
description: "Run this project's full Backend+Frontend code review and present the findings grouped into the five categories Time Control uses (Best Practice, Stabilität, Performance, Funktionalität, Memory-Leaks). Use when the user invokes /time-control-code-review, or asks for a full/categorized review of this project."
---

## What this does

Wraps the built-in `code-review` skill so Time Control reviews always come back grouped the
same way, instead of using whatever categories the underlying tool picks.

## Steps

1. Invoke the built-in `code-review` skill, forwarding whatever arguments were given to this
   skill unchanged:
   - `/time-control-code-review` (no args) → `code-review` (reuses the last effort level)
   - `/time-control-code-review high` → `code-review high`
   - `/time-control-code-review ultra` → `code-review ultra`
   - `/time-control-code-review 42` → `code-review 42` (PR #42)
   - Any `--comment` / `--fix` / `--post` flags pass through as-is.
2. Take the findings the underlying review returns and regroup them under these five headings,
   in this order, instead of whatever category `code-review` assigned:

   1. **Best Practice** — code style, naming, structure, convention violations (including this
      project's English-backend / German-frontend language rule from
      [CLAUDE.md](../../CLAUDE.md)), missed reuse/simplification.
   2. **Stabilität** — correctness bugs, race conditions, error-handling gaps, edge cases.
   3. **Performance** — inefficient queries/algorithms, unnecessary work, blocking calls.
   4. **Funktionalität** — behavior that doesn't match requirements/spec, broken features.
   5. **Memory-Leaks** — unclosed resources, listeners/subscriptions never removed
      (especially Angular/RxJS subscriptions and NgRx effects), growing collections,
      scheduler/executor/thread leaks.

3. A finding that doesn't cleanly fit one category goes under the closest match — prefer
   Stabilität over Best Practice when in doubt, since correctness issues matter more for a
   race-timing app used live at events. Drop headings with no findings rather than showing them
   empty. Keep each finding's file:line reference and description as reported by the underlying
   review.

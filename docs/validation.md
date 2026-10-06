# Delivery workflow validation · 2026-10-06

Base: `f0abb3535f9c175f67afa674b1977fa1b30e8eff`. Scope: Skill, usage/planning documentation, deterministic downloadable package, and package-validation CI. No gallery HTML/CSS/JavaScript, example images, facts or original generation prompts changed.

## Local results

- Skill Creator `quick_validate.py skills/research-comic`: passed (frontmatter/structure validation, not quality proof)
- `python3 -m unittest discover -s tests -v`: 2 tests passed (byte-for-byte archive contents, repeatable build, missing/stale/current download handling)
- `python3 scripts/package_skill.py --check`: passed
- `node --check site/app.js` and `node --check site/data.js`: passed
- Local Markdown links from README and Skill entrypoint: resolved
- `git diff --check`: passed

The checkout was materialized using the connected GitHub API because direct Git transport was unavailable. The original style reference was retrieved as base64 and its Git blob SHA verified before packaging. Unchanged gallery binaries were not downloaded. The remote commit is based on the complete upstream tree, preserving all unchanged files.

No new image generation or paid service was used. No end-to-end production pack, native editable PowerPoint, customer-demand study, pricing test or legal rights clearance was performed. Website UI was not changed, so mobile/browser QA was not rerun; the historical checks in `site/qa-notes.md` are not a new browser test. The PR CI checks package integrity and JavaScript syntax, not visual quality or factual correctness.

## Independent behavioral dry run

Two text-only cases were evaluated: a six-panel AI course outline with an unsupported “AI is always right” claim and uncertain rights; a four-panel brand request asking for editable PPT and next-day publication. The evaluation preserved panel counts, stopped before generation for outline-only scope, flagged evidence/rights gaps and avoided claiming PPT creation. It identified unclear priority between default visual style and approved brand style, plus insufficiently prominent input-rights review before generation. Both instructions were clarified in the Skill entrypoint. The final pass also clarified that essential customer claims still require evidence and approval for editorial changes, layout dates are research leads, and an explicit PPT request must use real supported presentation tooling or seek agreement before a format change. These are simulated workflow checks, not evidence of successful image generation, PPT export or customer acceptance.

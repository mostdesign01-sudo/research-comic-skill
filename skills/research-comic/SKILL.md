---
name: research-comic
description: Create source-backed research and educational comic illustrations in monochrome engraving with sparse cyan accents. Use for scientific diagrams, HTML or AI histories, human evolution, national history comparisons, and illustrated research explainers; separate editable facts from generated imagery.
---

# Research Comic / 研究插画

Turn verified knowledge into an editorial research comic, not a decorative poster.

## Workflow

1. Identify audience, question, medium, size, and the relationship being explained. Choose chronology, branching tree, schematic, or parallel lanes.
2. Research using primary sources. Create a fact table: claim, date/range, source URL, uncertainty. Never fabricate dates, evidence, or direct evolutionary ancestry. Label selective coverage and approximate dates.
3. Read `references/visual-language.md` and `references/research-layouts.md`. Inspect `assets/style-reference.webp` before generating images.
4. Write a storyboard with one visual idea per panel. Distinguish scientific illustration, conceptual reconstruction, and actual evidence.
5. Generate raster artwork with the available image-generation tool. Use the reference as visual guidance when supported. Do not replace requested generated illustrations with coded clip art. Never claim a model call happened if it did not.
6. Keep important labels, dates, sources and captions in editable HTML or separate text layers. Generated artwork should ordinarily contain no text. Each panel needs enough margin; do not distort aspect ratio or crop away important content.
7. Review relationships, countable objects, historical anachronisms, legibility, and scientific limitations. If the raster gets a planet count or other fact wrong, fix or regenerate it; never conceal the error with labels.
8. Deliver illustration files, prompt set, editable explanation, source list, and an explicit limitations note. For a website, verify desktop/mobile, keyboard controls, image enlargement, and relative asset paths.

## Prompt recipe

“[Topic and precise scene/relationship]. Editorial scientific comic, fine monochrome engraving, white crosshatching and stippling on near-black paper, restrained halftone texture, sparse cyan annotations under 10%, tangible objects and meaningful depth, generous margins, [layout]. No baked-in text, no generic cyberpunk, no glossy chrome, no unrelated decoration. [Scientific caveats / object counts].”

## Guardrails

- Evidence before style: beautiful artwork does not validate a claim.
- Evolution is branching, not a ladder of improvement. Do not imply living apes become humans.
- Solar-system distance and size cannot both be legible at true scale in a small illustration. Mark schematic views “not to scale”.
- Country histories use independent selected events; avoid a single ranking of civilizations, modern borders on ancient maps, or implying one event caused another without evidence.
- Recent AI benchmarks and model releases require live verification. Avoid “the strongest model” without metric/date.
- Do not include private portraits, company documents or confidential content in public examples without authorization.

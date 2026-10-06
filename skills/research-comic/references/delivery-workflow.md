# Brief, approval and delivery / 需求与交付

Use for a coherent series, teaching pack or client handoff. A single illustration can use a shortened brief; do not force a commercial process on an exploratory request.

## 1. Brief / 可复制需求单

- Topic and supplied material: title, source links/files, relevant pages, version/date
- Audience and prior knowledge: who should understand what after reading?
- Use: lecture / article / team training / general knowledge / brand explanation
- Core question and one takeaway; claims the customer considers essential (still subject to evidence review)
- Scope: proposed panel count (often 4–6), language, aspect ratio, destination and target viewing size
- Visual direction: default engraving/cyan or an explicitly requested alternative; recurring objects, approved references and brand restrictions
- Delivery: raster images plus separate editable captions/sources; request HTML layout only when needed
- Review: outline approver, factual reviewer, feedback timing and deadline
- Revision boundary: included feedback rounds, what counts as a new topic/panel/style; agree before quoting or promising turnaround
- Rights/privacy: who owns supplied material, permitted use, confidentiality, permission to send inputs to the selected generation provider, whether publication/portfolio use is allowed
- Constraints: available tools, approved generation/spending budget, output formats and exclusions

Use supplied answers; ask only for missing decisions that affect scope, safety or output. Mark assumptions instead of inventing customer approval. Do not upload confidential teaching or company materials to an external model without the required permission.

## 2. Outline checkpoint / 先确认讲什么

Return a compact panel outline before generating a new multi-panel series:

| Panel | Learner question | One claim / takeaway | Visual relationship | Evidence IDs | Caption draft |
| --- | --- | --- | --- | --- | --- |
| 01 | … | … | … | S01 | … |

Arrange a progression (problem → mechanism → example → limits → recap), rather than unrelated decorative images. Four to six panels is a useful starting point, not a required count. Preserve the user's requested number and medium.

Ask the user to approve the outline, style and scope before batch generation. If the current request already explicitly approves them, record that approval and proceed within it. An outline-only request stops here; no image calls. If sources or generation tools are unavailable, deliver the labeled research gaps/outline/prompt draft and say which parts were not verified or generated.

## 3. Evidence and rights review

Maintain a claim ledger with claim ID, panel ID, precise claim, primary source URL/page/section, publication/version date, access date, uncertainty and review status. Separate source-backed facts from teaching analogies, reconstructions and interpretation. Do not turn customer marketing copy into a verified claim. If an essential customer claim is unsupported or contradicted, surface the issue and propose a qualified alternative for approval; do not silently preserve it as fact or rewrite the agreed message. Date evolving AI capabilities and explain limits; remove or qualify unsupported performance, safety or superiority claims.

Maintain an asset ledger with asset ID, source/creator, original or generated status, provider/model if known, generation date, exact prompt and reference inputs, applicable license/terms or permission record, intended use and unresolved restrictions. Unknown rights remain unknown: attribution alone is not permission. The repository's MIT license covers code and Skill text, not a blanket commercial license for every image, logo, likeness or customer input. Do not promise exclusive rights or legal clearance. Keep unapproved assets out of publication-ready delivery; identify what needs replacement or permission.

## 4. Controlled production

- Establish a small style sheet: palette, texture, viewpoint, margins, aspect ratio, caption hierarchy and recurring object/character descriptions. Confirm an initial sample before expanding when the visual direction is still uncertain.
- Reuse that style sheet across panels; keep panel-specific prompts separate. Preserve exact generation prompts and mark later regeneration suggestions as suggestions, not original calls.
- Keep all factual text in `captions.md` or structured data/HTML beside the raster. Separate text is editable; the raster's individual objects are not native editable layers. A text file or HTML page is not an editable PowerPoint deck. If PPT is explicitly requested, clarify which elements must be editable and check the host's presentation tools. If supported, use the appropriate presentation workflow to create and validate a real deck; otherwise report the limitation and ask before changing the requested format. This Skill alone does not supply PPT export.
- Inspect generated pixels for object counts, relationships, anachronisms, omitted details and accidental lettering. Correct/regenerate errors within approved resources; do not hide them with a caption. If budget/tool limits prevent a fix, flag the image as an unresolved draft.

## 5. Handoff and revisions

Deliver only formats actually created and checked. Suggested small pack:

- `images/`: approved, consistently named raster panels
- `captions.md`: panel IDs, titles, editable labels/captions and alt text
- `sources.md`: claim ledger with traceable evidence and caveats
- `prompts.md`: exact calls, reference inputs and style sheet
- `rights.md`: asset ledger, permitted uses and unresolved restrictions
- `handoff.md`: file/version manifest, approval status, known limitations, use instructions and agreed revision boundary
- Optional `index.html` + assets/data: only if an HTML presentation was requested

Before calling the pack final, verify: approved outline matched; claims traceable; unknowns labeled; visual facts inspected; text readable at target size; asset links work; rights/privacy blockers resolved for the intended use; all promised files open. For HTML, additionally test desktop/mobile, keyboard interaction and image enlargement. A user can approve a draft for internal review without clearing it for public/commercial reuse; state that distinction.

Ask for consolidated feedback against panel IDs. Correct factual or production errors; treat a changed audience, new research topic, extra panels or new visual direction as a scope change requiring agreement. Do not invent an included revision count, fee, deadline, or permission to publish. Record version changes so the sources, captions and images stay aligned.

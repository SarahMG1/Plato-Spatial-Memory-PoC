# Euthyphro Spatial Memory PoC — Version 7.1 Development Notes

## Current priority: stability
- Treat Version 7.1 as the single working baseline.
- Prefer direct source fixes over runtime rescue/override scripts.
- Verify local and GitHub Pages behaviour before marking a fix complete.

## Evidence Catalogue
- Add images to evidence pop-outs where useful.
- Prefer actual archaeological objects, plans, monument records, excavation photographs or clearly labelled reconstructions.
- Keep image provenance aligned with the references page.
- Confirm every source named in a pop-out appears in the master bibliography.

## Reconstruction
- Fix local loading so the embedded reconstruction opens `preview-interactive/index.html` rather than a directory listing.
- Audit the current interactive reconstruction end-to-end.
- Replace numbered/baked-in source images with clean image assets.
- Ensure each view has a distinct analytical purpose:
  - Approach — route / northwest entrance / movement
  - Encounter — Stoa Basileios at human scale
  - Herms — material concentration / civic-religious edge
  - Agora-facing — wider civic square
  - Panorama — orientation / landmarks / topography
- Preserve browser-generated numbering only.
- No fake interactivity or recycled crops presented as distinct views.

## Social Memory
- Title: `Consider the collective memory`.
- Replace reconstruction-derived numbered images with clean, purpose-built visuals.
- Keep substantial, meaningful analytical text.
- Remove the bottom interpretation/transition box where it interrupts flow.
- Maintain the page as a journey from people → place → material memory → association.

## References
- Check bibliographic accuracy against authoritative sources.
- Convert bibliography and in-text citations to consistent Harvard style.
- Restore the previous colour-block category treatment.
- Fix contrast problems where pale text sits on pale backgrounds.
- Clarify the MA dissertation name change, e.g. `Burke, S. (now Sarah Machir-Grant)` where appropriate without altering the original authorship record.
- Replace broad placeholder references with exact publication/article/plan/record citations.
- Include OpenStreetMap attribution/reference appropriately.

## Narrative
- Keep current concept and approved `images/narrative_frame.png`.
- Increase image size and text size slightly.
- Lower the `Return to the text` note so it aligns more naturally with the reading-shifts column.
- Preserve the deliberate visual echo of the opening Text page.
- Preserve closing line: `The Greek has not changed. The visitor has. But the past has not become certain.`

## Image workflow
- Sarah can upload binary image assets directly to the repository when needed.
- For each required upload, provide exact filename and destination folder before implementation.

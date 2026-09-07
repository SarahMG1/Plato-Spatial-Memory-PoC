# Euthyphro Spatial Memory PoC — Version 7.1 Development Notes

## Current priority: stability
- Treat Version 7.1 as the single working baseline.
- Prefer direct source fixes over runtime rescue/override scripts.
- Verify local and GitHub Pages behaviour before marking a fix complete.

## Evidence Catalogue
- [ ] Add images to evidence pop-outs where useful.
- [ ] Prefer actual archaeological objects, plans, monument records, excavation photographs or clearly labelled reconstructions.
- [ ] Keep image provenance aligned with the references page.
- [x] Confirm every source family named in a pop-out appears in the master bibliography.
- [x] Begin Harvard-style in-text citation pass on catalogue cards.

## Reconstruction
- [x] Fix local loading so the embedded reconstruction opens `preview-interactive/index.html` rather than a directory listing.
- [x] Remove redundant interpretative controls, recovery slider, return button and low-value explanatory footer.
- [x] Change title to `Enter the encounter zone` and remove old host tagline.
- [x] Add AI-derived reconstruction caution note.
- [x] Rebuild hotspot alignment so click targets scale with the rendered image.
- [ ] Replace numbered/baked-in source images with clean image assets.
- [ ] Expand to the agreed five distinct analytical views:
  - Approach — route / northwest entrance / movement
  - Encounter — Stoa Basileios at human scale
  - Herms — material concentration / civic-religious edge
  - Agora-facing — wider civic square
  - Panorama — orientation / landmarks / topography
- [ ] Preserve browser-generated numbering only.
- [ ] No fake interactivity or recycled crops presented as distinct views.

## Social Memory
- [x] Title: `Consider the collective memory`.
- [x] Remove the bottom interpretation/transition box where it interrupts flow.
- [x] Maintain the page as a journey from people → place → material memory → association.
- [ ] Replace reconstruction-derived numbered images with clean, purpose-built visuals.
- [x] Keep substantial, meaningful analytical text.

## References
- [x] Verify Burnet, Wycherley/Agora III, Paga, Steinbock, Kuhn, HESTIA and OpenStreetMap against authoritative sources.
- [x] Convert master bibliography to a consistent Harvard-style presentation.
- [x] Begin Harvard-style in-text citation pass.
- [x] Restore colour-block category treatment.
- [x] Fix pale-on-pale contrast problems.
- [x] Clarify the MA dissertation name change as `Burke, S. (now Sarah Machir-Grant)` without altering the original authorship record.
- [x] Replace broad Kuhn/Paga/Agora placeholders with exact bibliographic entries where verified.
- [x] Include OpenStreetMap attribution/reference appropriately.
- [ ] Final pass through every analytical paragraph and evidence pop-out for citation consistency.
- [ ] Verify / complete exact Recogito bibliographic metadata.

## Narrative
- [x] Keep current concept and approved `images/narrative_frame.png`.
- [x] Increase image size and text size slightly.
- [x] Lower the `Return to the text` note so it sits more naturally with the reading-shifts column.
- [x] Preserve the deliberate visual echo of the opening Text page.
- [x] Preserve closing line: `The Greek has not changed. The visitor has. But the past has not become certain.`

## Image workflow
- Sarah can upload binary image assets directly to the repository when needed.
- For each required upload, provide exact filename and destination folder before implementation.
- Next image batch: clean Reconstruction views, clean Social Memory visuals, then Evidence pop-out archaeological/reconstruction images.

## Final QA
- [ ] Check every top navigation button.
- [ ] Check Greek/English and Stephanus controls.
- [ ] Check GIS map modes, filters and attribution.
- [ ] Check all Evidence Catalogue pop-outs.
- [ ] Check all Reconstruction viewpoints and hotspots after new images are loaded.
- [ ] Check Social Memory research trails.
- [ ] Check Narrative layout at desktop and narrower widths.
- [ ] Check References page readability and Harvard consistency.
- [ ] Check local-server and GitHub Pages behaviour.

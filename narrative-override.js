(()=>{'use strict';
function applyNarrativeFrame(){
  const panel=document.querySelector('[data-panel="reading"]');
  if(!panel)return;
  document.querySelectorAll('nav [data-tab="reading"]').forEach(b=>b.textContent='Narrative');

  panel.innerHTML=`<div class="wrap narrative-return-wrap">
    <div class="section-head narrative-return-head">
      <div><div class="eyebrow">06 · Narrative</div><h2>End in the narrative</h2></div>
      <p>We return deliberately to the visual language of the opening reading view. The text has not changed; what surrounds it has.</p>
    </div>

    <div class="narrative-return-layout">
      <article class="narrative-reading-pane">
        <div class="narrative-pane-top">
          <div class="eyebrow">Reading shifts</div>
          <strong>How does the text read differently?</strong>
        </div>
        <div class="narrative-shift-stack">
          <section class="narrative-shift-card">
            <span>01 · Stoa Basileios</span>
            <h3>From location to institution</h3>
            <p><strong>Text alone:</strong> the Stoa Basileios is the named place of the encounter.</p>
            <p><strong>Situated reading:</strong> the place opens a recoverable institutional world in which legal and religious authority intersect. Euthyphro's immediate recognition of Socrates' situation can therefore be read against knowledge Plato does not need to spell out.</p>
          </section>
          <section class="narrative-shift-card">
            <span>02 · The Herms</span>
            <h3>From absent object to cultural relationship</h3>
            <p><strong>Text alone:</strong> the herms are absent from the surviving wording.</p>
            <p><strong>Situated reading:</strong> archaeology restores them to the material environment; Thucydides restores a remembered civic narrative around them. A relationship between sacrilege, civic anxiety and a scene concerned with impiety and prosecution becomes visible for testing.</p>
          </section>
          <section class="narrative-shift-card">
            <span>03 · Zeus Eleutherios</span>
            <h3>From reference to contextual question</h3>
            <p><strong>Text alone:</strong> Zeus enters Euthyphro's argument at 5a as divine precedent.</p>
            <p><strong>Situated reading:</strong> the nearby Stoa of Zeus Eleutherios adds a spatial and cultural relationship to the analytical field. It does not prove intention or salience; it creates a question that can be tested.</p>
          </section>
        </div>
      </article>

      <div class="context-pane narrative-visual-frame">
        <div class="map-title"><div class="eyebrow">Narrative frame</div><strong>Northwest Agora · contextual schematic</strong></div>
        <img src="images/narrative_frame.png" alt="Diagrammatic narrative frame showing surviving text, material culture, collective memory and narrative relationships in the northwest Agora">
        <div class="narrative-frame-note">
          <div class="eyebrow">Return to the text</div>
          <strong>The text is still the fixed point.</strong>
          <p>The diagram does not replace the text. It visualises the wider social field recovered around it: material culture, people, institutions, remembered events and a narrative that can change as evidence changes.</p>
        </div>
      </div>
    </div>

    <div class="narrative-question">
      <div class="eyebrow">So how do we read the wider social context?</div>
      <h3>By treating context as evidence that can be structured, mapped and compared</h3>
      <p>The point is not to reconstruct a single ancient mind. It is to recover relationships that a modern text-only encounter tends to suppress: between words and places, places and institutions, objects and remembered events, people and reputations, and one dialogue and another. Those relationships can then be examined rather than merely imagined.</p>
    </div>

    <div class="programme narrative-programme">
      <div class="eyebrow">From this scene to the PhD</div>
      <h3>What happens when this method is applied systematically across Plato?</h3>
      <p>This proof of concept demonstrates the method at the scale of one opening scene. Applied across the corpus, the same structured approach can identify recurring places, material concentrations, institutional associations, cross-dialogue patterns and social-memory relationships that are difficult to detect through close reading alone.</p>
    </div>

    <div class="method-line review-method">The Greek has not changed. The visitor has. <strong>But the past has not become certain.</strong></div>
  </div>`;

  if(!document.querySelector('#narrativeOverrideStyles')){
    const style=document.createElement('style');
    style.id='narrativeOverrideStyles';
    style.textContent=`
      .narrative-return-layout{display:grid;grid-template-columns:minmax(0,1fr) minmax(460px,1.05fr);gap:28px;align-items:start;margin-top:12px}
      .narrative-reading-pane{background:#f9f4ea;border:1px solid #cfc4b3;min-height:680px}
      .narrative-pane-top{padding:22px 24px 18px;border-bottom:1px solid #cfc4b3}.narrative-pane-top strong{display:block;font-family:Georgia,serif;font-size:1.45rem;font-weight:400;margin-top:4px}
      .narrative-shift-stack{padding:22px;display:grid;gap:16px}
      .narrative-shift-card{padding:18px 20px;background:#efe8db;border-left:4px solid #81543f}.narrative-shift-card span{display:block;text-transform:uppercase;letter-spacing:.11em;font-size:.64rem;font-weight:800;color:#81543f}.narrative-shift-card h3{font-family:Georgia,serif;font-size:1.42rem;font-weight:400;margin:.35rem 0 .65rem;color:#202623}.narrative-shift-card p{margin:.4rem 0;color:#56605a;line-height:1.55}.narrative-shift-card p strong{color:#193a39}
      .narrative-visual-frame{height:680px!important;min-height:680px!important;background:#193a39!important;position:relative;overflow:hidden;padding:0!important;border:0!important;box-shadow:none!important}
      .narrative-visual-frame .map-title{position:absolute;z-index:3;left:22px;top:20px;color:#efe8db}.narrative-visual-frame .map-title .eyebrow{color:#d8b573}.narrative-visual-frame img{position:absolute;inset:76px 18px 145px 18px;width:calc(100% - 36px);height:calc(100% - 221px);object-fit:contain;display:block;background:#193a39}
      .narrative-frame-note{position:absolute;left:18px;right:18px;bottom:18px;padding:16px 18px;background:#efe8db;border:1px solid rgba(255,255,255,.16);color:#202623}.narrative-frame-note .eyebrow{color:#81543f}.narrative-frame-note strong{display:block;font-family:Georgia,serif;font-size:1.25rem;font-weight:400;margin:.2rem 0 .35rem}.narrative-frame-note p{margin:0;color:#56605a;line-height:1.45;font-size:.9rem}
      .narrative-question{margin-top:24px;padding:26px;background:#fffaf1;border-top:1px solid #cfc4b3;border-bottom:1px solid #cfc4b3}.narrative-question h3{font-family:Georgia,serif;font-size:1.8rem;font-weight:400;margin:.3rem 0 .6rem}.narrative-question p{max-width:1080px;color:#56605a;line-height:1.65;margin:0}.narrative-programme{margin-top:22px}.narrative-programme p{color:#56605a;line-height:1.65;max-width:1100px}
      @media(max-width:1050px){.narrative-return-layout{grid-template-columns:1fr}.narrative-reading-pane{min-height:auto}.narrative-visual-frame{height:600px!important;min-height:600px!important}}
      @media(max-width:680px){.narrative-visual-frame{height:500px!important;min-height:500px!important}.narrative-visual-frame img{inset:70px 10px 150px 10px;width:calc(100% - 20px);height:calc(100% - 220px)}.narrative-frame-note{left:10px;right:10px;bottom:10px}.narrative-shift-stack{padding:14px}}
    `;
    document.head.appendChild(style);
  }
}
applyNarrativeFrame();
})();
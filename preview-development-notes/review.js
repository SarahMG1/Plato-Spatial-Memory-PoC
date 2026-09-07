(()=>{'use strict';
const evidence=[
{id:'stoa',title:'Stoa Basileios',badge:'EXPLICIT — IN THE TEXT',text:'Plato explicitly locates Socrates around the Basileus’ stoa. Archaeology independently anchors the Royal Stoa at the northwest corner of the Agora.'},
{id:'herms',title:'Herm bases and “The Herms”',badge:'IMPLICIT — CONTEXTUAL EVIDENCE',text:'Excavated herm bases and ancient testimony support a substantial hermic presence around the northwest Agora. The complete arrangement in 399 BCE is not recoverable.'},
{id:'zeus',title:'Stoa of Zeus Eleutherios',badge:'IMPLICIT — CONTEXTUAL EVIDENCE',text:'The neighbouring stoa formed part of the immediate recoverable built environment although Plato does not name it in Euthyphro 2a–5a.'},
{id:'approach',title:'Panathenaic approach',badge:'IMPLICIT — CONTEXTUAL EVIDENCE',text:'The Royal Stoa stood at the northwest entrance to the Agora where major routes converged and the Panathenaic Way entered the square.'},
{id:'shrine',title:'Classical shrine and votive material',badge:'IMPLICIT — CONTEXTUAL EVIDENCE',text:'Religious material excavated east of the Royal Stoa supplies an independently recoverable religious dimension to the setting.'},
{id:'eridanos',title:'Eridanos channel',badge:'IMPLICIT — CONTEXTUAL EVIDENCE',text:'The Classical channel can be spatially reconstructed beside the Royal Stoa and approach. Its sensory prominence remains unknown.'},
{id:'basileus',title:'King Archon and legal-religious procedure',badge:'IMPLICIT — CONTEXTUAL EVIDENCE',text:'The office and location connect the opening scene to a recoverable institutional context in which legal and religious responsibilities overlap.'},
{id:'opening',title:'Situated opening',badge:'IMPLICIT — CONTEXTUAL EVIDENCE',text:'Across 2a–5a the opening links piety, prosecution, office, place and material environment before sustained definitional inquiry begins. Its significance remains interpretative.'}
];
const grid=document.querySelector('#evidenceGrid');
if(grid){grid.innerHTML=evidence.map(e=>`<article class="evidence-card"><span class="evidence-badge">${e.badge}</span><h3>${e.title}</h3><p>${e.text}</p><button class="evidence-more" data-evidence-open="${e.id}">Chronology, detail & research ↗</button></article>`).join('');}

function ensureEvidenceReferences(){
  const groups=document.querySelector('[data-panel="references"] .ref-groups');
  if(!groups || document.querySelector('#evidenceCatalogueRefs')) return;
  const group=document.createElement('article');
  group.className='ref-group';
  group.id='evidenceCatalogueRefs';
  group.innerHTML=`<h3>Evidence Catalogue source trail</h3>
  <div class="ref-item"><span class="ref-role">Primary text used in pop-outs</span><p>Plato. <i>Euthyphro</i> 2a, 5a and 2a–5a, in Burnet, J. (ed.) (1900), <i>Platonis Opera</i>, Vol. I. Oxford: Clarendon Press.</p></div>
  <div class="ref-item"><p>Plato. <i>Apology</i>.</p></div>
  <div class="ref-item"><p>Aristophanes. <i>Clouds</i>.</p></div>
  <div class="ref-item"><p>Thucydides 6.27–29, on the mutilation of the herms and the political and civic consequences that followed.</p></div>
  <div class="ref-item"><span class="ref-role">Literary & epigraphic testimony</span><p><i>The Athenian Agora III: Literary and Epigraphical Testimonia</i>, including testimony used for the Royal Stoa, Archon Basileus and “The Herms”.</p></div>
  <div class="ref-item"><span class="ref-role">ASCSA Athenian Agora evidence</span><p>American School of Classical Studies at Athens, Athenian Agora Excavations: excavation records for the Royal Stoa and northwest Agora; Agora plans and monument records; excavation reports and digital records; Royal Stoa material; and relevant plans documenting the northwest entrance and Panathenaic approach.</p></div>
  <div class="ref-item"><p>American School of Classical Studies at Athens / <i>Hesperia</i>, reports used for the Eridanos channel and related Agora infrastructure.</p></div>
  <div class="ref-item"><p>Paga, J. (2021), <i>Building Democracy in Late Archaic Athens</i>, especially discussion of the Agora, movement, access, siting, visibility and political landscape.</p></div>
  <div class="ref-item"><p>Steinbock, B. (2012), <i>Social Memory in Athenian Public Discourse: Uses and Meanings of the Past</i>. Ann Arbor: University of Michigan Press.</p></div>
  <div class="ref-item"><p>Burke, S. (2019), <i>Plato’s Euthyphro and Phaedrus Dialogues: Inconsistent Gods</i>. MA Dissertation, The Open University.</p></div>
  <div class="ref-item"><p><strong>Coverage note:</strong> this group mirrors every source family currently named in the Evidence Catalogue pop-out windows so that the pop-outs and master References page remain aligned.</p></div>`;
  groups.appendChild(group);
}

function transformSocialMemory(){
  const panel=document.querySelector('[data-panel="memory"]');
  if(!panel) return;
  const title=panel.querySelector('.section-head h2');
  if(title) title.textContent='Consider the collective memory';
  const intro=panel.querySelector('.section-head p');
  if(intro) intro.textContent='The material landscape is only one layer of the encounter. Places, people and objects can also carry reputations, institutional associations and remembered civic narratives. The question is not what every Athenian thought, but what kinds of cultural knowledge may have been available to some receivers.';
  const old=panel.querySelector('.memory-thread');
  if(!old) return;
  old.outerHTML=`<div class="memory-journey">
    <article class="memory-scene memory-scene-people"><div class="memory-visual"><img src="../preview-v2/images/reconstruction_encounter.jpg" alt="Reconstructed encounter scene used as an orientation cue"><span>Reconstruction cue · not archaeological evidence</span></div><div class="memory-content"><div class="memory-step">01 · People and reputation</div><h3>Socrates and Euthyphro arrive with histories</h3><p>The dialogue does not introduce two culturally empty speakers. Socrates could already be encountered through comedy, public reputation and the developing circumstances of his prosecution; Euthyphro presents himself as unusually authoritative about divine matters. Their names therefore open possible fields of prior association before the philosophical exchange has fully begun.</p><div class="memory-question"><strong>What does this add to the reading?</strong><p>The opening may be received not simply as a conversation between two individuals, but as an encounter between recognisable social positions: the publicly scrutinised Socrates and a self-declared religious expert.</p></div><button class="memory-research" data-evidence-open="socrates">Open research trail ↗</button></div></article>
    <article class="memory-scene memory-scene-place"><div class="memory-content"><div class="memory-step">02 · Place and institution</div><h3>The Stoa Basileios is more than a location label</h3><p>Plato explicitly names the Basileus’ stoa, and Euthyphro immediately understands Socrates’ presence there as legally significant. Recovering the office of the Archon Basileus brings legal and religious jurisdiction back into view: the place itself belongs to an institutional world in which prosecution, civic procedure and divine matters overlap.</p><div class="memory-question"><strong>What does this add to the reading?</strong><p>The setting begins to participate in the subject matter. Piety and prosecution are not being discussed in an abstract nowhere; they arise beside an institution whose functions already connect law and religion.</p></div><button class="memory-research" data-evidence-open="stoa">Open research trail ↗</button></div><div class="memory-visual"><img src="../preview-v2/images/reconstruction_agora.png" alt="Reconstructed Agora orientation view used as a spatial cue"><span>Reconstruction cue · the exact 399 BCE appearance remains uncertain</span></div></article>
    <article class="memory-scene memory-scene-object"><div class="memory-visual"><img src="../preview-v2/images/reconstruction_herms.jpg" alt="Reconstructed herms view used as an orientation cue"><span>Reconstruction cue · material presence is separately evidenced</span></div><div class="memory-content"><div class="memory-step">03 · Material culture and remembered event</div><h3>The Herms can carry a civic narrative into the scene</h3><p>The herms are absent from the surviving wording, yet archaeology and ancient testimony recover a dense hermic presence around this part of the Agora. Thucydides gives those objects another layer: the mutilation of the herms in 415 BCE became bound to sacrilege, fear, investigation and political anxiety.</p><div class="memory-question"><strong>What does this add to the reading?</strong><p>The significance is not simply that herms may have stood nearby. It is that materially present objects could also carry remembered civic narratives into a scene already concerned with impiety, prosecution and divine authority. That relationship becomes available for testing only when material and social memory are read together.</p></div><button class="memory-research" data-evidence-open="herms">Open research trail ↗</button></div></article>
    <article class="memory-scene memory-scene-association"><div class="memory-content"><div class="memory-step">04 · Proximity and association</div><h3>Zeus Eleutherios creates a further question</h3><p>The neighbouring Stoa of Zeus Eleutherios belongs to the recoverable built environment, while Euthyphro later invokes Zeus at 5a as divine precedent in defending action against a father. Spatial proximity cannot establish authorial intention, and ancient testimony about Socratic use of the area must be individually verified.</p><div class="memory-question"><strong>What does this add to the reading?</strong><p>It creates a cautious comparative question: when a divine name later enters the argument, does the surrounding religious and civic landscape enlarge the contextual horizon in which that reference can be read?</p></div><button class="memory-research" data-evidence-open="zeus">Open research trail ↗</button></div><div class="memory-visual"><img src="../preview-v2/images/reconstruction_panorama_scene.jpg" alt="Reconstructed panorama used as a contextual cue"><span>Reconstruction cue · proximity generates a question, not a conclusion</span></div></article>
    <div class="memory-transition"><span>From remembered context to interpretation</span><strong>You have recovered more than a setting. What does that change about the act of reading?</strong><button data-tab="reading">Continue to the narrative →</button></div>
  </div>`;
}

function transformNarrative(){
  document.querySelectorAll('[data-tab="reading"]').forEach(b=>{if(b.closest('nav')) b.textContent='Narrative';});
  const panel=document.querySelector('[data-panel="reading"]');
  if(!panel) return;
  panel.innerHTML=`<div class="wrap narrative-wrap">
    <div class="section-head narrative-head"><div><div class="eyebrow">06 · Narrative</div><h2>End in the narrative</h2></div><p>We return to the reading view deliberately. The text has not changed; what surrounds it has. The final step is to read the same passage again within the wider cultural field recovered across the prototype.</p></div>

    <div class="narrative-reading-layout">
      <article class="narrative-left-pane">
        <div class="narrative-return-label"><span>Return to the reading</span><strong>How does the same text read now?</strong></div>
        <div class="reading-shifts compact-shifts">
          <article><div class="shift-label">Reading shift 01</div><h3>From location to institution</h3><p><strong>Text alone:</strong> the Stoa Basileios is the named place of the encounter.</p><p><strong>Now:</strong> the place also opens a recoverable institutional world in which legal and religious authority intersect. Euthyphro’s immediate recognition of Socrates’ situation can therefore be read against knowledge Plato does not need to spell out within the dramatic exchange.</p></article>
          <article><div class="shift-label">Reading shift 02</div><h3>From absent object to cultural relationship</h3><p><strong>Text alone:</strong> the herms do not appear in the surviving wording.</p><p><strong>Now:</strong> archaeology restores them to the material environment; Thucydides restores a remembered civic narrative around them. This does not uncover a hidden meaning, but it exposes a relationship between sacrilege, civic anxiety and a scene concerned with impiety and prosecution.</p></article>
          <article><div class="shift-label">Reading shift 03</div><h3>From reference to contextual question</h3><p><strong>Text alone:</strong> at 5a Zeus enters Euthyphro’s argument as divine precedent.</p><p><strong>Now:</strong> the nearby Stoa of Zeus Eleutherios adds a spatial fact to the analytical field. It does not prove intention or salience; it gives us a relationship that can be tested alongside chronology, movement, institutional setting and reception.</p></article>
        </div>
      </article>

      <aside class="narrative-frame-pane">
        <div class="narrative-frame-title"><div class="eyebrow">Narrative frame</div><strong>Northwest Agora · contextual reading schematic</strong></div>
        <div class="narrative-frame-visual">
          <div class="narrative-field cultural-field"><span>CULTURAL NARRATIVE</span></div>
          <div class="narrative-field memory-field"><span>COLLECTIVE MEMORY</span></div>
          <div class="narrative-field material-field"><span>MATERIAL ENVIRONMENT</span></div>
          <div class="narrative-field place-field"><span>PLACE &amp; INSTITUTION</span></div>
          <div class="narrative-text-core"><div class="eyebrow">Surviving text</div><strong>Euthyphro 2a–5a</strong><p>Socrates and Euthyphro meet at the Stoa Basileios; prosecution, piety and divine authority enter the conversation.</p></div>
        </div>
        <div class="narrative-frame-note"><strong>The text is still the fixed point.</strong><p>What has changed is the recoverable field around it: place, institution, material culture, remembered events and wider cultural associations. The visitor returns to the text carrying those layers.</p></div>
      </aside>
    </div>

    <div class="narrative-question"><div class="eyebrow">How do we read the wider social context?</div><h3>By treating context as evidence that can be structured, mapped and compared</h3><p>The point is not to reconstruct a single ancient mind. It is to recover relationships that a modern text-only encounter tends to suppress: between words and places, places and institutions, objects and remembered events, people and reputations, and one dialogue and another. Those relationships can then be examined rather than merely imagined.</p></div>

    <div class="value-claim"><div class="eyebrow" style="color:#d8b573">What the proof of concept demonstrates</div><h3>The reading changes because the field around the text has changed</h3><p>A relationship absent from the surviving wording can nevertheless become available for scholarly investigation when the text is resituated within recoverable spatial, archaeological and social-memory evidence. The method does not recover authorial intention or a single ancient reading; it recovers contextual relationships, patterns and possibilities that can be tested.</p></div>

    <div class="programme narrative-programme"><div class="eyebrow">From this scene to the PhD</div><h3>What happens when this method is applied systematically across Plato?</h3><p>This proof of concept demonstrates the method at the scale of one opening scene. Applied across the corpus, the same structured approach can identify recurring places, material concentrations, institutional associations, cross-dialogue patterns and social-memory relationships that are difficult to detect through close reading alone.</p></div>

    <div class="method-line review-method">The Greek has not changed. The visitor has. <strong>But the past has not become certain.</strong></div>
  </div>`;
}

ensureEvidenceReferences();
transformSocialMemory();
transformNarrative();

const s=document.createElement('script');
s.src='../v71-fallback.js?v=7.1.6';
s.onload=()=>console.info('V7.1 runtime loaded');
s.onerror=()=>console.error('V7.1 runtime failed to load');
document.body.appendChild(s);
})();
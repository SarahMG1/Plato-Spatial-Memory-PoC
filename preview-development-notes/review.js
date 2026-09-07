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
ensureEvidenceReferences();

const s=document.createElement('script');
s.src='../v71-fallback.js?v=7.1.4';
s.onload=()=>console.info('V7.1 runtime loaded');
s.onerror=()=>console.error('V7.1 runtime failed to load');
document.body.appendChild(s);
})();
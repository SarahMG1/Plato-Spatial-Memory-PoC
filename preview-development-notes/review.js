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
const s=document.createElement('script');
s.src='../v71-fallback.js?v=7.1.3';
s.onload=()=>console.info('V7.1 runtime loaded');
s.onerror=()=>console.error('V7.1 runtime failed to load');
document.body.appendChild(s);
})();
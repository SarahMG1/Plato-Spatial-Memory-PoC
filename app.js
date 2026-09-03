const map=document.querySelector('#map');
document.querySelectorAll('.steph button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.steph button').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const d=sectionData[btn.dataset.sec];document.querySelector('#greek').textContent=d.g;document.querySelector('#explicitTitle').textContent=d.t;document.querySelector('#explicitBody').textContent=d.b;map.dataset.layer=d.layer;document.querySelectorAll('.layer-bar button').forEach(x=>x.classList.toggle('active',x.dataset.layer===d.layer));}));
document.querySelectorAll('.layer-bar button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.layer-bar button').forEach(x=>x.classList.remove('active'));btn.classList.add('active');map.dataset.layer=btn.dataset.layer;}));
const recover={
space:{tag:'Spatial analysis',h:'A named place is also a spatial relationship.',p:'Locate the Stoa within the Agora, then ask about approach, proximity, orientation, neighbouring structures, routes and visibility. The point is not simply to attach coordinates to Plato, but to recover the material configuration within which the encounter is staged.',gain:'Socrates’ presence becomes a displacement within a known civic landscape rather than a neutral stage direction.'},
practice:{tag:'Institutional practice',h:'Places acquire meaning through repeated use.',p:'The Basileus was not an abstract title floating above the text. Offices, legal processes, cult responsibilities, oaths and recurring civic behaviours connect institutions to physical settings and make them socially legible.',gain:'The setting potentially carries legal and religious associations before Socrates and Euthyphro explicitly debate piety.'},
arch:{tag:'Archaeological record',h:'What survives is not the same as what once stood.',p:'Excavated foundations, architectural fragments, inscriptions, deposits, plans and field records constrain reconstruction. Modern scholarship then interprets those remains, revises chronologies and tests how the building sat within the Agora.',gain:'The reconstruction becomes an argument built from evidence, with visible uncertainty, rather than an authoritative-looking invented Athens.'},
memory:{tag:'Social memory',h:'Repeated practice can become remembered place.',p:'A civic location may accumulate associations across time through institutions, rituals, legal procedures, public documents and shared narratives. The research asks which of those associations were sufficiently available to function as implicit contextual knowledge.',gain:'A place-name can operate as a cue: the text may activate meanings that a modern decontextualised reader does not automatically recover.'},
interpret:{tag:'Interpretation',h:'The words remain fixed; the contextual horizon changes.',p:'We return to Burnet after reconstructing space, practice, archaeology and memory. The test is not whether we can prove what every Athenian thought, but whether historically grounded contextual recovery opens defensible interpretive possibilities.',gain:'The proof of concept demonstrates a method: explicit text plus recoverable context can generate a richer, but still evidence-disciplined, reading.'}
};
document.querySelectorAll('.recovery-nav button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.recovery-nav button').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const d=recover[btn.dataset.recover];document.querySelector('#recoveryContent').innerHTML=`<span class="tag">${d.tag}</span><h3>${d.h}</h3><p>${d.p}</p><div class="what-changes"><b>Interpretive gain</b><div>${d.gain}</div></div>`;}));

const tabButtons=[...document.querySelectorAll('[data-tab]')];
const tabPanels=[...document.querySelectorAll('[data-panel]')];
function openTab(name,updateHash=true){
  tabPanels.forEach(p=>p.classList.toggle('active',p.dataset.panel===name));
  tabButtons.forEach(b=>b.classList.toggle('active',b.dataset.tab===name));
  document.documentElement.scrollTop=0; document.body.scrollTop=0;
  if(updateHash) history.replaceState(null,'','#'+name);
  const names={scene:'Scene',text:'Text',spatial:'Spatial Analysis',archaeology:'Archaeology',memory:'Social Memory',interpretation:'What This Tells Us',references:'References'};
  const kicker=document.querySelector('#tabKicker'); if(kicker) kicker.textContent=names[name]||name;
}
tabButtons.forEach(b=>b.addEventListener('click',()=>openTab(b.dataset.tab)));
const initial=location.hash.replace('#','');
if(['scene','text','spatial','archaeology','memory','interpretation','references'].includes(initial)) openTab(initial,false);
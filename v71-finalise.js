(()=>{'use strict';

function finaliseReferences(){
  const panel=document.querySelector('[data-panel="references"]');
  if(!panel)return;
  const head=panel.querySelector('.section-head');
  if(head){
    const h2=head.querySelector('h2');
    if(h2)h2.textContent='References';
    const p=head.querySelector('p');
    if(p)p.remove();
  }
  const intro=panel.querySelector('.reference-intro');
  if(intro)intro.innerHTML=`
    <article class="origin-card"><div class="eyebrow">Research origin · 2019</div><h3>Burke, S. (now Sarah Machir-Grant)</h3><p><i>Plato’s Euthyphro and Phaedrus Dialogues: Inconsistent Gods</i>. MA dissertation, The Open University. The dissertation was submitted under the researcher’s former name, Sarah Burke.</p></article>`;
  const groups=panel.querySelector('.ref-groups');
  if(!groups)return;
  groups.innerHTML=`
    <article class="ref-group ref-primary"><h3>Primary text & ancient sources</h3>
      <div class="ref-item"><span class="ref-role">Canonical Greek text</span><p>Plato (1900) <i>Platonis Opera</i>, Vol. I. Edited by J. Burnet. Oxford: Clarendon Press. <i>Euthyphro</i> 2a–5a.</p></div>
      <div class="ref-item"><p>Plato (1900) <i>Apologia Socratis</i>, in Burnet, J. (ed.) <i>Platonis Opera</i>, Vol. I. Oxford: Clarendon Press, pp. 17–42.</p></div>
      <div class="ref-item"><p>Aristophanes (1968) <i>Clouds</i>. Edited with introduction and commentary by K.J. Dover. Oxford: Clarendon Press.</p></div>
      <div class="ref-item"><p>Thucydides, <i>History of the Peloponnesian War</i>, 6.27–29.</p></div>
    </article>
    <article class="ref-group ref-archaeology"><h3>Archaeology & topography</h3>
      <div class="ref-item"><p>American School of Classical Studies at Athens (ASCSA) (n.d.) <i>Athenian Agora Excavations: publications and resources</i>. Available via the Athenian Agora digital resources.</p></div>
      <div class="ref-item"><p>Wycherley, R.E. (1957) <i>The Athenian Agora, Vol. III: Literary and Epigraphical Testimonia</i>. Princeton, NJ: American School of Classical Studies at Athens.</p></div>
      <div class="ref-item"><p>Paga, J. (2021) <i>Building Democracy in Late Archaic Athens</i>. Oxford: Oxford University Press. doi:10.1093/oso/9780190083571.001.0001.</p></div>
      <div class="ref-item"><p>Kuhn, G. (1985) ‘Untersuchungen zur Funktion der Säulenhalle III. Die Stoa Basileios in Athen’, <i>Jahrbuch des Deutschen Archäologischen Instituts</i>, 100, pp. 200–226.</p></div>
      <div class="ref-item"><p>Kuhn, G. (2018) ‘Bemerkungen zur Stoa Basileios’, <i>Mitteilungen des Deutschen Archäologischen Instituts, Athenische Abteilung</i>, 133, pp. 173–183. doi:10.34780/94xyza85.</p></div>
    </article>
    <article class="ref-group ref-memory"><h3>Social & collective memory</h3>
      <div class="ref-item"><p>Steinbock, B. (2012) <i>Social Memory in Athenian Public Discourse: Uses and Meanings of the Past</i>. Ann Arbor, MI: University of Michigan Press. doi:10.3998/mpub.1897162.</p></div>
      <div class="ref-item"><p>Burke, S. (now Sarah Machir-Grant) (2019) <i>Plato’s Euthyphro and Phaedrus Dialogues: Inconsistent Gods</i>. MA dissertation. The Open University.</p></div>
    </article>
    <article class="ref-group ref-digital"><h3>Spatial & digital humanities</h3>
      <div class="ref-item"><p>HESTIA (n.d.) <i>Hestia: geospatial analysis of Herodotus’s Histories</i>. The Open University. Available at: https://hestia.open.ac.uk/.</p></div>
      <div class="ref-item"><p>Recogito (n.d.) <i>Recogito: semantic annotation for documents and images</i>. Pelagios Network. [Digital research tool].</p></div>
      <div class="ref-item"><p>OpenStreetMap contributors (n.d.) <i>OpenStreetMap</i>. Map data licensed under the Open Data Commons Open Database License (ODbL). Available at: https://www.openstreetmap.org/copyright.</p></div>
    </article>
    <article class="ref-group ref-ai"><h3>AI use & prototype development</h3>
      <div class="ref-item"><p>OpenAI (2026) <i>ChatGPT (GPT-5.6 Sol)</i>. Used as an AI research and development assistant in the design and construction of the Euthyphro Spatial Memory Prototype, including web development, interface prototyping, research organisation and iterative design. Scholarly claims and interpretations remain subject to source verification and researcher review.</p></div>
    </article>`;
}

function finaliseSpatial(){
  const panel=document.querySelector('[data-panel="spatial"]');
  if(!panel)return;
  const h2=panel.querySelector('.section-head h2');
  if(h2)h2.textContent='Interrogate the Landscape';
}

function finaliseReconstruction(){
  const panel=document.querySelector('[data-panel="reconstruction"]');
  if(!panel)return;
  const h2=panel.querySelector('.section-head h2'); if(h2)h2.textContent='Reconstruct the encounter';
  const p=panel.querySelector('.section-head p'); if(p)p.remove();
}

function finaliseNarrative(){
  const panel=document.querySelector('[data-panel="reading"]');
  if(!panel)return;
  const frame=panel.querySelector('.narrative-visual-frame');
  if(frame){
    const img=frame.querySelector('img'); if(img)img.classList.add('narrative-approved-image');
    const note=frame.querySelector('.narrative-frame-note'); if(note)note.classList.add('narrative-return-lowered');
  }
}

function applyInlineHarvard(){
  document.querySelectorAll('.evidence-card').forEach(card=>{
    const h=card.querySelector('h3')?.textContent||'';
    const p=card.querySelector('p'); if(!p)return;
    const map={
      'Stoa Basileios':' (Plato, <i>Euthyphro</i> 2a; Wycherley, 1957; Paga, 2021)',
      'Herm bases and “The Herms”':' (Thucydides 6.27–29; Wycherley, 1957; Steinbock, 2012)',
      'Stoa of Zeus Eleutherios':' (Wycherley, 1957; Paga, 2021)',
      'Panathenaic approach':' (Paga, 2021)',
      'Classical shrine and votive material':' (ASCSA, n.d.)',
      'Eridanos channel':' (ASCSA, n.d.)',
      'King Archon and legal-religious procedure':' (Plato, <i>Euthyphro</i> 2a; Wycherley, 1957)',
      'Situated opening':' (Plato, <i>Euthyphro</i> 2a–5a; Burke, 2019)'
    };
    const cite=map[h]; if(cite && !p.dataset.harvard){p.innerHTML+=cite;p.dataset.harvard='true';}
  });
}

function run(){finaliseReferences();finaliseSpatial();finaliseReconstruction();finaliseNarrative();applyInlineHarvard();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
setTimeout(run,500);
})();

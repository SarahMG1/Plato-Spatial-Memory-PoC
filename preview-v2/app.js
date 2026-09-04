(()=>{
'use strict';

const implicitBySection={
  '2a':[
    {title:'Stoa Basileios',status:'Explicit place · material setting',text:'Plato names the Basileus’ stoa, but does not describe its architecture, neighbouring buildings, approaches or surrounding objects.'},
    {title:'Herm bases and “The Herms”',status:'Implicit · materially attested',text:'Herm bases are archaeologically attested around the Royal Stoa and ancient testimony describes a wider concentration of herms in this northwest Agora zone.'},
    {title:'Stoa of Zeus Eleutherios',status:'Implicit · attested place',text:'Immediately adjacent to the Royal Stoa, this neighbouring civic/cult building belongs to the recoverable environment even though it is not named here.'},
    {title:'Panathenaic approach',status:'Implicit · topographical',text:'The encounter occurs at the northwest entrance to the Agora where major routes converged and the Panathenaic Way entered the square.'},
    {title:'Classical shrine and votive material',status:'Implicit · archaeological',text:'Excavation east of the Royal Stoa revealed religious material not enumerated in the dialogue, potentially relevant to the lived setting of a discussion that moves toward piety.'}
  ],
  '2b':[{title:'Legal place becomes legal procedure',status:'Implicit institutional context',text:'A receiver familiar with the site may not need the text to explain why the Basileus’ stoa is an intelligible place for a legal-religious matter.'}],
  '2c':[{title:'The polis enters the encounter',status:'Potentially implicit social knowledge',text:'The accusation links the scene to civic procedure, deme identity and the city’s institutional networks beyond the two visible speakers.'}],
  '3':[{title:'Religious and civic surroundings',status:'Interpretative possibility',text:'As accusations concerning the gods become explicit, the materially religious character of the surrounding environment becomes a historically testable contextual question.'}],
  '4':[{title:'Place and prosecution remain active',status:'Contextual continuity',text:'The dramatic setting has not disappeared simply because the conversation turns to the two cases. The legal and religious environment continues to frame the exchange.'}],
  '5a':[{title:'Return to the situated dialogue',status:'Interpretative',text:'Before the sustained definitional inquiry begins, the opening has already connected piety, prosecution, office, place and material environment.'}]
};

const features=[
  {id:'stoa',name:'Stoa Basileios',lat:37.976123,lng:23.722336,layer:'places',status:'explicit',evidence:'Attested',summary:'Explicit in Euthyphro 2a; archaeologically identified at the northwest corner of the Agora.',confidence:'High location confidence; exact dramatic standing point unknown.'},
  {id:'zeus',name:'Stoa of Zeus Eleutherios',lat:37.975843,lng:23.722163,layer:'places',status:'implicit',evidence:'Attested',summary:'Neighbouring civic/cult architecture immediately beside the Royal Stoa.',confidence:'High archaeological location confidence.'},
  {id:'herms',name:'Herm bases / “The Herms”',lat:37.976205,lng:23.722392,layer:'material',status:'implicit',evidence:'Attested + reconstructed concentration',summary:'In-situ herm bases and a broader ancient/archaeological concentration around the northwest Agora.',confidence:'Findspots attested; full 399 BCE configuration incomplete.'},
  {id:'shrine',name:'Classical shrine & votive material',lat:37.97616,lng:23.72263,layer:'material',status:'implicit',evidence:'Attested',summary:'Religious material excavated east of the Stoa Basileios.',confidence:'Excavated context attested; display point generalized.'},
  {id:'route',name:'Panathenaic Way / northwest approach',lat:37.97634,lng:23.72268,layer:'movement',status:'implicit',evidence:'Topographically attested',summary:'Principal approach where the processional route entered the Agora.',confidence:'Relationship established; line visualised schematically.'},
  {id:'river',name:'Eridanos channel',lat:37.97642,lng:23.72230,layer:'movement',status:'implicit',evidence:'Reconstructed from archaeology',summary:'Classical channel beside the Royal Stoa and northwest route.',confidence:'Course recoverable; sensory salience unknown.'},
  {id:'encounter',name:'Socrates & Euthyphro encounter zone',lat:37.97610,lng:23.72243,layer:'people',status:'explicit',evidence:'Interpretative point',summary:'Approximate analytical anchor for the dramatic encounter.',confidence:'Vicinity only.'}
];

let map=null,osm=null,ancientOverlay=null,displayLayers=[],radiusCircle=null,currentMode='modern',currentStatus='all';
const centre=[37.97610,23.72243];
const ancientBounds=[[37.97275,23.72015],[37.97755,23.72525]];

function openTab(name){
  document.querySelectorAll('[data-tab]').forEach(b=>b.classList.toggle('active',b.dataset.tab===name));
  document.querySelectorAll('[data-panel]').forEach(p=>p.classList.toggle('active',p.dataset.panel===name));
  if(name==='spatial') setTimeout(()=>{initMap();if(map)map.invalidateSize();},60);
}
function initTabs(){document.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>openTab(b.dataset.tab)));}

function getSection(sec){try{return (typeof sectionData!=='undefined'&&sectionData[sec])?sectionData[sec]:null;}catch(_){return null;}}
function updateText(sec){
  const d=getSection(sec);if(!d)return;
  document.querySelectorAll('.steph button').forEach(x=>x.classList.toggle('active',x.dataset.sec===sec));
  const greek=document.querySelector('#greek'),title=document.querySelector('#explicitTitle'),body=document.querySelector('#explicitBody'),list=document.querySelector('#implicitList');
  if(greek)greek.textContent=d.g;if(title)title.textContent=d.t;if(body)body.textContent=d.b;
  if(list)list.innerHTML=(implicitBySection[sec]||[]).map(x=>`<article class="implicit-item"><span class="pill">${x.status}</span><strong>${x.title}</strong><span>${x.text}</span></article>`).join('');
}
function initText(){document.querySelectorAll('.steph button').forEach(b=>b.addEventListener('click',()=>updateText(b.dataset.sec)));updateText('2a');}

function showFeature(f){
  const el=document.querySelector('#featureRecord');if(!el)return;
  el.innerHTML=`<div class="eyebrow">Feature record · ${f.evidence}</div><h3>${f.name}</h3><p>${f.summary}</p><dl><dt>Textual status</dt><dd>${f.status==='explicit'?'Explicit':'Implicit / external evidence'}</dd><dt>Spatial confidence</dt><dd>${f.confidence}</dd></dl>`;
}
function initMap(){
  if(map||!window.L||!document.querySelector('#geoMap'))return;
  map=L.map('geoMap',{minZoom:15,maxZoom:21,zoomSnap:.25}).setView(centre,19);
  map.createPane('ancientBase');
  map.getPane('ancientBase').style.zIndex=220;
  map.getPane('ancientBase').style.pointerEvents='none';
  osm=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:21,attribution:'© OpenStreetMap contributors'}).addTo(map);
  ancientOverlay=L.imageOverlay('ancient-agora-map.svg?v=1',ancientBounds,{opacity:1,interactive:false,pane:'ancientBase'});
  features.forEach(f=>{
    const c=f.status==='explicit'?'#a95437':f.layer==='material'?'#467079':'#69745d';
    const m=L.circleMarker([f.lat,f.lng],{radius:f.id==='encounter'?9:7,color:'#f7efe2',weight:2,fillColor:c,fillOpacity:1});
    m._f=f;m.bindTooltip(f.name);m.on('click',()=>showFeature(f));displayLayers.push(m);
  });
  applyFilters();applyMapMode();
}
function applyMapMode(){
  if(!map)return;
  [osm,ancientOverlay].forEach(l=>{if(l&&map.hasLayer(l))map.removeLayer(l);});
  if(currentMode==='modern'){
    osm.setOpacity(1).addTo(map);
    map.setView(centre,19,{animate:false});
  }
  if(currentMode==='historic'){
    ancientOverlay.setOpacity(1).addTo(map);
    map.fitBounds(ancientBounds,{padding:[18,18],animate:false});
  }
  if(currentMode==='overlay'){
    osm.setOpacity(1).addTo(map);
    ancientOverlay.setOpacity(.54).addTo(map);
    map.fitBounds(ancientBounds,{padding:[18,18],animate:false});
  }
  displayLayers.forEach(l=>{if(map.hasLayer(l)&&l.bringToFront)l.bringToFront();});
}
function applyFilters(){
  if(!map)return;
  const enabled=new Set([...document.querySelectorAll('[data-layer]:checked')].map(x=>x.dataset.layer));
  displayLayers.forEach(m=>{const f=m._f,show=enabled.has(f.layer)&&(currentStatus==='all'||f.status===currentStatus);if(show&&!map.hasLayer(m))m.addTo(map);if(!show&&map.hasLayer(m))map.removeLayer(m);});
}
function initGISControls(){
  document.querySelectorAll('[data-layer]').forEach(x=>x.addEventListener('change',applyFilters));
  document.querySelectorAll('[data-status]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-status]').forEach(x=>x.classList.remove('active'));b.classList.add('active');currentStatus=b.dataset.status;applyFilters();}));
  document.querySelectorAll('[data-mode]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-mode]').forEach(x=>x.classList.remove('active'));b.classList.add('active');currentMode=b.dataset.mode;applyMapMode();}));
  document.querySelectorAll('[data-radius]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-radius]').forEach(x=>x.classList.remove('active'));b.classList.add('active');if(!map)initMap();if(radiusCircle&&map){map.removeLayer(radiusCircle);radiusCircle=null;}const r=Number(b.dataset.radius);if(r&&map)radiusCircle=L.circle(centre,{radius:r,color:'#a95437',weight:1,fillOpacity:.03,dashArray:'5 5'}).addTo(map);}));
}

const hs={
  stoa:{x:1115,y:315,title:'Stoa Basileios',p:'Explicit in Euthyphro 2a and archaeologically identified. Architectural appearance is reconstructed.',tags:['Explicit','Attested']},
  herms:{x:1550,y:465,title:'Herms',p:'Herm bases and a wider concentration are independently attested around the northwest Agora.',tags:['Implicit','Materially attested']},
  route:{x:1740,y:565,title:'Panathenaic approach',p:'The processional route entered the Agora beside the Royal Stoa. The displayed surface is a visual reconstruction of a travelled, unmodernised approach rather than a claim to an exact paving treatment.',tags:['Implicit','Topography','Surface reconstructed']},
  zeus:{x:400,y:410,title:'Stoa of Zeus Eleutherios',p:'Immediately adjacent to the Royal Stoa and part of the recoverable built environment.',tags:['Implicit','Attested']},
  shrine:{x:1950,y:515,title:'Classical shrine & offerings',p:'Excavated religious material east of the Royal Stoa provides an important implicit-context test case.',tags:['Implicit','Materially attested']},
  river:{x:470,y:620,title:'Eridanos channel',p:'The Classical channel is archaeologically recoverable; its sensory prominence to an individual remains unknown.',tags:['Implicit','Reconstructed course']}
};
function selectHotspot(id){
  const d=hs[id],card=document.querySelector('#reconCard');if(!d||!card)return;
  document.querySelectorAll('[data-hotspot]').forEach(b=>b.classList.toggle('selected',b.dataset.hotspot===id));
  card.innerHTML=`<div class="eyebrow">Selected evidence</div><h3>${d.title}</h3><p>${d.p}</p><div class="evidence-tags">${d.tags.map(t=>`<span>${t}</span>`).join('')}</div><small>The visual reconstruction is evidence-aware and deliberately distinct from certainty.</small>`;
}
function initReconstruction(){
  const pano=document.querySelector('#panorama'),layer=document.querySelector('#hotspotLayer');if(!pano||!layer)return;
  if(!layer.dataset.ready){
    Object.entries(hs).forEach(([id,d],i)=>[0,2600].forEach(off=>{
      const b=document.createElement('button');b.type='button';b.className='hotspot '+(id==='stoa'?'':'implicit')+((id==='zeus'||id==='river')?' uncertain':'');b.dataset.hotspot=id;b.setAttribute('aria-label',`${i+1}: ${d.title}`);b.textContent=String(i+1);b.style.left=(d.x+off)+'px';b.style.top=d.y+'px';b.addEventListener('pointerdown',e=>e.stopPropagation());b.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();selectHotspot(id);});layer.appendChild(b);
    }));
    layer.dataset.ready='1';
  }
  let down=false,startX=0,startScroll=0;const one=2600;const centreView=()=>{pano.scrollLeft=1120;};
  pano.addEventListener('scroll',()=>{if(pano.scrollLeft<20)pano.scrollLeft+=one;else if(pano.scrollLeft>one+20)pano.scrollLeft-=one;},{passive:true});
  pano.addEventListener('pointerdown',e=>{if(e.target.closest('button,input,label,a,[data-hotspot]'))return;down=true;startX=e.clientX;startScroll=pano.scrollLeft;if(pano.setPointerCapture)pano.setPointerCapture(e.pointerId);pano.classList.add('dragging');});
  pano.addEventListener('pointermove',e=>{if(down)pano.scrollLeft=startScroll-(e.clientX-startX);});
  ['pointerup','pointercancel'].forEach(ev=>pano.addEventListener(ev,()=>{down=false;pano.classList.remove('dragging');}));
  document.querySelector('#centreView')?.addEventListener('click',centreView);
  document.querySelector('#implicitToggle')?.addEventListener('change',e=>pano.classList.toggle('hide-implicit',!e.target.checked));
  document.querySelector('#uncertaintyToggle')?.addEventListener('change',e=>pano.classList.toggle('show-uncertainty',e.target.checked));
  setTimeout(centreView,80);
}

function init(){initTabs();initText();initGISControls();initReconstruction();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

(()=>{
  const pano=document.querySelector('#panorama');
  if(!pano)return;

  // Do not let the panorama drag handler steal pointer events from controls/hotspots.
  const protectInteractive=(root=pano)=>{
    root.querySelectorAll('button,input,label,a,[data-hotspot]').forEach(el=>{
      el.addEventListener('pointerdown',e=>e.stopPropagation());
      el.addEventListener('pointerup',e=>e.stopPropagation());
    });
  };
  protectInteractive();

  // Defensive toolbar wiring for the preview build.
  const world=pano.querySelector('.panorama-world');
  const one=()=>world?.offsetWidth||2600;
  document.querySelector('#centreView')?.addEventListener('click',()=>{pano.scrollLeft=one()*.48;});
  document.querySelector('#implicitToggle')?.addEventListener('change',e=>{
    pano.classList.toggle('hide-implicit',!e.target.checked);
  });
  document.querySelector('#uncertaintyToggle')?.addEventListener('change',e=>{
    pano.classList.toggle('show-uncertainty',e.target.checked);
  });
})();
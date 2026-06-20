function renderDomains(filtered = domains) {
  const grid = document.getElementById('domain-grid');
  grid.innerHTML = '';
  filtered.forEach(d => {
    const el = document.createElement('div');
    el.className = 'domain-card';
    el.innerHTML = `
      <div class="name">${d.name}<span class="arrow">›</span></div>
      <div class="horizon">${d.horizon}</div>
      <div class="details">
        <div><strong>Horizon:</strong> ${d.horizon}</div>
        <div style="margin-top: var(--space-xs);"><strong>Representative workflows:</strong><br>${d.workflows}</div>
        <div style="margin-top: var(--space-xs);"><strong>Sample deliverable:</strong><br>${d.deliverable}</div>
      </div>
    `;
    el.onclick = () => {
      const wasExpanded = el.classList.contains('expanded');
      // collapse ALL cards first - make collapse instant for layout
      document.querySelectorAll('.domain-card').forEach(c => {
        if (c.classList.contains('expanded')) {
          c.classList.remove('expanded');
          const det = c.querySelector('.details');
          if (det) det.style.maxHeight = '0';  // force instant collapse for grid row shrink
        }
      });
      const gridEl = document.getElementById('domain-grid');
      if (gridEl) {
        // hard reset of grid forces browser to re-measure all item heights and recompute row sizes
        gridEl.style.display = 'none';
        gridEl.offsetHeight;
        gridEl.style.display = 'grid';
        gridEl.offsetHeight;
      }
      // lock all collapsed cards to their now-small intrinsic size (helps grid rows shrink reliably)
      document.querySelectorAll('.domain-card:not(.expanded)').forEach(c => {
        // force layout on this card to get the correct small scrollHeight
        c.offsetHeight;
        c.style.height = c.scrollHeight + 'px';
      });
      if (gridEl) gridEl.offsetHeight;  // extra force
      if (!wasExpanded) {
        // expand after layout settled; let CSS handle the max-height transition
        requestAnimationFrame(() => {
          if (gridEl) gridEl.offsetHeight;
          el.style.height = '';  // release height lock so it can grow
          el.classList.add('expanded');
          const det = el.querySelector('.details');
          if (det) det.style.maxHeight = '';  // clear inline so CSS transition applies
        });
      }
    };
    grid.appendChild(el);
  });
}

function renderRoster(filtered = team) {
  const grid = document.getElementById('roster-grid');
  grid.innerHTML = '';
  filtered.forEach(p => {
    if (!p.name) return;
    const imgSrc = teamImages[p.name];
    const el = document.createElement('div');
    el.className = 'person';
    el.innerHTML = `
      <div class="person-header">
        ${imgSrc ? `<img class="pfp" src="${imgSrc}" alt="${p.name}">` : ''}
        <div>
          <div class="name">${p.name}</div>
          ${p.sub ? `<div class="sub">${p.sub}</div>` : ''}
        </div>
      </div>
      ${p.exp ? `<div style="font-size:13px; color:var(--body);">${p.exp}</div>` : ''}
    `;
    grid.appendChild(el);
  });
}

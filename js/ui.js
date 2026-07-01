function renderDomains(filtered = domains) {
  const grid = document.getElementById('domain-grid');
  if (!grid) return;
  grid.innerHTML = '';
  filtered.forEach(d => {
    const el = document.createElement('div');
    el.className = 'domain-card';
    el.innerHTML = `
      <div class="name">${d.name}<span class="arrow">›</span></div>
      <div class="horizon">${d.focus || ''}</div>
      <div class="details">
        <div><strong>Representative workflows:</strong><br>${d.workflows}</div>
        <div style="margin-top: var(--space-xs);"><strong>Typical tools:</strong><br>${d.tools}</div>
        <div style="margin-top: var(--space-xs);"><strong>Judgment we test:</strong><br>${d.judgment}</div>
      </div>
    `;
    el.onclick = () => {
      const wasExpanded = el.classList.contains('expanded');
      document.querySelectorAll('.domain-card').forEach(c => {
        if (c.classList.contains('expanded')) {
          c.classList.remove('expanded');
          const det = c.querySelector('.details');
          if (det) det.style.maxHeight = '0';
        }
      });
      const gridEl = document.getElementById('domain-grid');
      if (gridEl) {
        gridEl.style.display = 'none';
        gridEl.offsetHeight;
        gridEl.style.display = 'grid';
        gridEl.offsetHeight;
      }
      document.querySelectorAll('.domain-card:not(.expanded)').forEach(c => {
        c.offsetHeight;
        c.style.height = c.scrollHeight + 'px';
      });
      if (gridEl) gridEl.offsetHeight;
      if (!wasExpanded) {
        requestAnimationFrame(() => {
          if (gridEl) gridEl.offsetHeight;
          el.style.height = '';
          el.classList.add('expanded');
          const det = el.querySelector('.details');
          if (det) det.style.maxHeight = '';
        });
      }
    };
    grid.appendChild(el);
  });
}

function renderRoster(filtered = team) {
  const grid = document.getElementById('roster-grid');
  if (!grid) return;
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

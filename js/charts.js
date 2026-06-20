// Charts styled to match DESIGN.md (sparse, precise, hairline grids, mono labels, accent sparingly)
const chartFont = {
  family: 'ui-monospace, SFMono-Regular, Menlo, Monaco, monospace',
  size: 11
};

const slowAnimation = {
  duration: 1800,
  easing: 'easeOutQuart'
};

function createScoresChart() {
  const ctx = document.getElementById('scoresChart');
  if (!ctx) return;
  const parent = ctx.parentElement;
  // If we already have a properly sized chart, skip
  if (ctx._myChart && parent && parent.offsetHeight > 20) {
    return;
  }
  // Destroy previous (e.g. one created before layout was ready) so we can recreate with animation at correct size
  if (ctx._myChart) {
    try { ctx._myChart.destroy(); } catch (e) {}
    ctx._myChart = null;
    ctx.chartInitialized = false;
  }
  ctx.chartInitialized = true;
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Grok 4.3', 'Opus 4.7'],
      datasets: [{
        data: [32, 54],
        backgroundColor: ['#ff7a17', '#ffffff'],
        borderColor: '#212327',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      animation: slowAnimation,
      scales: {
        x: { beginAtZero: true, max: 100, grid: { color: '#212327' }, ticks: { color: '#dadbdf', font: chartFont } },
        y: { grid: { color: '#212327' }, ticks: { color: '#dadbdf', font: chartFont } }
      },
      plugins: { 
        legend: { display: false },
        tooltip: { backgroundColor: '#191919', titleFont: chartFont, bodyFont: chartFont }
      }
    }
  });
  ctx._myChart = chart;
}

function createCoverageChart() {
  const ctx = document.getElementById('coverageChart');
  if (!ctx) return;
  const parent = ctx.parentElement;
  if (ctx._myChart && parent && parent.offsetHeight > 20) {
    return;
  }
  if (ctx._myChart) {
    try { ctx._myChart.destroy(); } catch (e) {}
    ctx._myChart = null;
    ctx.chartInitialized = false;
  }
  ctx.chartInitialized = true;
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['88%'],
      datasets: [{
        data: [88],
        backgroundColor: '#ff7a17',
        borderColor: '#212327',
        borderWidth: 1,
        barThickness: 28
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      animation: slowAnimation,
      scales: {
        x: { beginAtZero: true, max: 100, grid: { color: '#212327' }, ticks: { color: '#dadbdf', font: chartFont, stepSize: 25 } },
        y: { grid: { color: '#212327' }, ticks: { color: '#dadbdf', font: chartFont } }
      },
      plugins: { 
        legend: { display: false },
        tooltip: { 
          backgroundColor: '#191919', 
          titleFont: chartFont, 
          bodyFont: chartFont,
          callbacks: { label: (ctx) => ctx.raw + '% of US small businesses' }
        }
      }
    }
  });
  ctx._myChart = chart;
}

function createDomainChart() {
  const ctx = document.getElementById('domainFailuresChart');
  if (!ctx) return;
  const parent = ctx.parentElement;
  if (ctx._myChart && parent && parent.offsetHeight > 20) {
    return;
  }
  if (ctx._myChart) {
    try { ctx._myChart.destroy(); } catch (e) {}
    ctx._myChart = null;
    ctx.chartInitialized = false;
  }
  ctx.chartInitialized = true;
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Administrative', 'Customer Support & Success', 'Executive Leadership', 'Facilities & Real Estate', 'Human Resources & Talent', 'Management Consulting', 'Marketing & Communications', 'Operations', 'Sales & Business Development', 'Supply Chain, Procurement & Logistics', 'Entrepreneurship', 'Experience Design'],
      datasets: [{
        data: [22, 25, 10, 4, 7, 16, 9, 28, 24, 5, 13, 11],
        backgroundColor: '#ff7a17',
        borderColor: '#212327',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      animation: slowAnimation,
      scales: {
        x: { beginAtZero: true, max: 30, grid: { color: '#212327' }, ticks: { color: '#dadbdf', font: chartFont, stepSize: 5 } },
        y: { grid: { color: '#212327' }, ticks: { color: '#dadbdf', font: chartFont } }
      },
      plugins: { 
        legend: { display: false },
        tooltip: { backgroundColor: '#191919', titleFont: chartFont, bodyFont: chartFont }
      }
    }
  });
  ctx._myChart = chart;
}

// Lazy init charts on scroll reveal for slow smooth entrance animations
function observeChart(canvasId, createFn) {
  const el = document.getElementById(canvasId);
  if (!el) return;

  const isVisible = () => {
    const rect = el.getBoundingClientRect();
    // Consider visible if any part is in or near the viewport
    return rect.top < window.innerHeight + 80 && rect.bottom > -20;
  };

  const tryInit = () => {
    if (el.chartInitialized) return true;
    if (isVisible()) {
      createFn();
      return true;
    }
    return false;
  };

  // Try immediately (handles charts above the fold or near it on load)
  if (tryInit()) return;

  // Retry after layout/fonts settle
  requestAnimationFrame(() => {
    if (tryInit()) return;

    // Fall back to IntersectionObserver (trigger a bit early)
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          createFn();
          io.disconnect();
          return;
        }
      }
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px 120px 0px'   // start animation ~120px before it fully scrolls into view
    });
    io.observe(el);
  });
}

function forceCreateCharts() {
  createScoresChart();
  createCoverageChart();
  createDomainChart();
}

function resizeAllCharts() {
  ['scoresChart', 'coverageChart', 'domainFailuresChart'].forEach(id => {
    const el = document.getElementById(id);
    const ch = el && el._myChart;
    if (ch && typeof ch.resize === 'function') {
      try { ch.resize(); } catch (e) {}
    }
  });
}

// Use ResizeObserver so charts (re)initialize when their containers actually have size.
// This is critical on mobile where initial layout measurements are often 0.
function setupChartResizeObservers() {
  const wrappers = document.querySelectorAll('.chart-wrapper');
  if (!wrappers.length || typeof ResizeObserver === 'undefined') return;

  const ro = new ResizeObserver(() => {
    // When size arrives, try to (re)create the charts
    forceCreateCharts();
  });

  wrappers.forEach(w => ro.observe(w));
}

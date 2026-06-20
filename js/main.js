function init() {
  renderDomains();
  renderRoster();

  // Set up chart observers and force creation (with defensive timing for mobile layout)
  observeChart('scoresChart', createScoresChart);
  observeChart('coverageChart', createCoverageChart);
  observeChart('domainFailuresChart', createDomainChart);

  setupChartResizeObservers();

  forceCreateCharts();
  requestAnimationFrame(forceCreateCharts);

  // Additional delayed attempts — helps when CSS heights or fonts aren't
  // fully laid out on first paint, especially on mobile.
  setTimeout(forceCreateCharts, 80);
  setTimeout(forceCreateCharts, 300);
  setTimeout(forceCreateCharts, 600);

  // Nudge resize on any successfully created charts (helps when initial container
  // measurement on mobile was 0 or late). Run after animation.
  setTimeout(resizeAllCharts, 2200);
}

// Render the dynamic content (domains + team) as early as possible.
// Using DOMContentLoaded prevents waiting on the large background images.
document.addEventListener('DOMContentLoaded', () => {
  try {
    renderDomains();
    renderRoster();
  } catch (e) {
    console.warn('Business Evals render failed on DOMContentLoaded', e);
  }
});

window.addEventListener('load', () => {
  try {
    init();
  } catch (e) {
    console.warn('Business Evals init failed on load', e);
  }
});

// Extra mobile hardening: re-resize charts on orientation change
window.addEventListener('orientationchange', () => {
  setTimeout(resizeAllCharts, 150);
});
window.addEventListener('resize', () => {
  // Debounced resize for charts if needed (Chart.js responsive usually handles this,
  // but we keep a call for safety after layout settles).
  clearTimeout(window._chartResizeTimer);
  window._chartResizeTimer = setTimeout(resizeAllCharts, 200);
});

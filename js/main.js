function init() {
  renderDomains();
  renderRoster();
}

document.addEventListener('DOMContentLoaded', () => {
  try {
    renderDomains();
    renderRoster();
  } catch (e) {
    console.warn('SMBval render failed on DOMContentLoaded', e);
  }
});

window.addEventListener('load', () => {
  try {
    init();
  } catch (e) {
    console.warn('SMBval init failed on load', e);
  }
});

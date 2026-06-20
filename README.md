# Business Evaluations Report

A static site report on business evaluations for AI models, built as a clean multi-file static website.

## View Locally

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/businessEvals.git
cd businessEvals

# Start a local server
python3 -m http.server 8000
# or
npx serve
```

Then open http://localhost:8000

## Hosted on GitHub Pages

This site is hosted via GitHub Pages at:

https://YOUR_USERNAME.github.io/businessEvals

## Tech

- Vanilla HTML + CSS + JavaScript
- Chart.js (bundled locally in assets/)
- Fully static, no build step required
- Mobile-friendly

## Source Data

The evaluations are documented in `Knowledge Work Evals June 2026.md`.

## Development

To work on it:

1. Edit files directly.
2. Use a local HTTP server (important for testing on mobile and to avoid `file://` issues).
3. Test on desktop and real mobile devices over the same network.

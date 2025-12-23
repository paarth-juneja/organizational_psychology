# Organizational Psychology Interactive Study Guide

An interactive web-based study guide for Organizational Psychology, featuring key concepts and exam practice questions.

## Project Structure

```
/organizational_psychology67
├── index.html              # Main HTML file (clean, semantic markup)
├── css/
│   ├── main.css            # Entry point, imports all CSS modules
│   ├── variables.css       # CSS custom properties (colors, fonts)
│   ├── layout.css          # Grid, container, spacing styles
│   └── components.css      # Reusable UI components (nav, toggles, accordion)
├── js/
│   ├── data.js             # Content data (concepts, practice questions)
│   ├── utils.js            # Helper functions
│   ├── ui.js               # DOM manipulation, event handlers
│   └── main.js             # App initialization, Chart.js setup
├── assets/
│   ├── images/             # (Future) Image assets
│   └── icons/              # (Future) Icon assets
└── README.md               # This file
```

## File Responsibilities

| File | Purpose |
|------|---------|
| `index.html` | Semantic HTML structure, no inline styles/scripts |
| `css/variables.css` | Design tokens (colors, fonts, transitions) |
| `css/layout.css` | Chart containers, responsive breakpoints |
| `css/components.css` | Navigation, toggle buttons, accordion animations |
| `css/main.css` | Base styles, imports all CSS modules |
| `js/data.js` | `contentData` object with all section content |
| `js/utils.js` | Helper functions (e.g., accordion styling) |
| `js/ui.js` | Section HTML generation, event listeners |
| `js/main.js` | App entry point, DOMContentLoaded, Chart.js |

## Dependencies

- **TailwindCSS** (via CDN) - Utility-first CSS framework
- **Chart.js** (via CDN) - Chart library for visualizations
- **Inter Font** (Google Fonts) - Primary typography

## How to Run

1. Open `index.html` in any modern web browser
2. No build step required - works directly with static files

## Features

- **Three Content Sections**: Foundations, Employee Journey, Workplace Behaviors
- **Toggle Views**: Switch between "Key Concepts" and "Exam Practice"
- **Accordion Q&A**: Expandable practice questions with detailed answers
- **Interactive Chart**: Doughnut chart visualizing Organizational Commitment types
- **Smooth Navigation**: Scroll-aware navigation highlighting

## Maintainability Benefits

- **Separation of Concerns**: HTML, CSS, and JS are properly isolated
- **Modular CSS**: Easy to update colors in `variables.css` without touching other files
- **Data-Driven Content**: Add/edit content in `data.js` without touching HTML
- **Reusable Components**: CSS classes defined once, used everywhere

# Event registration

An anonymized, frontend-only school event registration demo written in plain HTML, CSS, and JavaScript.

## What the demo does

- displays event programs from one JavaScript data source;
- filters programs by schedule block;
- allows one selection for each of two blocks;
- stores only anonymous program IDs in the current browser;
- sends no network requests and uses no backend service;
- collects no names, email addresses, class details, or other personal data.

## Run locally

No build step or dependencies are required. Open `index.html` directly, or serve the directory with any static file server.

## Structure

- `index.html` contains the semantic page shell.
- `index.css` contains all styles and responsive rules.
- `index.js` contains program data and UI state.

This separation keeps the current version simple and makes a later move to Vite, React, and Biome straightforward: program cards, filters, and the registration summary already map naturally to components.

# Event registration

An anonymized, frontend-only school event registration demo built with TypeScript, ReactJS, Tailwind CSS, Vite and Biome.

## Commands

```bash
npm run dev
npm run build
npm run check
```

## Structure

- `src/components` contains the reusable interface sections.
- `src/data/programs.ts` is the single source for program content.
- `src/pages/Home.tsx` owns filtering and anonymous registration state.
- `src/index.css` contains the Tailwind import, theme tokens, and global styles.

The interface collects no personal information and sends no network requests. It stores only anonymous program IDs in the current browser.

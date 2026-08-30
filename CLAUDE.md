# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

David Phan's personal portfolio website: a single-page React app built with Vite, TypeScript, Tailwind CSS v4, and shadcn/ui (Radix-based) components. Deployed to GitHub Pages at `davphan.github.io/Portfolio`.

## Commands

- `npm run dev` — start the Vite dev server with HMR (this is the actual local dev command; the README's `npm start` is stale from an earlier Create React App setup and no longer works since `react-scripts` isn't a dependency).
- `npm run build` — type-check (`tsc -b`) then production-build with Vite into `dist/`.
- `npm run lint` — run ESLint over the repo (flat config in `eslint.config.js`).
- `npm run preview` — serve the built `dist/` output locally.
- `npm run deploy` — publish to GitHub Pages via `gh-pages -d build`. **Note:** this points at a `build/` directory left over from the old CRA setup, but Vite outputs to `dist/`. Deploying will currently publish stale/incorrect content unless this is fixed (either change the `-d` flag to `dist`, or configure Vite's `build.outDir` to `build`) — check with the user before relying on `npm run deploy`.
- There is no working test suite: `npm test` calls `react-scripts test`, but `react-scripts` was removed when the project migrated to Vite. Treat this script as non-functional.

### Resume/CV build (LaTeX)

The resume and CV are authored in LaTeX and compiled to PDF, independent of the web app build:
- `npm run build-resume` — updates the "Last updated" date in `resume.tex`, then compiles `src/data/resume/resume.tex` → `src/data/resume/resume.pdf` via `latexmk`.
- `npm run build-cv` — compiles `src/data/resume/cv.tex` → `src/data/resume/cv.pdf`.
- `npm run build-all` — runs both plus the web app build.
- Requires a LaTeX distribution (TinyTeX recommended) with `collection-latexrecommended` and `collection-fontsrecommended` installed.

## Architecture

The app is a single scrolling page (`src/App.tsx`) composed of one component per section, rendered in order: `Navbar`, `Hero`, `Skills`, `Experience`, `Projects`, `Education`. Each section component lives in `src/components/` and pulls its own content from the shared data file.

**Content/component separation:** All page copy, career/experience entries, project entries, coursework, and skills live in `src/data/text.ts` as typed constants (`ABOUT`, `SKILLS`, `SKILLS_SECTION`, `EXPERIENCE_SECTION`, `PROJECTS_SECTION`, `EDUCATION_SECTION`, etc.). Components are generally "dumb" renderers over this data. When updating site content (bio, jobs, projects, coursework), edit `src/data/text.ts` rather than the components. The shapes of these data structures are defined in `src/types/data.ts` (`SkillCardData`, `ExperienceCardData`, `ProjectsCardData`, `CourseSeriesData`, etc.).

**Dates:** Experience/project entries use a `dateRange` tuple type (`[[startMonth, startYear], [endMonth, endYear]]`) rather than free-text date strings. `src/util/dateUtil.ts` (`printDateRange`) converts these into display strings and treats a falsy end month/year as "Present".

**UI components:** `src/components/ui/` holds shadcn/ui primitives (button, card, tabs, dropdown-menu, navigation-menu, badge, separator) generated via the shadcn CLI — configured in `components.json` (style: `radix-vega`, base color `zinc`, no class prefix). Path alias `@/*` maps to `src/*` (configured in both `tsconfig.app.json` and `vite.config.ts`). Use the `cn()` helper from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional/merged class names, consistent with existing components.

**Styling:** Tailwind v4 is wired in via the `@tailwindcss/vite` plugin (no separate `tailwind.config`); global styles/theme tokens live in `src/styles/globals.css`. Fonts are self-hosted via `@fontsource-variable/geist` and `@fontsource-variable/inter`.

**Assets:** Images (headshot, company logos) live in `src/assets/`; static public files (favicon, manifest) live in `public/`.

## Known repo quirks

- The README describes the old Create React App workflow (`npm start`, `build/` output folder) — it has not been updated for the Vite migration. Prefer this CLAUDE.md and the actual `package.json` scripts over the README when they disagree.
- Large sections of `src/data/text.ts` (older skill categories with `devicons-react`/`react-icons` imports, older experience/project entries) are commented out rather than deleted — treat these as inactive drafts, not dead code to clean up without checking with the user first.

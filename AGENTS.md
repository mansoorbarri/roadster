# Repository Guidelines

## Project Structure & Module Organization
Roadster is a Hugo theme. Core templates live in `layouts/` (base templates, list/single pages, and `_partials/` components). Theme assets are in `assets/css/` and `assets/images/`; static runtime files are in `static/` (`static/js/menu.js`, icons, and images). Localization strings are in `i18n/*.yaml`. The runnable demo site is in `examplesite/` (`content/`, `hugo.toml`).

## Build, Test, and Development Commands
- `npm ci`: install pinned Node tooling used by CI.
- `npm run lint`: run CSS, JS, and EditorConfig checks.
- `npm run fix`: apply autoprefixer and auto-fix lint issues.
- `npm test`: alias for `npm run lint`.
- `cd examplesite && HUGO_THEME=roadster hugo --themesDir ../..`: production build test for the example site.
- `cd examplesite && HUGO_THEME=roadster hugo server --themesDir ../..`: local preview at Hugo dev server.

## Coding Style & Naming Conventions
- Follow existing Hugo template patterns and keep partials small and reusable.
- JavaScript follows Airbnb legacy ESLint with project overrides; tabs are required (`indent: tab`).
- CSS is enforced by Stylelint (`.stylelintrc`): tab indentation, lowercase properties, and ordered declarations.
- Use descriptive lowercase filenames for templates and partials (for example, `post_meta/date.html`).
- Keep SVG assets optimized and minimal.

## Testing Guidelines
There is no separate unit test suite; linting and Hugo builds are the quality gate.
- Run `npm test` before opening a PR.
- Validate rendering with a local Hugo build in `examplesite/`.
- If you change templates, translations, or styles, test at least one list page and one single post page.

## Commit & Pull Request Guidelines
Recent history uses conventional prefixes (`feat:`, `fix:`, `chore:`). Keep commits scoped and imperative (for example, `fix: prevent mobile submenu navigation on first tap`).

For PRs:
- Keep changes focused to one feature/fix.
- Include a clear description, rationale, and linked issue when applicable.
- Add screenshots for visible UI changes.
- Ensure CI passes (`npm run lint` and Hugo build compatibility).
- Update docs when behavior or configuration changes.

## Design/Frontend
Whenever designing something, ALWAYS use the frontend-design skill.

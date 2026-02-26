# Scott McCracken

This is the source code for [scottmccracken.net](https://scottmccracken.net) which I'm rebuilding from scratch. It's a place for me to learn, experiment, and make mistakes. I've had under construction badges on my sites since the GeoCities days and this one is no different.

## Tech Stack

What's a personal site without a stack section?

- **[Astro](https://astro.build/)** — static site generator and occasional excuse to try new things
- **[Cloudflare Workers](https://workers.cloudflare.com/)** — hosting (experiment)
- **[pnpm](https://pnpm.io/)** — package manager
- **[TypeScript](https://www.typescriptlang.org/)** — types, because I enjoy a good error message
- **[Stylelint](https://stylelint.io/) + [Prettier](https://prettier.io/)** — keeping the code tidy so I don't have to think about it
- **[html-validate](https://html-validate.org/)** — making sure the HTML is actually valid HTML

## Local Development

Install the packages

```bash
pnpm install
```

And run the dev server

```bash
pnpm dev
```

Other handy scripts:

| Script | What it does |
| --- | --- |
| `pnpm build` | Build the site for production |
| `pnpm preview` | Preview the production build locally |
| `pnpm check` | Run Astro type checking |
| `pnpm html-validate` | Build and validate all HTML |
| `pnpm stylelint` | Lint the CSS |
| `pnpm stylelint:fix` | Lint the CSS and autofix what it can |

### Git hooks

A `pre-push` hook runs `pnpm check` before any push to catch type errors before they hit CI. It's wired up automatically when you run `pnpm install`.

## Deployment

The site is deployed on [Cloudflare Workers](https://workers.cloudflare.com/) via `wrangler`. If you're forking this for your own use, you'll need your own Cloudflare account and a `wrangler.jsonc` configured for it.

## CI/CD

A [GitHub Actions](https://github.com/features/actions) workflow runs on every push and pull request to `main`. It builds the site and validates the HTML — no broken markup sneaks through unnoticed.

## Accessibility

The code is automatically tested for accessibility violations using the [WCAG 2.2 AA specification](https://www.w3.org/TR/WCAG22/). With that said, automated scanning only catches about 30% of actual accessibility violations so I also conduct manual testing. Please [file an issue](https://github.com/smccracken/scottmccracken.net/issues) if you ever have trouble accessing content on this site.

## Acknowledgements

The web is great. See [ACKNOWLEDGEMENTS.md](./ACKNOWLEDGEMENTS.md) for the full list of resources, tutorials, and clever people whose work influenced this site.

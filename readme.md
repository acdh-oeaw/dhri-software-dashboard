# acdh-ch software dashboard

a collection of software products we are proud of.

## how to add content

create a new markdown file in [`src/content/software`](src/content/software) from the
[template](src/content/software/_template.md), and fill out all the fields.

## how to run

prerequisites:

- [Node.js v20](https://nodejs.org/en/download)
- [pnpm](https://pnpm.io/installation)

set required environment variables in `.env.local`:

```bash
cp .env.example .env.local
```

adjust environment variables in `.github/workflows/build-deploy.yml` and
`.github/workflows/validate.yml`.

install dependencies:

```bash
pnpm install
```

run a development server on [http://localhost:3000](http://localhost:3000):

```bash
pnpm run dev
```

# acdh-ch software dashboard

a collection of software products we are proud of.

## how to add content

sign in to the CMS at <https://software-dashboard.acdh-ch-dev.oeaw.ac.at/admin> and add a new entry
to the "Software" collection.

alternatively, when working locally, use <http://localhost:3000/admin>, and commit your changes via
git.

## how to run

- [node.js 22.x](https://nodejs.org/en/download)
- [pnpm 9.x](https://pnpm.io/installation)

> [!TIP]
>
> you can use `pnpm` to install the required node.js version with `pnpm env use 22 --global`

set required environment variables in `.env.local`:

```bash
cp .env.local.example .env.local
```

adjust environment variables in `.github/workflows/build-deploy.yml` and
`.github/workflows/validate.yml`.

install dependencies:

```bash
pnpm install
```

run a development server on <http://localhost:3000>:

```bash
pnpm run dev
```

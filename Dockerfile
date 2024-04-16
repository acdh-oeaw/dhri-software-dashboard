# syntax=docker/dockerfile:1

# using alpine base image to avoid `sharp` memory leaks.
# @see https://sharp.pixelplumbing.com/install#linux-memory-allocator

# build
FROM node:20-alpine AS build

RUN corepack enable

RUN mkdir /app && chown -R node:node /app
WORKDIR /app

USER node

COPY --chown=node:node .npmrc package.json pnpm-lock.yaml ./
RUN sed -i "s/use-node-version/# use-node-version/" .npmrc

RUN pnpm fetch

COPY --chown=node:node ./ ./
RUN sed -i "s/use-node-version/# use-node-version/" .npmrc

ARG PUBLIC_APP_BASE_PATH
ARG PUBLIC_APP_BASE_URL
ARG PUBLIC_BOTS
ARG PUBLIC_KEYSTATIC_GITHUB_APP_SLUG
ARG PUBLIC_KEYSTATIC_GITHUB_REPO_NAME
ARG PUBLIC_KEYSTATIC_GITHUB_REPO_OWNER
ARG PUBLIC_KEYSTATIC_MODE
ARG PUBLIC_MATOMO_BASE_URL
ARG PUBLIC_MATOMO_ID
ARG PUBLIC_REDMINE_ID

RUN pnpm install --frozen-lockfile --offline

ENV NODE_ENV=production

RUN pnpm run build

# serve
FROM caddy:2-alpine AS serve

WORKDIR /usr/share/caddy

COPY --from=build /app/dist /usr/share/caddy

EXPOSE 3000

CMD ["caddy", "file-server", "--listen", ":3000"]

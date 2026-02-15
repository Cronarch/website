# syntax=docker/dockerfile:1

FROM oven/bun:1-alpine AS builder
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
# ARG ensures cache bust when building with --build-arg CACHEBUST=<timestamp>
ARG CACHEBUST=1
RUN echo "Build at ${CACHEBUST}" && bun run build

FROM oven/bun:1-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/.output ./.output

ENV PORT=3000
EXPOSE 3000

CMD ["bun", "run", ".output/server/index.mjs"]

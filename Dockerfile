FROM oven/bun:latest AS base

# Set working directory
WORKDIR /app

# Copy package.json root files
COPY package.json bun.lockb ./

# Copy package.json workspaces
COPY apps/backend/package.json ./apps/backend/
COPY packages/utils/package.json ./packages/utils/

# Install dependencies
RUN bun install

COPY . .

CMD ["bun", "run", "apps/backend/src/index.ts"]

EXPOSE 8001
# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies (using package-lock.json or yarn.lock helps with caching)
COPY package*.json ./
RUN npm ci

# Copy the rest of your source code
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Run
FROM node:18-alpine AS runner

WORKDIR /app

# Set production environment variable
ENV NODE_ENV=production

# Copy the build output and static files from the builder stage
COPY --from=builder /app/.next/ ./.next/
COPY --from=builder /app/public/ ./public/
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Expose the default Next.js port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]

# to run container: docker run -d -p 3000:3000 portfolio:latest


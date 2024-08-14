FROM node:18.18.2-alpine as base

# Step 1: Build the React application
FROM base AS build

WORKDIR /client

# Copy the frontend package.json and package-lock.json
COPY ./package*.json ./

# Install frontend dependencies
RUN npm ci

# Copy the client source code
COPY ./src/client/ ./

# Build the React application
RUN cd frontend && npm run build

# Step 2: Set up the Express backend
FROM base AS release

WORKDIR /app

# Copy the backend package.json and package-lock.json
COPY backend/package*.json ./

# Install backend dependencies
RUN npm install --production

# Copy the backend source code
COPY backend/ ./

# Copy the built React app to the backend's public directory
COPY --from=build-stage /app/frontend/build ./public

# Expose the port that the Express server runs on
EXPOSE 3000

# Start the Express server
CMD ["node", "server.js"]

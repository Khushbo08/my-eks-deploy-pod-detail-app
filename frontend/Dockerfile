# Use the official Node.js image.
FROM node:14

# Create app directory.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files.
COPY package*.json ./

# Install dependencies.
RUN npm install --legacy-peer-deps

# Copy the app source code.
COPY . .

# Build the app.
RUN npm run build

# Install Nginx
FROM nginx:alpine
COPY --from=0 /usr/src/app/build /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

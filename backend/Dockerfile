# Use the official Node.js image.
FROM node:14

# Create app directory.
WORKDIR /usr/src/app

# Install app dependencies.
COPY package*.json ./
RUN npm install

# Copy the app source code.
COPY . .

# Expose the app port.
EXPOSE 5000

# Command to run the app.
CMD ["node", "server.js"]
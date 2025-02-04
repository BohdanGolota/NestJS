# Base image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the application code
COPY . .

RUN npm run build

# Expose the port and run the app
EXPOSE 3000
CMD ["npm", "run", "start:dev"]

FROM node:18

# Set up working directory
WORKDIR /app

# Copy package.json and package-lock.json to root directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy everything except .env file
COPY . .

# Build admin panel
RUN npm run build

# Run on port 1337
EXPOSE 1337

# Start strapi server
CMD ["npm", "start"]

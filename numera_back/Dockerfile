# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Install global dependencies if any
RUN npm install -g nodemon

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application
COPY . .

# Copy the start script into the image and make it executable
COPY start.sh .
RUN chmod +x start.sh

# Expose the port the app runs on
EXPOSE 3000

# Command to start your app using the custom script
CMD ["./start.sh"]

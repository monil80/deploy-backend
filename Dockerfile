# Use a lightweight Linux distribution as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the source code into the container
COPY . .

# Install dependencies
RUN npm install

# Expose the port used by your app (usually 3000 for React)
EXPOSE 9800

# Specify the command to run your app
CMD [ "npm", "run", "production" ]
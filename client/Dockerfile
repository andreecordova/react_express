FROM node:14.15.4-slim

# Set the working directory to /home/node/client
WORKDIR /home/node/client

# copy package.json into the container at /home/node/client/
COPY package.json package.json 

# install dependencies
RUN npm install

# Make port 3000 available to the world outside this container
EXPOSE 3000

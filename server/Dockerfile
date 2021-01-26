FROM node:14.15.4-slim

# Set the working directory to /home/node/server
WORKDIR /home/node/server

# copy package.json into the container at /home/node/server/
COPY package.json package.json

# install dependencies
RUN npm install -g nodemon && \
    npm install
    
# Make port 8080 available to the world outside this container
EXPOSE 8080
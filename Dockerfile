FROM node:alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
ENV MONGODB_URL=${MONGODBURL}
CMD [ "node", "server.js" ]

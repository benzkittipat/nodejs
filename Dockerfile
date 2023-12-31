FROM node:12-alpine3.12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
EXPOSE 8080
COPY . .
CMD [ "node", "index.js" ]

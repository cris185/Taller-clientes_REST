FROM node:alpine

WORKDIR /app

ENV PATH /app/node_module/.bin:$PATH

COPY package*.json ./

RUN npm i --silent

COPY . ./

CMD ["npm","start"]
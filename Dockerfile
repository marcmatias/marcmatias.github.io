FROM node:14-alpine

WORKDIR /app

COPY package.json package-lock.json /app

RUN npm install

COPY ./ /app

RUN chown -R node node_modules/

USER node

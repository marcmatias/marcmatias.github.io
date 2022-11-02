FROM node:14-alpine

WORKDIR /app

ADD package.json package-lock.json wrapper_script.sh /app

RUN npm install

ADD ./ /app

RUN chown -R node node_modules/

USER node

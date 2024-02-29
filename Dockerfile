FROM node:buster as development

RUN npm install -g @nestjs/cli@10.0.0

USER node

EXPOSE 3000

WORKDIR /home/node/app
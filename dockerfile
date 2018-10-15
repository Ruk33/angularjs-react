FROM node:10.12.0-alpine

WORKDIR /usr/share/app

COPY . .

CMD npm run build:watch
FROM node:14

WORKDIR /home/node

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

COPY package*.json ./
RUN npm ci

COPY healthcheck.js ./
COPY server.js ./

USER node

EXPOSE 8080

HEALTHCHECK CMD node healthcheck.js || exit 1

CMD [ "node", "server.js" ]

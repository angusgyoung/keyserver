FROM node:12-alpine
WORKDIR /usr/src/app
RUN apk add --update --no-cache \
    git
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 8080
USER node
CMD ["npm", "start"]
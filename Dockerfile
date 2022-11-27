FROM node:19-alpine as builder
WORKDIR /usr/app
COPY package*.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build

FROM node:19-alpine as runtime
WORKDIR /usr/app
COPY package*.json yarn.lock .env ./
RUN yarn --production
COPY --from=builder /usr/app/dist /usr/app/dist
USER node
EXPOSE 8080
CMD ["npm", "start"]

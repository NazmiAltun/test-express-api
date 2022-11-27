FROM node:19-alpine as base
WORKDIR /usr/app
COPY package*.json yarn.lock .env ./

FROM base as builder
RUN yarn --pure-lockfile
COPY . .
RUN  yarn format \
  && yarn lint \
  && yarn build

FROM base as runtime
RUN yarn --production
COPY --from=builder /usr/app/dist /usr/app/dist
USER node
EXPOSE 8080
CMD ["npm", "start"]

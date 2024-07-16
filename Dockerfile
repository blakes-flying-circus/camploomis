FROM node:20.10.0-alpine

# Create app directory
RUN mkdir -p /opt/app
WORKDIR /opt/app

ENV NODE_ENV="production"

COPY . .

RUN yarn set version 4.0.0

# Fetch dependencies, fail if lockfile is touched
RUN yarn install && yarn cache clean

CMD ["yarn", "start"]

FROM node:14-alpine

EXPOSE 80

WORKDIR /srv/api
ADD . /srv/api

ENV CHROME_BIN="/usr/bin/chromium-browser" \
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="true"

RUN set -x \
    && apk update \
    && apk upgrade \
    && apk add --no-cache \
    udev \
    ttf-freefont \
    chromium \
    && npm install puppeteer

COPY /package.json /
RUN npm install
RUN npm cache clean --force
RUN npm install -g npm
RUN npm install

COPY . /petal-patch-server/
CMD ["npm", "run", "start-server"]
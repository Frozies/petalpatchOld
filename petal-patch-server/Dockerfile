FROM node:14-alpine
WORKDIR /petal-patch-server/petal-patch-server

ENV CHROME_BIN="/usr/bin/chromium-browser" \
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="true"

RUN set -x \
    && apk update \
    && apk upgrade \
    && apk add --no-cache \
    udev \
    ttf-freefont \
    chromium \
    && npm install puppeteer@1.10.0

COPY package.json /petal-patch-server
RUN npm install
RUN npm install puppeteer
COPY . /petal-patch-server
CMD ["npm", "start"]
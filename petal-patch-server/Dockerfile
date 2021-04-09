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
    && npm install puppeteer

COPY /petal-patch-server/package.json /petal-patch-server
RUN npm install
RUN npm cache clean --force
RUN npm install -g npm
RUN npm install

RUN npm install cookie-parser
RUN npm install debug
RUN npm install dompurify
RUN npm install dotenv
RUN npm install express
RUN npm install http-errors
RUN npm install jest
RUN npm install jsdom
RUN npm install morgan
RUN npm install nodemon
RUN npm install pug
RUN npm install puppeteer
RUN npm install supertest

COPY . /petal-patch-server/
CMD ["npm", "run", "start-server"]
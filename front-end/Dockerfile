FROM node:16

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./front-end/package.json /app/package.json
COPY ./front-end/public/ /app/public
COPY ./front-end/src /app/src

RUN npm install 

CMD ["npm", "start"]
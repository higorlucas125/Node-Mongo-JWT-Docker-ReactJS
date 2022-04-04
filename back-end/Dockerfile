FROM node:16

# CREATE APP DIRECTORY
WORKDIR  /back-end
COPY ./back-end/models /back-end/models
COPY ./back-end/routes /back-end/routes
COPY ./back-end/.env /back-end/.env
COPY ./back-end/index.js /back-end/index.js
COPY ./back-end/package.json /back-end/

RUN npm install

CMD ["nodemon","start"]
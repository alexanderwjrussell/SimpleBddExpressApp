FROM node:8.9.3

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app


EXPOSE 8084
RUN npm install
CMD ["npm", "start"]
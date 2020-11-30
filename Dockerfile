FROM node:12

# Create app directory
RUN mkdir -p /usr/app
WORKDIR /usr/app

# Install app dependencies
COPY ./package.json /usr/app
RUN npm install
RUN npm uninstall bcrypt
RUN npm i bcrypt
COPY . /usr/app

COPY . .

EXPOSE 3001
CMD [ "npm", "start" ]
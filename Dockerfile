FROM node:boron

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json /app/
RUN npm install

RUN npm install -g webpack pm2

# Bundle app source
COPY . /app

EXPOSE 3003

CMD [ "npm", "start" ]

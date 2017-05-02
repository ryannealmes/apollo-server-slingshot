# APOLLO SERVER SLINGSHOT

[Under heavy development + experimentation]

Slingshot is meant to provide a quick way of getting your apollo project off the ground. This repo handles getting your graphql server setup and running unger `pm2`. It leverages webpack for transpiling javascript to something that is compatible with the current node version running.

## SETUP

I think you only need to install `pm2` and `webpack` as global dependencies. 

- `npm install --g pm2`
- `npm install --g webpack`
- `npm install`
- `webpack`
- `npm start`

another option is to use docker

- `docker run -p 3003:3003 -d apollo-server-slingshot`

You should be able to access your working graphql server on localhost:3003.

## IMPROVEMENTS

There are loads of things that can be done here, this is just a first attempt to see if I am on the right track and if it's something the community is interested in. 

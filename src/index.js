import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolvers';

const myGraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers
});

let PORT = 3003;

var app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));

app.get('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT} - ${process.env.NODE_ENV}`);
});

const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');
const resolvers = require('./resolvers');

mongoose.set('useCreateIndex', true);
mongoose.connect(
  'mongodb://milan:milann1@ds247430.mlab.com:47430/cnjokes',
  { useNewUrlParser: true },
);

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

server.start(() => console.log(`Server is running on http://localhost:4000`));

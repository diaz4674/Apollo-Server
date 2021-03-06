const { ApolloServer } = require("apollo-server");
const typeDefs = require("./twitSchema.js");
const resolvers = require("./twitResolvers.js");
const db = require("./models/index.js");

const twitServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: { db },
});

twitServer.listen(4000, () => {
  console.log("Look at port 4000");
});

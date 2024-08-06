const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const typeDefs = `
  type Query {
    hello: String
    getPerson(name: String, age: Int): String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    getPerson: (_, args) => `Hello, my name is ${args.name} and my age is ${args.age} years old`,
  },
};

const useGraphql = async (app) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });
  await server.start(); 
  server.applyMiddleware({ app });
}

module.exports = useGraphql;
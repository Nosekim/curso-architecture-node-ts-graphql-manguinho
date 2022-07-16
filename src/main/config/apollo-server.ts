import { Express } from "express";
import { ApolloServer } from "apollo-server-express";

import typeDefs from "./../graphql/type-defs";
import resolvers from "./../graphql/resolvers";

export const setupApolloServer = (app: Express): void => {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
  });
  server.start().then(() => server.applyMiddleware({ app }));
};

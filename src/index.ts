import { ApolloServer } from "apollo-server";
import typeDefs from "./schema";
import doctorResolver from "./resolvers/doctorResolver";
import appointmentResolver from "./resolvers/appointmentResolver";

const resolvers = {
  Query: {
    ...doctorResolver.Query,
  },
  Mutation: {
    ...appointmentResolver.Mutation,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});


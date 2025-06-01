const { GraphQLSchema } = require("graphql");
const RootQuery = require("./resolvers/todo.query");
const RootMutation = require("./resolvers/todo.mutation");

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

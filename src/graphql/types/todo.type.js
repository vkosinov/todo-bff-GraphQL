const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
} = require("graphql");

const TodoType = new GraphQLObjectType({
  name: "Todo",
  fields: () => ({
    id: { type: GraphQLID, resolve: (obj) => obj._id || obj.id },
    title: { type: GraphQLString },
    completed: { type: GraphQLBoolean },
  }),
});

module.exports = TodoType;

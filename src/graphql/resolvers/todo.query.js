const { GraphQLObjectType, GraphQLID, GraphQLList } = require("graphql");
const TodoType = require("../types/todo.type");
const todoService = require("../../services/todo.service");

module.exports = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    todos: {
      type: new GraphQLList(TodoType),
      resolve: () => todoService.getAll(),
    },

    todo: {
      type: TodoType,
      args: { id: { type: GraphQLID } },
      resolve: (_, args) => todoService.getById(args.id),
    },
  },
});

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,
  GraphQLNonNull,
} = require("graphql");

const TodoType = require("../types/todo.type");
const todoService = require("../../services/todo.service");

module.exports = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createTodo: {
      type: TodoType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        completed: { type: GraphQLBoolean },
      },
      resolve: (_, args) => todoService.create(args),
    },

    deleteTodo: {
      type: TodoType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (_, args) => todoService.deleteById(args.id),
    },

    updateTodo: {
      type: TodoType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLString },
        completed: { type: GraphQLBoolean },
      },
      resolve: (_, args) => todoService.patch(args),
    },

    deleteAllTodos: {
      type: GraphQLString,
      resolve: async () => {
        await todoService.deleteAll();
        return "All todos deleted";
      },
    },
  },
});

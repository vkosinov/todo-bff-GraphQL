const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const dotenv = require("dotenv");

dotenv.config();

const schema = require("./graphql");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(process.env.BFF_SERVER_PORT, () => {
  console.log(
    `🚀 GraphQL BFF запущен на http://localhost:${process.env.BFF_SERVER_PORT}/graphql`
  );
});

require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schemas = require("./schema");
const resolvers = require("./resolvers");

const app = express();

const getSchemaAndResolver = (resource) => {
  switch (resource) {
    case "mahasiswa":
      return { schema: schemas.mahasiswa, rootValue: resolvers.mahasiswa };
    case "departemen":
    case "jurusan":
      return { schema: schemas.departemen, rootValue: resolvers.departemen };
    case "mataKuliah":
      return { schema: schemas.mataKuliah, rootValue: resolvers.mataKuliah };
    case "khs":
      return { schema: schemas.khs, rootValue: resolvers.khs };
    case "khsDetail":
      return { schema: schemas.khsDetail, rootValue: resolvers.khsDetail };
    default:
      return null;
  }
};

app.use("/v1/:resource", (req, res, next) => {
  const resource = req.params.resource;
  const config = getSchemaAndResolver(resource);
  if (!config) {
    return res.status(404).send("Resource tidak ditemukan");
  }

  graphqlHTTP({
    schema: config.schema,
    rootValue: config.rootValue,
    graphiql: true,
  })(req, res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

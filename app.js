const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const resolvers = require("./resolvers");
const db = require("./debe");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  "/v1/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.get("/v1/:resource", async (req, res) => {
  const { resource } = req.params;
  const allowedResources = [
    "mahasiswa",
    "departemen",
    "mata_kuliah",
    "khs",
    "khs_detail",
  ];
  if (!allowedResources.includes(resource)) {
    return res.status(404).json({ error: "Resource not found" });
  }
  try {
    const result = await db.query(`SELECT * FROM universitas.${resource}`);
    res.json({ [resource]: result.rows });
  } catch (err) {
    console.error("Error executing query:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

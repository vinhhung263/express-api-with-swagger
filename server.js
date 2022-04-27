const express = require("express");
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const configSwaggerJsdoc = require("./config/swaggerJsdoc.json");
const rootRouter = require("./routes/");

const app = express();
const PORT = process.env.PORT || 3000;
const specs = swaggerJsdoc(configSwaggerJsdoc);

app.use(
  "/api-docs", swaggerUi.serve, swaggerUi.setup(specs)
);

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// parse application/json
app.use(bodyParser.json());

// API routes
app.use("", rootRouter);

// Homepage
app.get("/", function (req, res) {
  res.send(`<h2><a href='http://localhost:` + PORT + `/api-docs'>Go to Swagger UI </a></h2>`);
})

app.listen(PORT, () => {
  console.log('App listening on http://localhost:' + PORT);
});
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const sequelize = require("./Util/database");

const app = express();
app.use(cors());

const userRoutes = require("./Routes/User");
app.use(bodyParser.json({ extended: false }));


app.use(userRoutes);

sequelize
  .sync()
  .then((result) => {
    app.listen(4000);
  })
  .catch((err) => console.log(err));

require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const db = require("./db/config");

/**
 * Database setup
 *
 */
db.then(() => console.log(`✔️ Database connected with successfully!`)).catch(
  (err) => console.log(`❌ Error on connect: ${err}`)
);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors(require("./config/cors")));
app.use(require("./routes"));

app.listen(process.env.SERVER_PORT, () =>
  console.log(`🚀 Server in running on port: ${process.env.SERVER_PORT}`)
);

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();
app.use("/posts", postRoutes);

//http://localhost:5000/posts

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//mongodb: node.js version: 2.2.12 otherwise error time-out
const CONNECTION_URL =
  "mongodb://kamal:kamal123@cluster0-shard-00-00.pnvaj.mongodb.net:27017,cluster0-shard-00-01.pnvaj.mongodb.net:27017,cluster0-shard-00-02.pnvaj.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-jdx9mx-shard-0&authSource=admin&retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`server running on ${PORT}`)))
  .catch((error) => console.log(error.message));

import express from "express";
import { dbConnect } from "./config/config";

const app = express();

app.get("/", async (req, res) => {
  let data = await dbConnect();
  let dataC = await data.find().toArray();
  res.send(dataC)
});

app.listen(5000);

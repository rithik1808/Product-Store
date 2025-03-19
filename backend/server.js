import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

const app = express();
dotenv.config();

app.get("/products", (req, res) => {
  res.send("hello");
});
console.log(process.env.MONGO_URI);

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port 5000 hello");
});

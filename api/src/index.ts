import express from "express";
import mongoose from "mongoose";
import { router } from "./router";

mongoose
  .connect("mongodb://user:password@localhost:27017")
  .then(() => {
    const app = express();

    app.use(express.json());
    app.use(router);

    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch(() => {
    console.log("Error connecting to MongoDB");
  });

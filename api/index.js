import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import crypto from "crypto";
import nodemailer from "nodemailer";
import cors from "cors";
import jwt from "jsonwebtoken";

const app = express();
const port = 8000;
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

mongoose
  .connect("mongodb+srv://mechardian:mechardian@cluster0.aqnogiq.mongodb.net/")
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((error) => {
    console.log("Error while connecting", error);
  });

app.listen(() => {
  console.log(`Server is running on http://localhost:${port}`);
});

//kanbas-node-server-app/index.js
// const express = require('express')

import express from 'express';
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js";
import session from "express-session";
import "dotenv/config";

const app = express()
app.use(cors(
  {
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
  } 
)); 


const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
app.use(
  session(sessionOptions)
);

app.use(express.json());

UserRoutes(app);
Hello(app);

Lab5(app);
app.listen(process.env.PORT || 4000)
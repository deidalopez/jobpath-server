import express, { Request, Response } from "express";
require('dotenv').config();
// const express = require("express");
const app = express();
import cors from 'cors';
import { Sequelize } from "sequelize/types";

import sequelize from '../src/models/index';
const PORT = 3001;

const corsConfig= {
  origin: process.env.CORS_ORIGIN,
  credentials: true
}

app.use(cors(corsConfig));

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World!");
});

sequelize.sync();

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

export default app;

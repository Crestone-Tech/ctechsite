import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

import { db_config } from "./config/db.config";
import { Sequelize } from "sequelize";
const sequelize = new Sequelize(db_config.url, db_config.options);


const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

sequelize.sync({ force: false }).then(() => {
app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});

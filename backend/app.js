import express from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./config/dbConnect.js";
const app = express();

dotenv.config({ path: "backend/config/config.env" });
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server started running on PORT ${process.env.PORT}`);
});

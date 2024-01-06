import express from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./config/dbConnect.js";
import errorMiddleware from "./middlewares/errors.js";
import cookieParser from "cookie-parser";

//Import Routes
import productRoutes from "./routes/products.js";
import authRoutes from "./routes/auth.js";

process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err}`);
  console.log("Shutting down server due to Uncaught Exception");
  process.exit(1);
});

const app = express();

dotenv.config({ path: "backend/config/config.env" });
connectDatabase();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", productRoutes);
app.use("/api/v1", authRoutes);

app.use(errorMiddleware);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server started running on PORT ${process.env.PORT}`);
});

//Unhandeled Promise Rejection

process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err}`);
  console.log("Shutting down server due to Unhandled Promise Rejection");
  process.exit(1);
});

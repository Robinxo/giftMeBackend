import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./src/config/db.ts";

dotenv.config();

const app = express();
await connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "Gift Suggester API is running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

import { createGift } from "./src/controllers/gift.controller.js";

app.use("/gift", createGift);

import express from "express";
import cors from "cors";
import ConnectDB from "./Config/db.js";
import router from "./Routes/route.js";

const app = express();

// PORT
const PORT = process.env.PORT;

// Cors
app.use(cors());
app.use(express.json());

// Middleware
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Hello! There it's from server side!" });
});

app.use("/api", router);

ConnectDB().catch((err) => {
  console.error(`Error connecting to database: ${err.message}`);
});

// ✅ Export app for Vercel
export default app;

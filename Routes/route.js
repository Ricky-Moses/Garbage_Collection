import express from "express";
import Electronics from "../Controllers/electronics.js";

const router = express.Router();

router.get("/electronics", Electronics);

export default router;

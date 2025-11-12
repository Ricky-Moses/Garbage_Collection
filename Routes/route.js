import express from "express";
import DynamicGet from "../Controllers/DynamicProducts.js";

const router = express.Router();

router.get("/:collection", DynamicGet);

export default router;

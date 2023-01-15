import express from "express";
import { generatePaths } from "../controllers/graphController.js";
const router = express.Router();

router.post("/create-path", generatePaths);

export default router;

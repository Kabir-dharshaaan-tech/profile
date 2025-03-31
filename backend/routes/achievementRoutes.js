



import express from "express";
import { getAchievements, createAchievement } from "../controllers/achievementController.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.get("/", getAchievements);
router.post("/", upload.array("images", 10), createAchievement);

export default router;

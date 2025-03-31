


import express from "express";
import multer from "multer";
import Project from "../models/Project.js";

const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Store images in "uploads/" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });

// GET route to fetch all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: "Error fetching projects", details: error.message });
  }
});

// POST route to add a new project
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, description, price, previewLink, availability, rating } = req.body;
    
    // Image handling
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const newProject = new Project({
      name,
      description,
      price,
      previewLink,
      availability: availability || "Available",
      rating: rating || 5,
      image
    });

    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: "Error adding project", details: error.message });
  }
});

export default router;

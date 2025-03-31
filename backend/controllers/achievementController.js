



import Achievement from "../models/achievementModel.js";

// Get all achievements
export const getAchievements = async (req, res) => {
  try {
    const achievements = await Achievement.find();
    res.status(200).json(achievements);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Create a new achievement
export const createAchievement = async (req, res) => {
  try {
    const { eventName, eventDate, eventPlace, description, howIFelt, howIWon, projectIdea } = req.body;
    
    if (!eventName || !eventDate || !eventPlace || !description || !howIFelt || !howIWon || !projectIdea) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Fix: Store full image URLs
    const imagePaths = req.files ? req.files.map(file => `${req.protocol}://${req.get("host")}/uploads/${file.filename}`) : [];

    const newAchievement = new Achievement({
      eventName,
      eventDate,
      eventPlace,
      description,
      howIFelt,
      howIWon,
      projectIdea,
      images: imagePaths,
    });

    await newAchievement.save();
    res.status(201).json(newAchievement);
  } catch (error) {
    res.status(500).json({ message: "Failed to create achievement", error });
  }
};

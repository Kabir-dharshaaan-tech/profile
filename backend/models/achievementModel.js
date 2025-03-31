

import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventDate: { type: Date, required: true },
  eventPlace: { type: String, required: true },
  description: { type: String, required: true },
  howIFelt: { type: String, required: true },
  howIWon: { type: String, required: true },
  projectIdea: { type: String, required: true },
  images: [{ type: String }], // Fix: Store full image URLs
}, { timestamps: true });

const Achievement = mongoose.model("Achievement", achievementSchema);

export default Achievement;

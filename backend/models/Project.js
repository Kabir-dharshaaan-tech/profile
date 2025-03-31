import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  previewLink: { type: String, required: true },
  availability: { type: String, default: "Available" },
  rating: { type: Number, min: 1, max: 5 },
  image: { type: String }, // Image URL
}, { timestamps: true });

export default mongoose.model("Project", projectSchema);

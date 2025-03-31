import Project from "../models/Project.js";

export const createProject = async (req, res) => {
  try {
    const { name, description, price, previewLink, availability, rating } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null; // Image path

    const project = new Project({
      name, description, price, previewLink, availability, rating, image,
    });

    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const updatedData = req.body;
    if (req.file) updatedData.image = `/uploads/${req.file.filename}`;

    const project = await Project.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};






import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MyProjectForm = () => {
  const navigate = useNavigate();
  const [project, setProject] = useState({
    name: "",
    description: "",
    price: "",
    previewLink: "",
    availability: "Available",
    rating: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProject({ ...project, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", project.name);
    formData.append("description", project.description);
    formData.append("price", project.price);
    formData.append("previewLink", project.previewLink);
    formData.append("availability", project.availability);
    formData.append("rating", project.rating);
    if (project.image) {
      formData.append("image", project.image);
    }

    try {
      const response = await fetch("http://localhost:5000/projects", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to add project");
      }

      alert("Project added successfully!");
      navigate("/projects");
    } catch (error) {
      console.error("Error adding project:", error);
      alert("Failed to add project.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-950 text-white p-8 rounded-xl shadow-lg max-w-lg w-full border border-gray-800 backdrop-blur-xl bg-opacity-90"
      >
        <h2 className="text-3xl font-semibold text-yellow-500 mb-6 text-center">✨ Upload Your Project</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-400">Project Name</label>
            <input 
              type="text" name="name" value={project.name} onChange={handleChange} required 
              className="w-full p-3 mt-1 rounded-md bg-gray-800 border border-gray-700 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">Description</label>
            <textarea 
              name="description" value={project.description} onChange={handleChange} required 
              className="w-full p-3 mt-1 rounded-md bg-gray-800 border border-gray-700 text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400">Price (₹)</label>
              <input 
                type="number" name="price" value={project.price} onChange={handleChange} required 
                className="w-full p-3 mt-1 rounded-md bg-gray-800 border border-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">Preview Link</label>
              <input 
                type="url" name="previewLink" value={project.previewLink} onChange={handleChange} required 
                className="w-full p-3 mt-1 rounded-md bg-gray-800 border border-gray-700 text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">Project Image</label>
            <input 
              type="file" accept="image/*" onChange={handleImageChange} 
              className="w-full p-3 mt-1 rounded-md bg-gray-800 border border-gray-700 text-white"
            />
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit"
            className="w-full bg-yellow-500 text-black py-3 rounded-md font-semibold hover:bg-yellow-400"
          >
            🚀 Upload Project
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default MyProjectForm;




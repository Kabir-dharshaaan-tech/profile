




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CustomizeProject = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    projectType: "", 
    budget: "", 
    duration: "", 
    description: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Project Request Submitted:", formData);
    navigate("/thank-you"); // Redirect after submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <div className="w-full max-w-2xl bg-gray-800 border border-gray-700 shadow-xl p-6 rounded-lg">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-3xl font-bold text-yellow-500 text-center"
        >
          Customize Your Project 🎨
        </motion.h2>
        <p className="text-gray-400 text-center mt-2">
          Tell us what you need, and we'll make it happen!
        </p>
        
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-gray-300 block text-sm font-medium">Project Type</label>
            <select 
              name="projectType" 
              required 
              value={formData.projectType} 
              onChange={handleChange} 
              className="w-full bg-gray-700 text-white p-2 rounded-md"
            >
              <option value="">Select a project type</option>
              <option value="website">Website Development</option>
              <option value="mobile-app">Mobile App</option>
              <option value="ai-tool">AI & ML Tool</option>
              <option value="ecommerce">E-commerce Platform</option>
            </select>
          </div>
          
          <div>
            <label className="text-gray-300 block text-sm font-medium">Budget ($)</label>
            <input 
              type="number" 
              name="budget" 
              placeholder="Enter your budget" 
              required 
              value={formData.budget} 
              onChange={handleChange} 
              className="w-full bg-gray-700 text-white p-2 rounded-md"
            />
          </div>
          
          <div>
            <label className="text-gray-300 block text-sm font-medium">Duration (in weeks)</label>
            <input 
              type="number" 
              name="duration" 
              placeholder="Enter duration" 
              required 
              value={formData.duration} 
              onChange={handleChange} 
              className="w-full bg-gray-700 text-white p-2 rounded-md"
            />
          </div>
          
          <div>
            <label className="text-gray-300 block text-sm font-medium">Project Description</label>
            <textarea 
              name="description" 
              placeholder="Describe your project..." 
              required 
              value={formData.description} 
              onChange={handleChange} 
              className="w-full bg-gray-700 text-white p-2 rounded-md h-24"
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 flex justify-center"
          >
            <button 
              type="submit" 
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold text-lg shadow-lg"
            >
              Submit Request 🚀
            </button>
          </motion.div>
        </form>
      </div>
    </div> 
  );
};

export default CustomizeProject;
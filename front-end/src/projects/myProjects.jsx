


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaRegStar, FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/projects"); // API URL
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        
        setProjects(data);
        setCurrentImageIndex(Array(data.length).fill(0));
      } catch (error) {
        console.error("Error fetching projects:", error.message);
      }
    };

    fetchProjects();
  }, []);

  const prevImage = (index) => {
    setCurrentImageIndex((prev) =>
      prev.map((imgIndex, i) =>
        i === index ? (imgIndex === 0 ? 0 : imgIndex - 1) : imgIndex
      )
    );
  };

  const nextImage = (index) => {
    setCurrentImageIndex((prev) =>
      prev.map((imgIndex, i) =>
        i === index ? (imgIndex === 0 ? 0 : imgIndex + 1) : imgIndex
      )
    );
  };

  const handleAddProject = () => {
    if (!localStorage.getItem("auth")) {
      localStorage.setItem("redirectAfterLogin", "/projectform");
      navigate("/login");
    } else {
      navigate("/projectform");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">🛠️ My Projects</h1>

      <div className="w-full max-w-4xl space-y-6">
        {projects.map((project, index) => (
          <div
            key={project._id}
            className="relative bg-gray-800 bg-opacity-70 backdrop-blur-lg p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-yellow-400"
          >
            <div className="relative w-full h-64 flex items-center justify-center bg-black rounded-lg">
              <img
                src={`http://localhost:5000${project.image}`}
                alt={`Project ${index}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => prevImage(index)}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 p-3 rounded-full hover:bg-gray-700 transition"
              >
                <FaArrowLeft className="text-white text-xl" />
              </button>
              <button
                onClick={() => nextImage(index)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 p-3 rounded-full hover:bg-gray-700 transition"
              >
                <FaArrowRight className="text-white text-xl" />
              </button>
            </div>

            <h2 className="text-xl font-semibold text-yellow-300 mt-4">{project.name}</h2>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <span className="text-yellow-400 font-bold mt-2 block">₹{project.price}</span>

            <span
              className={`inline-block mt-2 px-3 py-1 text-sm font-bold rounded-lg ${
                project.availability === "Available"
                  ? "bg-green-500 text-black"
                  : "bg-red-500 text-black"
              }`}
            >
              {project.availability}
            </span>

            <div className="flex mt-3">
              {[...Array(5)].map((_, starIndex) => (
                <span key={starIndex}>
                  {starIndex < project.rating ? (
                    <FaStar className="text-yellow-400 text-lg" />
                  ) : (
                    <FaRegStar className="text-gray-500 text-lg" />
                  )}
                </span>
              ))}
            </div>

            <a
              href={project.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-blue-400 hover:text-blue-300 underline"
            >
              🔗 Live Preview
            </a>
          </div>
        ))}
      </div>

      <button
        onClick={handleAddProject}
        className="fixed bottom-6 right-6 bg-yellow-500 text-black p-4 rounded-full shadow-lg hover:bg-yellow-400 transition flex items-center space-x-2"
      >
        <FaPlus className="text-xl" />
        <span className="font-bold">New Project</span>
      </button>
    </div>
  );
};

export default MyProjects;





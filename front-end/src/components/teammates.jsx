


import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from "react-icons/fa";
import { SiBootstrap, SiTailwindcss, SiBlender, SiC, SiAdobephotoshop, SiFigma } from "react-icons/si";

const teammates = [
  {
    name: "Madhav",
    role: "Frontend Developer",
    image:"IMG_20250331_155927.jpg", // Add correct image paths
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-2xl" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500 text-2xl" /> },
      { name: "React", icon: <FaReact className="text-blue-400 text-2xl" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-300 text-2xl" /> },
    ],
  },
  {
    name: "Anish",
    role: "Full Stack Developer",
    image: "WhatsApp Image 2025-03-31 at 15.59.02_1efe83e9.jpg", // Add correct image paths
    skills: [
      { name: "Python", icon: <FaPython className="text-yellow-500 text-2xl" /> },
      { name: "Blender", icon: <SiBlender className="text-orange-600 text-2xl" /> },
      { name: "C", icon: <SiC className="text-blue-600 text-2xl" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
    ],
  },
  {
    name: "Rahul",
    role: "UI/UX Designer & Frontend Developer",
    image: "rahul.jpg", // Add correct image path
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-2xl" /> },
      { name: "React", icon: <FaReact className="text-blue-400 text-2xl" /> },
      { name: "Blender", icon: <SiBlender className="text-orange-600 text-2xl" /> },
      { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-400 text-2xl" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-500 text-2xl" /> },
    ],
  },
];

const Teammates = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-6 md:px-16">
      {teammates.map((teammate, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center text-center md:text-left bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 w-full max-w-3xl mb-10"
        >
          {/* Profile Image on Left */}
          <img
            src={teammate.image}
            alt={teammate.name}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-purple-500 shadow-lg"
          />

          {/* Details and Skills on Right */}
          <div className="ml-0 md:ml-8 mt-4 md:mt-0 flex-1">
            <h1 className="text-3xl md:text-4xl font-extrabold text-purple-500">{teammate.name}</h1>
            <p className="text-lg md:text-xl mt-2 text-gray-300">{teammate.role}</p>

            <h3 className="text-2xl font-bold text-purple-500 mt-6">Skills</h3>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
              {teammate.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-gray-700 p-3 rounded-lg shadow-md border border-gray-600"
                >
                  {skill.icon}
                  <span className="ml-3 text-gray-300 text-sm md:text-base">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-purple-500 text-white px-6 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-purple-400 transition"
      >
        Back to Home 🏠
      </button>
    </div>
  );
};

export default Teammates;
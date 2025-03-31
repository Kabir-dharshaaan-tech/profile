


import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaJava, FaDatabase 
} from "react-icons/fa";
import {   
  SiTailwindcss, SiExpress, SiCplusplus, 
  SiFlutter, SiMongodb, SiMysql 
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-2xl" /> },
  { name: "React", icon: <FaReact className="text-blue-400 text-2xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-300 text-2xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400 text-2xl" /> },
  { name: "Java", icon: <FaJava className="text-red-500 text-2xl" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-500 text-2xl" /> },
  { name: "Flutter", icon: <SiFlutter className="text-blue-400 text-2xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-2xl" /> },
  { name: "SQL", icon: <FaDatabase className="text-gray-300 text-2xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600 text-2xl" /> },
];

const Home = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-6 md:px-16">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        
        {/* Left Section - Profile */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <img 
            src="1000003779.jpg" 
            alt="Kabir Dharshaan" 
            className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-yellow-500 shadow-lg"
          />
          <h1 className="text-3xl md:text-4xl font-extrabold mt-4 text-yellow-500">
            Kabir Dharshaan
          </h1>
          <p className="text-lg md:text-xl mt-2 text-gray-300">
            AI Engineer | Full Stack Developer | Business Visionary
          </p>

          {/* My Teammates Button */}
          <button 
            onClick={() => navigate("/teammates")} 
            className="bg-purple-500 text-white px-6 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-purple-400 transition mt-4"
          >
            My Teammates 🤝
          </button>
        </motion.div>

        {/* Right Section - About Me */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl font-extrabold text-yellow-500">About Me</h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            I'm a passionate <span className="text-yellow-400 font-semibold">AI Engineer</span> and 
            <span className="text-yellow-400 font-semibold"> Full Stack Developer</span> with expertise in creating 
            high-performance applications and innovative tech solutions. I believe in building 
            products that impact lives and businesses.
          </p>

          {/* Skills Section */}
          <h3 className="text-2xl font-bold text-yellow-500 mt-6">What I’ve Learned</h3>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center bg-gray-800 p-3 rounded-lg shadow-md border border-gray-700">
                {skill.icon}
                <span className="ml-3 text-gray-300 text-sm md:text-base">{skill.name}</span>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 1, duration: 1 }}
            className="mt-6 text-center md:text-left flex gap-4"
          >
            <button 
              onClick={() => navigate("/projects")} // Navigate to MyProjects.jsx
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-yellow-400 transition"
            >
              View My Projects 🚀
            </button>
            <button 
              onClick={() => navigate("/achievements")} // Navigate to Achievements
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-400 transition"
            >
              Achievements 🏆
            </button>
            <button 
              onClick={() => navigate("/customiseproject")} // Navigate to Customize Project
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-green-400 transition"
            >
              Customize Your Project 🎨
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
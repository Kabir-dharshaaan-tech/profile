







import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Login from "./pages/Login";
import Achievements from "./components/achievements"; 
import Achieved from "./components/achieved"; 
import MyProjects from "./projects/myProjects";
import ProjectForm from "./projects/projectform";
import CustomiseProject from "./components/customiseproject";
import Teammates from "./components/Teammates"; // ✅ Import Teammates component

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("auth"); 
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  const [projects, setProjects] = useState([]);

  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/achievements" element={<Achievements />} /> 
        <Route path="/achieved" element={<PrivateRoute><Achieved /></PrivateRoute>} /> 
        <Route path="/projects" element={<PrivateRoute><MyProjects /></PrivateRoute>} /> 
        <Route path="/projectform" element={<PrivateRoute><ProjectForm onAddProject={addProject} /></PrivateRoute>} />
        <Route path="/customiseproject" element={<PrivateRoute><CustomiseProject /></PrivateRoute>} />
        <Route path="/teammates" element={<Teammates />} /> {/* ✅ Added Route for Teammates */}
      </Routes>
    </Router>
  );
}

export default App;
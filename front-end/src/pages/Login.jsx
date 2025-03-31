




import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const correctEmail = "dharshaankabir@gmail.com"; 
  const correctPassword = "Kabir@87"; 
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === correctEmail && password === correctPassword) {
      localStorage.setItem("auth", "true"); // Save login state
      
      // Redirect to the saved page or default to achievements
      const redirectPath = localStorage.getItem("redirectAfterLogin") || "/achievements";
      localStorage.removeItem("redirectAfterLogin"); // Clear redirect path after use
      navigate(redirectPath);
    } else {
      setError("Invalid credentials. Only authorized users can log in.");
    }
  };
    
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-yellow-500 text-center">Login</h2>
        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        <form onSubmit={handleLogin} className="mt-4">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full p-3 rounded bg-gray-700 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-3 mt-3 rounded bg-gray-700 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 mt-4 p-3 rounded font-bold hover:bg-yellow-400"
          >
            Login 
          </button>
        </form>
      </div>
    </div> 
  );
};

export default Login;

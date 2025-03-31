


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";

const Achievements = () => {
  const navigate = useNavigate();
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState([]);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("auth") === "true";
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    const fetchAchievements = async () => {
      try {
        const response = await fetch("http://localhost:5000/achievements");
        if (response.ok) {
          const data = await response.json();
          setAchievements(data);
          setCurrentImageIndex(Array(data.length).fill(0));
        } else {
          console.error("Failed to fetch achievements.");
        }
      } catch (error) {
        console.error("Error fetching achievements:", error);
      }
      setLoading(false);
    };

    fetchAchievements();
  }, [navigate]);

  const prevImage = (index) => {
    setCurrentImageIndex((prev) =>
      prev.map((imgIndex, i) =>
        i === index ? (imgIndex === 0 ? achievements[i].images.length - 1 : imgIndex - 1) : imgIndex
      )
    );
  };

  const nextImage = (index) => {
    setCurrentImageIndex((prev) =>
      prev.map((imgIndex, i) =>
        i === index ? (imgIndex === achievements[i].images.length - 1 ? 0 : imgIndex + 1) : imgIndex
      )
    );
  };

  const handleAddAchievement = () => {
    localStorage.setItem("redirectAfterLogin", "/achieved");
    navigate("/login");
  };

  if (loading) {
    return <p className="text-white text-center">Loading achievements...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-yellow-500 mb-6">🏆 My Achievements</h1>

      <div className="w-full max-w-6xl space-y-8">
        {achievements.length === 0 ? (
          <p className="text-gray-400 text-center">No achievements added yet.</p>
        ) : (
          achievements.map((achievement, index) => (
            <div
              key={index}
              className="relative bg-gray-900 p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-yellow-400"
            >
              {achievement.images && achievement.images.length > 0 && (
                <div className="relative w-full h-[500px] overflow-hidden rounded-lg">
                  <img
                    src={achievement.images[currentImageIndex[index]]}
                    alt="Achievement"
                    className="w-full h-full object-cover rounded-lg"
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
              )}

              <h2 className="text-2xl font-semibold text-yellow-300 mt-4">{achievement.eventName}</h2>
              <p className="text-gray-300 mt-2">{achievement.description}</p>
              <span className="text-gray-500 text-sm">
                {achievement.eventDate} - {achievement.eventPlace}
              </span>
            </div>
          ))
        )}
      </div>

      <button
        onClick={handleAddAchievement}
        className="fixed bottom-6 right-6 bg-yellow-500 text-black p-4 rounded-full shadow-lg hover:bg-yellow-400 transition flex items-center space-x-2"
      >
        <FaPlus className="text-xl" />
        <span className="font-bold">New Achievement</span>
      </button>
    </div>
  );
};

export default Achievements;
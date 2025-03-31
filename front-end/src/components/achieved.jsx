


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Achieved = () => {
  const navigate = useNavigate();
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventPlace, setEventPlace] = useState("");
  const [description, setDescription] = useState("");
  const [howIFelt, setHowIFelt] = useState("");
  const [howIWon, setHowIWon] = useState("");
  const [projectIdea, setProjectIdea] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("auth");
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 10) {
      alert("You can only upload up to 10 images.");
      return;
    }
    setImages([...images, ...files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!eventName || !eventDate || !eventPlace || !description || !howIFelt || !howIWon || !projectIdea) {
      alert("Please fill all the fields.");
      return;
    }
    
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("eventName", eventName);
      formData.append("eventDate", eventDate);
      formData.append("eventPlace", eventPlace);
      formData.append("description", description);
      formData.append("howIFelt", howIFelt);
      formData.append("howIWon", howIWon);
      formData.append("projectIdea", projectIdea);
      images.forEach((image) => formData.append("images", image));
      
      const response = await fetch("http://localhost:5000/achievements", {
        method: "POST",
        body: formData,
      });
      
      if (response.ok) {
        alert("Achievement submitted successfully!");
        setEventName("");
        setEventDate("");
        setEventPlace("");
        setDescription("");
        setHowIFelt("");
        setHowIWon("");
        setProjectIdea("");
        setImages([]);
        navigate("/achievements"); // Redirect to achievements page
      } else {
        alert("Failed to submit achievement. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting achievement:", error);
      alert("An error occurred. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-extrabold text-yellow-500 mb-2">🎯 Achievements Form</h1>
      <p className="text-gray-300 mb-6">Submit your achieved goals here.</p>

      <form className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg space-y-4" onSubmit={handleSubmit}>
        <input type="text" placeholder="Event Name" value={eventName} onChange={(e) => setEventName(e.target.value)} className="w-full p-3 rounded bg-gray-700 text-white" />
        <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} className="w-full p-3 rounded bg-gray-700 text-white" />
        <input type="text" placeholder="Event Place" value={eventPlace} onChange={(e) => setEventPlace(e.target.value)} className="w-full p-3 rounded bg-gray-700 text-white" />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-3 rounded bg-gray-700 text-white h-24" />
        <textarea placeholder="How I Felt" value={howIFelt} onChange={(e) => setHowIFelt(e.target.value)} className="w-full p-3 rounded bg-gray-700 text-white h-24" />
        <textarea placeholder="How I Won" value={howIWon} onChange={(e) => setHowIWon(e.target.value)} className="w-full p-3 rounded bg-gray-700 text-white h-24" />
        <textarea placeholder="Project Idea" value={projectIdea} onChange={(e) => setProjectIdea(e.target.value)} className="w-full p-3 rounded bg-gray-700 text-white h-24" />
        
        <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="w-full p-3 rounded bg-gray-700 text-white" />

        {images.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mt-4">
            {images.map((image, index) => (
              <img key={index} src={URL.createObjectURL(image)} alt="Preview" className="w-full h-24 object-cover rounded" />
            ))}
          </div>
        )}

        <button type="submit" className="w-full bg-yellow-500 p-3 rounded font-bold text-black hover:bg-yellow-400" disabled={loading}>
          {loading ? "Submitting..." : "✅ Submit Achievement"}
        </button>
      </form>
    </div>
  );
};

export default Achieved;
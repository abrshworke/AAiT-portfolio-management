import { useEffect, useState } from "react";
import Nav from "../components/Anav";

const AdminAchievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [fullDescription, setFullDescription] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/achievement")
      .then((res) => res.json())
      .then((data) => setAchievements(data))
      .catch((err) => console.error("Error fetching achievements:", err));
  }, []);


  

  const handleAdd = async () => {
    if (!title || !category || !description || !image || !date || !fullDescription) {
      setSuccessMessage("Please fill in all fields.");
      setTimeout(() => setSuccessMessage(""), 4000);
      return;
    }
  
    if (!["community", "consultation", "academic"].includes(category.toLowerCase())) {
      setSuccessMessage("Category must be either 'community', 'consultation', or 'academic'.");
      setTimeout(() => setSuccessMessage(""), 4000);
      return;
    }
  
    const newAchievement = { title, category, description, image, date , fullDescription };
  
    try {
      const response = await fetch("http://localhost:8000/api/achievement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAchievement),
      });
  
      if (response.ok) {
        setSuccessMessage("Successfully added achievement!");
        
        // Clear input fields
        setTitle("");
        setCategory("");
        setDescription("");
        setImage("");
        setDate("");
        setFullDescription("");
  
        // Fetch updated achievements list to display it in frontend
        const updatedResponse = await fetch("http://localhost:8000/api/achievement");
        const updatedData = await updatedResponse.json();
        setAchievements(updatedData);
      } else {
        setSuccessMessage("Failed to add achievement.");
      }
    } catch (error) {
      console.error("Error adding achievement:", error);
      setSuccessMessage("An error occurred. Try again.");
    }
  
    setTimeout(() => setSuccessMessage(""), 4000);
  };
  






  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:8000/api/achievement/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setAchievements(achievements.filter((achievement) => achievement._id !== id));
    }
  };

  return (
    <>
      <Nav />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Admin - Manage Achievement</h1>

        {successMessage && (
          <div className="mb-4 p-2 text-green-700 bg-green-200 border border-green-500 rounded">
            {successMessage}
          </div>
        )}

<div className="mb-6 p-4 border rounded bg-gray-100">
          <h2 className="text-lg font-semibold mb-2">Add Achievement</h2>
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 mb-2 border rounded"/>
          <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 mb-2 border rounded"/>
          <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 mb-2 border rounded"></textarea>
          <textarea placeholder="Full Description" value={fullDescription} onChange={(e) => setFullDescription(e.target.value)} className="w-full p-2 mb-2 border rounded"></textarea> {/* Full description field */}
          <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} className="w-full p-2 mb-2 border rounded"/>
          <input type="text" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2 mb-2 border rounded"/>
          <button onClick={handleAdd} className="px-4 py-2 bg-blue-500 text-white rounded">Add Achievement</button>
        </div>

        <ul>
          {achievements.map((ach) => (
            <li key={ach._id} className="p-2 border rounded mb-2 flex justify-between">
              {ach.title}
              <button onClick={() => handleDelete(ach._id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AdminAchievements;


import React, { useEffect, useState } from "react";
import Nav from "../components/Anav";

const AdminNews = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [news, setNews] = useState([]); // Changed initial state to array
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/news")
      .then((res) => res.json())
      .then((data) => setNews(data)) // Removed incorrect .map
      .catch((err) => console.error("Error fetching news:", err));
  }, []);

  const handleAdd = async () => {
    if (!title || !category || !description || !image || !date || !fullDescription) {
      setSuccessMessage("Please fill in all fields.");
      setTimeout(() => setSuccessMessage(""), 4000);
      return;
    }

    const validCategories = ["event", "announcement", "achievement"];
    if (!validCategories.includes(category.toLowerCase())) {
      setSuccessMessage(`Category must be one of: ${validCategories.join(", ")}`);
      setTimeout(() => setSuccessMessage(""), 4000);
      return;
    }

    const newItem = { title, category, description, image, date, fullDescription };

    try {
      const response = await fetch("http://localhost:8000/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });

      if (response.ok) {
        setSuccessMessage("Successfully added news item!");
        // Reset form fields
        setTitle("");
        setCategory("");
        setDescription("");
        setImage("");
        setDate("");
        setFullDescription("");
        
        // Update news list
        const updatedResponse = await fetch("http://localhost:8000/api/news");
        const updatedData = await updatedResponse.json();
        setNews(updatedData);
      } else {
        setSuccessMessage("Failed to add news item.");
      }
    } catch (error) {
      console.error("Error adding news item:", error);
      setSuccessMessage("An error occurred. Try again.");
    }
    setTimeout(() => setSuccessMessage(""), 4000);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/news/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setNews((prev) => prev.filter((item) => item._id !== id));
      }
    } catch (error) {
      console.error("Error deleting news item:", error);
    }
  };

  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Admin - Manage News</h1>

        {successMessage && (
          <div className="mb-4 p-2 text-green-700 bg-green-200 border border-green-500 rounded">
            {successMessage}
          </div>
        )}

        <div className="mb-6 p-4 border rounded bg-gray-100">
          <h2 className="text-lg font-semibold mb-2">Add News Item</h2>

          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 mb-2 border rounded"/>
          <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 mb-2 border rounded"/>
          <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 mb-2 border rounded"></textarea>
          <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} className="w-full p-2 mb-2 border rounded"/>
          <input type="text" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2 mb-2 border rounded"/>
          <textarea placeholder="Full Description" value={fullDescription} onChange={(e) => setFullDescription(e.target.value)} className="w-full p-2 mb-2 border rounded"></textarea>
          <button onClick={handleAdd} className="px-4 py-2 bg-blue-500 text-white rounded">Add News Item</button>
        </div>

        <ul>
          {news.map((item) => (
            <li key={item._id} className="p-2 border rounded mb-2 flex justify-between">
              {item.title}
              <button 
                onClick={() => handleDelete(item._id)} 
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AdminNews;
import { useEffect, useState } from "react";
import Nav from "../components/Anav";

const AdminGallary = () => {

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [gallary, setGallary] = useState([]);



  useEffect(() => {
    fetch("http://localhost:8000/api/gallary")
      .then((res) => res.json())
      .then((data) => setGallary(data))
      .catch((err) => console.error("Error fetching gallary:", err));
  }, []);


  

  const handleAdd = async () => {
    if (!title || !category || !description || !url ) {
      setSuccessMessage("Please fill in all fields.");
      setTimeout(() => setSuccessMessage(""), 4000);
      return;
    }
  
    if (!["campus", "facilities", "event"].includes(category.toLowerCase())) {

      setSuccessMessage("Category must be either 'campus', 'facilities', or 'event'.");
      setTimeout(() => setSuccessMessage(""), 4000);
      return;
    }
  
    const newGallary = { title, category, description, url };
  
    try {
      const response = await fetch("http://localhost:8000/api/gallary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newGallary),
      });
  
      if (response.ok) {
        setSuccessMessage("Successfully added achievement!");
        
        // Clear input fields
        setTitle("");
        setCategory("");
        setDescription("");
        setUrl("");
        
        // Fetch updated achievements list to display it in frontend
        const updatedResponse = await fetch("http://localhost:8000/api/gallary");

        const updatedData = await updatedResponse.json();
        setGallary(updatedData);
      } else {
        setSuccessMessage("Failed to add url.");
      }
    } catch (error) {
      console.error("Error adding gallary:", error);
      setSuccessMessage("An error occurred. Try again.");
    }
  
    setTimeout(() => setSuccessMessage(""), 4000);
  };
  


  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:8000/api/gallary/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setGallary(gallary.filter((gallarys) => gallarys._id !== id));
    }
  };

  return (
    <>
      <Nav />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Admin - Manage Gallary</h1>

        {successMessage && (
          <div className="mb-4 p-2 text-green-700 bg-green-200 border border-green-500 rounded">
            {successMessage}
          </div>
        )}

          <div className="mb-6 p-4 border rounded bg-gray-100">
          <h2 className="text-lg font-semibold mb-2">Add Gallary</h2>

          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 mb-2 border rounded"/>
          <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 mb-2 border rounded"/>

          <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 mb-2 border rounded"></textarea>

          <input type="text" placeholder="Image URL" value={url} onChange={(e) => setUrl(e.target.value)} className="w-full p-2 mb-2 border rounded"/>
          
          <button onClick={handleAdd} className="px-4 py-2 bg-blue-500 text-white rounded">Add Gallary</button>
        </div>

        <ul>
          {gallary.map((gallary) => (
            <li key={gallary._id} className="p-2 border rounded mb-2 flex justify-between">
              {gallary.title}
              <button onClick={() => handleDelete(gallary._id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AdminGallary;




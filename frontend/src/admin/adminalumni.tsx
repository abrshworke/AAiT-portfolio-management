
import React, { useEffect, useState } from "react";
import Nav from "../components/Anav";


const AdminAlumni = () => {

  const [name, setName] = useState("");
  const [graduation, setGraduation] = useState("");
  const [currentRole, setCurrentrole] = useState("");
  const [image, setImage] = useState("");
  const [department, setDepartment] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [alumni, setAlumni] = useState([]); // Changed initial state to array
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/alumni")
      .then((res) => res.json())
      .then((data) => setAlumni(data)) // Removed incorrect .map
      .catch((err) => console.error("Error fetching alumni:", err));
  }, []);

  const handleAdd = async () => {
    if (!name || !graduation || !currentRole || !image || !department || !testimonial) {
      setSuccessMessage("Please fill in all fields.");
      setTimeout(() => setSuccessMessage(""), 4000);
      return;
    }

    

    const newItem = { name, graduation, currentRole, image, department, testimonial };

    try {
      const response = await fetch("http://localhost:8000/api/alumni", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });

      if (response.ok) {
        setSuccessMessage("Successfully added news item!");
        // Reset form fields
        setName("");
        setCurrentrole("");
        setDepartment("");
        setImage("");
        setTestimonial("");
        setGraduation("");
        
        // Update news list
        const updatedResponse = await fetch("http://localhost:8000/api/alumni");
        const updatedData = await updatedResponse.json();
        setAlumni(updatedData);
      } else {
        setSuccessMessage("Failed to add alumni item.");
      }
    } catch (error) {
      console.error("Error adding alumni item:", error);
      setSuccessMessage("An error occurred. Try again.");
    }
    setTimeout(() => setSuccessMessage(""), 4000);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/alumni/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setAlumni((prev) => prev.filter((item) => item._id !== id));
      }
    } catch (error) {
      console.error("Error deleting alumni item:", error);
    }
  };

  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Admin - Manage Alumni Page</h1>

        {successMessage && (
          <div className="mb-4 p-2 text-green-700 bg-green-200 border border-green-500 rounded">
            {successMessage}
          </div>
        )}

        <div className="mb-6 p-4 border rounded bg-gray-100">
          <h2 className="text-lg font-semibold mb-2">Add AAiT Alumni </h2>

          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 mb-2 border rounded"/>
          <input type="text" placeholder="graduation" value={graduation} onChange={(e) => setGraduation(e.target.value)} className="w-full p-2 mb-2 border rounded"/>
          <textarea placeholder="currentrole" value={currentRole} onChange={(e) => setCurrentrole(e.target.value)} className="w-full p-2 mb-2 border rounded"></textarea>
          <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} className="w-full p-2 mb-2 border rounded"/>
          <input type="text" placeholder="department" value={department} onChange={(e) => setDepartment(e.target.value)} className="w-full p-2 mb-2 border rounded"/>
          <textarea placeholder="testimonial" value={testimonial} onChange={(e) => setTestimonial(e.target.value)} className="w-full p-2 mb-2 border rounded"></textarea>
          <button onClick={handleAdd} className="px-4 py-2 bg-blue-500 text-white rounded">Add AAiT Alumni</button>
        </div>

        <ul>
          {alumni.map((item) => (
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

export default AdminAlumni;








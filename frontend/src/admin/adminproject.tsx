
import React, { useEffect, useState } from "react";
import Nav from "../components/Anav";

const AdminProject = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [project, setProject] = useState([]);
  const [researcher, setResearcher] = useState("");
  const [department, setDepartment] = useState("");
  const [abstract, setAbstract] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/project")
      .then((res) => res.json())
      .then((data) => Array.isArray(data) ? setProject(data) : console.error("Unexpected data format:", data))
      .catch((err) => console.error("Error fetching project:", err));
  }, []);

  const handleAdd = async () => {
    if (!title || !researcher || !department || !abstract || !image || !date || !fullDescription) {
      setSuccessMessage("Please fill in all fields.");
      setTimeout(() => setSuccessMessage(""), 4000);
      return;
    }
    if (!["approved", "ongoing", "pending"].includes(status?.toLowerCase())) {
      setSuccessMessage("Category must be 'approved', 'ongoing', or 'pending'.");
      setTimeout(() => setSuccessMessage(""), 4000);
      return;
    }

    const newProject = { title, status, researcher, department, abstract, image, date, fullDescription };
    try {
      const response = await fetch("http://localhost:8000/api/project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProject),
      });

      if (response.ok) {
        setSuccessMessage("Successfully added research project!");
        setTitle(""); setStatus(""); setResearcher(""); setDepartment(""); setAbstract(""); setImage(""); setDate(""); setFullDescription("");
        const updatedData = await (await fetch("http://localhost:8000/api/project")).json();
        setProject(updatedData);
        setTimeout(() => setSuccessMessage(""), 4000);
      } else setSuccessMessage("Failed to add project.");
    } catch (error) {
      console.error("Error adding project:", error);
      setSuccessMessage("An error occurred. Try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/project/${id}`, { method: "DELETE" });
      if (response.ok) setProject((prevProjects) => prevProjects.filter((p) => p._id !== id));
      else console.error("Failed to delete project");
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Admin - Manage Researches</h1>
        {successMessage && <div className="mb-4 p-2 text-green-700 bg-green-200 border border-green-500 rounded">{successMessage}</div>}

        <div className="mb-6 p-4 border rounded bg-gray-100">
          <h2 className="text-lg font-semibold mb-2">Add Researches</h2>
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 mb-2 border rounded"/>
          <input type="text" placeholder="Category" value={status} onChange={(e) => setStatus(e.target.value)} className="w-full p-2 mb-2 border rounded"/>
          <input type="text" placeholder="Researcher" value={researcher} onChange={(e) => setResearcher(e.target.value)} className="w-full p-2 mb-2 border rounded"/>
          <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} className="w-full p-2 mb-2 border rounded"/>
          <input type="text" placeholder="Abstract" value={abstract} onChange={(e) => setAbstract(e.target.value)} className="w-full p-2 mb-2 border rounded"/>
          <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} className="w-full p-2 mb-2 border rounded"/>
          <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2 mb-2 border rounded"/>
          <textarea placeholder="Full Description" value={fullDescription} onChange={(e) => setFullDescription(e.target.value)} className="w-full p-2 mb-2 border rounded"></textarea>
          <button onClick={handleAdd} className="px-4 py-2 bg-blue-500 text-white rounded">Add Research</button>
        </div>

        <ul>
          {project.map((project) => (
            <li key={project._id} className="p-2 border rounded mb-2 flex justify-between">
              {project.title}
              <button onClick={() => handleDelete(project._id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AdminProject;

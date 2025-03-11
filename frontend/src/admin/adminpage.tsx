import React from "react";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate(); 

  const handleNavigate = (path) => {
    navigate(path); 
  };

  return (
    <>
      {/* <Nav /> */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 min-h-screen py-12 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-white mb-4">Welcome to the Admin Dashboard</h1>
          <p className="text-xl text-white opacity-80 mb-8">
            Streamline your platform management with ease and style.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manage Achievements</h2>
              <p className="text-gray-600 mb-4">
                Update and keep your achievements current with ease.
              </p>
              <button 
                onClick={() => handleNavigate("/adminachievements")}
                className="py-3 px-6 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-md shadow-md hover:scale-105 transition-all duration-200">
                Go to Achievements
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manage Projects</h2>
              <p className="text-gray-600 mb-4">
                Add, modify, and manage Projects with ease.
              </p>
              <button 
                onClick={() => handleNavigate("/adminproject")}
                className="py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-md shadow-md hover:scale-105 transition-all duration-200">
                Go to Projects
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manage News</h2>
              <p className="text-gray-600 mb-4">
                Update and share the latest news and updates with your community.
              </p>
              <button 
                onClick={() => handleNavigate("/adminnews")}
                className="py-3 px-6 bg-gradient-to-r from-red-400 to-yellow-500 text-white rounded-md shadow-md hover:scale-105 transition-all duration-200">
                Go to News
              </button>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manage Gallery</h2>
              <p className="text-gray-600 mb-4">
                Upload and manage multimedia content with style.
              </p>
              <button 
                onClick={() => handleNavigate("/admingallary")}
                className="py-3 px-6 bg-gradient-to-r from-indigo-500 to-teal-500 text-white rounded-md shadow-md hover:scale-105 transition-all duration-200">
                Go to Gallery
              </button>
            </div>

            {/* Card 5 */}
            <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manage Alumni</h2>
              <p className="text-gray-600 mb-4">
                Build and maintain an up-to-date alumni network.
              </p>
              <button 
                onClick={() => handleNavigate("/adminalumni")}
                className="py-3 px-6 bg-gradient-to-r from-teal-400 to-blue-600 text-white rounded-md shadow-md hover:scale-105 transition-all duration-200">
                Go to Alumni
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;

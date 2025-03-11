import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";


const categories = ["all", "campus", "facilities", "events"];

const Gallery = () => {
  const [gallarys, setGallarys] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);


  useEffect(() => {
    fetch("http://localhost:8000/api/gallary")
      .then((res) => res.json())
      .then((data) => setGallarys(data))
      .catch((err) => console.error("Error fetching gallary:", err));
  }, []);

  const filteredImages = gallarys.filter((gallary) => {
    return selectedCategory === "all" || !selectedCategory || gallary.category === selectedCategory;
  });
  


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 animate-fade-up">Gallery</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-aait-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <Badge className="mb-2 w-fit">{image.category}</Badge>
                <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                <p className="text-white text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No images found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
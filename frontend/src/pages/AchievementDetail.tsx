

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

const AchievementDetail = () => {
  const { id } = useParams();
  const [achievement, setAchievement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/api/achievement/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAchievement(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching achievement details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }


  if (!achievement) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Achievement not found</h1>
          <Link
            to="/achievements"
            className="text-aait-600 hover:text-aait-700 inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Achievements
          </Link>
        </div>
      </div>
    );
  }

  
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/achievements"
          className="text-aait-600 hover:text-aait-700 inline-flex items-center mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Achievements
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={achievement.image}
            alt={achievement.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <Badge>{achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}</Badge>
            <h1 className="text-3xl font-bold mb-4">{achievement.title}</h1>
            <div className="text-gray-600 mb-6">{achievement.date}</div>
            <p className="whitespace-pre-line">{achievement.description}</p>
            <p className="whitespace-pre-line mt-4">{achievement.fullDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementDetail;

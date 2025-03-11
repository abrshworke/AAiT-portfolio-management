import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";



const ResearchDetail = () => {
  const { id } = useParams();
  const [research, setResearche] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchResearch = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/project/${id}`);
        const data = await res.json();
        setResearche(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching research details:", err);
        setLoading(false);
      }
    };
  
    fetchResearch();
  }, [id]);
  


  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (!research) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Research not found</h1>
          <Link
            to="/research"
            className="text-aait-600 hover:text-aait-700 inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Research
          </Link>
        </div>
      </div>
    );
  }



  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/research"
          className="text-aait-600 hover:text-aait-700 inline-flex items-center mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Research
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={research.image}
            alt={research.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <div className="mb-4">
              <Badge variant="outline">
                {research.status.charAt(0).toUpperCase() + research.status.slice(1)}
              </Badge>
            </div>
            <h1 className="text-3xl font-bold mb-4">{research.title}</h1>
            <div className="text-gray-600 mb-6">
              <p>{research.researcher}</p>
              <p>{research.department}</p>
              <p>{research.date}</p>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold mb-3">Abstract</h2>
              <p className="text-gray-700 mb-6">{research.abstract}</p>

              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="whitespace-pre-line mb-6">{research.fullDescription}</p>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchDetail;


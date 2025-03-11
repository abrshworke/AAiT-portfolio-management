import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";



const Research = () => {
  const [researches, setResearches] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "ongoing":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="w-4 h-4 mr-1" />;
      case "ongoing":
        return <Clock className="w-4 h-4 mr-1" />;
      case "pending":
        return <AlertCircle className="w-4 h-4 mr-1" />;
      default:
        return null;
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/api/project")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setResearches(data);
        } else {
          console.error("Unexpected API response:", data);
        }
      })
      .catch((err) => console.error("Error fetching researches:", err));
  }, []);
  
  

  const filteredResearch = researches.filter((research) => {
    if (!research || !research.title) return false; 
    const matchesSearch = research.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus ? research.status === selectedStatus : true;
    return matchesSearch && matchesStatus;
  });
  

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 animate-fade-up">Research</h1>

        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search research..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {["approved", "ongoing", "pending"].map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(selectedStatus === status ? null : status)}
                className={`inline-flex items-center px-4 py-2 rounded-full transition-colors ${
                  selectedStatus === status
                    ? getStatusColor(status)
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {getStatusIcon(status)}
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        
          {filteredResearch.map((research) => (

              <Link
              to={`/research/${research._id}`}  // Use _id instead of id, assuming your project uses MongoDB with _id as identifier
              key={research._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
              >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={research.image}
                  alt={research.title}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <Badge className={getStatusColor(research.status)}>
                  <span className="flex items-center">
                    {getStatusIcon(research.status)}
                    {research.status.charAt(0).toUpperCase() + research.status.slice(1)}
                  </span>
                </Badge>
                <h3 className="text-xl font-semibold mt-2 mb-2">{research.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{research.abstract}</p>
                <div className="text-sm text-gray-500">
                  <p className="mb-2 text-lg font-semibold text-gray-800">{research.researcher}</p>
                  <p className="mb-2 text-sm text-gray-600">{research.department}</p>

                  <p>{research.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredResearch.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No research found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Research;







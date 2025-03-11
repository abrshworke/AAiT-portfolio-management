import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";



const Alumni = () => {
  const [alumni, setAlumni] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
      fetch("http://localhost:8000/api/alumni")
        .then((res) => res.json())
        .then((data) => setAlumni(data))
        .catch((err) => console.error("Error fetching alumni:", err));
    }, []);


    const filteredAlumni = alumni.filter((newalumni) => {
      const matchesSearch = newalumni.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      
      return matchesSearch ;
    });
    




  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 animate-fade-up">Alumni Success Stories</h1>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search news and events..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredAlumni.map((alumni) => (

            <Card key={alumni.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <img src={alumni.image} alt={alumni.name} className="object-cover" />
                </Avatar>
                <CardTitle className="text-xl font-semibold">{alumni.name}</CardTitle>
                <p className="text-gray-500">{alumni.currentRole}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Department:</span> {alumni.department}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Graduated:</span> {alumni.graduation}
                  </p>
                </div>
                <blockquote className="italic text-gray-700 border-l-4 border-aait-600 pl-4">
                  "{alumni.testimonial}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;
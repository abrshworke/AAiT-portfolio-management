
import { Input } from "@/components/ui/input";
import { Search, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Lightbulb, Megaphone, Trophy } from "lucide-react";




const category = [
  { id: "event", label: "Event", icon: Lightbulb },
  { id: "announcement", label: "Announcement", icon: Megaphone },
  { id: "achievement", label: "Achievement", icon: Trophy },
];

const News = () => {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/news")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.error("Error fetching news:", err));
  }, []);


  const filteredNews = news.filter((newsItem) => {
    const matchesSearch = newsItem.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? newsItem.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });
  



  return (


    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 animate-fade-up">News & Events</h1>

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



        <div className="flex flex-wrap gap-2">
            {category.map((categories) => {
              const Icon = categories.icon;
              return (
                <button
                  key={categories.id}
                  onClick={() =>
                    setSelectedCategory(
                      selectedCategory === categories.id ? null : categories.id
                    )
                  }
                  className={`inline-flex items-center px-4 py-2 mb-8 rounded-full transition-colors ${
                    selectedCategory === categories.id
                      ? "bg-aait-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {categories.label}
                </button>
              );
            })}
        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


          {filteredNews.map((news) => (

/////////
            <Link
            to={`/news/${news._id}`}  
            key={news._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
            >

              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={news.image}
                  alt={news.title}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {news.date}
                </div>
                <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                <p className="text-gray-600 text-sm">{news.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No news or events found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
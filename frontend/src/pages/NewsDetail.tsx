import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { useEffect, useState } from "react";



const NewsDetail = () => {
  const { id } = useParams();
    const [news, setResearche] = useState(null);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const fetchNews = async () => {
          try {
            const res = await fetch(`http://localhost:8000/api/news/${id}`);
            const data = await res.json();
            setResearche(data);
            setLoading(false);
          } catch (err) {
            console.error("Error fetching news details:", err);
            setLoading(false);
          }
        };
      
        fetchNews();
      }, [id]);
      
      if (loading) {
        return <div className="text-center py-12">Loading...</div>;
      }
    


  if (!news) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">News not found</h1>
          <Link
            to="/news"
            className="text-aait-600 hover:text-aait-700 inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/news"
          className="text-aait-600 hover:text-aait-700 inline-flex items-center mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to News
        </Link>



        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
            <div className="flex items-center text-gray-600 mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              {news.date}
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6">{news.description}</p>
              <p className="whitespace-pre-line">{news.fullDescription}</p>

              {news.venue && (
                <div className="bg-gray-50 p-6 rounded-lg mt-6">
                  <h2 className="text-xl font-semibold mb-3">Event Details</h2>
                  <div className="space-y-2">
                    
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
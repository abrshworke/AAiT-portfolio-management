import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Book, Users, Newspaper } from "lucide-react";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://149818895.v2.pressablecdn.com/wp-content/uploads/2017/09/5killo.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(3px) brightness(0.7)",
          }}
        />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <img
              src="../../public/aait.jpg"
              alt="AAIT Logo"
              className="h-40 w-40 rounded-full shadow-lg border-4 border-blue-500 animate-pulse"
            />
          </div>
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            Welcome to AAIT
          </h1>
          <p
            className={`text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            Shaping the future through innovation, research, and academic excellence
          </p>
          <div
            className={`transition-all duration-1000 delay-500 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-colors shadow-lg"
            >
              Discover More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                stat: "500+",
                label: "Academic Achievements",
                color: "text-emerald-500",
              },
              {
                icon: Book,
                stat: "200+",
                label: "Research Projects",
                color: "text-blue-500",
              },
              {
                icon: Users,
                stat: "10,000+",
                label: "Alumni Network",
                color: "text-purple-500",
              },
              {
                icon: Newspaper,
                stat: "100+",
                label: "Annual Events",
                color: "text-red-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-white shadow-md transform hover:-translate-y-2 transition-all duration-300 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: `${index * 100 + 800}ms`,
                }}
              >
                <item.icon className={`h-10 w-10 ${item.color} mb-4`} />
                <h3 className="text-4xl font-bold text-gray-900 mb-2">
                  {item.stat}
                </h3>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Featured Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Latest Research",
                description:
                  "Explore our groundbreaking research projects and innovations",
                link: "/research",
                image:
                  "https://s5.cdn.ventureburn.com/wp-content/uploads/sites/2/2023/01/Why-African-Startups-Are-Experiencing-a-Rise-in-Venture-Capital-Seeds-scaled.jpg",
              },
              {
                title: "Student Achievements",
                description:
                  "Celebrate the outstanding accomplishments of our students",
                link: "/achievements",
                image:
                  "https://th.bing.com/th/id/OIP.yo7ghyetk64cfDe-7YpEMwHaFj?rs=1&pid=ImgDetMain",
              },
              {
                title: "Upcoming Events",
                description:
                  "Stay updated with our latest events and announcements",
                link: "/news",
                image:
                  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
              },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`group relative block rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: `${index * 100 + 1200}ms`,
                }}
              >
                <div className="relative h-72">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-sm">{item.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;






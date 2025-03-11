
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Achievements", path: "/achievements" },
    { name: "Research", path: "/research" },
    { name: "News & Events", path: "/news" },
    { name: "Alumni", path: "/alumni" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500  ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 ">
          
          <Link
            to="/"
            className="flex items-center space-x-3 group transform transition duration-300 hover:scale-105"
          >
            
            <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-aait-600 mr-4 md:mr-4  md:mt-4 md:mb-6 hover:scale-105 transition-transform">
            <img
              src="../../public/aait.jpg"
              alt="AAIT Logo"
              className="h-full w-full object-cover transform transition duration-500 group-hover:rotate-12 p-0.5"
            />
        </div>

            <span className="text-2xl font-bold bg-gradient-to-r from-aait-600 to-blue-600 bg-clip-text text-transparent">
              AAiT
            </span>
          </Link>


          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-2 py-1.5 text-sm font-medium transition-all ${
                  location.pathname === link.path
                    ? "text-aait-600"
                    : "text-gray-600 hover:text-aait-500"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-aait-600 transition-all duration-300 ${
                    location.pathname === link.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-aait-100 hover:bg-aait-200 transition-colors"
            >
              {isOpen ? (
                <X className="h-7 w-7 text-aait-600 animate-spin-in" />
              ) : (
                <Menu className="h-7 w-7 text-aait-600 animate-pulse" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Glassmorphic Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        }`}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div className="relative bg-white/95 backdrop-blur-xl max-w-xs w-full h-full p-6 space-y-4 shadow-2xl">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center p-3 rounded-xl text-lg font-medium transition-all ${
                location.pathname === link.path
                  ? "bg-aait-600 text-white"
                  : "bg-gray-100/50 hover:bg-aait-100 text-gray-700"
              }`}
            >
              {link.name}
              <div className="flex-1 border-b border-dashed border-gray-300 mx-3" />
              <span className="text-sm text-gray-400">
                {link.path === "/" ? "⌘" : "↗"}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
};

export default Navigation;







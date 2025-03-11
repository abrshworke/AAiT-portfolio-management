import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">AAIT</h3>
            <p className="text-sm">
              Addis Ababa Institute of Technology (AAIT) is committed to excellence
              in education, research, and innovation.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/achievements"
                  className="text-sm hover:text-white transition-colors"
                >
                  Achievements
                </Link>
              </li>
              <li>
                <Link
                  to="/research"
                  className="text-sm hover:text-white transition-colors"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-sm hover:text-white transition-colors"
                >
                  News & Events
                </Link>
              </li>
              <li>
                <Link
                  to="/alumni"
                  className="text-sm hover:text-white transition-colors"
                >
                  Alumni
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@aait.edu.et</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+251 111 232 436</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">King George VI Street, Addis Ababa</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} AAIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
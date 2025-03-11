import { Card, CardContent } from "@/components/ui/card";
import { Award, Book, Users, Target } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 animate-fade-up">About AAIT</h1>

        <div className="prose max-w-none mb-12">
          <p className="text-lg text-gray-700 mb-6">
            The Addis Ababa Institute of Technology (AAIT) is Ethiopia's premier
            engineering institution, committed to excellence in education, research, and
            innovation. Founded in 1953, AAIT has been at the forefront of technological
            advancement in Ethiopia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6">
            <Award className="w-12 h-12 mx-auto mb-4 text-aait-600" />
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">
              Committed to maintaining the highest standards in engineering education
            </p>
          </Card>

          <Card className="text-center p-6">
            <Book className="w-12 h-12 mx-auto mb-4 text-aait-600" />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              Fostering creative solutions to engineering challenges
            </p>
          </Card>

          <Card className="text-center p-6">
            <Users className="w-12 h-12 mx-auto mb-4 text-aait-600" />
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600">
              Building strong relationships with industry and society
            </p>
          </Card>

          <Card className="text-center p-6">
            <Target className="w-12 h-12 mx-auto mb-4 text-aait-600" />
            <h3 className="text-xl font-semibold mb-2">Impact</h3>
            <p className="text-gray-600">
              Making meaningful contributions to Ethiopia's development
            </p>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To educate and train the next generation of engineers and researchers,
              fostering innovation and technological advancement that contributes to
              Ethiopia's development and beyond.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To be a leading institute of technology in Africa, recognized globally for
              excellence in engineering education, research, and innovation.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Key Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="text-center p-6">
                <div className="text-4xl font-bold text-aait-600 mb-2">5000+</div>
                <div className="text-gray-600">Students</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="text-center p-6">
                <div className="text-4xl font-bold text-aait-600 mb-2">200+</div>
                <div className="text-gray-600">Faculty Members</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="text-center p-6">
                <div className="text-4xl font-bold text-aait-600 mb-2">15K+</div>
                <div className="text-gray-600">Alumni</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="text-center p-6">
                <div className="text-4xl font-bold text-aait-600 mb-2">50+</div>
                <div className="text-gray-600">Research Projects</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
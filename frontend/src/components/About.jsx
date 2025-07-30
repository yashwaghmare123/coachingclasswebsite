import React from 'react';
import { Award, Users, BookOpen, Target, Clock, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: "5000+", label: "Students Trained" },
    { icon: Award, value: "98%", label: "Success Rate" },
    { icon: BookOpen, value: "15+", label: "Years Experience" },
    { icon: Target, value: "500+", label: "IIT/NEET Selections" }
  ];

  const features = [
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Multiple batch timings to suit your schedule"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Track record of consistent top results"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Highly qualified and experienced teachers"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Study",
      description: "Complete coverage of syllabus with practice"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* About Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">SUMIT</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leading coaching institute dedicated to nurturing academic excellence and shaping successful careers for over 15 years.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Excellence in Education Since 2009
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              SUMIT Coaching Institute has been a beacon of educational excellence, guiding thousands of students towards their dreams of cracking competitive exams like JEE, NEET, and MHT CET.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our proven teaching methodologies, experienced faculty, and personalized attention have consistently delivered outstanding results, making us one of the most trusted names in education.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">IIT-JEE Specialist</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">NEET Expert</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">Board Excellence</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Why Choose Us?</h4>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-white/20 rounded-lg p-2 mt-1">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">{feature.title}</h5>
                      <p className="text-blue-100 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Target className="w-8 h-8 text-blue-600 mr-3" />
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To provide quality education that empowers students with knowledge, skills, and confidence to excel in competitive examinations and achieve their career aspirations.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Award className="w-8 h-8 text-purple-600 mr-3" />
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be the leading educational institution that nurtures young minds, fostering innovation, critical thinking, and academic excellence for a brighter future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

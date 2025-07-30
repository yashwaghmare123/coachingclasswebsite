import React from 'react';
import { GraduationCap, Award, Star, BookOpen } from 'lucide-react';

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Rajesh Kumar",
      subject: "Physics",
      qualification: "Ph.D. Physics, IIT Delhi",
      experience: "15+ Years",
      specialization: "JEE Advanced Physics",
      achievements: "500+ IIT Selections",
      image: "👨‍🏫",
      rating: 4.9
    },
    {
      name: "Dr. Priya Sharma",
      subject: "Chemistry", 
      qualification: "Ph.D. Chemistry, IISc Bangalore",
      experience: "12+ Years",
      specialization: "Organic & Inorganic Chemistry",
      achievements: "400+ NEET Qualifications",
      image: "👩‍🏫",
      rating: 4.8
    },
    {
      name: "Prof. Amit Patel",
      subject: "Mathematics",
      qualification: "M.Sc. Mathematics, IIT Bombay",
      experience: "18+ Years", 
      specialization: "Advanced Mathematics",
      achievements: "600+ JEE Selections",
      image: "👨‍💼",
      rating: 4.9
    },
    {
      name: "Dr. Neha Gupta",
      subject: "Biology",
      qualification: "Ph.D. Biotechnology, AIIMS",
      experience: "10+ Years",
      specialization: "NEET Biology",
      achievements: "350+ Medical Selections",
      image: "👩‍⚕️",
      rating: 4.7
    },
    {
      name: "Prof. Suresh Reddy",
      subject: "Chemistry",
      qualification: "M.Sc. Chemistry, NIT Warangal",
      experience: "14+ Years",
      specialization: "Physical Chemistry",
      achievements: "450+ Selections",
      image: "👨‍🔬",
      rating: 4.8
    },
    {
      name: "Dr. Kavya Singh",
      subject: "Physics",
      qualification: "Ph.D. Physics, BITS Pilani",
      experience: "11+ Years",
      specialization: "Modern Physics",
      achievements: "300+ IIT Selections",
      image: "👩‍🔬",
      rating: 4.8
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Faculty Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Expert Faculty</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn from the best minds in education. Our faculty brings years of experience and proven track records in competitive exam preparation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facultyMembers.map((faculty, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              
              {/* Faculty Image & Rating */}
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{faculty.image}</div>
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(faculty.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                  <span className="ml-2 text-gray-600 font-medium">{faculty.rating}</span>
                </div>
              </div>

              {/* Faculty Info */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{faculty.name}</h3>
                <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-3">
                  {faculty.subject}
                </div>
              </div>

              {/* Faculty Details */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <GraduationCap className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-800">Qualification</div>
                    <div className="text-gray-600 text-sm">{faculty.qualification}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <BookOpen className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-800">Experience</div>
                    <div className="text-gray-600 text-sm">{faculty.experience}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-800">Specialization</div>
                    <div className="text-gray-600 text-sm">{faculty.specialization}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-800">Achievements</div>
                    <div className="text-gray-600 text-sm">{faculty.achievements}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Faculty Features */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Why Our Faculty Makes the Difference
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Expert Qualifications</h4>
              <p className="text-blue-100">Ph.D. and M.Sc. from premier institutes like IIT, IISc, and AIIMS</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Proven Track Record</h4>
              <p className="text-blue-100">Consistently producing top rankers in JEE, NEET, and other exams</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Personalized Approach</h4>
              <p className="text-blue-100">Individual attention and customized learning strategies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;

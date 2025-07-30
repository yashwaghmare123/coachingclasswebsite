const Courses = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-100 rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-100 rounded-full opacity-45 animate-ping"></div>
        <div className="absolute bottom-40 right-1/3 w-14 h-14 bg-cyan-100 rounded-full opacity-40 animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-400 mb-4">
            Our Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Unlock your potential with our comprehensive courses designed for success
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        {/* Course Cards Grid */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* NEET Card */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 overflow-hidden group border border-gray-100">
            <div className="bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500 p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🏥</div>
                <h3 className="text-3xl font-bold mb-2">NEET</h3>
                <p className="text-emerald-100 font-medium">Medical Entrance Excellence</p>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <span>Advanced Biology Focus</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <span>Physics & Chemistry Mastery</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <span>Regular Mock Tests</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <span>Expert Medical Faculty</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-emerald-400 to-teal-500 text-white py-4 rounded-2xl font-bold text-lg hover:from-emerald-500 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Explore NEET
              </button>
            </div>
          </div>

          {/* JEE Card */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 overflow-hidden group border border-gray-100">
            <div className="bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🚀</div>
                <h3 className="text-3xl font-bold mb-2">JEE</h3>
                <p className="text-blue-100 font-medium">Engineering Dreams Reality</p>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Advanced Mathematics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Physics & Chemistry Depth</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>IIT-JEE Preparation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Problem Solving Mastery</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-blue-400 to-purple-500 text-white py-4 rounded-2xl font-bold text-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Explore JEE
              </button>
            </div>
          </div>

          {/* MHT CET Card */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 overflow-hidden group border border-gray-100">
            <div className="bg-gradient-to-br from-purple-400 via-pink-400 to-rose-500 p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🎯</div>
                <h3 className="text-3xl font-bold mb-2">MHT CET</h3>
                <p className="text-purple-100 font-medium">Maharashtra Excellence</p>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>State Board Expertise</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>PCM & PCB Excellence</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Local College Preparation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Competitive Advantage</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-400 to-rose-500 text-white py-4 rounded-2xl font-bold text-lg hover:from-purple-500 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Explore MHT CET
              </button>
            </div>
          </div>

          {/* PCM/PCB Card */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 overflow-hidden group border border-gray-100">
            <div className="bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500 p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">📚</div>
                <h3 className="text-3xl font-bold mb-2">PCM/PCB</h3>
                <p className="text-orange-100 font-medium">Foundation Excellence</p>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span>Class 11th & 12th Focus</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span>Board Exam Excellence</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span>Strong Foundation Building</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span>Regular Assessments</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-orange-400 to-yellow-500 text-white py-4 rounded-2xl font-bold text-lg hover:from-orange-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Explore PCM/PCB
              </button>
            </div>
          </div>

        </div>

        {/* Call to Action Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-3xl p-12 mx-6 md:mx-12 lg:mx-24 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who have achieved their dreams with us
            </p>
            <button className="bg-white text-blue-600 px-12 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, BookOpen, Users, Award, Phone, Mail, MapPin, Star, Zap, Target, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Top Achievement Bar */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-1 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12 animate-pulse"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-center space-x-8 text-sm font-medium">
            <div className="flex items-center space-x-2 animate-bounce">
              <Trophy className="w-4 h-4 text-yellow-300" />
              <span>100% Results in JEE Mains 2024</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-300" />
              <span>Top Coaching Institute Award</span>
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              <Target className="w-4 h-4 text-yellow-300" />
              <span>50+ Students in Top 100 NEET</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-[9999] transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-xl' : 'bg-white shadow-lg'}`}>
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-2 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-4 right-20 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-3 left-1/3 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            {/* Revolutionary Logo Design */}
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-2 rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <Zap className="w-6 h-6 text-white animate-pulse" />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  SUMIT
                </h1>
                <p className="text-gray-600 text-xs font-bold tracking-wide">COACHING INSTITUTE</p>
              </div>
            </div>

            {/* Desktop Navigation with Glassmorphism */}
            <div className="hidden lg:flex items-center space-x-2">
              <Link to="/" className="nav-item group relative px-4 py-2 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100">
                <span className="text-gray-700 font-semibold group-hover:text-purple-600 transition-colors duration-300">Home</span>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:w-8 transition-all duration-300"></div>
              </Link>

              {/* Mega Dropdown for Courses */}
              <div className="relative group">
                <button 
                  onClick={() => handleDropdown('courses')}
                  className="nav-item flex items-center space-x-1 px-4 py-2 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-cyan-100"
                >
                  <span className="text-gray-700 font-semibold group-hover:text-blue-600 transition-colors duration-300">Courses</span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-all duration-300 ${activeDropdown === 'courses' ? 'rotate-180 text-blue-600' : 'group-hover:text-blue-600'}`} />
                </button>
                
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-96 transition-all duration-500 ${activeDropdown === 'courses' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
                  <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4">
                      <h3 className="text-white font-bold text-lg">Our Programs</h3>
                      <p className="text-purple-100 text-sm">Choose your path to success</p>
                    </div>
                    <div className="p-6 grid grid-cols-2 gap-4">
                      <Link to="/courses" className="group p-4 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 border-2 border-transparent hover:border-blue-200">
                        <div className="text-2xl mb-2">🚀</div>
                        <div className="font-bold text-gray-800 group-hover:text-blue-600">JEE Advanced</div>
                        <div className="text-sm text-gray-500">Engineering Dreams</div>
                      </Link>
                      <Link to="/courses" className="group p-4 rounded-2xl hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 transition-all duration-300 border-2 border-transparent hover:border-green-200">
                        <div className="text-2xl mb-2">🏥</div>
                        <div className="font-bold text-gray-800 group-hover:text-green-600">NEET UG</div>
                        <div className="text-sm text-gray-500">Medical Excellence</div>
                      </Link>
                      <Link to="/courses" className="group p-4 rounded-2xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 transition-all duration-300 border-2 border-transparent hover:border-purple-200">
                        <div className="text-2xl mb-2">📚</div>
                        <div className="font-bold text-gray-800 group-hover:text-purple-600">Board Mastery</div>
                        <div className="text-sm text-gray-500">Class 10th & 12th</div>
                      </Link>
                      <Link to="/courses" className="group p-4 rounded-2xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50 transition-all duration-300 border-2 border-transparent hover:border-orange-200">
                        <div className="text-2xl mb-2">🌟</div>
                        <div className="font-bold text-gray-800 group-hover:text-orange-600">Foundation</div>
                        <div className="text-sm text-gray-500">Class 6th to 9th</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/results" className="nav-item group relative px-4 py-2 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-green-100 hover:to-emerald-100">
                <span className="text-gray-700 font-semibold group-hover:text-green-600 transition-colors duration-300 flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>Results</span>
                </span>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full group-hover:w-8 transition-all duration-300"></div>
              </Link>

              <Link to="/faculty" className="nav-item group relative px-4 py-2 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-blue-100">
                <span className="text-gray-700 font-semibold group-hover:text-indigo-600 transition-colors duration-300 flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Faculty</span>
                </span>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full group-hover:w-8 transition-all duration-300"></div>
              </Link>

              <Link to="/about" className="nav-item group relative px-4 py-2 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-100 hover:to-orange-100">
                <span className="text-gray-700 font-semibold group-hover:text-yellow-600 transition-colors duration-300">About</span>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full group-hover:w-8 transition-all duration-300"></div>
              </Link>

              <Link to="/contact" className="nav-item group relative px-4 py-2 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-red-100 hover:to-pink-100">
                <span className="text-gray-700 font-semibold group-hover:text-red-600 transition-colors duration-300">Contact</span>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full group-hover:w-8 transition-all duration-300"></div>
              </Link>
            </div>

            {/* Revolutionary CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a 
                href="/admission" 
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                  <span>Join Now</span>
                  <Zap className="w-4 h-4 animate-pulse" />
                </div>
              </a>
            </div>

            {/* Mobile menu button with animation */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative p-3 rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transition-all duration-300"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`absolute top-5 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation with Slide Animation */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-screen pb-6' : 'max-h-0'}`}>
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <Link to="/" className="block px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300 text-gray-700 font-semibold">
                🏠 Home
              </Link>
              
              <div className="space-y-2">
                <button 
                  onClick={() => handleDropdown('mobile-courses')}
                  className="w-full flex items-center justify-between px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 text-gray-700 font-semibold"
                >
                  <span>📚 Courses</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'mobile-courses' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === 'mobile-courses' ? 'max-h-64' : 'max-h-0'}`}>
                  <div className="pl-4 space-y-2">
                    <Link to="/courses" className="block px-6 py-2 text-blue-600 hover:text-blue-800 rounded-xl hover:bg-blue-50 transition-all duration-200">
                      🚀 JEE Advanced
                    </Link>
                    <Link to="/courses" className="block px-6 py-2 text-green-600 hover:text-green-800 rounded-xl hover:bg-green-50 transition-all duration-200">
                      🏥 NEET UG
                    </Link>
                    <Link to="/courses" className="block px-6 py-2 text-purple-600 hover:text-purple-800 rounded-xl hover:bg-purple-50 transition-all duration-200">
                      📝 Board Exams
                    </Link>
                    <Link to="/courses" className="block px-6 py-2 text-orange-600 hover:text-orange-800 rounded-xl hover:bg-orange-50 transition-all duration-200">
                      🌟 Foundation
                    </Link>
                  </div>
                </div>
              </div>

              <Link to="/results" className="block px-6 py-3 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-300 text-gray-700 font-semibold">
                🏆 Results
              </Link>
              
              <Link to="/faculty" className="block px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 transition-all duration-300 text-gray-700 font-semibold">
                👨‍🏫 Faculty
              </Link>
              
              <Link to="/about" className="block px-6 py-3 rounded-2xl bg-gradient-to-r from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 transition-all duration-300 text-gray-700 font-semibold">
                ℹ️ About
              </Link>
              
              <Link to="/contact" className="block px-6 py-3 rounded-2xl bg-gradient-to-r from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 transition-all duration-300 text-gray-700 font-semibold">
                📞 Contact
              </Link>
              
              <div className="pt-4">
                <a 
                  href="/admission" 
                  className="block text-center bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-4 rounded-2xl font-bold shadow-lg mx-2 transform hover:scale-105 transition-all duration-300"
                >
                  ⚡ Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// import headerimg1 from '../images/headerimg1.jpg'; // Adjust the path as necessary
import headerimg2 from '../images/img3.jpg';

const Headerimg = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array of images for the carousel
  const images = [
    {
      src: headerimg2,
      alt: "Coaching Excellence",
      title: "Excellence in Education",
      subtitle: "Shaping Future Leaders"
    },
    {
      src: headerimg2, // You can replace with different images
      alt: "Student Success",
      title: "Student Success Stories",
      subtitle: "100% Results Guaranteed"
    },
    {
      src: headerimg2, // You can replace with different images
      alt: "Modern Facilities",
      title: "Modern Learning Environment",
      subtitle: "State-of-the-art Infrastructure"
    },
    {
      src: headerimg2, // You can replace with different images
      alt: "Expert Faculty",
      title: "Expert Faculty Team",
      subtitle: "Learn from the Best"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] m-0 p-0 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Carousel Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            {/* <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            /> */}
            {/* Professional Light Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/60 via-purple-600/40 to-indigo-600/50"></div>
            
            {/* Text Content with enhanced professional styling */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
              <div className="space-y-8 max-w-5xl px-6">
                <div className={`transition-all duration-1000 delay-300 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-2xl">
                      {image.title}
                    </span>
                  </h1>
                </div>
                
                <div className={`transition-all duration-1000 delay-500 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  <p className="text-lg md:text-xl lg:text-2xl font-medium text-blue-100 drop-shadow-lg leading-relaxed">
                    {image.subtitle}
                  </p>
                </div>
                
                <div className={`transition-all duration-1000 delay-700 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="bg-gradient-to-r from-white to-blue-50 text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:from-blue-50 hover:to-white transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl">
                      Start Your Journey
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 shadow-xl">
                      Learn More
                    </button>
                  </div>
                </div>
                
                {/* Achievement Badges */}
                <div className={`transition-all duration-1000 delay-900 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  <div className="flex flex-wrap justify-center gap-6 mt-8">
                    <div className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/30">
                      <div className="text-xl font-bold">15+</div>
                      <div className="text-xs text-blue-100">Years Experience</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/30">
                      <div className="text-xl font-bold">5000+</div>
                      <div className="text-xs text-blue-100">Students Trained</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/30">
                      <div className="text-xl font-bold">98%</div>
                      <div className="text-xs text-blue-100">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Professional Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/15 hover:bg-white/25 backdrop-blur-lg rounded-full p-5 transition-all duration-300 group border border-white/30 hover:border-white/50 shadow-xl hover:shadow-2xl"
      >
        <ChevronLeft className="w-8 h-8 text-white group-hover:scale-110 transition-transform drop-shadow-lg" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/15 hover:bg-white/25 backdrop-blur-lg rounded-full p-5 transition-all duration-300 group border border-white/30 hover:border-white/50 shadow-xl hover:shadow-2xl"
      >
        <ChevronRight className="w-8 h-8 text-white group-hover:scale-110 transition-transform drop-shadow-lg" />
      </button>

      {/* Enhanced Professional Dot Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 border border-white/50 ${
              index === currentSlide
                ? 'w-16 h-4 bg-white rounded-full shadow-lg'
                : 'w-4 h-4 bg-white/30 hover:bg-white/60 rounded-full hover:scale-110'
            }`}
          />
        ))}
      </div>

      {/* Enhanced Professional Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-white/20 via-white/10 to-white/20">
        <div
          className="h-full bg-gradient-to-r from-white via-blue-200 to-white transition-all duration-500 shadow-lg"
          style={{ width: `${((currentSlide + 1) / images.length) * 100}%` }}
        />
      </div>

      {/* Professional Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-24 left-16 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-24 w-3 h-3 bg-blue-200/40 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 left-1/4 w-5 h-5 bg-white/25 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-indigo-200/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/6 w-4 h-4 bg-purple-200/30 rounded-full animate-bounce delay-1500"></div>
      </div>

      {/* Corner Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-br-full"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/10 to-transparent rounded-tr-full"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-full"></div>
    </div>
  );
};

export default Headerimg;

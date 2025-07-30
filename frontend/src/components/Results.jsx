import React from 'react';
import { Trophy, Target, TrendingUp, Star, Award, Users } from 'lucide-react';

const Results = () => {
  const toppers = [
    {
      name: "Aarav Sharma",
      exam: "JEE Advanced 2024",
      rank: "AIR 12",
      score: "326/360",
      college: "IIT Bombay - CSE",
      image: "👨‍🎓"
    },
    {
      name: "Priya Patel",
      exam: "NEET 2024", 
      rank: "AIR 45",
      score: "715/720",
      college: "AIIMS Delhi",
      image: "👩‍⚕️"
    },
    {
      name: "Rohit Kumar",
      exam: "JEE Main 2024",
      rank: "AIR 23",
      score: "99.89 Percentile",
      college: "IIT Delhi - EE",
      image: "👨‍💻"
    },
    {
      name: "Ananya Singh",
      exam: "NEET 2024",
      rank: "AIR 67",
      score: "708/720",
      college: "JIPMER",
      image: "👩‍🔬"
    },
    {
      name: "Karan Reddy",
      exam: "MHT CET 2024",
      rank: "State Rank 5",
      score: "99.95 Percentile",
      college: "VJTI Mumbai",
      image: "👨‍🔧"
    },
    {
      name: "Shruti Gupta",
      exam: "JEE Advanced 2024",
      rank: "AIR 89",
      score: "298/360",
      college: "IIT Kanpur - CSE",
      image: "👩‍💻"
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "100% Results",
      subtitle: "JEE Main 2024",
      description: "All students qualified with flying colors"
    },
    {
      icon: Target,
      title: "98% Success",
      subtitle: "NEET 2024",
      description: "Outstanding medical entrance results"
    },
    {
      icon: TrendingUp,
      title: "500+ Selections",
      subtitle: "Top Institutes",
      description: "IIT, AIIMS, NIT, Medical Colleges"
    },
    {
      icon: Star,
      title: "50+ Top 100",
      subtitle: "All India Ranks",
      description: "Consistent top performers"
    }
  ];

  const yearlyStats = [
    { year: "2024", jee: 156, neet: 89, total: 245 },
    { year: "2023", jee: 142, neet: 76, total: 218 },
    { year: "2022", jee: 128, neet: 65, total: 193 },
    { year: "2021", jee: 115, neet: 58, total: 173 }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Results Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Outstanding <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our students consistently achieve top ranks in competitive exams. Here are some of our recent success stories.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Achievements Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
              <p className="text-blue-600 font-semibold mb-2">{achievement.subtitle}</p>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Top Performers */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Recent <span className="text-blue-600">Top Performers</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toppers.map((topper, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                
                {/* Topper Badge */}
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <div className="text-6xl mb-2">{topper.image}</div>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      TOP
                    </div>
                  </div>
                </div>

                {/* Topper Info */}
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">{topper.name}</h4>
                  <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-3">
                    {topper.exam}
                  </div>
                </div>

                {/* Performance Details */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                    <span className="font-semibold text-gray-700">Rank:</span>
                    <span className="font-bold text-blue-600">{topper.rank}</span>
                  </div>
                  
                  <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                    <span className="font-semibold text-gray-700">Score:</span>
                    <span className="font-bold text-green-600">{topper.score}</span>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3">
                    <div className="font-semibold text-gray-700 mb-1">Admitted to:</div>
                    <div className="font-bold text-purple-600">{topper.college}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Yearly Performance */}
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Year-wise Performance
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-bold text-gray-800">Year</th>
                  <th className="text-center py-4 px-6 font-bold text-blue-600">JEE Selections</th>
                  <th className="text-center py-4 px-6 font-bold text-green-600">NEET Selections</th>
                  <th className="text-center py-4 px-6 font-bold text-purple-600">Total Selections</th>
                </tr>
              </thead>
              <tbody>
                {yearlyStats.map((stat, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-gray-800">{stat.year}</td>
                    <td className="text-center py-4 px-6 font-bold text-blue-600">{stat.jee}</td>
                    <td className="text-center py-4 px-6 font-bold text-green-600">{stat.neet}</td>
                    <td className="text-center py-4 px-6 font-bold text-purple-600">{stat.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Success Story?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Be the next topper with our proven teaching methodology and expert guidance
            </p>
            <button className="bg-white text-blue-600 px-12 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;

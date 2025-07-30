import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "123 Education Street, Knowledge City",
        "Mumbai, Maharashtra 400001",
        "Near Central Library"
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+91 98765 43210",
        "+91 98765 43211",
        "Toll Free: 1800-123-4567"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@sumitcoaching.com",
        "admissions@sumitcoaching.com",
        "support@sumitcoaching.com"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Saturday: 8:00 AM - 8:00 PM",
        "Sunday: 9:00 AM - 5:00 PM",
        "Admission Counseling Available"
      ]
    }
  ];

  const branches = [
    {
      name: "Main Branch - Mumbai",
      address: "123 Education Street, Knowledge City, Mumbai - 400001",
      phone: "+91 98765 43210",
      timing: "8:00 AM - 8:00 PM"
    },
    {
      name: "Pune Branch",
      address: "456 Learning Avenue, Pune - 411001",
      phone: "+91 98765 43211",
      timing: "8:00 AM - 8:00 PM"
    },
    {
      name: "Nashik Branch",
      address: "789 Study Road, Nashik - 422001",
      phone: "+91 98765 43212",
      timing: "8:00 AM - 8:00 PM"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Contact Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your journey towards success? Contact us today for admission details and course information.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
                <info.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{info.title}</h3>
              <div className="space-y-2">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form and Map */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <MessageCircle className="w-8 h-8 text-blue-600 mr-3" />
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Course Interest</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a course</option>
                    <option value="jee">JEE (Main + Advanced)</option>
                    <option value="neet">NEET</option>
                    <option value="mht-cet">MHT CET</option>
                    <option value="pcm">PCM (11th & 12th)</option>
                    <option value="pcb">PCB (11th & 12th)</option>
                    <option value="foundation">Foundation (6th - 10th)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Tell us about your goals and any questions you have..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Map and Quick Info */}
          <div className="space-y-8">
            
            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white text-center">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Find Us on Map</h3>
              <p className="text-blue-100 mb-6">
                Located in the heart of the education district, easily accessible by public transport.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300">
                View on Google Maps
              </button>
            </div>

            {/* Quick Contact */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-800">Call Now</div>
                    <div className="text-blue-600">+91 98765 43210</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-800">WhatsApp</div>
                    <div className="text-green-600">+91 98765 43210</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Branch Locations */}
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Branch Locations
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <h4 className="text-xl font-bold text-gray-800 mb-4">{branch.name}</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{branch.address}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{branch.phone}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{branch.timing}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Headerimg from './components/Headerimg';
import Courses from './components/Courses';
import About from './components/About';
import Faculty from './components/Faculty';
import Results from './components/Results';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import { AuthProvider } from './context/AuthContext';

const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
    <Headerimg />
    <Courses />
    <Results />
  </div>
);

const AboutPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
    <div className="pt-20">
      <About />
    </div>
  </div>
);

const CoursesPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
    <div className="pt-20">
      <Courses />
    </div>
  </div>
);

const FacultyPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
    <div className="pt-20">
      <Faculty />
    </div>
  </div>
);

const ResultsPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
    <div className="pt-20">
      <Results />
    </div>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
    <div className="pt-20">
      <Contact />
    </div>
  </div>
);

const App = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/faculty" element={<FacultyPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </AuthProvider>
  );
};

export default App;

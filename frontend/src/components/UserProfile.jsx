import React, { useState, useEffect } from 'react';
import { User, Mail, Shield, LogOut, Edit, Save, XCircle, Phone, Home, BookOpen, Users } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const UserProfile = () => {
  const { user, logout, login } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    parentContact: '',
    address: '',
    school: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName || '',
        phoneNumber: user.phoneNumber || '',
        parentContact: user.parentContact || '',
        address: user.address || '',
        school: user.school || ''
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    const endpoint = user.role === 'ADMIN' 
      ? `http://localhost:3000/api/admin/profile` 
      : `http://localhost:3000/api/student/profile`;

    try {
      const response = await fetch(endpoint, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setSuccess('Profile updated successfully!');
        login(data.user); // Update user in context
        setTimeout(() => {
          setEditMode(false);
          setSuccess('');
        }, 1500);
      } else {
        setError(data.message || 'Failed to update profile.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Please Login</h2>
          <p className="text-gray-600">You need to be logged in to view this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">User Profile</h1>
                <p className="text-blue-100">Manage your account information</p>
              </div>
              <button
                onClick={handleLogout}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl px-6 py-3 font-semibold transition-all duration-300 flex items-center space-x-2"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-8">
            {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4" role="alert">{error}</div>}
            {success && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative mb-4" role="alert">{success}</div>}
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Profile Picture */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{user.fullName || 'User'}</h3>
                <p className="text-gray-600 capitalize">{user.role?.toLowerCase() || 'user'}</p>
              </div>

              {/* Profile Details */}
              <div className="md:col-span-2 space-y-6">
                {editMode ? (
                  <form onSubmit={handleSave} className="space-y-6">
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <User className="w-5 h-5 mr-2 text-blue-600" />
                        Personal Information
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="fullName">Full Name</label>
                          <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
                          <p className="text-gray-500 font-medium bg-gray-200 px-4 py-2 rounded-lg">{user.email}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <Phone className="w-5 h-5 mr-2 text-green-600" />
                        Contact Information
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="phoneNumber">Phone Number</label>
                          <input type="text" name="phoneNumber" id="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        {user.role === 'STUDENT' && (
                          <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="parentContact">Parent Contact</label>
                            <input type="text" name="parentContact" id="parentContact" value={formData.parentContact} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <Home className="w-5 h-5 mr-2 text-orange-600" />
                        Other Details
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="address">Address</label>
                          <input type="text" name="address" id="address" value={formData.address} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        {user.role === 'STUDENT' && (
                          <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="school">School</label>
                            <input type="text" name="school" id="school" value={formData.school} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                          </div>
                        )}
                      </div>
                    </div>
                  </form>
                ) : (
                  <>
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <User className="w-5 h-5 mr-2 text-blue-600" />
                        Personal Information
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
                          <p className="text-gray-800 font-semibold">{user.fullName || 'Not provided'}</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
                          <p className="text-gray-800 font-semibold">{user.email}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <Shield className="w-5 h-5 mr-2 text-purple-600" />
                        Additional Information
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
                          <p className="text-gray-800 font-semibold">{user.phoneNumber || 'Not provided'}</p>
                        </div>
                        {user.role === 'STUDENT' && (
                          <>
                            <div>
                              <label className="block text-sm font-medium text-gray-600 mb-1">Parent Contact</label>
                              <p className="text-gray-800 font-semibold">{user.parentContact || 'Not provided'}</p>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-600 mb-1">Address</label>
                              <p className="text-gray-800 font-semibold">{user.address || 'Not provided'}</p>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-600 mb-1">School</label>
                              <p className="text-gray-800 font-semibold">{user.school || 'Not provided'}</p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              {editMode ? (
                <>
                  <button onClick={handleSave} className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                    <Save className="w-5 h-5" />
                    <span>Save Changes</span>
                  </button>
                  <button onClick={() => setEditMode(false)} className="bg-gray-200 text-gray-800 px-8 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                    <XCircle className="w-5 h-5" />
                    <span>Cancel</span>
                  </button>
                </>
              ) : (
                <button onClick={() => setEditMode(true)} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                  <Edit className="w-5 h-5" />
                  <span>Edit Profile</span>
                </button>
              )}
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

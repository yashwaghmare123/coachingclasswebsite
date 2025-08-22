import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { BookOpen, Calendar, Trophy, TrendingUp, Clock, User, BarChart3, Target, Award, Phone, School } from 'lucide-react';

const StudentDashboard = () => {
  const { user } = useAuth();
  const [dashboardData, setDashboardData] = useState(null);
  const [marks, setMarks] = useState([]);
  const [attendance, setAttendance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    fetchDashboardData();
    fetchMarks();
    fetchAttendance();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/student/dashboard', {
        credentials: 'include'
      });
      const data = await response.json();
      if (data.success) {
        setDashboardData(data.dashboard);
      }
    } catch (error) {
      console.error('Error fetching dashboard:', error);
    }
  };

  const fetchMarks = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/student/marks', {
        credentials: 'include'
      });
      const data = await response.json();
      if (data.success) {
        setMarks(data.marks);
      }
    } catch (error) {
      console.error('Error fetching marks:', error);
    }
  };

  const fetchAttendance = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/student/attendance', {
        credentials: 'include'
      });
      const data = await response.json();
      if (data.success) {
        setAttendance(data);
      }
    } catch (error) {
      console.error('Error fetching attendance:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  const DashboardOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Average Score</p>
              <p className="text-3xl font-bold">{dashboardData?.averageScore || 0}%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-blue-200" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Attendance</p>
              <p className="text-3xl font-bold">{dashboardData?.attendancePercentage || 0}%</p>
            </div>
            <Calendar className="w-8 h-8 text-green-200" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Total Tests</p>
              <p className="text-3xl font-bold">{dashboardData?.totalTests || 0}</p>
            </div>
            <BookOpen className="w-8 h-8 text-purple-200" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Course</p>
              <p className="text-xl font-bold">{user?.course || 'N/A'}</p>
            </div>
            <Target className="w-8 h-8 text-orange-200" />
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Marks */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
            Recent Test Results
          </h3>
          <div className="space-y-3">
            {dashboardData?.recentMarks?.slice(0, 5).map((mark, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-medium text-gray-800">{mark.examName}</p>
                  <p className="text-sm text-gray-600">{mark.subject}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg text-blue-600">{mark.percentage}%</p>
                  <p className="text-sm text-gray-500">{mark.marksObtained}/{mark.totalMarks}</p>
                </div>
              </div>
            )) || <p className="text-gray-500">No recent tests</p>}
          </div>
        </div>

        {/* Attendance Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Clock className="w-6 h-6 mr-2 text-green-500" />
            Monthly Attendance
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Present Days</span>
              <span className="font-bold text-green-600">{dashboardData?.monthlyAttendance?.present || 0}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Days</span>
              <span className="font-bold text-gray-800">{dashboardData?.monthlyAttendance?.total || 0}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div 
                className="bg-gradient-to-r from-green-500 to-emerald-500 h-4 rounded-full transition-all duration-300"
                style={{ width: `${dashboardData?.attendancePercentage || 0}%` }}
              ></div>
            </div>
            <p className="text-center text-sm text-gray-600">
              {dashboardData?.attendancePercentage || 0}% Attendance Rate
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const MarksView = () => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <h3 className="text-2xl font-bold">Test Results & Marks</h3>
        <p className="text-blue-100">Track your academic performance</p>
      </div>
      <div className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Exam Name</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Subject</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Marks</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Percentage</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Grade</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
              </tr>
            </thead>
            <tbody>
              {marks.map((mark, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{mark.examName}</td>
                  <td className="py-3 px-4">{mark.subject}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {mark.examType}
                    </span>
                  </td>
                  <td className="py-3 px-4">{mark.marksObtained}/{mark.totalMarks}</td>
                  <td className="py-3 px-4">
                    <span className={`font-bold ${mark.percentage >= 80 ? 'text-green-600' : mark.percentage >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {mark.percentage}%
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-sm font-semibold ${
                      mark.grade === 'A+' || mark.grade === 'A' ? 'bg-green-100 text-green-800' :
                      mark.grade === 'B+' || mark.grade === 'B' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {mark.grade}
                    </span>
                  </td>
                  <td className="py-3 px-4">{new Date(mark.examDate).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {marks.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No test results available yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const AttendanceView = () => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <h3 className="text-2xl font-bold">Attendance Record</h3>
        <p className="text-green-100">Monitor your class attendance</p>
      </div>
      <div className="p-6">
        {/* Attendance Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-green-50 rounded-xl p-4 text-center">
            <p className="text-green-600 font-semibold">Present</p>
            <p className="text-2xl font-bold text-green-700">{attendance?.statistics?.presentDays || 0}</p>
          </div>
          <div className="bg-red-50 rounded-xl p-4 text-center">
            <p className="text-red-600 font-semibold">Absent</p>
            <p className="text-2xl font-bold text-red-700">{attendance?.statistics?.absentDays || 0}</p>
          </div>
          <div className="bg-yellow-50 rounded-xl p-4 text-center">
            <p className="text-yellow-600 font-semibold">Late</p>
            <p className="text-2xl font-bold text-yellow-700">{attendance?.statistics?.lateDays || 0}</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 text-center">
            <p className="text-blue-600 font-semibold">Percentage</p>
            <p className="text-2xl font-bold text-blue-700">{attendance?.statistics?.attendancePercentage || 0}%</p>
          </div>
        </div>

        {/* Attendance Records */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Subject</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Batch</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {attendance?.attendance?.map((record, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">{new Date(record.date).toLocaleDateString()}</td>
                  <td className="py-3 px-4">{record.subject}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-sm font-semibold ${
                      record.status === 'Present' ? 'bg-green-100 text-green-800' :
                      record.status === 'Late' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {record.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{record.batch}</td>
                  <td className="py-3 px-4">{record.remarks || '-'}</td>
                </tr>
              )) || []}
            </tbody>
          </table>
          {(!attendance?.attendance || attendance.attendance.length === 0) && (
            <div className="text-center py-8 text-gray-500">
              No attendance records available.
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const ProfileView = () => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <h3 className="text-2xl font-bold">Student Profile</h3>
        <p className="text-purple-100">Your personal information</p>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Picture */}
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-16 h-16 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800">{user?.fullName}</h4>
            <p className="text-gray-600">{user?.studentId || 'Student ID not assigned'}</p>
          </div>

          {/* Student Details */}
          <div className="md:col-span-2 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                  <label className="font-semibold text-gray-700">Course</label>
                </div>
                <p className="text-gray-800">{user?.course || 'Not assigned'}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <User className="w-5 h-5 text-green-600 mr-2" />
                  <label className="font-semibold text-gray-700">Batch</label>
                </div>
                <p className="text-gray-800">{user?.batch || 'Not assigned'}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <Phone className="w-5 h-5 text-purple-600 mr-2" />
                  <label className="font-semibold text-gray-700">Phone</label>
                </div>
                <p className="text-gray-800">{user?.phoneNumber || 'Not provided'}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <School className="w-5 h-5 text-orange-600 mr-2" />
                  <label className="font-semibold text-gray-700">School</label>
                </div>
                <p className="text-gray-800">{user?.school || 'Not provided'}</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <label className="block font-semibold text-gray-700 mb-2">Email Address</label>
              <p className="text-gray-800">{user?.email}</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <label className="block font-semibold text-gray-700 mb-2">Enrollment Date</label>
              <p className="text-gray-800">{user?.enrollmentDate ? new Date(user.enrollmentDate).toLocaleDateString() : 'Not available'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Welcome back, {user?.fullName?.split(' ')[0] || 'Student'}! 👋
          </h1>
          <p className="text-gray-600">Track your progress and stay updated with your academic journey</p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl shadow-lg mb-6 overflow-hidden">
          <div className="flex flex-wrap">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'marks', label: 'Test Results', icon: Trophy },
              { id: 'attendance', label: 'Attendance', icon: Calendar },
              { id: 'profile', label: 'Profile', icon: User }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 p-4 text-center transition-all duration-300 flex items-center justify-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {activeTab === 'dashboard' && <DashboardOverview />}
          {activeTab === 'marks' && <MarksView />}
          {activeTab === 'attendance' && <AttendanceView />}
          {activeTab === 'profile' && <ProfileView />}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

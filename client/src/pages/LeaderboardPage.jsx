import React, { useState } from 'react';
import { 
  Search, Download, TrendingUp, Award, Target, Zap, Users
} from 'react-feather';
import GradientBackground from '../components/GradientBackground';

const LeaderboardPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState('Global');
  const [selectedMetric, setSelectedMetric] = useState('Points');
  const [selectedPeriod, setSelectedPeriod] = useState('This Week');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('Global');
  const [currentPage, setCurrentPage] = useState(1);

  // Your stats (dummy data)
  const yourStats = {
    rank: 18,
    points: 4320,
    streak: 12
  };

  // Top 3 winners
  const topThree = [
    {
      rank: 1,
      name: 'Ava Patel',
      avatar: 'https://i.pravatar.cc/150?img=47',
      points: 7820,
      category: 'AI/ML'
    },
    {
      rank: 2,
      name: 'Liam Chen',
      avatar: 'https://i.pravatar.cc/150?img=33',
      points: 7540,
      category: 'Cloud'
    },
    {
      rank: 3,
      name: 'Sofia Gomez',
      avatar: 'https://i.pravatar.cc/150?img=45',
      points: 7210,
      category: 'Design'
    }
  ];

  // Leaderboard data
  const allUsers = [
    { rank: 4, name: 'Noah Smith', avatar: 'https://i.pravatar.cc/150?img=12', category: 'UI/UX', categoryColor: 'bg-purple-500', quizzes: 24, points: 6980 },
    { rank: 5, name: 'Mia Wilson', avatar: 'https://i.pravatar.cc/150?img=48', category: 'Web', categoryColor: 'bg-blue-500', quizzes: 20, points: 6530 },
    { rank: 6, name: 'Ethan Park', avatar: 'https://i.pravatar.cc/150?img=15', category: 'Analytics', categoryColor: 'bg-green-500', quizzes: 18, points: 6240 },
    { rank: 7, name: 'Liam Chen', avatar: 'https://i.pravatar.cc/150?img=33', category: 'DevOps', categoryColor: 'bg-orange-500', quizzes: 17, points: 6010 },
    { rank: 8, name: 'Ava Patel', avatar: 'https://i.pravatar.cc/150?img=47', category: 'AI/ML', categoryColor: 'bg-indigo-500', quizzes: 21, points: 5880 },
    { rank: 9, name: 'Oliver Brown', avatar: 'https://i.pravatar.cc/150?img=11', category: 'Security', categoryColor: 'bg-red-500', quizzes: 19, points: 5650 },
    { rank: 10, name: 'Emma Davis', avatar: 'https://i.pravatar.cc/150?img=44', category: 'Data', categoryColor: 'bg-teal-500', quizzes: 22, points: 5420 }
  ];

  const tabs = ['Global', 'Friends', 'My Class'];
  const metrics = ['Points', 'Quizzes', 'Streaks'];
  const categories = ['All', 'Design', 'Web', 'AI/ML', 'DevOps', 'Analytics', 'Security', 'Data'];

  const filteredUsers = allUsers.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory === 'All' || user.category === selectedCategory)
  );

  return (
    <div className="min-h-screen bg-white relative">
      <GradientBackground />
      
      <div className="relative z-10 pt-24 pb-12">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Leaderboards</h1>
            <p className="text-base text-gray-600">Track top performers across quizzes, courses, and streaks</p>
          </div>

          {/* Search and Tabs */}
          <div className="mb-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-2">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedTab === tab
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Period */}
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm font-medium"
            >
              <option>This Week</option>
              <option>This Month</option>
              <option>All Time</option>
            </select>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Your Stats */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Your Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
                    <span className="text-sm text-gray-700">Current Rank</span>
                    <span className="text-lg font-bold text-primary">#{yourStats.rank}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
                    <span className="text-sm text-gray-700">Total Points</span>
                    <span className="text-lg font-bold text-secondary">{yourStats.points.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-amber-50 rounded-xl">
                    <span className="text-sm text-gray-700">Streak</span>
                    <span className="text-lg font-bold text-amber-600">{yourStats.streak} days</span>
                  </div>
                </div>
              </div>

              {/* Filters */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Filters</h3>
                
                {/* Category */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Category: {selectedCategory}</h4>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Metric */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Metric: {selectedMetric}</h4>
                  <select
                    value={selectedMetric}
                    onChange={(e) => setSelectedMetric(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    {metrics.map(metric => (
                      <option key={metric} value={metric}>{metric}</option>
                    ))}
                  </select>
                </div>

                {/* Region */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Region: {selectedRegion}</h4>
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option>Global</option>
                    <option>North America</option>
                    <option>Europe</option>
                    <option>Asia</option>
                  </select>
                </div>
              </div>

              {/* Legend */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Legend</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Top 10</span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Top 3 Podium */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900 flex items-center space-x-2">
                    <Award className="text-amber-500" size={20} />
                    <span>Top Performers</span>
                  </h3>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                    <Download size={16} />
                    <span>Export CSV</span>
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {topThree.map((user, index) => (
                    <div
                      key={user.rank}
                      className={`bg-gradient-to-br ${
                        index === 0 ? 'from-amber-50 to-yellow-50 border-amber-200' :
                        index === 1 ? 'from-gray-50 to-slate-50 border-gray-200' :
                        'from-orange-50 to-amber-50 border-orange-200'
                      } border-2 rounded-2xl p-6 text-center relative`}
                    >
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200">
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {user.rank}
                        </span>
                      </div>
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-20 h-20 rounded-full mx-auto mb-3 mt-4 border-4 border-white shadow-lg"
                      />
                      <h4 className="font-bold text-gray-900 mb-1">{user.name}</h4>
                      <p className="text-2xl font-bold text-primary mb-1">{user.points.toLocaleString()} pts</p>
                      <span className="text-xs font-semibold text-gray-600 bg-white px-3 py-1 rounded-full">
                        {user.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leaderboard Table */}
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                {/* Table Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="grid grid-cols-12 gap-4 text-sm font-semibold text-gray-700">
                    <div className="col-span-1">#</div>
                    <div className="col-span-4">User</div>
                    <div className="col-span-3">Category</div>
                    <div className="col-span-2 text-center">Quizzes</div>
                    <div className="col-span-2 text-right">Points</div>
                  </div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-gray-200">
                  {filteredUsers.map((user) => (
                    <div
                      key={user.rank}
                      className="px-6 py-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-1">
                          <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${
                            user.rank <= 10 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                          }`}>
                            {user.rank}
                          </span>
                        </div>
                        <div className="col-span-4 flex items-center space-x-3">
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-10 h-10 rounded-full border-2 border-gray-200"
                          />
                          <div>
                            <p className="font-semibold text-gray-900">{user.name}</p>
                            <p className="text-xs text-gray-500">{user.category}</p>
                          </div>
                        </div>
                        <div className="col-span-3">
                          <span className={`inline-block ${user.categoryColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                            {user.category}
                          </span>
                        </div>
                        <div className="col-span-2 text-center">
                          <span className="font-semibold text-gray-900">{user.quizzes}</span>
                        </div>
                        <div className="col-span-2 text-right">
                          <span className="font-bold text-primary">{user.points.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
                  <p className="text-sm text-gray-600">Page {currentPage} of 6</p>
                  <div className="flex items-center space-x-2">
                    <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-white transition-colors text-sm font-medium">
                      Prev
                    </button>
                    {[1, 2, 3].map((page) => (
                      <button
                        key={page}
                        className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                          currentPage === page
                            ? 'bg-primary text-white'
                            : 'border border-gray-200 hover:bg-white'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-white transition-colors text-sm font-medium">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;

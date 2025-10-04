import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, BookOpen, Home, Book, FileText, Award, 
  MessageCircle, User, LogOut, Settings, Bell, Search,
  ChevronDown, Clock, HelpCircle
} from 'react-feather';
import { useAuth } from '../contexts/AuthContext';

const ModernNavbar = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Dummy user data
  const dummyUser = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@edutech.com',
    avatar: 'https://i.pravatar.cc/150?img=47',
    plan: 'Premium Plan',
    coursesCompleted: 8,
    points: 2450
  };

  // Dummy notifications
  const notifications = [
    {
      id: 1,
      type: 'course',
      title: 'New Course Available',
      message: 'Check out "Advanced React Patterns" - just released!',
      time: '5 min ago',
      read: false,
      icon: '📚'
    },
    {
      id: 2,
      type: 'achievement',
      title: 'Achievement Unlocked!',
      message: 'You completed 5 courses this month. Keep it up!',
      time: '1 hour ago',
      read: false,
      icon: '🏆'
    },
    {
      id: 3,
      type: 'reminder',
      title: 'Quiz Reminder',
      message: 'Don\'t forget to complete your JavaScript quiz today.',
      time: '2 hours ago',
      read: true,
      icon: '⏰'
    },
    {
      id: 4,
      type: 'social',
      title: 'New Comment',
      message: 'Alex replied to your discussion in "Web Dev Basics"',
      time: '3 hours ago',
      read: true,
      icon: '💬'
    },
    {
      id: 5,
      type: 'update',
      title: 'System Update',
      message: 'New features added: Dark mode and progress tracking!',
      time: '1 day ago',
      read: true,
      icon: '🎉'
    }
  ];

  // Popular searches / recommendations
  const popularSearches = [
    { query: 'React Hooks Tutorial', category: 'Course', icon: '📚' },
    { query: 'JavaScript Interview Questions', category: 'Blog', icon: '📝' },
    { query: 'Web Development Roadmap', category: 'Guide', icon: '🗺️' },
    { query: 'Python for Beginners', category: 'Course', icon: '🐍' },
    { query: 'UI/UX Design Principles', category: 'Course', icon: '🎨' }
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isProfileOpen && !event.target.closest('.profile-dropdown')) {
        setIsProfileOpen(false);
      }
      if (isNotificationOpen && !event.target.closest('.notification-dropdown')) {
        setIsNotificationOpen(false);
      }
      if (isSearchOpen && !event.target.closest('.search-dropdown')) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isProfileOpen, isNotificationOpen, isSearchOpen]);

  const handleSearchSelect = (query) => {
    setSearchQuery(query);
    setIsSearchOpen(false);
    // Add search logic here
    console.log('Searching for:', query);
  };

  const handleNotificationClick = (notification) => {
    // Mark as read and handle click
    console.log('Notification clicked:', notification);
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} />, isRoute: true },
    { name: 'Courses', path: '/courses', icon: <Book size={18} />, isRoute: true },
    { name: 'Blogs', path: '/blogs', icon: <FileText size={18} />, isRoute: true },
    { name: 'Leaderboard', path: '/leaderboard', icon: <Award size={18} />, isRoute: true },
    { name: 'Quizzes', path: '/quizzes', icon: <HelpCircle size={18} />, isRoute: true },
    { name: 'Contact', path: '/contact', icon: <MessageCircle size={18} />, isRoute: true },
  ];

  const scrollToSection = (e, path) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
    setIsOpen(false);
    // Redirect to home page
    window.location.href = '/';
  };

  const handleLogin = () => {
    // Login logic is handled by AuthContext
    // This function can be removed or used for other purposes
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 md:py-3' : 'py-3 md:py-4'
      }`}
    >
      <div className="container-custom">
        {/* Liquid Glass Pill Container */}
        <div className={`relative bg-white/70 backdrop-blur-2xl rounded-3xl border border-white/30 shadow-2xl transition-all duration-500 ${
          isScrolled ? 'shadow-3xl bg-white/80 border-white/40' : 'shadow-2xl'
        } before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r before:from-white/20 before:to-transparent before:pointer-events-none`}>
          <div className="flex items-center justify-between px-4 md:px-6 h-14 md:h-16">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
              onClick={() => setIsOpen(false)}
            >
              <div className="bg-gradient-to-br from-primary to-secondary p-1.5 md:p-2 rounded-xl group-hover:scale-110 transition-transform shadow-md">
                <BookOpen className="text-white" size={20} />
              </div>
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hidden sm:block">
                EduTech
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="flex items-center space-x-2 px-4 py-2 rounded-full text-gray-700 hover:bg-gray-100 hover:text-primary font-medium transition-all duration-200 group"
                  >
                    <span className="group-hover:scale-110 transition-transform">{link.icon}</span>
                    <span>{link.name}</span>
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={(e) => scrollToSection(e, link.path)}
                    className="flex items-center space-x-2 px-4 py-2 rounded-full text-gray-700 hover:bg-gray-100 hover:text-primary font-medium transition-all duration-200 group"
                  >
                    <span className="group-hover:scale-110 transition-transform">{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                )
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-2 md:space-x-3">
              {/* Search Icon (Desktop) */}
              <div className="relative search-dropdown">
                <button 
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Search size={20} className="text-gray-600" />
                </button>

                {/* Search Dropdown */}
                {isSearchOpen && (
                  <div className="absolute right-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in">
                    {/* Search Input */}
                    <div className="p-4 border-b">
                      <div className="relative">
                        <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search courses, blogs, topics..."
                          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                          autoFocus
                        />
                      </div>
                    </div>

                    {/* Popular Searches */}
                    <div className="p-2">
                      <p className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase">
                        Popular Searches
                      </p>
                      {popularSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearchSelect(search.query)}
                          className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-left group"
                        >
                          <span className="text-2xl">{search.icon}</span>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 group-hover:text-primary">
                              {search.query}
                            </p>
                            <p className="text-xs text-gray-500">{search.category}</p>
                          </div>
                          <Search size={16} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Notifications */}
              <div className="relative notification-dropdown">
                <button 
                  onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                  className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors relative"
                >
                  <Bell size={20} className="text-gray-600" />
                  {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-semibold">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {/* Notification Dropdown */}
                {isNotificationOpen && (
                  <div className="absolute right-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in max-h-[500px] flex flex-col">
                    {/* Header */}
                    <div className="p-4 border-b bg-gradient-to-r from-primary/5 to-secondary/5">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">Notifications</h3>
                        <span className="text-xs text-primary font-medium">
                          {unreadCount} new
                        </span>
                      </div>
                    </div>

                    {/* Notifications List */}
                    <div className="overflow-y-auto flex-1">
                      {notifications.map((notification) => (
                        <button
                          key={notification.id}
                          onClick={() => handleNotificationClick(notification)}
                          className={`w-full p-4 border-b hover:bg-gray-50 transition-colors text-left ${
                            !notification.read ? 'bg-blue-50/50' : ''
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <span className="text-2xl flex-shrink-0">{notification.icon}</span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-1">
                                <p className="text-sm font-semibold text-gray-900">
                                  {notification.title}
                                </p>
                                {!notification.read && (
                                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1"></span>
                                )}
                              </div>
                              <p className="text-sm text-gray-600 line-clamp-2">
                                {notification.message}
                              </p>
                              <p className="text-xs text-gray-400 mt-1">
                                {notification.time}
                              </p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="p-3 border-t bg-gray-50">
                      <button className="w-full text-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                        View All Notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Profile / Login */}
              {isLoggedIn ? (
                <div className="relative profile-dropdown">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center space-x-2 px-3 py-1.5 rounded-full hover:bg-gray-100 transition-all"
                  >
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full border-2 border-primary/20"
                    />
                    <span className="hidden md:block text-sm font-medium text-gray-700">
                      {user.name.split(' ')[0]}
                    </span>
                    <ChevronDown 
                      size={16} 
                      className={`hidden md:block text-gray-600 transition-transform ${
                        isProfileOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Profile Dropdown */}
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in">
                      {/* User Info */}
                      <div className="p-4 bg-gradient-to-br from-primary/5 to-secondary/5 border-b">
                        <div className="flex items-center space-x-3">
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-12 h-12 rounded-full border-2 border-primary/20"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{user.name}</h3>
                            <p className="text-xs text-gray-600">{user.email}</p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center justify-between text-xs">
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                            {user.plan}
                          </span>
                          <span className="text-gray-600">{user.points} points</span>
                        </div>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 gap-3 p-4 border-b">
                        <div className="text-center">
                          <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-full mx-auto mb-1">
                            <Award size={18} className="text-primary" />
                          </div>
                          <p className="text-lg font-bold text-gray-900">{user.coursesCompleted}</p>
                          <p className="text-xs text-gray-600">Completed</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center w-10 h-10 bg-green-50 rounded-full mx-auto mb-1">
                            <Clock size={18} className="text-secondary" />
                          </div>
                          <p className="text-lg font-bold text-gray-900">24h</p>
                          <p className="text-xs text-gray-600">This Week</p>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="p-2">
                        <Link 
                          to="/profile"
                          className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-left"
                        >
                          <User size={18} className="text-gray-600" />
                          <span className="text-sm font-medium text-gray-700">My Profile</span>
                        </Link>
                        <Link 
                          to="/my-courses"
                          className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-left"
                        >
                          <Book size={18} className="text-gray-600" />
                          <span className="text-sm font-medium text-gray-700">My Courses</span>
                        </Link>
                        <Link 
                          to="/settings"
                          className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-left"
                        >
                          <Settings size={18} className="text-gray-600" />
                          <span className="text-sm font-medium text-gray-700">Settings</span>
                        </Link>
                      </div>

                      {/* Logout */}
                      <div className="p-2 border-t">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-red-50 transition-colors text-left group"
                        >
                          <LogOut size={18} className="text-gray-600 group-hover:text-red-600" />
                          <span className="text-sm font-medium text-gray-700 group-hover:text-red-600">
                            Logout
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="relative px-6 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-gray-800 font-medium hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center space-x-2">
                    <User size={16} />
                    <span>Login</span>
                  </span>
                </Link>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl animate-fade-in">
          <div className="flex flex-col h-full pt-20">
            {/* Close Button */}
            <div className="absolute top-6 right-6 z-50">
              <button
                onClick={() => setIsOpen(false)}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            {/* Mobile Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="px-6 py-6 space-y-3">
                {/* Search Bar Mobile */}
                <div className="mb-6">
                  <div className="relative">
                    <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search courses, blogs, topics..."
                      className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-primary/20 border border-gray-200 shadow-sm"
                    />
                  </div>
                </div>

                {navLinks.map((link) => (
                  link.isRoute ? (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-4 px-6 py-4 rounded-2xl text-gray-700 hover:bg-gray-100 hover:text-primary font-medium transition-all text-lg border border-transparent hover:border-gray-200"
                    >
                      <div className="p-2 bg-gray-100 rounded-xl">
                        {link.icon}
                      </div>
                      <span>{link.name}</span>
                    </Link>
                  ) : (
                    <a
                      key={link.name}
                      href={link.path}
                      onClick={(e) => {
                        scrollToSection(e, link.path);
                        setIsOpen(false);
                      }}
                      className="flex items-center space-x-4 px-6 py-4 rounded-2xl text-gray-700 hover:bg-gray-100 hover:text-primary font-medium transition-all text-lg border border-transparent hover:border-gray-200"
                    >
                      <div className="p-2 bg-gray-100 rounded-xl">
                        {link.icon}
                      </div>
                      <span>{link.name}</span>
                    </a>
                  )
                ))}

                {/* Mobile User Section */}
                {isLoggedIn ? (
                  <>
                    <div className="pt-3 mt-3 border-t border-gray-200">
                      <div className="px-4 py-3 bg-gray-50 rounded-xl mb-2">
                        <div className="flex items-center space-x-3 mb-3">
                          <img
                            src={user?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'}
                            alt={user?.name || 'User'}
                            className="w-10 h-10 rounded-full border-2 border-primary/20"
                          />
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">{user?.name || 'User'}</p>
                            <p className="text-xs text-gray-600">{user?.plan || 'Free Plan'}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="bg-white p-2 rounded-lg text-center">
                            <p className="font-bold text-primary">{user?.coursesCompleted || 0}</p>
                            <p className="text-gray-600">Courses</p>
                          </div>
                          <div className="bg-white p-2 rounded-lg text-center">
                            <p className="font-bold text-secondary">{user?.points || 0}</p>
                            <p className="text-gray-600">Points</p>
                          </div>
                        </div>
                      </div>
                      <Link 
                        to="/profile"
                        className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 font-medium transition-all w-full"
                      >
                        <User size={18} />
                        <span>My Profile</span>
                      </Link>
                      <Link 
                        to="/my-courses"
                        className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 font-medium transition-all w-full"
                      >
                        <Book size={18} />
                        <span>My Courses</span>
                      </Link>
                      <Link 
                        to="/settings"
                        className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 font-medium transition-all w-full"
                      >
                        <Settings size={18} />
                        <span>Settings</span>
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 font-medium transition-all w-full"
                      >
                        <LogOut size={18} />
                        <span>Logout</span>
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="pt-3 mt-3 border-t border-gray-200">
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="relative flex items-center justify-center space-x-2 px-6 py-4 bg-white/60 backdrop-blur-xl border border-gray-200/50 rounded-2xl font-medium hover:bg-white/80 hover:border-gray-300/50 transition-all duration-300 shadow-lg hover:shadow-xl group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 flex items-center space-x-2 text-gray-700 group-hover:text-gray-900">
                        <User size={18} />
                        <span>Login</span>
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ModernNavbar;

// Application constants
export const APP_NAME = 'EduTech Platform';
export const APP_VERSION = '1.0.0';

// API endpoints
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Routes
export const ROUTES = {
  HOME: '/',
  COURSES: '/courses',
  QUIZZES: '/quizzes',
  BLOGS: '/blogs',
  CONTACT: '/contact',
  LOGIN: '/login',
  SIGNUP: '/signup',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  LEADERBOARD: '/leaderboard',
  FAQ: '/faq',
  SECURITY: '/security',
  MY_COURSES: '/my-courses'
};

// Theme colors
export const COLORS = {
  primary: '#3B82F6',
  secondary: '#10B981',
  accent: '#F59E0B',
  dark: '#1F2937',
  light: '#F9FAFB'
};

// Animation durations
export const ANIMATIONS = {
  fast: 200,
  normal: 300,
  slow: 500
};

import axios from 'axios';

// Fallback data
const fallbackCourses = [
  {
    id: 1,
    title: 'Web Development Fundamentals',
    instructor: 'Jane Smith',
    price: 49.99,
    rating: 4.7,
    students: 1250,
    duration: '8 hours',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    category: 'Popular',
    featured: true
  },
  // Add more fallback courses as needed
];

const fallbackTestimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Student',
    content: 'This platform transformed my learning experience. Highly recommended!',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    rating: 5
  },
  // Add more testimonials as needed
];

const fallbackTeam = [
  {
    id: 1,
    name: 'Sarah Williams',
    role: 'Lead Instructor',
    bio: '10+ years of experience in web development',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    social: { twitter: '#', linkedin: '#' }
  },
  // Add more team members as needed
];

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000, // 5 second timeout
});

// Helper function to handle API calls with fallback
export const fetchWithFallback = async (apiCall, fallbackData) => {
  try {
    if (API_BASE_URL && !API_BASE_URL.includes('localhost')) {
      const response = await apiCall();
      return response.data || fallbackData;
    }
    return fallbackData;
  } catch (error) {
    console.error('API Error:', error);
    return fallbackData;
  }
};

export const getCourses = async (category = null) => {
  const params = category ? { category } : {};
  return fetchWithFallback(
    () => api.get('/courses', { params }),
    fallbackCourses
  );
};

export const getBlogs = () => fetchWithFallback(
  () => api.get('/blogs'),
  []
);

export const getLeaderboard = () => fetchWithFallback(
  () => api.get('/leaderboard'),
  []
);

export const getQuizzes = () => fetchWithFallback(
  () => api.get('/quizzes'),
  []
);

export const getTestimonials = () => fetchWithFallback(
  () => api.get('/testimonials'),
  fallbackTestimonials
);

export const getTeam = () => fetchWithFallback(
  () => api.get('/team'),
  fallbackTeam
);

export const submitContact = (data) => {
  if (API_BASE_URL && !API_BASE_URL.includes('localhost')) {
    return api.post('/contact', data);
  }
  // In development or when API is not available, return a resolved promise
  return Promise.resolve({ data: { success: true, message: 'Message received!' } });
};

export default api;

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCourses = (category = null) => {
  const params = category ? { category } : {};
  return api.get('/courses', { params });
};

export const getBlogs = () => api.get('/blogs');

export const getLeaderboard = () => api.get('/leaderboard');

export const getQuizzes = () => api.get('/quizzes');

export const getTestimonials = () => api.get('/testimonials');

export const getTeam = () => api.get('/team');

export const submitContact = (data) => api.post('/contact', data);

export default api;

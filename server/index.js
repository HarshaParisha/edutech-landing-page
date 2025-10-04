const express = require('express');
const cors = require('cors');
const coursesRoutes = require('./routes/courses');
const blogsRoutes = require('./routes/blogs');
const leaderboardRoutes = require('./routes/leaderboard');
const quizzesRoutes = require('./routes/quizzes');
const testimonialsRoutes = require('./routes/testimonials');
const teamRoutes = require('./routes/team');
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/courses', coursesRoutes);
app.use('/api/blogs', blogsRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/quizzes', quizzesRoutes);
app.use('/api/testimonials', testimonialsRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/contact', contactRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'EduTech API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

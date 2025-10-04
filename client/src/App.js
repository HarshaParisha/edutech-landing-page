import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ModernNavbar from './components/ModernNavbar';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import BlogsPage from './pages/BlogsPage';
import LeaderboardPage from './pages/LeaderboardPage';
import QuizzesPage from './pages/QuizzesPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import MyProfilePage from './pages/MyProfilePage';
import MyCoursesPage from './pages/MyCoursesPage';
import SettingsPage from './pages/SettingsPage';
import SecurityPage from './pages/SecurityPage';
import './index.css';

const AppContent = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/profile' || location.pathname === '/my-courses' || location.pathname === '/settings' || location.pathname === '/security';

  return (
    <div className="App">
      {!hideNavbar && <ModernNavbar />}
      <Routes>
        <Route path="/" element={<><main><HomePage /></main><Footer /></>} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/quizzes" element={<QuizzesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<MyProfilePage />} />
        <Route path="/my-courses" element={<MyCoursesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/security" element={<SecurityPage />} />
      </Routes>
      <AIAssistant />
    </div>
  );
};
function App() {
  return (
    <AuthProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;

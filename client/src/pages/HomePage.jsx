import React from 'react';
import Hero from '../components/Hero';
import Vision from '../components/Vision';
import Courses from '../components/Courses';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Blogs from '../components/Blogs';
import Quizzes from '../components/Quizzes';
import Leaderboard from '../components/Leaderboard';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Vision />
      <Courses />
      <Testimonials />
      <Team />
      <Blogs />
      <Quizzes />
      <Leaderboard />
      <Contact />
    </>
  );
};

export default HomePage;

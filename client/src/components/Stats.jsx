import React from 'react';
import { Users, BookOpen, Award, Globe } from 'react-feather';

const Stats = () => {
  const stats = [
    {
      icon: <Users size={40} />,
      number: '10,000+',
      label: 'Active Learners',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <BookOpen size={40} />,
      number: '200+',
      label: 'Premium Courses',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <Award size={40} />,
      number: '50+',
      label: 'Expert Mentors',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Globe size={40} />,
      number: '15',
      label: 'Countries Reached',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center text-white animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-medium opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

import React from 'react';
import { Target, Users, Award, TrendingUp } from 'react-feather';

const Vision = () => {
  const features = [
    {
      icon: <Target size={32} />,
      title: 'Mission-Driven',
      description: 'Democratizing quality education for everyone, everywhere.',
    },
    {
      icon: <Users size={32} />,
      title: 'Community First',
      description: 'Learn together with peers, mentors, and industry experts.',
    },
    {
      icon: <Award size={32} />,
      title: 'Industry-Recognized',
      description: 'Earn certificates valued by top companies worldwide.',
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Career Growth',
      description: 'Track your progress and unlock new opportunities.',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="animate-slide-up px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Our Vision &
              <span className="text-primary"> Mission</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
              At EduTech, we believe education should be accessible, engaging, and transformative.
              We're building the future of learning with cutting-edge technology and world-class content.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="bg-blue-50 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

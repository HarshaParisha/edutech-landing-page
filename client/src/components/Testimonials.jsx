import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'react-feather';
import { getTestimonials } from '../services/api';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await getTestimonials();
      setTestimonials(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      setLoading(false);
    }
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <div className="animate-pulse">Loading testimonials...</div>
        </div>
      </section>
    );
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-subtitle">
            Real success stories from our community
          </p>
        </div>

        {currentTestimonial && (
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-12 relative animate-fade-in">
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 text-primary/10 text-6xl font-serif">"</div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-20 h-20 rounded-full border-4 border-primary/20"
                  />
                </div>

                <div className="flex items-center justify-center mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-xl text-gray-700 text-center mb-6 leading-relaxed italic">
                  {currentTestimonial.testimonial}
                </p>

                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-gray-600">{currentTestimonial.role}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center space-x-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-white hover:bg-primary hover:text-white transition-all shadow-md"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-white hover:bg-primary hover:text-white transition-all shadow-md"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;

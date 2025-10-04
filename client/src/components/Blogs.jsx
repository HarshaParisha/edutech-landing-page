import React, { useState, useEffect } from 'react';
import { Calendar, User, Clock, ArrowRight } from 'react-feather';
import { getBlogs } from '../services/api';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await getBlogs();
      setBlogs(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="blogs" className="py-20 bg-white">
        <div className="container-custom text-center">
          <div className="animate-pulse">Loading blogs...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="blogs" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Latest Insights</h2>
          <p className="section-subtitle">
            Tips, trends, and stories from the world of learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article key={blog.id} className="card overflow-hidden group">
              {/* Thumbnail */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {blog.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.preview}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <User size={16} />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Read More Link */}
                <button className="flex items-center space-x-2 text-primary font-semibold hover:gap-3 transition-all group">
                  <span>Read More</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-primary">View All Articles</button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, BookOpen } from 'react-feather';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ['About Us', 'Careers', 'Press', 'Blog', 'Contact'],
    Courses: ['Web Development', 'Data Science', 'UI/UX Design', 'Mobile Apps', 'Marketing'],
    Resources: ['Documentation', 'Tutorials', 'Community', 'Support', 'FAQs'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Refund Policy'],
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, url: '#', name: 'Facebook' },
    { icon: <Twitter size={20} />, url: '#', name: 'Twitter' },
    { icon: <Instagram size={20} />, url: '#', name: 'Instagram' },
    { icon: <Linkedin size={20} />, url: '#', name: 'LinkedIn' },
    { icon: <Youtube size={20} />, url: '#', name: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-400">
                Get the latest courses, tips, and exclusive offers
              </p>
            </div>
            <div className="flex w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
              />
              <button className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg font-semibold transition-colors flex items-center space-x-2">
                <Mail size={18} />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
                <BookOpen className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-white">EduTech</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering learners worldwide with cutting-edge education and
              transformative learning experiences.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.name}
                  className="bg-gray-800 p-2 rounded-lg hover:bg-primary transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© {currentYear} EduTech. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

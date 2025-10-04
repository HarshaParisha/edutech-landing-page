import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Calendar, Video, MessageCircle, 
  Send, Clock, CheckCircle, HelpCircle, Zap, User, 
  Briefcase, FileText, Upload, Monitor, Smartphone, 
  Globe, Shield, AlertCircle, X
} from 'react-feather';
import GradientBackground from '../components/GradientBackground';

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState('details');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: '',
    urgency: 'Normal',
    message: '',
    preferredMethod: 'email',
    preferredTime: '',
    meetingPlatform: 'zoom'
  });
  const [showAIRecommendation, setShowAIRecommendation] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const topics = [
    'Course Inquiry',
    'Technical Support',
    'Billing & Payments',
    'Partnership Opportunity',
    'Demo Request',
    'General Question',
    'Other'
  ];

  const urgencyLevels = ['Low', 'Normal', 'High', 'Urgent'];

  const contactMethods = [
    { id: 'email', name: 'Email', icon: <Mail size={20} />, description: 'Response within 24 hours' },
    { id: 'call', name: 'Phone Call', icon: <Phone size={20} />, description: 'Schedule a call' },
    { id: 'video', name: 'Video Meeting', icon: <Video size={20} />, description: 'Book a video call' },
    { id: 'chat', name: 'Live Chat', icon: <MessageCircle size={20} />, description: 'Instant support' }
  ];

  const meetingPlatforms = [
    { id: 'zoom', name: 'Zoom', icon: <Video size={24} /> },
    { id: 'meet', name: 'Google Meet', icon: <Monitor size={24} /> },
    { id: 'teams', name: 'Microsoft Teams', icon: <Briefcase size={24} /> },
    { id: 'phone', name: 'Phone Call', icon: <Phone size={24} /> }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAskAI = () => {
    setShowAIRecommendation(true);
    // Simulate AI recommendation based on topic
    const recommendations = {
      'Course Inquiry': 'Based on your inquiry, I recommend scheduling a 15-minute video call to discuss course options. Our education consultant can provide personalized recommendations.',
      'Technical Support': 'For technical issues, I suggest using live chat for immediate assistance. Our support team is available 24/7.',
      'Billing & Payments': 'For billing inquiries, email is the best option. Our finance team will respond within 4 hours with detailed information.',
      'Partnership Opportunity': 'Partnership discussions work best via video meeting. I recommend scheduling a 30-minute call with our partnerships team.',
      'Demo Request': 'Great! I recommend booking a live demo via Zoom. Our product specialist can show you all features in 20 minutes.',
      'General Question': 'For general questions, email or live chat works best. Expected response time is under 2 hours.',
      'Other': 'Based on your needs, I recommend starting with email. Our team will route your inquiry to the right department.'
    };
    
    const suggestion = recommendations[formData.topic] || 'Please select a topic to get personalized recommendations.';
    setAiSuggestion(suggestion);
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const removeFile = (index) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create submission data
      const submissionData = {
        ...formData,
        files: uploadedFiles.map(file => file.name),
        submittedAt: new Date().toISOString(),
        ticketId: `TKT-${Date.now()}`,
        status: 'submitted'
      };

      console.log('Form submitted:', submissionData);
      
      // Store in localStorage (simulate database)
      const existingTickets = JSON.parse(localStorage.getItem('supportTickets') || '[]');
      existingTickets.push(submissionData);
      localStorage.setItem('supportTickets', JSON.stringify(existingTickets));

      setSubmitStatus({
        type: 'success',
        message: `Thank you! Your ticket #${submissionData.ticketId} has been submitted. We'll get back to you within 24 hours.`,
        ticketId: submissionData.ticketId
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        topic: '',
        urgency: 'Normal',
        message: '',
        preferredMethod: 'email',
        preferredTime: '',
        meetingPlatform: 'zoom'
      });
      setUploadedFiles([]);
      setActiveTab('details');

    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or contact us directly.',
        error: error.message
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      <GradientBackground />
      
      <div className="relative z-10 pt-24 pb-12">
        <div className="container-custom max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Contact & Support</h1>
            <p className="text-base text-gray-600">Tell us how we can help you. We typically respond within 24 hours.</p>
          </div>

          {/* Status Messages */}
          {submitStatus && (
            <div className={`mb-8 p-4 rounded-lg border ${
              submitStatus.type === 'success' 
                ? 'bg-green-50 border-green-200 text-green-800' 
                : 'bg-red-50 border-red-200 text-red-800'
            }`}>
              <div className="flex items-start space-x-3">
                {submitStatus.type === 'success' ? (
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                ) : (
                  <AlertCircle className="flex-shrink-0 mt-1" size={20} />
                )}
                <div>
                  <p className="font-medium">{submitStatus.message}</p>
                  {submitStatus.ticketId && (
                    <p className="text-sm mt-1">Reference: {submitStatus.ticketId}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Contact */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <a href="mailto:support@edutech.com" className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Mail className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Email Us</p>
                      <p className="text-sm text-gray-600">support@edutech.com</p>
                    </div>
                  </a>
                  <a href="tel:+1234567890" className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Phone className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Call Us</p>
                      <p className="text-sm text-gray-600">+1 (234) 567-890</p>
                    </div>
                  </a>
                  <div className="flex items-start space-x-3 p-3 rounded-lg">
                    <MapPin className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Visit Us</p>
                      <p className="text-sm text-gray-600">123 Education St, Learning City, LC 12345</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock size={18} className="mr-2" />
                  Office Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium text-gray-900">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-gray-900">Closed</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    <span className="inline-flex items-center space-x-1">
                      <CheckCircle size={14} className="text-green-500" />
                      <span>24/7 Live Chat Support Available</span>
                    </span>
                  </p>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-white">
                <HelpCircle size={32} className="mb-3" />
                <h3 className="font-semibold mb-2">Need Quick Answers?</h3>
                <p className="text-sm text-white/90 mb-4">Check our FAQ section for instant solutions to common questions.</p>
                <a 
                  href="/faq"
                  className="block w-full bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors text-center"
                >
                  View FAQs
                </a>
              </div>
            </div>

            {/* Main Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                {/* Tabs */}
                <div className="flex border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab('details')}
                    className={`flex-1 flex items-center justify-center space-x-2 px-6 py-4 font-medium transition-colors ${
                      activeTab === 'details'
                        ? 'bg-primary/5 text-primary border-b-2 border-primary'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Mail size={18} />
                    <span>Details</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('schedule')}
                    className={`flex-1 flex items-center justify-center space-x-2 px-6 py-4 font-medium transition-colors ${
                      activeTab === 'schedule'
                        ? 'bg-primary/5 text-primary border-b-2 border-primary'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Calendar size={18} />
                    <span>Schedule</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('confirm')}
                    className={`flex-1 flex items-center justify-center space-x-2 px-6 py-4 font-medium transition-colors ${
                      activeTab === 'confirm'
                        ? 'bg-primary/5 text-primary border-b-2 border-primary'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <CheckCircle size={18} />
                    <span>Confirm</span>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="p-8">
                  {/* Details Tab */}
                  {activeTab === 'details' && (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Full name"
                              required
                              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="name@company.com"
                              required
                              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company (Optional)
                        </label>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your company name"
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Topic *
                          </label>
                          <select
                            name="topic"
                            value={formData.topic}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          >
                            <option value="">Select a topic</option>
                            {topics.map(topic => (
                              <option key={topic} value={topic}>{topic}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Urgency
                          </label>
                          <select
                            name="urgency"
                            value={formData.urgency}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          >
                            {urgencyLevels.map(level => (
                              <option key={level} value={level}>{level}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Describe your issue *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Include course, date selection, quiz/leaderboard context, or billing details to help us resolve faster."
                          required
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Attachments (optional)
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                          <input
                            type="file"
                            multiple
                            accept=".png,.jpg,.jpeg,.pdf,.doc,.docx"
                            onChange={handleFileUpload}
                            className="hidden"
                            id="file-upload"
                          />
                          <label htmlFor="file-upload" className="cursor-pointer">
                            <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                            <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                            <p className="text-xs text-gray-500 mt-1">PNG, JPG, PDF up to 10MB</p>
                          </label>
                        </div>
                        
                        {/* Uploaded Files */}
                        {uploadedFiles.length > 0 && (
                          <div className="mt-3 space-y-2">
                            {uploadedFiles.map((file, index) => (
                              <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                                <div className="flex items-center space-x-2">
                                  <FileText size={16} className="text-gray-500" />
                                  <span className="text-sm text-gray-700">{file.name}</span>
                                  <span className="text-xs text-gray-500">({(file.size / 1024).toFixed(1)} KB)</span>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => removeFile(index)}
                                  className="text-red-500 hover:text-red-700 transition-colors"
                                >
                                  <X size={16} />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* AI Recommendation */}
                      <div className="border-t border-gray-200 pt-6">
                        <button
                          type="button"
                          onClick={handleAskAI}
                          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all"
                        >
                          <Zap size={18} />
                          <span>Try Ask AI first</span>
                        </button>
                        {showAIRecommendation && (
                          <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                            <div className="flex items-start space-x-3">
                              <Zap className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                              <div>
                                <h4 className="font-semibold text-purple-900 mb-1">AI Recommendation</h4>
                                <p className="text-sm text-purple-800">{aiSuggestion}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Schedule Tab */}
                  {activeTab === 'schedule' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Preferred Contact Method</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {contactMethods.map(method => (
                            <button
                              key={method.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, preferredMethod: method.id })}
                              className={`flex items-start space-x-3 p-4 rounded-lg border-2 transition-all text-left ${
                                formData.preferredMethod === method.id
                                  ? 'border-primary bg-primary/5'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <div className={`p-2 rounded-lg ${
                                formData.preferredMethod === method.id ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'
                              }`}>
                                {method.icon}
                              </div>
                              <div className="flex-1">
                                <p className="font-medium text-gray-900">{method.name}</p>
                                <p className="text-sm text-gray-600">{method.description}</p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {(formData.preferredMethod === 'call' || formData.preferredMethod === 'video') && (
                        <>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-4">Meeting Platform</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                              {meetingPlatforms.map(platform => (
                                <button
                                  key={platform.id}
                                  type="button"
                                  onClick={() => setFormData({ ...formData, meetingPlatform: platform.id })}
                                  className={`flex flex-col items-center space-y-2 p-4 rounded-lg border-2 transition-all ${
                                    formData.meetingPlatform === platform.id
                                      ? 'border-primary bg-primary/5'
                                      : 'border-gray-200 hover:border-gray-300'
                                  }`}
                                >
                                  <div className="text-primary">{platform.icon}</div>
                                  <span className="text-sm font-medium text-gray-900">{platform.name}</span>
                                </button>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="font-semibold text-gray-900 mb-4">Pick a Time</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                              {timeSlots.map(time => (
                                <button
                                  key={time}
                                  type="button"
                                  onClick={() => setFormData({ ...formData, preferredTime: time })}
                                  className={`px-4 py-3 rounded-lg border-2 font-medium transition-all ${
                                    formData.preferredTime === time
                                      ? 'border-primary bg-primary text-white'
                                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                                  }`}
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Or choose a specific date
                            </label>
                            <input
                              type="date"
                              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                              min={new Date().toISOString().split('T')[0]}
                            />
                          </div>
                        </>
                      )}

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm text-blue-800">
                          <strong>Note:</strong> You'll receive a confirmation email with meeting details within 1 hour.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Confirm Tab */}
                  {activeTab === 'confirm' && (
                    <div className="space-y-6">
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="text-green-600" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Review Your Information</h3>
                        <p className="text-gray-600">Please confirm your details before submitting</p>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-600">Name</p>
                            <p className="font-medium text-gray-900">{formData.name || 'Not provided'}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Email</p>
                            <p className="font-medium text-gray-900">{formData.email || 'Not provided'}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Topic</p>
                            <p className="font-medium text-gray-900">{formData.topic || 'Not selected'}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Urgency</p>
                            <p className="font-medium text-gray-900">{formData.urgency}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Contact Method</p>
                            <p className="font-medium text-gray-900 capitalize">{formData.preferredMethod}</p>
                          </div>
                          {formData.preferredTime && (
                            <div>
                              <p className="text-sm text-gray-600">Preferred Time</p>
                              <p className="font-medium text-gray-900">{formData.preferredTime}</p>
                            </div>
                          )}
                        </div>
                        {formData.message && (
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Message</p>
                            <p className="text-gray-900">{formData.message}</p>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="terms"
                          required
                          className="w-4 h-4 text-primary focus:ring-primary rounded"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-700">
                          I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Form Actions */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200 mt-8">
                    <a
                      href="/faq"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      ← Back to FAQs
                    </a>
                    <div className="flex space-x-3">
                      <button
                        type="button"
                        className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Send Test Email
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center space-x-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <Send size={18} />
                            <span>Submit Ticket</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Response Time Info */}
              <div className="mt-6 text-center text-sm text-gray-600">
                We typically respond within 24 hours. For instant answers, try Ask AI.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, Star, Zap, Award } from 'react-feather';
import { useAuth } from '../contexts/AuthContext';

const ProtectedFeature = ({ 
  children, 
  feature, 
  fallbackTitle = "Premium Feature", 
  fallbackDescription = "This feature requires authentication",
  showUpgrade = false 
}) => {
  const { isAuthenticated, hasPermission, user } = useAuth();

  // If user is not authenticated, show login prompt
  if (!isAuthenticated()) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/10">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
          <Lock className="text-white" size={32} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Sign In Required</h3>
        <p className="text-gray-600 text-center mb-6 max-w-sm">
          Please sign in to access AI-powered features and premium content.
        </p>
        <div className="flex space-x-3">
          <Link
            to="/login"
            className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:shadow-lg transition-all"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-all"
          >
            Sign Up Free
          </Link>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 mb-2">✨ Premium features include:</p>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">AI Assistant</span>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">Smart Recommendations</span>
            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Advanced Analytics</span>
            <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full">Priority Support</span>
          </div>
        </div>
      </div>
    );
  }

  // If user is authenticated but doesn't have permission for this feature
  if (feature && !hasPermission(feature)) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
        <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mb-4">
          <Award className="text-white" size={32} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Feature</h3>
        <p className="text-gray-600 text-center mb-4 max-w-sm">
          {fallbackDescription}
        </p>
        <div className="bg-white rounded-lg p-4 mb-6 border border-amber-200">
          <div className="flex items-center space-x-2 mb-2">
            <Star className="text-amber-500" size={16} />
            <span className="font-semibold text-gray-900">Current Plan: {user?.plan || 'Free Plan'}</span>
          </div>
          <p className="text-sm text-gray-600">
            Upgrade to Premium to unlock this feature and many more!
          </p>
        </div>
        {showUpgrade && (
          <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center space-x-2">
            <Zap size={18} />
            <span>Upgrade to Premium</span>
          </button>
        )}
      </div>
    );
  }

  // User has access, render the protected content
  return children;
};

export default ProtectedFeature;

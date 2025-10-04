import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check authentication status on app load
  useEffect(() => {
    const checkAuthStatus = () => {
      try {
        const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const userData = localStorage.getItem('userData');
        const authToken = localStorage.getItem('authToken');
        
        if (loggedIn && userData && authToken) {
          setIsLoggedIn(true);
          setUser(JSON.parse(userData));
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
        logout(); // Clear invalid data
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
    
    // Listen for storage changes (cross-tab sync)
    const handleStorageChange = (e) => {
      if (e.key === 'isLoggedIn' || e.key === 'userData' || e.key === 'authToken') {
        checkAuthStatus();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const login = (userData, token) => {
    try {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userData', JSON.stringify(userData));
      localStorage.setItem('authToken', token);
      
      setIsLoggedIn(true);
      setUser(userData);
      
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Failed to save login data' };
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userData');
      localStorage.removeItem('authToken');
      
      setIsLoggedIn(false);
      setUser(null);
      
      return { success: true };
    } catch (error) {
      console.error('Logout error:', error);
      return { success: false, error: 'Failed to clear login data' };
    }
  };

  const updateUser = (updatedUserData) => {
    try {
      const newUserData = { ...user, ...updatedUserData };
      localStorage.setItem('userData', JSON.stringify(newUserData));
      setUser(newUserData);
      
      return { success: true };
    } catch (error) {
      console.error('Update user error:', error);
      return { success: false, error: 'Failed to update user data' };
    }
  };

  const isAuthenticated = () => {
    return isLoggedIn && user && localStorage.getItem('authToken');
  };

  const hasPermission = (feature) => {
    if (!isAuthenticated()) return false;
    
    // Define feature permissions based on user plan
    const permissions = {
      'ai_assistant': true, // All logged-in users
      'advanced_analytics': user?.plan === 'Premium Plan',
      'priority_support': user?.plan === 'Premium Plan',
      'unlimited_quizzes': user?.plan === 'Premium Plan',
      'course_downloads': user?.plan === 'Premium Plan'
    };
    
    return permissions[feature] || false;
  };

  const value = {
    isLoggedIn,
    user,
    loading,
    login,
    logout,
    updateUser,
    isAuthenticated,
    hasPermission
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

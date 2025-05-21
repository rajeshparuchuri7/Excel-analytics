import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated (from localStorage in this demo)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Mock authentication functions (replace with real backend integration)
  const signIn = async (email, password) => {
    try {
      if (email && password) {
        const mockUser = {
          id: 'user-123',
          name: 'Demo User',
          email,
        };

        localStorage.setItem('user', JSON.stringify(mockUser));
        setCurrentUser(mockUser);
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    }
  };

  const signUp = async (name, email, password) => {
    try {
      if (name && email && password) {
        const mockUser = {
          id: 'user-' + Math.floor(Math.random() * 1000),
          name,
          email,
        };

        localStorage.setItem('user', JSON.stringify(mockUser));
        setCurrentUser(mockUser);
      } else {
        throw new Error('Invalid user data');
      }
    } catch (error) {
      console.error('Sign up error:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      localStorage.removeItem('user');
      setCurrentUser(null);
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    }
  };

  const value = {
    currentUser,
    loading,
    signIn,
    signUp,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

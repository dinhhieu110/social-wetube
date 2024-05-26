'use client';
import { ThemeContext } from '@/contexts/theme-provider';
import { useContext } from 'react';

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default useTheme;

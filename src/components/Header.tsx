import React from 'react';
import { Moon, Sun, Bell } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <header className="h-16 bg-dark dark:bg-[#212121] border-b border-gray-200 dark:border-[#2E2E2E] fixed top-0 right-0 left-64 px-6 flex items-center justify-between z-10">
      <div className="flex items-center gap-4">
        <h2 className="text-gray-800 dark:text-white text-lg font-medium">Welcome To Qosain Bukhari territory</h2>
      </div>
      
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          className="p-2 text-gray-600 dark:text-gray-300 hover:text-[#39FF14] dark:hover:text-[#39FF14] transition-colors duration-200"
          aria-label="Toggle theme"
        >
          {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>
        
        <button 
          className="p-2 text-gray-600 dark:text-gray-300 hover:text-[#39FF14] dark:hover:text-[#39FF14] transition-colors duration-200"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5" />
        </button>
        
        <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#2E2E2E] border-2 border-[#39FF14] flex items-center justify-center">
          <span className="text-gray-800 dark:text-white">JD</span>
        </div>
      </div>
    </header>
  );
}
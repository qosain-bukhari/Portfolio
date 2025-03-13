import { Home, Brain, FolderGit2, Mail, Github, Linkedin, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const menuItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: FolderGit2, label: 'Projects', path: '/projects' },
  { icon: Brain, label: 'Blog', path: '/blog' },
  { icon: Mail, label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-[#2E2E2E] p-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* QosainHub title and mobile menu */}
        <div className="flex items-center">
          <h1 className="text-[#cc940b] text-xl font-bold">QosainHub</h1>
          
          {/* Mobile menu positioned below QosainHub */}
          <div className={`${isMobileMenuOpen ? 'block fixed top-16 left-0 w-full' : 'hidden'} md:hidden bg-white dark:bg-gray-900 shadow-lg`}>
            <div className="flex flex-col space-y-2 p-4">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? 'bg-[#404040] text-white' 
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2E2E2E] hover:text-[#39FF14] dark:hover:text-white'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Hamburger menu icon on the right side */}
        <button
          className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-[#39FF14]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop menu and social icons */}
        <div className="hidden md:flex md:flex-grow md:justify-center">
          <div className="flex space-x-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-[#404040] text-white' 
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2E2E2E] hover:text-[#39FF14] dark:hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-[#39FF14] dark:hover:text-[#cc940b] transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-[#39FF14] dark:hover:text-[] transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </nav>
  );
}

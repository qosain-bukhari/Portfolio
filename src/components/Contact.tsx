import React from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-6">
      {/* Connect With Us Section */}
      <div className="rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Connect With Me</h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          I'm a beginner in Data Science, eager to learn and grow. Feel free to reach out for collaboration or just to connect!
        </p>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          My interests include machine learning, data visualization, and statistical analysis. I'm always looking for new projects and opportunities to expand my skills.
        </p>

        <div className="space-y-4">
          <a
            href="mailto:contact@example.com"
            className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-[#39FF14] dark:hover:text-[#39FF14] transition-colors duration-200"
          >
            <Mail className="w-6 h-6" />
            <span>contact@example.com</span>
          </a>
          
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-[#39FF14] dark:hover:text-[#39FF14] transition-colors duration-200"
          >
            <Linkedin className="w-6 h-6" />
            <span>LinkedIn Profile</span>
          </a>
          
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-[#39FF14] dark:hover:text-[#39FF14] transition-colors duration-200"
          >
            <Github className="w-6 h-6" />
            <span>GitHub Profile</span>
          </a>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-100 dark:bg-[#1f2937] rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Get in Touch</h2>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-white dark:bg-[#1A1A1A] text-gray-800 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#39FF14] border border-gray-200 dark:border-[#2E2E2E]"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-white dark:bg-[#1A1A1A] text-gray-800 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#39FF14] border border-gray-200 dark:border-[#2E2E2E]"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-white dark:bg-[#1A1A1A] text-gray-800 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#39FF14] border border-gray-200 dark:border-[#2E2E2E]"
              placeholder="Your message here..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#cc940b] text-black py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
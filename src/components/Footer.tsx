import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1f2937] py-8 sm:py-12 mt-20 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* About Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 sm:mb-4">
              Qosain Bukhari
            </h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Transforming data into actionable insights. Helping businesses make data-driven decisions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Projects
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Services
                </a>
              </li>
              <li>
                <a href="/skills" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>Qosain Bukhari</li>
              <li>bukhariqosian824@gmail.com</li>
              <li>+92-3378624851</li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-sm sm:text-base text-[#cc940b]">
            © {currentYear} Qosain Bukhari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
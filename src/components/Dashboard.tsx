import { motion } from "framer-motion";

import { useState } from "react";
import { GraduationCap } from "lucide-react";
import { 
  Cpu, FileSpreadsheet, FileBarChart, FlaskConical, FileImage, FileText, 
  Brain, FileType, BookOpen, Laptop, Layout, FileCode, Terminal, Network, 
  Database, FileCheck, FileSearch, FileInput, FileOutput, FileJson, 
  ChevronLeft, ChevronRight 
} from 'lucide-react';
import React from 'react';

export default function Dashboard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const skills = [
    {
      category: "Data Science",
      icon: Cpu,
      subSkills: [
        { name: "Pandas", icon: FileSpreadsheet, description: "Data manipulation and analysis." },
        { name: "NumPy", icon: FileBarChart, description: "Numerical computing." },
        { name: "Scikit-learn", icon: FlaskConical, description: "Machine learning." },
        { name: "Matplotlib", icon: FileImage, description: "Data visualization." },
        { name: "Seaborn", icon: FileBarChart, description: "Statistical visualization." },
      ]
    },
    {
      category: "Prompt Engineering",
      icon: BookOpen,
      subSkills: [
        { name: "ChatGPT", icon: FileText, description: "Crafting effective prompts." },
        { name: "AI Models", icon: Brain, description: "Optimizing prompts for AI." },
        { name: "NLP", icon: FileType, description: "Understanding NLP for prompts." },
      ]
    },
    {
      category: "Full Stack Web",
      icon: Laptop,
      subSkills: [
        { name: "React", icon: Layout, description: "Building dynamic UIs." },
        { name: "Tailwind CSS", icon: FileCode, description: "Styling modern web apps." },
        { name: "Node.js", icon: Terminal, description: "Backend development." },
        { name: "Express.js", icon: Network, description: "Building REST APIs." },
        { name: "MongoDB", icon: Database, description: "Database management." },
      ]
    },
    {
      category: "Machine Learning",
      icon: Brain,
      subSkills: [
        { name: "Supervised Learning", icon: FileCheck, description: "Models with labeled data." },
        { name: "Unsupervised Learning", icon: FileSearch, description: "Clustering and reduction." },
        { name: "Deep Learning", icon: FileInput, description: "Neural networks." },
        { name: "TensorFlow", icon: FileOutput, description: "Building ML models." },
        { name: "PyTorch", icon: FileJson, description: "Deep learning." },
      ]
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + skills.length) % skills.length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white font-sans overflow-x-hidden overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"
      >
        <div className="flex flex-col overflow-hidden md:flex-row items-center gap-8 mb-10 md:mb-20 lg:mb-40">
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-lg overflow-hidden shadow-lg">
              <motion.div className="relative z-10 w-full h-full bg-gray-800">
                <img src="/Asset/qosain2.png" alt="Qosain Bukhari" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl sm:text-4xl font-bold mb-4 drop-shadow-md"
            >
              Hi, I'm <span className="text-[#cc940b]">Qosain Bukhari</span>
            </motion.h1>
            <p className="text-base sm:text-lg mb-4">
              Pursuing Software Engineering as well as Data Science
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
              I'm a passionate learner who loves to code and build projects.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-[#cc940b] hover:bg-[#785809] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-colors shadow-lg text-sm sm:text-base">
                View Projects
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="relative w-full h-32 mt-[-50px] sm:mt-[-70px] md:mt-[-150px] overflow-hidden"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 1440 320"
          className="absolute top-0 left-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
          <path
            fill="none"
            strokeWidth="3"
            stroke="url(#waveGradient)"
            d="M0,160 C480,100 960,220 1440,160"
          />
        </svg>
      </motion.div>
     <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#cc940b]">About Me</h2>
        <div className="bg-[#1f2937] p-6 md:p-8 rounded-xl shadow-xl max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
            <img
              src="/src/qosain.jpeg"
              alt="Profile"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-md"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-semibold">Qosain Bukhari</h1>
              <p className="text-lg text-[#cc940b] font-medium">Frontend Developer & Pursing Data Science</p>
              <p className="text-sm bg-green-500 text-white font-semibold rounded-full px-3 py-1 mt-2 inline-block shadow-sm">
                Available for Work
              </p>
              <p className="text-sm text-gray-400">Mirpur, AJK</p>
            </div>
          </div>
          <p className="mb-5 text-gray-300 leading-relaxed">
            Passionate Frontend developer with expertise in modern React , Typescript, JavaScript frameworks, cloud technologies, and ML/DL. 
            Dedicated to crafting scalable, efficient, and innovative solutions that drive impact. Adept at problem-solving, 
            clean code practices, and collaborative teamwork.
          </p>
          <div className="flex justify-evenly text-sm font-medium">
            <span className="flex items-center text-green-400">Clean Code Advocate</span>
            <span className="flex items-center text-blue-400">Analytical Problem Solver</span>
            <span className="flex items-center text-purple-400">Collaborative Team Player</span>
          </div>
        </div>
      </div>
    
     {/* Education Section */}
     <div className="w-full px-4 sm:px-6 lg:px-8 mt-20">
        <h2 className="text-3xl font-bold text-[#cc940b] mb-8 text-center">Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {/* Matriculation Section */}
          <div className="bg-gray-800 rounded-xl p-6 transition-all shadow-lg hover:bg-gray-700">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-8 h-8 text-[#cc940b] mr-2" />
              <h3 className="text-lg font-bold">Matriculation</h3>
            </div>
            <p className="text-gray-300">Hira Public High School Soli Haveli</p>
            <p className="text-gray-400">2017-2019</p>
            <p className="text-gray-400">Achievements: Secured 80% marks</p>
          </div>

          {/* FSC Section */}
          <div className="bg-gray-800 rounded-xl p-6 transition-all shadow-lg hover:bg-gray-700">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-8 h-8 text-[#cc940b] mr-2" />
              <h3 className="text-lg font-bold">FSC</h3>
            </div>
            <p className="text-gray-300">Green Hills Science College Muzffarabad</p>
            <p className="text-gray-400">2019-2021</p>
            <p className="text-gray-400">Specialization: Pre-Engineering</p>
            <p className="text-gray-400">Achievements: Secured 93% marks</p>
          </div>

          {/* University Section */}
          <div className="bg-gray-800 rounded-xl p-6 transition-all shadow-lg hover:bg-gray-700">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-8 h-8 text-[#cc940b] mr-2" />
              <h3 className="text-lg font-bold">University</h3>
            </div>
            <p className="text-gray-300">Mirpur University of Science & Technology, MUST</p>
            <p className="text-gray-400">2022 - 2026</p>
            <p className="text-gray-400"> Current CGPA 3.35: </p>
            <p className="text-gray-400">Key contributions in different societies of University</p>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen py-16">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#cc940b] mb-4">Skills & Expertise</h2>
            <p className="text-white max-w-2xl mx-auto text-base md:text-lg">
              Comprehensive skill set in data science, web development, and AI integration
            </p>
          </motion.div>

          <div className="relative w-full px-4">
            <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-slate-800/50 p-4 rounded-full hover:bg-slate-700/70 transition-colors z-10">
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-slate-800/50 p-4 rounded-full hover:bg-slate-700/70 transition-colors z-10">
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            <div className="grid grid-cols-1 gap-6 mx-auto w-full px-4">
              {/* Mobile view: show 1 skill */}
              <div className="block md:hidden">
                <motion.div

                  key={skills[currentIndex].category}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative bg-[rgb(32,39,49)] from-slate-800 to-slate-900 p-4 sm:p-6 rounded-lg border border-slate-700/50"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 sm:p-3 bg-slate-700/50 rounded-lg">
                      {React.createElement(skills[currentIndex].icon, { className: "w-5 h-5 sm:w-6 sm:h-6 text-[#cc940b]" })}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{skills[currentIndex].category}</h3>
                  </div>
                  <div className="space-y-2">
                    {skills[currentIndex].subSkills.map((subSkill, subIndex) => (
                      <motion.div
                        key={subSkill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + subIndex * 0.1 }}
                        className="flex items-center gap-3 p-2 sm:p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors"
                      >
                        {React.createElement(subSkill.icon, { className: "w-4 h-4 sm:w-5 sm:h-5 text-blue-400" })}
                        <div>
                          <h4 className="text-sm sm:text-md font-semibold text-white">{subSkill.name}</h4>
                          <p className="text-xs sm:text-sm text-gray-300">{subSkill.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Desktop view: show 2 skills */}
              <div className="hidden md:grid grid-cols-2 gap-6">
                {[skills[currentIndex], skills[(currentIndex + 1) % skills.length]].map((skill) => (
                  <motion.div
                    key={skill.category}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-[rgb(32,39,49)] from-slate-800 to-slate-900 p-4 sm:p-6 rounded-lg border border-slate-700/50"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 sm:p-3 bg-slate-700/50 rounded-lg">
                        {React.createElement(skill.icon, { className: "w-5 h-5 sm:w-6 sm:h-6 text-[#cc940b]" })}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">{skill.category}</h3>
                    </div>
                    <div className="space-y-2">
                      {skill.subSkills.map((subSkill, subIndex) => (
                        <motion.div
                          key={subSkill.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + subIndex * 0.1 }}
                          className="flex items-center gap-3 p-2 sm:p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors"
                        >
                          {React.createElement(subSkill.icon, { className: "w-4 h-4 sm:w-5 sm:h-5 text-blue-400" })}
                          <div>
                            <h4 className="text-sm sm:text-md font-semibold text-white">{subSkill.name}</h4>
                            <p className="text-xs sm:text-sm text-gray-300">{subSkill.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
            {/* Data Science Skills Section */}
            <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full mt-10 px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold text-[#cc940b] mb-8 text-center">Core Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {[
            {
              icon: "📊",
              title: "Data Analysis",
              description: "Expertise in cleaning, transforming, and interpreting complex datasets using Python and SQL",
            },
            {
              icon: "🤖",
              title: "Machine Learning",
              description: "Building predictive models with Scikit-learn and TensorFlow for classification & regression tasks",
            },
            {
              icon: "📈",
              title: "Data Visualization",
              description: "Creating interactive dashboards and reports using Tableau and Power BI",
            },
            {
              icon: "💻",
              title: "Programming",
              description: "Proficient in Python scripting and automation for data processing pipelines",
            },
          ].map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group relative p-6 bg-gray-800/70 rounded-xl hover:bg-gray-800/90 transition-all shadow-lg hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl p-3 bg-gray-700/50 rounded-lg shadow-inner">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-sm">
                    {skill.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-400/30 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        
      </motion.div>

      

    </div>
  );
}

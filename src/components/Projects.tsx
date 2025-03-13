import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Laptop, ShoppingCart, Brain, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const [dataScienceIndex, setDataScienceIndex] = useState(0);
  const [machineLearningIndex, setMachineLearningIndex] = useState(0);

  const dataScienceProjects = [
    {
      title: "E-commerce Sales Analysis",
      description: "Performed in-depth analysis of e-commerce sales data to uncover insights into customer behavior, product performance, and sales trends.",
      tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      icon: <ShoppingCart className="w-6 h-6 text-purple-400" />,
      github: "https://github.com/yourusername/ecommerce-analysis",
      image: "https://example.com/ecommerce-analysis.jpg"
    },
    {
      title: "Customer Segmentation",
      description: "Used clustering techniques to segment customers based on purchasing behavior.",
      tools: ["Python", "Scikit-learn", "Pandas"],
      icon: <ShoppingCart className="w-6 h-6 text-purple-400" />,
      github: "https://github.com/yourusername/customer-segmentation",
      image: "https://example.com/customer-segmentation.jpg"
    },
    {
      title: "Sales Forecasting",
      description: "Developed a forecasting model to predict future sales using time series analysis.",
      tools: ["Python", "Statsmodels", "Pandas"],
      icon: <ShoppingCart className="w-6 h-6 text-purple-400" />,
      github: "https://github.com/yourusername/sales-forecasting",
      image: "https://example.com/sales-forecasting.jpg"
    },
    {
      title: "Sentiment Analysis on Social Media",
      description: "Analyzed social media data to gauge public sentiment on various topics.",
      tools: ["Python", "NLTK", "Pandas"],
      icon: <ShoppingCart className="w-6 h-6 text-purple-400" />,
      github: "https://github.com/yourusername/sentiment-analysis",
      image: "https://example.com/sentiment-analysis.jpg"
    },
  ];

  const machineLearningProjects = [
    {
      title: "AI Chatbot Integration",
      description: "Integrated an AI chatbot into a web application using OpenAI's GPT model.",
      tools: ["React", "TypeScript", "Node.js", "OpenAI API"],
      icon: <Brain className="w-6 h-6 text-pink-400" />,
      github: "https://github.com/yourusername/ai-chatbot",
      image: "https://example.com/ai-chatbot.jpg"
    },
    {
      title: "Image Classification with CNN",
      description: "Developed a convolutional neural network for image classification tasks.",
      tools: ["Python", "TensorFlow", "Keras"],
      icon: <Brain className="w-6 h-6 text-pink-400" />,
      github: "https://github.com/yourusername/image-classification",
      image: "https://example.com/image-classification.jpg"
    },
    {
      title: "Predictive Maintenance",
      description: "Created a predictive maintenance model to reduce downtime in manufacturing.",
      tools: ["Python", "Scikit-learn", "Pandas"],
      icon: <Brain className="w-6 h-6 text-pink-400" />,
      github: "https://github.com/yourusername/predictive-maintenance",
      image: "https://example.com/predictive-maintenance.jpg"
    },
    {
      title: "Natural Language Processing for Text Summarization",
      description: "Implemented NLP techniques to summarize large texts automatically.",
      tools: ["Python", "NLTK", "Gensim"],
      icon: <Brain className="w-6 h-6 text-pink-400" />,
      github: "https://github.com/yourusername/text-summarization",
      image: "https://example.com/text-summarization.jpg"
    },
  ];

  const handleNext = (setIndex: React.Dispatch<React.SetStateAction<number>>, length: number) => {
    const itemsToShow = window.innerWidth <= 640 ? 1 : 2;
    setIndex((prevIndex) => (prevIndex + itemsToShow) % length);
  };

  const handlePrev = (setIndex: React.Dispatch<React.SetStateAction<number>>, length: number) => {
    const itemsToShow = window.innerWidth <= 640 ? 1 : 2;
    setIndex((prevIndex) => (prevIndex - itemsToShow + length) % length);
  };

  return (
    <div className="min-h-screen py-8 sm:py-12 bg-#2E2E2E">
      <div className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#cc940b] mb-2">Projects</h2>
          <p className="text-white max-w-2xl mx-auto">
            Explore my latest projects in data science and AI integration.
          </p>
        </div>

        {/* Data Science Projects Section */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Data Science Projects</h3>
        <div className="relative mt-4 mb-8 sm:mb-12">
          {/* Mobile View (350px - 640px) */}
          <div className="block sm:hidden">
            <button
              onClick={() => handlePrev(setDataScienceIndex, dataScienceProjects.length)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded hover:bg-gray-700 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={() => handleNext(setDataScienceIndex, dataScienceProjects.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded hover:bg-gray-700 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <motion.div className="mx-2">
              {dataScienceProjects
                .slice(dataScienceIndex, dataScienceIndex + 1)
                .map((project) => (
                  <div
                    key={project.title}
                    className="relative bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all cursor-pointer flex flex-col h-full min-h-[350px] w-[90%] mx-auto"
                  >
                    <div className="w-full h-40 overflow-hidden rounded-t-lg">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-3 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 bg-gray-700 rounded-lg">{project.icon}</div>
                        <h3 className="text-base font-bold text-white">{project.title}</h3>
                      </div>
                      <p className="text-xs text-gray-300 mb-2 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.tools.map((tool, toolIndex) => (
                          <span key={toolIndex} className="text-xs bg-gray-700 text-white px-1.5 py-0.5 rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-400 hover:underline mt-1 text-xs"
                      >
                        View Code on GitHub
                      </a>
                    </div>
                  </div>
                ))}
            </motion.div>
          </div>

          {/* Tablet/Desktop View (641px and above) */}
          <div className="hidden sm:block">
            <button
              onClick={() => handlePrev(setDataScienceIndex, dataScienceProjects.length)}
              className="absolute left-0 sm:-left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded hover:bg-gray-700 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={() => handleNext(setDataScienceIndex, dataScienceProjects.length)}
              className="absolute right-0 sm:-right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded hover:bg-gray-700 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <motion.div className="grid grid-cols-2 gap-7 mx-2 sm:mx-4">
              {dataScienceProjects
                .slice(dataScienceIndex, dataScienceIndex + 2)
                .map((project) => (
                  <div
                    key={project.title}
                    className="relative bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all cursor-pointer flex flex-col h-full min-h-[350px]"
                  >
                    <div className="w-full h-40 overflow-hidden rounded-t-lg">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-3 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 bg-gray-700 rounded-lg">{project.icon}</div>
                        <h3 className="text-base font-bold text-white">{project.title}</h3>
                      </div>
                      <p className="text-xs text-gray-300 mb-2 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.tools.map((tool, toolIndex) => (
                          <span key={toolIndex} className="text-xs bg-gray-700 text-white px-1.5 py-0.5 rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-400 hover:underline mt-1 text-xs"
                      >
                        View Code on GitHub
                      </a>
                    </div>
                  </div>
                ))}
            </motion.div>
          </div>
        </div>

        {/* Machine Learning Projects Section */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Machine Learning Projects</h3>
        <div className="relative mt-4 mb-8 sm:mb-12">
          {/* Mobile View (350px - 640px) */}
          <div className="block sm:hidden">
            <button
              onClick={() => handlePrev(setMachineLearningIndex, machineLearningProjects.length)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded hover:bg-gray-700 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={() => handleNext(setMachineLearningIndex, machineLearningProjects.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded hover:bg-gray-700 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <motion.div className="mx-2">
              {machineLearningProjects
                .slice(machineLearningIndex, machineLearningIndex + 1)
                .map((project) => (
                  <div
                    key={project.title}
                    className="relative bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all cursor-pointer flex flex-col h-full min-h-[350px] w-[90%] mx-auto"
                  >
                    <div className="w-full h-40 overflow-hidden rounded-t-lg">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-3 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 bg-gray-700 rounded-lg">{project.icon}</div>
                        <h3 className="text-base font-bold text-white">{project.title}</h3>
                      </div>
                      <p className="text-xs text-gray-300 mb-2 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.tools.map((tool, toolIndex) => (
                          <span key={toolIndex} className="text-xs bg-gray-700 text-white px-1.5 py-0.5 rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-400 hover:underline mt-1 text-xs"
                      >
                        View Code on GitHub
                      </a>
                    </div>
                  </div>
                ))}
            </motion.div>
          </div>

          {/* Tablet/Desktop View (641px and above) */}
          <div className="hidden sm:block">
            <button
              onClick={() => handlePrev(setMachineLearningIndex, machineLearningProjects.length)}
              className="absolute left-0 sm:-left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded hover:bg-gray-700 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={() => handleNext(setMachineLearningIndex, machineLearningProjects.length)}
              className="absolute right-0 sm:-right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded hover:bg-gray-700 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <motion.div className="grid grid-cols-2 gap-6 mx-2 sm:mx-4">
              {machineLearningProjects
                .slice(machineLearningIndex, machineLearningIndex + 2)
                .map((project) => (
                  <div
                    key={project.title}
                    className="relative bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all cursor-pointer flex flex-col h-full min-h-[350px]"
                  >
                    <div className="w-full h-40 overflow-hidden rounded-t-lg">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-3 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 bg-gray-700 rounded-lg">{project.icon}</div>
                        <h3 className="text-base font-bold text-white">{project.title}</h3>
                      </div>
                      <p className="text-xs text-gray-300 mb-2 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.tools.map((tool, toolIndex) => (
                          <span key={toolIndex} className="text-xs bg-gray-700 text-white px-1.5 py-0.5 rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-400 hover:underline mt-1 text-xs"
                      >
                        View Code on GitHub
                      </a>
                    </div>
                  </div>
                ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

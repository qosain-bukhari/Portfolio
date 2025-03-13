import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const aiBlogPosts = [
  {
    title: "Understanding AI: The Basics",
    description: "An introduction to artificial intelligence and its applications.",
    date: "2023-10-01",
    image: "https://example.com/ai-basics.jpg",
    link: "https://example.com/ai-basics"
  },
  {
    title: "The Future of AI: Trends to Watch",
    description: "A look at upcoming trends in artificial intelligence.",
    date: "2023-10-10",
    image: "https://example.com/future-ai.jpg",
    link: "https://example.com/future-ai"
  },
  {
    title: "AI Ethics: Navigating the Challenges",
    description: "Discussing the ethical implications of AI technologies.",
    date: "2023-10-15",
    image: "https://example.com/ai-ethics.jpg",
    link: "https://example.com/ai-ethics"
  },
];

const grokBlogPosts = [
  {
    title: "Grokking AI: A Deep Dive",
    description: "Exploring the concept of Grok and its significance in AI.",
    date: "2023-10-05",
    image: "https://example.com/grok-ai.jpg",
    link: "https://example.com/grok-ai"
  },
  {
    title: "Understanding Grok: The Key to AI",
    description: "A comprehensive look at Grok and its applications in AI.",
    date: "2023-10-20",
    image: "https://example.com/understanding-grok.jpg",
    link: "https://example.com/understanding-grok"
  },
  {
    title: "Grok and AI: A Symbiotic Relationship",
    description: "How Grok enhances AI capabilities.",
    date: "2023-10-25",
    image: "https://example.com/grok-ai-relationship.jpg",
    link: "https://example.com/grok-ai-relationship"
  },
];

export default function Blog() {
  const [aiBlogIndex, setAiBlogIndex] = useState(0);
  const [grokBlogIndex, setGrokBlogIndex] = useState(0);

  const handleNext = (setIndex: React.Dispatch<React.SetStateAction<number>>, length: number) => {
    const itemsToShow = window.innerWidth <= 640 ? 1 : 2;
    setIndex((prevIndex) => (prevIndex + itemsToShow) % length);
  };

  const handlePrev = (setIndex: React.Dispatch<React.SetStateAction<number>>, length: number) => {
    const itemsToShow = window.innerWidth <= 640 ? 1 : 2;
    setIndex((prevIndex) => (prevIndex - itemsToShow + length) % length);
  };

  return (
    <div className="min-h-screen py-12 bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#cc940b] mb-6 text-center">Blog</h2>
        <p className="text-lg text-gray-300 mb-8 text-center">
          Explore our latest insights and articles on AI and Grok, where we delve into the fascinating world of artificial intelligence and its implications.
        </p>

        <h3 className="text-2xl font-bold text-white flex justify-center mb-4">AI Blogs</h3>
        <div className="relative mt-4 mb-8 sm:mb-12">
          {/* Mobile View (350px - 640px) */}
          <div className="block sm:hidden">
            <button
              onClick={() => handlePrev(setAiBlogIndex, aiBlogPosts.length)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded hover:bg-gray-700 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={() => handleNext(setAiBlogIndex, aiBlogPosts.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded hover:bg-gray-700 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <motion.div className="mx-2">
              {aiBlogPosts
                .slice(aiBlogIndex, aiBlogIndex + 1)
                .map((post) => (
                  <div
                    key={post.title}
                    className="relative bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all cursor-pointer flex flex-col h-full min-h-[300px] w-[90%] mx-auto"
                  >
                    <div className="w-full h-36 overflow-hidden rounded-t-lg">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-3 flex-1">
                      <h3 className="text-base font-bold text-white mb-1">{post.title}</h3>
                      <p className="text-xs text-gray-300 line-clamp-2 mb-1">{post.description}</p>
                      <p className="text-xs text-gray-500 mb-1">{post.date}</p>
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-400 hover:underline text-xs"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                ))}
            </motion.div>
          </div>

          {/* Tablet/Desktop View (641px and above) */}
          <div className="hidden sm:block">
            <button
              onClick={() => handlePrev(setAiBlogIndex, aiBlogPosts.length)}
              className="absolute left-0 sm:-left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded hover:bg-gray-700 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={() => handleNext(setAiBlogIndex, aiBlogPosts.length)}
              className="absolute right-0 sm:-right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded hover:bg-gray-700 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <motion.div className="grid grid-cols-2 gap-6 mx-2 sm:mx-4">
              {aiBlogPosts
                .slice(aiBlogIndex, aiBlogIndex + 2)
                .map((post) => (
                  <div
                    key={post.title}
                    className="relative bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all cursor-pointer flex flex-col h-full min-h-[300px] w-full"
                  >
                    <div className="w-full h-36 overflow-hidden rounded-t-lg">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-3 flex-1">
                      <h3 className="text-base font-bold text-white mb-1">{post.title}</h3>
                      <p className="text-xs text-gray-300 line-clamp-2 mb-1">{post.description}</p>
                      <p className="text-xs text-gray-500 mb-1">{post.date}</p>
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-400 hover:underline text-xs"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                ))}
            </motion.div>
          </div>
        </div>

        <h3 className="flex justify-center text-2xl font-bold text-white mb-4 mt-12">Grok Blogs</h3>
        <div className="relative mt-4 mb-8 sm:mb-12">
          {/* Mobile View (350px - 640px) */}
          <div className="block sm:hidden">
            <button
              onClick={() => handlePrev(setGrokBlogIndex, grokBlogPosts.length)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded hover:bg-gray-700 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={() => handleNext(setGrokBlogIndex, grokBlogPosts.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded hover:bg-gray-700 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <motion.div className="mx-2">
              {grokBlogPosts
                .slice(grokBlogIndex, grokBlogIndex + 1)
                .map((post) => (
                  <div
                    key={post.title}
                    className="relative bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all cursor-pointer flex flex-col h-full min-h-[300px] w-[90%] mx-auto"
                  >
                    <div className="w-full h-36 overflow-hidden rounded-t-lg">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-3 flex-1">
                      <h3 className="text-base font-bold text-white mb-1">{post.title}</h3>
                      <p className="text-xs text-gray-300 line-clamp-2 mb-1">{post.description}</p>
                      <p className="text-xs text-gray-500 mb-1">{post.date}</p>
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-400 hover:underline text-xs"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                ))}
            </motion.div>
          </div>

          {/* Tablet/Desktop View (641px and above) */}
          <div className="hidden sm:block">
            <button
              onClick={() => handlePrev(setGrokBlogIndex, grokBlogPosts.length)}
              className="absolute left-0 sm:-left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded hover:bg-gray-700 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={() => handleNext(setGrokBlogIndex, grokBlogPosts.length)}
              className="absolute right-0 sm:-right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded hover:bg-gray-700 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <motion.div className="grid grid-cols-2 gap-6 mx-2 sm:mx-4">
              {grokBlogPosts
                .slice(grokBlogIndex, grokBlogIndex + 2)
                .map((post) => (
                  <div
                    key={post.title}
                    className="relative bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all cursor-pointer flex flex-col h-full min-h-[300px] w-full"
                  >
                    <div className="w-full h-36 overflow-hidden rounded-t-lg">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-3 flex-1">
                      <h3 className="text-base font-bold text-white mb-1">{post.title}</h3>
                      <p className="text-xs text-gray-300 line-clamp-2 mb-1">{post.description}</p>
                      <p className="text-xs text-gray-500 mb-1">{post.date}</p>
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-400 hover:underline text-xs"
                      >
                        Read More
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
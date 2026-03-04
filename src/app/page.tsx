"use client";

import { BlogCard } from "@/components/BlogCard";
import { useBlogcontext } from "@/context/BlogDataContext";
import { Search } from "lucide-react";
import { motion } from "motion/react";
import { button, div } from "motion/react-client";
import { useState } from "react";
export default function Home() {
  const { data } = useBlogcontext();

  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPosts = data.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    return matchesCategory;
  });

  const category = [
    "All",
    ...Array.from(new Set(data.map((post) => post.category))),
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-9"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">
          Welcom to DevBlog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Insights on web development, design, and productivity
        </p>
      </motion.div>

      {/* search bar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="relative max-w-xl mx-auto"
      >
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={19}
        />
        <input
          type="text"
          placeholder="Search Artecale.."
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />
      </motion.div>

      {/* filter button  */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex justify-center flex-wrap gap-3 p-5"
      >
        {category.map((category, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.id} post={{ ...post }} index={index} />
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-500 text-lg">
            No articles found matching your criteria.
          </p>
        </motion.div>
      )}
    </div>
  );
}

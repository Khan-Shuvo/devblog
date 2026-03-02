'use client'

import { Search } from "lucide-react";
import { motion } from "motion/react";
export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        className="text-center mb-9"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">Welcom to DevBlog</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Insights on web development, design, and productivity</p>
      </motion.div>

      {/* search bar */}
      <motion.div
        initial={{ opacity: 0, scale: .95 }}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: .4,delay: .2}}
        className="relative max-w-xl mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={19} />
          <input type="text"
          placeholder="Search Artecale.."
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
      </motion.div>

    </div>
  )
}

'use client'
import { BookOpen, Users, Target, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const features = [
    {
      icon: BookOpen,
      title: 'Quality Content',
      description: 'Every article is carefully crafted to provide practical value and actionable insights.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built by developers, for developers. We listen to our community and evolve together.'
    },
    {
      icon: Target,
      title: 'Practical Focus',
      description: 'We focus on real-world applications and practical solutions you can use today.'
    },
    {
      icon: Heart,
      title: 'Passion for Code',
      description: 'We love what we do, and it shows in every article we publish.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl mb-4">About DevBlog</h1>
        <p className="text-xl text-gray-600">
          Where developers share knowledge and inspire each other
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="prose prose-lg max-w-none mb-12"
      >
        <p className="text-gray-700 leading-relaxed mb-6">
          DevBlog is a community-driven platform dedicated to sharing insights, tutorials, 
          and inspiration for web developers and designers. We believe in the power of 
          knowledge sharing and the importance of continuous learning in the fast-paced 
          world of technology.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our mission is to provide high-quality content that helps developers at all 
          levels grow their skills, stay updated with the latest trends, and find 
          inspiration in their daily work.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
              >
                <Icon className="w-6 h-6 text-blue-600" />
              </motion.div>
              <h3 className="text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="bg-blue-50 p-8 rounded-lg text-center"
      >
        <h2 className="text-2xl mb-4">Join Our Community</h2>
        <p className="text-gray-700 mb-6">
          Stay updated with the latest articles and join a community of passionate developers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Subscribe
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
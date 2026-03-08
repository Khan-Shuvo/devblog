'use client'

import { useBlogcontext } from "@/context/BlogDataContext"
import { use } from "react"
import { motion, number } from "motion/react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Image from "next/image";

export default function page({ params }: { params: Promise<{ slug: string}> }) {
  const { slug } = use(params)

  const { data } = useBlogcontext()

  const post = data.find(item => item.id === Number(slug))

  console.log(post)


  if (!post) return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
      <h1 className=" text-3xl mb-4">
        Post not found
      </h1>
      <p className=" text-gray-600 mb-6 ">The blog post you're looking for doesn't exist.</p>
      <Link href={'/'}
        className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2">
        <ArrowLeft className=" w-3 h-4" />
        Back to Home
      </Link>
    </motion.div>
  )

  return (
    <motion.article initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .6 }}
      className="max-w-4xl mx-auto px-4 sm:p-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: .2 }}
      >
        <Link href={'/'}
          className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2 mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to all post
        </Link>
      </motion.div>

      <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .3 }}
        className="mb-6">
        <span className=" inline-block px-3 py-1 bg-blue-100 to-blue-700 rounded-full text-sm mb-4">
          {post.category}
        </span>
        <h1 className="text-4xl md:text-5xl mb-4">{post.title}</h1>
        <div className="flex items-center gap-2 text-gray-600">
          <span className=" flex items-center gap-2">
            <User className="w-4 h-4" />
            {post.author}
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: .95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .5, delay: .4 }}
        className="aspect-video relative w-full overflow-hidden rounded-lg mb-8 bg-gray-100">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="w-full h-full object-cover" />
      </motion.div>

       <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="prose prose-lg max-w-none"
      >
        {post.content.split('\n\n').map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="mb-4 text-gray-700 leading-relaxed"
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>

       <motion.div initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="mt-12 pt-8 border-t"
      >
        <Link href={'/'}
          className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2 mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to all post
        </Link>
      </motion.div>
    </motion.article>
  )
}

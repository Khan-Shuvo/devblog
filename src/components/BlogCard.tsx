"use client";

import { BlogPost } from "@/type/Type";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";

type BlogCardProps = {
  post: BlogPost;
  index: number;
};

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/post/${post.id}`} className="group block">
        <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full border border-gray-100">
          <div className="aspect-video relative overflow-hidden bg-gray-100">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              sizes="(max-width: 768) 100vw, (max-width: 1200) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <div className=" flex text-center gap-2 mb-3">
              <span className="text-sm to-blue-600 font-semibold uppercase tracking-wider">
                {post.category}
              </span>
            </div>

            <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
              {post.excerpt}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-500 border-t pt-4">
              <span className=" font-medium text-gray-700">{post.author}</span>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                    <Clock className="w-3 h3.5" />
                    {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

'use client'

import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-12">

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >

                    
                    <motion.div variants={itemVariants}>
                        <h3 className="text-white text-lg mb-4 font-semibold">
                            DevBlog
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Your source for web development, design inspiration, and productivity tips.
                        </p>
                    </motion.div>

                    
                    <motion.div variants={itemVariants}>
                        <h3 className="text-white text-lg mb-4 font-semibold">
                            Quick Links
                        </h3>
                        <ul className="flex flex-col gap-3 text-sm">
                            <li>
                                <Link href="/" className="hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    
                    <motion.div variants={itemVariants}>
                        <h3 className="text-white text-lg mb-4 font-semibold">
                            Contact
                        </h3>

                        <div className="flex gap-4">
                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                className="hover:text-white transition-colors"
                            >
                                <Github />
                            </a>

                            <a
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter Profile"
                                className="hover:text-white transition-colors"
                            >
                                <Twitter />
                            </a>

                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                                className="hover:text-white transition-colors"
                            >
                                <Linkedin />
                            </a>
                        </div>
                    </motion.div>

                </motion.div>

            
                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
                    © {new Date().getFullYear()} DevBlog. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
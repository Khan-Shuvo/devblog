'use client'
import { BookOpen, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type NaveItem = {
    name: string;
    path: string;
}

export default function Header() {
    const navItems: NaveItem[] = [
        {
            name: "Home",
            path: '/'
        },
        {
            name: "About",
            path: '/about'
        },
        {
            name: "Contact",
            path: '/contact'
        }
    ]

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const pathname = usePathname()

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false)
            }
        }
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    const menuVariants = {
        hidden: {
            opacity: 0, y: -20, scale: 0.95
        },
        visible: {
            opacity: 1, y: 0, scale: 1, transition: { duration: .3 }
        },
        exit: {
            opacity: 0, y: -20, scale: 0.95, transition: { durarion: .2 }
        }
    }

    const itemVariants = {
        hidden: {
            opacity: 0, x: -10
        },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * .05 }
        })
    }
    return (
        <motion.header
            initial={{ opacity: 0, y: -10, }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .2 }} className="sticky top-0 z-50 backdrop-blur bg-white/70 shadow-sm">
            <div className="flex items-center justify-between px-6 py-4">
                {/* logo */}
                <Link href={'/'} className="flex items-center gap-2">
                    <BookOpen size={28} className="text-blue-600" />
                    <span className="text-xl font-semibold">DevBlog</span>
                </Link>

                {/* nav destop  */}
                <nav className="hidden md:flex gap-8">
                    {navItems.map(item => (
                        <Link key={item.name}
                            href={item.path}
                            className={`text-sm font-medium transition-colors duration-200 ${pathname === item.path ? 'text-blue-600' : 'text-gray-700 hover:to-blue-500'}`}>
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* mobile toggle button  */}
                <motion.div
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    aria-label="Toggle Menu"
                    aria-expanded={isOpen}
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: .3 }}>
                        {isOpen ? <X /> : <Menu />}
                    </motion.div>

                </motion.div>
            </div>

            {/* mobile menu animated  */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div ref={menuRef}
                        variants={menuVariants}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                        className="md:hidden absolute right-4 top-16 w-44 bg-white rounded-xl shadow-lg p-4">
                        <div className="flex flex-col gap-4">
                            {navItems.map((item, i) => (
                                <motion.div key={item.name}
                                    custom={i}
                                    variants={itemVariants}
                                    initial='hidden'
                                    animate='visible'>
                                    <Link href={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-sm font-medium transition-colors ${pathname === item.path ? 'text-blue-600' : 'text-gray-700 hover:texblu500'}`}>
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}

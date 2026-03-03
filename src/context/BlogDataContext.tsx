"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { BlogPost } from "@/type/Type";

type BlogDataContextProp = {
    data: BlogPost[];
}


const BlogDataContext = createContext<BlogDataContextProp | undefined>(undefined)

export const BlogProvider = ({ children }: { children: ReactNode }) => {
    const [posts, setPosts] = useState<BlogPost[]>([])

    useEffect(() => {
        const getPost = async () => {
            try {
                const res = await fetch('/data.json')
                const data = await res.json()

                const formattedData = data.map((item: any) =>({...item, id: Number(item.id)}))

                setPosts(formattedData)

            } catch (error) {
                console.log('Faild to fetch data', error)
            }

        }
        getPost()
    }, [])

    return (
        <BlogDataContext.Provider value={{data: posts}}>
            {children}
        </BlogDataContext.Provider>
    )
}

export const useBlogcontext = () => {
    const context = useContext(BlogDataContext)
    if(!context){
        throw new Error("useBlogData must be used within a BlogProvider")
    }
    return context
}
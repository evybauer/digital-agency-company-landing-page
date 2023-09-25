import { Button } from "../../ui-components/Button";
import { blogPosts } from "./blogPosts";

export const BlogPostsList = () => (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {blogPosts.map((post, index) => (       
            <div key={index} className="max-w-lg mx-auto">
                <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                    <a href="#">

                    <img className="rounded-t-lg" src={post.image} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="text-stone-800 font-bold text-2xl tracking-tight mb-2">{post.title}</h5>
                        </a>
                        <p className="font-normal text-stone-600 mb-3">{post.description}</p>
                        <Button text="Read more"/>
                    </div>
                </div>
            </div>
        ))}
        <div className="flex justify-end text-violet-400 mb-2 right-0">
            <span>VIEW MORE POSTS </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </div>

   
    </div>
)
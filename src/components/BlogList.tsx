import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "@/api/blogs";
import BlogCard from "./BlogCard";


export default function BlogList( {onSelect} : any) {

    const {data, isLoading, isError } =useQuery ({
        queryKey: ['blogs'],
        queryFn: fetchBlogs,
    });

    if(isLoading) return <div>Loading...</div>;
    if(isError) return <div>Error fetching blogs</div>;

    return (
        <div className="space-y-2">
     {data.map((blog: any) => (
        <BlogCard key={blog.id} blog={blog} onSelect={onSelect} />
      ))}       

            </div>
    )
}
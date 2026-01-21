import { useQuery } from "@tanstack/react-query";
import { fetchBLogByID } from "@/api/blogs";

export default function BlogDetail ({ blogId }: any) {

        const {data, isLoading } = useQuery({
            queryKey :["blogs", blogId],
            queryFn: ()=> fetchBLogByID(blogId),
            enabled: !!blogId,
        });

        if( !blogId) return <p>Select a blog</p>
        if (isLoading) return <p>Loading Blog..</p>

        const formatDate = (dateString: string) => {
                return new Date(dateString).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
             });
};


       return (
            <div className="space-y-6">
                <img
                src={data.coverImage}
                className="rounded-xl w-full h-65 object-cover"
                />
            
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
  <span className="uppercase tracking-wide text-blue-600 font-medium">
    {data.category}
  </span>
  <span>•</span>
  <span>{formatDate(data.date)}</span>
</div>


            <div>
                <p className="text-sm text-gray-500 mb-1">
                {data.category.join(" • ")}
                </p>
                <h1 className="text-3xl font-bold">
                    {data.title}
                </h1>
            </div>

                <p className="text-gray-700 leading-relaxed">
                {data.content}
                </p>
            </div>
);

}

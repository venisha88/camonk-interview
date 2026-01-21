import { Card, CardContent } from "./ui/card";

export default function BlogCard({ blog, onSelect }: any) {

    const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};


    return(
        <Card
              onClick={() => onSelect(blog.id)}
               className="
                    cursor-pointer 
                    transition-all duration-300 
                    hover:shadow-xl 
                    hover:-translate-y-1
                    hover:border-blue-500
                    group
                "
        >
        <CardContent className="p-4 space-y-2">
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
            <span className="text-xs text-blue-600 font-medium">
                {blog.category.join(", ")}
            </span>
            <span className="space-x-5">•</span>
            <span>{formatDate(blog.date)}</span>
            </div>
            
            <h3 className="font-semibold text-lg">{blog.title}</h3>
                <p className="text-sm text-gray-600">
                    {blog.description}
                </p>
                
        </CardContent>
        </Card>
    )
}